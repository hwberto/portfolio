import { Image } from "@unpic/react";
import {
	Briefcase,
	Code2,
	FolderGit2,
	GraduationCap,
	Mail,
	User,
} from "lucide-react";
import { AvailableCard } from "@/components/available-card";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function AboutMe() {
	const { personal } = PORTFOLIO_DATA;

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const navItems = [
		{ id: "about", label: "About", icon: User },
		{ id: "projects", label: "Projects", icon: FolderGit2 },
		{ id: "experience", label: "Experience", icon: Briefcase },
		{ id: "skills", label: "Skills", icon: Code2 },
		{ id: "education", label: "Education", icon: GraduationCap },
		{ id: "contact", label: "Contact", icon: Mail },
	];

	return (
		<aside className="w-full max-w-3xl lg:max-w-none lg:w-[320px] shrink-0 flex flex-col gap-4 sm:gap-5 border-border/40 border-dashed lg:border-r lg:pr-6 lg:h-full lg:max-h-full lg:overflow-y-auto lg:overflow-x-hidden scrollbar-none pb-4">
			<div className="flex items-center justify-between w-full rounded-2xl border border-border/60 bg-card/60 p-3 sm:p-3.5 backdrop-blur-md shadow-xs">
				<div className="flex items-center gap-3 min-w-0">
					<div className="relative shrink-0">
						<Image
							src={personal.avatar}
							width={46}
							height={46}
							alt={personal.name}
							className="size-11 sm:size-11.5 object-cover rounded-2xl border border-border/70 shadow-xs"
							priority
						/>
						<span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-emerald-500 border-2 border-card" />
					</div>

					<div className="flex flex-col min-w-0">
						<h3 className="font-semibold text-sm tracking-tight text-foreground truncate">
							{personal.name}
						</h3>
						<span className="text-xs text-muted-foreground truncate">
							{personal.title}
						</span>
					</div>
				</div>

				<ThemeToggle />
			</div>

			<div className="w-full flex justify-center">
				<AvailableCard
					role={personal.title}
					location={personal.location}
					timezone={personal.timezone}
					email={personal.email}
					responseTime={personal.responseTime}
					className="w-full max-w-full"
				/>
			</div>

			<div className="flex lg:hidden items-center gap-1.5 overflow-x-auto py-1 scrollbar-none -mx-1 px-1">
				{navItems.map((item) => {
					const Icon = item.icon;
					return (
						<button
							key={item.id}
							type="button"
							onClick={() => scrollToSection(item.id)}
							className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:bg-muted hover:text-foreground active:scale-95"
						>
							<Icon className="size-3 text-primary" />
							<span>{item.label}</span>
						</button>
					);
				})}
			</div>

			<nav className="hidden lg:flex flex-col gap-1 rounded-2xl border border-border/60 bg-card/40 p-2 backdrop-blur-md">
				<div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
					Navigation
				</div>
				{navItems.map((item) => {
					const Icon = item.icon;
					return (
						<button
							key={item.id}
							type="button"
							onClick={() => scrollToSection(item.id)}
							className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:bg-muted/70 hover:text-foreground text-left"
						>
							<Icon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
							<span>{item.label}</span>
						</button>
					);
				})}
			</nav>

			<div className="flex items-center justify-between gap-2 pt-1">
				<div className="flex items-center gap-1.5">
					<Button
						variant="outline"
						size="icon-sm"
						onClick={() => window.open(personal.github, "_blank")}
						aria-label="GitHub profile"
						className="border-border/60"
					>
						<GithubIcon className="size-3.5" />
					</Button>
					<Button
						variant="outline"
						size="icon-sm"
						onClick={() => window.open(personal.linkedin, "_blank")}
						aria-label="LinkedIn profile"
						className="border-border/60"
					>
						<LinkedinIcon className="size-3.5" />
					</Button>
					<Button
						variant="outline"
						size="icon-sm"
						onClick={() => window.open(personal.twitter, "_blank")}
						aria-label="Twitter profile"
						className="border-border/60"
					>
						<TwitterIcon className="size-3.5" />
					</Button>
				</div>

				<Button
					variant="ghost"
					size="sm"
					onClick={() => window.open(`mailto:${personal.email}`)}
					className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
				>
					<Mail className="size-3.5" />
					<span>Email me</span>
				</Button>
			</div>
		</aside>
	);
}
