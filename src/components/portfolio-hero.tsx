import { ArrowDown, CheckCircle2, Code, Mail, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function PortfolioHero() {
	const { personal, stats } = PORTFOLIO_DATA;

	const scrollToProjects = () => {
		const el = document.getElementById("projects");
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section id="about" className="space-y-8 pb-8 pt-2">
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="space-y-4"
			>
				<div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md">
					<Terminal className="size-3.5 text-primary" />
					<span>Full-Stack Developer</span>
				</div>

				<h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl leading-tight">
					{personal.headline}
				</h1>

				<p className="text-sm leading-relaxed text-muted-foreground sm:text-base font-normal">
					{personal.bio}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-muted-foreground">
					<div className="flex items-center gap-2">
						<CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
						<span>Full-stack apps with TypeScript, React & Node.js</span>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
						<span>Clean UI components, responsive layout & animations</span>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
						<span>RESTful API design and database modeling</span>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
						<span>Git workflows, modular architecture & testability</span>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-3 pt-3">
					<Button
						variant="default"
						size="sm"
						onClick={scrollToProjects}
						className="gap-1.5 shadow-xs"
					>
						<span>View Projects</span>
						<ArrowDown className="size-3.5" />
					</Button>

					<Button
						variant="outline"
						size="sm"
						onClick={() => window.open(personal.github, "_blank")}
						className="gap-1.5"
					>
						<Code className="size-3.5" />
						<span>GitHub</span>
					</Button>

					<Button
						variant="ghost"
						size="sm"
						onClick={() => {
							const el = document.getElementById("contact");
							if (el) el.scrollIntoView({ behavior: "smooth" });
						}}
						className="gap-1.5 text-muted-foreground hover:text-foreground"
					>
						<Mail className="size-3.5" />
						<span>Get in touch</span>
					</Button>
				</div>
			</motion.div>

			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
				{stats.map((item, idx) => (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: idx * 0.08 }}
						className="rounded-2xl border border-border/60 bg-card/50 p-3.5 backdrop-blur-md transition-colors hover:border-border hover:bg-card/80"
					>
						<div className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-mono">
							{item.value}
						</div>
						<div className="mt-1 text-[11px] leading-tight text-muted-foreground">
							{item.label}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
