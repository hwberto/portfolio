import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function PortfolioContact() {
	const { personal } = PORTFOLIO_DATA;

	return (
		<section id="contact" className="space-y-6">
			<div className="space-y-1">
				<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
					<MessageSquare className="size-3.5 text-primary" />
					<span>Get In Touch</span>
				</div>
				<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
					Let's build something together
				</h2>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.35 }}
				className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-linear-to-br from-card/80 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-sm dark:to-muted/10 space-y-5 sm:space-y-6"
			>
				<div className="space-y-2 max-w-xl">
					<div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
						<span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
						<span>Open for new opportunities</span>
					</div>
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-foreground">
						Have an opportunity or project in mind?
					</h3>
					<p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
						I am open to full-time junior developer roles, frontend/backend
						engineering opportunities, and freelance projects. Feel free to
						reach out directly.
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
					<Button
						variant="default"
						size="default"
						onClick={() => {
							window.location.href = `mailto:${personal.email}`;
						}}
						className="gap-2 text-xs sm:text-sm shadow-sm flex-1 sm:flex-initial"
					>
						<Mail className="size-4" />
						<span>Send an Email</span>
						<ArrowUpRight className="size-3.5 opacity-80" />
					</Button>

					<Button
						variant="outline"
						size="default"
						onClick={() => window.open(personal.github, "_blank")}
						className="gap-2 text-xs sm:text-sm shrink-0"
					>
						<GithubIcon className="size-4" />
						<span>GitHub</span>
					</Button>

					<Button
						variant="outline"
						size="default"
						onClick={() => window.open(personal.linkedin, "_blank")}
						className="gap-2 text-xs sm:text-sm shrink-0"
					>
						<LinkedinIcon className="size-4" />
						<span>LinkedIn</span>
					</Button>
				</div>
			</motion.div>

			<div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 sm:pt-8 border-t border-border/40 text-xs text-muted-foreground text-center sm:text-left">
				<p>
					© {new Date().getFullYear()} {personal.name}
				</p>
				<div className="text-[11px] text-muted-foreground">
					Built with React, TypeScript & Tailwind CSS
				</div>
			</div>
		</section>
	);
}
