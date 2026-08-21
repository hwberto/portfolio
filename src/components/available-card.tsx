import {
	ArrowUpRight,
	Briefcase,
	Check,
	Clock,
	Copy,
	Mail,
	MapPin,
	Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export interface AvailableCardProps {
	className?: string;
	status?: "available" | "busy" | "limited";
	statusText?: string;
	role?: string;
	userRole?: string;
	location?: string;
	timezone?: string;
	email?: string;
	responseTime?: string;
	onContactClick?: () => void;
}

export function AvailableCard({
	className,
	status = "available",
	statusText,
	role,
	userRole = "Full-Stack Developer",
	location = "Brazil",
	timezone = "America/Sao_Paulo",
	email = "humbertogoncalves@example.com",
	responseTime = "< 24h",
	onContactClick,
}: AvailableCardProps) {
	const displayRole = role || userRole;
	const [copied, setCopied] = useState(false);
	const [currentTime, setCurrentTime] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			try {
				const timeStr = new Intl.DateTimeFormat("en-US", {
					timeZone: timezone,
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					hour12: true,
				}).format(new Date());
				setCurrentTime(timeStr);
			} catch {
				setCurrentTime(new Date().toLocaleTimeString());
			}
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, [timezone]);

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			return;
		}
	};

	const statusConfig = {
		available: {
			dotBg: "bg-emerald-500",
			pulseBg: "bg-emerald-400",
			badgeBg:
				"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
			label: statusText || "Available for work",
			desc: "Open to full-time roles & projects",
		},
		limited: {
			dotBg: "bg-amber-500",
			pulseBg: "bg-amber-400",
			badgeBg:
				"bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
			label: statusText || "Limited availability",
			desc: "Available for select projects",
		},
		busy: {
			dotBg: "bg-rose-500",
			pulseBg: "bg-rose-400",
			badgeBg:
				"bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
			label: statusText || "Currently booked",
			desc: "Open for future opportunities",
		},
	};

	const currentStatus = statusConfig[status];

	return (
		<TooltipProvider delay={150}>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className={cn(
					"group relative w-full max-w-sm rounded-2xl border border-border/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-border hover:shadow-md dark:bg-card/40",
					className,
				)}
			>
				<div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
					<div
						className={cn(
							"inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium tracking-wide shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]",
							currentStatus.badgeBg,
						)}
					>
						<span className="relative flex size-2 items-center justify-center">
							<span
								className={cn(
									"absolute inline-flex size-full animate-ping rounded-full opacity-75",
									currentStatus.pulseBg,
								)}
							/>
							<span
								className={cn(
									"relative inline-flex size-2 rounded-full",
									currentStatus.dotBg,
								)}
							/>
						</span>
						<span className="truncate">{currentStatus.label}</span>
					</div>

					<div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-muted-foreground shrink-0">
						<Sparkles className="size-3 text-primary/70" />
						<span>{responseTime} reply</span>
					</div>
				</div>

				<div className="space-y-1 mb-3.5">
					<div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
						<Briefcase className="size-3.5 text-muted-foreground" />
						<span>{displayRole}</span>
					</div>
					<p className="text-[11px] leading-relaxed text-muted-foreground">
						{currentStatus.desc}
					</p>
				</div>

				<div className="grid grid-cols-2 gap-2 rounded-xl border border-border/40 bg-muted/40 p-2.5 text-xs mb-3.5">
					<div className="flex items-center gap-1.5 min-w-0">
						<MapPin className="size-3.5 shrink-0 text-muted-foreground" />
						<span className="truncate text-[11px] text-muted-foreground font-medium">
							{location}
						</span>
					</div>

					<div className="flex items-center gap-1.5 min-w-0 justify-end">
						<Clock className="size-3.5 shrink-0 text-muted-foreground" />
						<span className="tabular-nums text-[11px] text-muted-foreground font-mono font-medium">
							{currentTime || "--:--"}
						</span>
					</div>
				</div>

				<div className="flex items-center gap-2 pt-0.5">
					<Button
						variant="default"
						size="sm"
						className="flex-1 text-xs font-medium shadow-xs"
						onClick={
							onContactClick ||
							(() => {
								window.location.href = `mailto:${email}`;
							})
						}
					>
						<Mail className="size-3.5" />
						<span>Get in touch</span>
						<ArrowUpRight className="size-3 opacity-70" />
					</Button>

					<Tooltip>
						<TooltipTrigger
							render={
								<Button
									variant="outline"
									size="icon-sm"
									className="shrink-0 transition-colors"
									onClick={handleCopyEmail}
									aria-label="Copy email address"
								>
									<AnimatePresence mode="wait" initial={false}>
										{copied ? (
											<motion.div
												key="check"
												initial={{ scale: 0.5, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												exit={{ scale: 0.5, opacity: 0 }}
												transition={{ duration: 0.15 }}
											>
												<Check className="size-3.5 text-emerald-500" />
											</motion.div>
										) : (
											<motion.div
												key="copy"
												initial={{ scale: 0.5, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												exit={{ scale: 0.5, opacity: 0 }}
												transition={{ duration: 0.15 }}
											>
												<Copy className="size-3.5 text-muted-foreground" />
											</motion.div>
										)}
									</AnimatePresence>
								</Button>
							}
						/>
						<TooltipContent side="top">
							{copied ? "Email copied!" : "Copy email"}
						</TooltipContent>
					</Tooltip>
				</div>
			</motion.div>
		</TooltipProvider>
	);
}
