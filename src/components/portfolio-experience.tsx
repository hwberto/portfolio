import {
	Briefcase,
	Calendar,
	Check,
	CheckCircle2,
	Code2,
	Compass,
	Layers,
	Mail,
	MapPin,
	Rocket,
	Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function PortfolioExperience() {
	const { experiences } = PORTFOLIO_DATA;

	const hasExperience = experiences && experiences.length > 0;

	const coreFocus = [
		{
			icon: Layers,
			title: "Full-Stack Development",
			description:
				"End-to-end applications built with TypeScript, React, Next.js, and Node.js. Practical experience with state management, API integration, and SQL databases.",
		},
		{
			icon: Code2,
			title: "Clean UI & Architecture",
			description:
				"Component-driven design with Tailwind CSS and Motion. Emphasis on responsive design, accessibility, and clear project structure.",
		},
		{
			icon: Terminal,
			title: "Continuous Practice",
			description:
				"Completed in-depth certifications (Rocketseat React & Node.js tracks) and actively building full-stack projects to refine engineering skills.",
		},
	];

	return (
		<section id="experience" className="space-y-6 pt-6">
			<div className="space-y-1">
				<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
					<Briefcase className="size-3.5 text-primary" />
					<span>
						{hasExperience ? "Career Path" : "Background & Readiness"}
					</span>
				</div>
				<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
					{hasExperience ? "Work Experience" : "Seeking First Engineering Role"}
				</h2>
			</div>

			{hasExperience ? (
				<div className="relative pl-6 space-y-8 before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-px before:bg-border/60 before:border-r before:border-dashed before:border-border">
					{experiences.map((exp, idx) => (
						<motion.div
							key={exp.id}
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.35, delay: idx * 0.1 }}
							className="relative group"
						>
							<div className="absolute -left-7.25 top-1.5 flex size-3.5 items-center justify-center rounded-full border border-border bg-background shadow-xs group-hover:border-primary transition-colors">
								<div className="size-1.5 rounded-full bg-primary" />
							</div>
							<div className="rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-border hover:bg-card/90 hover:shadow-md space-y-3">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
									<div>
										<h3 className="text-base font-semibold tracking-tight text-foreground">
											{exp.role}
										</h3>
										<div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mt-0.5">
											<span className="text-foreground">{exp.company}</span>
											<span>•</span>
											<span className="rounded-md border border-border/40 bg-muted/40 px-1.5 py-0.2 text-[10px]">
												{exp.type}
											</span>
										</div>
									</div>

									<div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
										<div className="flex items-center gap-1">
											<Calendar className="size-3" />
											<span>{exp.period}</span>
										</div>
										<div className="flex items-center gap-1">
											<MapPin className="size-3" />
											<span>{exp.location}</span>
										</div>
									</div>
								</div>

								<p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
									{exp.description}
								</p>

								<div className="space-y-1.5 pt-1">
									{exp.highlights.map((item) => (
										<div
											key={item}
											className="flex items-start gap-2 text-xs text-muted-foreground"
										>
											<Check className="size-3.5 text-primary shrink-0 mt-0.5" />
											<span>{item}</span>
										</div>
									))}
								</div>
								<div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
									{exp.skills.map((skill) => (
										<span
											key={skill}
											className="rounded-lg border border-border/40 bg-muted/30 px-2 py-0.5 text-[11px] font-medium text-muted-foreground font-mono"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			) : (
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.35 }}
					className="relative overflow-hidden rounded-3xl border border-border/70 bg-linear-to-b from-card/70 via-card/50 to-muted/20 p-5 sm:p-7 backdrop-blur-xl shadow-xs space-y-6"
				>
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-5">
						<div className="space-y-1.5">
							<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
								<span className="relative flex size-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
								</span>
								<span>Open to Junior / Entry-Level Roles</span>
							</div>
							<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
								Ready to contribute to engineering teams and products
							</h3>
						</div>

						<div className="flex items-center gap-2 text-xs text-muted-foreground font-mono shrink-0">
							<Compass className="size-3.5 text-primary" />
							<span>Full-time • Remote or Hybrid</span>
						</div>
					</div>

					<div className="space-y-2">
						<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
							I am looking for my first professional developer role. I focus on
							writing clean TypeScript, building responsive web apps with React,
							and developing reliable APIs with Node.js and modern relational
							databases.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
						{coreFocus.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.title}
									className="rounded-2xl border border-border/50 bg-background/50 p-4 backdrop-blur-md transition-all hover:border-border hover:bg-background/80 flex flex-col justify-between space-y-2"
								>
									<div className="flex items-center gap-2.5">
										<div className="flex size-7.5 items-center justify-center rounded-xl border border-border/60 bg-muted/50 text-primary">
											<Icon className="size-4" />
										</div>
										<h4 className="text-xs font-semibold text-foreground tracking-tight">
											{item.title}
										</h4>
									</div>
									<p className="text-[11px] leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>

					<div className="rounded-2xl border border-border/40 bg-muted/30 p-4 space-y-3">
						<div className="text-xs font-semibold text-foreground">
							Ready for:
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Full-stack feature development with React, TypeScript &
									Node.js
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Active participation in code reviews, testing, and team
									workflows
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Technical assessments and practical coding interviews
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Fast adaptation to internal stacks, libraries, and codebase
									standards
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40">
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<span>Available for interviews</span>
						</div>

						<div className="flex items-center gap-2">
							<Button
								variant="default"
								size="sm"
								onClick={() => {
									const el = document.getElementById("contact");
									if (el) el.scrollIntoView({ behavior: "smooth" });
								}}
								className="gap-1.5 shadow-xs text-xs"
							>
								<Mail className="size-3.5" />
								<span>Get in touch</span>
							</Button>

							<Button
								variant="outline"
								size="sm"
								onClick={() => {
									const el = document.getElementById("projects");
									if (el) el.scrollIntoView({ behavior: "smooth" });
								}}
								className="gap-1.5 text-xs"
							>
								<Rocket className="size-3.5" />
								<span>View projects</span>
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</section>
	);
}
