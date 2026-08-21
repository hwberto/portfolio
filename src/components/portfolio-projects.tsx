import {
	AlertCircle,
	CheckCircle2,
	Code2,
	ExternalLink,
	FolderGit2,
	GitBranch,
	GitPullRequest,
	Layers,
	Mail,
	Rocket,
	Sparkles,
	Terminal,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA, type Project } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function PortfolioProjects() {
	const [activeCategory, setActiveCategory] = useState<string>("All");
	const { projects, personal } = PORTFOLIO_DATA;

	const categories = ["All", "Full Stack", "Frontend", "Backend"];
	const hasProjects = projects && projects.length > 0;

	const filteredProjects = hasProjects
		? activeCategory === "All"
			? projects
			: projects.filter((p) => p.category === activeCategory)
		: [];

	const upcomingProjects = [
		{
			title: "Full-Stack Web Application",
			category: "Full Stack",
			icon: Layers,
			focus: "Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS",
			status: "In Progress",
			description:
				"Developing an end-to-end web app with user authentication, relational database schema, server actions, and responsive UI.",
		},
		{
			title: "RESTful API & Microservice",
			category: "Backend",
			icon: Terminal,
			focus: "Node.js, Fastify/NestJS, Docker, Vitest",
			status: "In Progress",
			description:
				"Architecting modular API endpoints with input validation, JWT auth, automated unit testing, and containerized deployment.",
		},
		{
			title: "Accessible UI Design System",
			category: "Frontend",
			icon: Code2,
			focus: "React 19, Motion, Tailwind CSS, Base UI",
			status: "Planned",
			description:
				"Building a library of accessible, keyboard-friendly UI primitives with fluid spring micro-interactions and dark mode tokens.",
		},
	];

	return (
		<section id="projects" className="space-y-6 pt-6">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div className="space-y-1">
					<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
						<FolderGit2 className="size-3.5 text-primary" />
						<span>
							{hasProjects ? "Selected Work" : "Current Work & Roadmap"}
						</span>
					</div>
					<h2 className="text-2xl font-semibold tracking-tight text-foreground">
						{hasProjects ? "Featured Projects" : "Projects in Development"}
					</h2>
				</div>

				{hasProjects && (
					<div className="flex items-center gap-1.5 rounded-xl border border-border/60 bg-muted/30 p-1 backdrop-blur-md overflow-x-auto scrollbar-none max-w-full">
						{categories.map((cat) => (
							<button
								key={cat}
								type="button"
								onClick={() => setActiveCategory(cat)}
								className={cn(
									"shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium transition-all active:scale-95",
									activeCategory === cat
										? "bg-background text-foreground shadow-xs border border-border/70"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{cat}
							</button>
						))}
					</div>
				)}
			</div>

			{hasProjects ? (
				<div className="grid grid-cols-1 gap-4">
					<AnimatePresence mode="popLayout">
						{filteredProjects.length > 0 ? (
							filteredProjects.map((project: Project, idx: number) => (
								<motion.div
									key={project.id}
									layout
									initial={{ opacity: 0, y: 15 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.98 }}
									transition={{ duration: 0.3, delay: idx * 0.05 }}
									className="group relative rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-border hover:bg-card/90 hover:shadow-md dark:bg-card/30"
								>
									<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
										<div className="space-y-2 flex-1">
											<div className="flex items-center gap-2">
												<h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
													{project.title}
												</h3>
												{project.featured && (
													<span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
														<Sparkles className="size-2.5" />
														Featured
													</span>
												)}
												<span className="rounded-md border border-border/40 bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
													{project.category}
												</span>
											</div>

											<p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
												{project.description}
											</p>

											<div className="flex flex-wrap gap-1.5 pt-1.5">
												{project.tags.map((tag) => (
													<span
														key={tag}
														className="rounded-lg border border-border/40 bg-muted/30 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground font-mono"
													>
														{tag}
													</span>
												))}
											</div>
										</div>

										<div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
											{project.githubUrl && (
												<Button
													variant="outline"
													size="icon-sm"
													onClick={() =>
														window.open(project.githubUrl, "_blank")
													}
													aria-label={`View ${project.title} source code on GitHub`}
													className="border-border/60 hover:bg-muted"
												>
													<GithubIcon className="size-3.5" />
												</Button>
											)}

											{project.demoUrl && (
												<Button
													variant="default"
													size="sm"
													onClick={() => window.open(project.demoUrl, "_blank")}
													className="gap-1.5 text-xs shadow-xs"
												>
													<span>Live Demo</span>
													<ExternalLink className="size-3" />
												</Button>
											)}
										</div>
									</div>
								</motion.div>
							))
						) : (
							<div className="flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-border/60 bg-card/40">
								<AlertCircle className="size-6 text-muted-foreground mb-2" />
								<p className="text-sm font-medium text-foreground">
									No projects found in this category
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									Try selecting another filter or view all projects.
								</p>
							</div>
						)}
					</AnimatePresence>
				</div>
			) : (
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.35 }}
					className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-card/70 via-card/50 to-muted/20 p-5 sm:p-7 backdrop-blur-xl shadow-xs dark:from-card/40 dark:via-card/20 dark:to-muted/10 space-y-6"
				>
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-5">
						<div className="space-y-1.5">
							<div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
								<span className="relative flex size-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-primary" />
								</span>
								<span>Active Development & Prototyping</span>
							</div>
							<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
								Building practical, production-ready applications
							</h3>
						</div>

						<div className="flex items-center gap-2">
							{personal.github && (
								<Button
									variant="outline"
									size="sm"
									onClick={() => window.open(personal.github, "_blank")}
									className="gap-1.5 text-xs border-border/60"
								>
									<GithubIcon className="size-3.5" />
									<span>Follow GitHub Activity</span>
								</Button>
							)}
						</div>
					</div>

					<div className="space-y-2">
						<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
							I am actively building and refining full-stack applications. Each
							project is constructed with attention to modular architecture,
							type safety, testability, and clean UI engineering before being
							published here.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
						{upcomingProjects.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.title}
									className="rounded-2xl border border-border/50 bg-background/50 p-4.5 backdrop-blur-md transition-all hover:border-border hover:bg-background/80 flex flex-col justify-between space-y-3"
								>
									<div className="space-y-2.5">
										<div className="flex items-center justify-between gap-2">
											<div className="flex size-8 items-center justify-center rounded-xl bg-muted text-foreground border border-border/60">
												<Icon className="size-4" />
											</div>
											<span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary">
												{item.status}
											</span>
										</div>

										<div>
											<h4 className="text-sm font-semibold text-foreground tracking-tight">
												{item.title}
											</h4>
											<p className="text-[11px] font-mono text-muted-foreground mt-0.5">
												{item.focus}
											</p>
										</div>

										<p className="text-xs leading-relaxed text-muted-foreground">
											{item.description}
										</p>
									</div>

									<div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-1 border-t border-border/30">
										<GitBranch className="size-3 text-primary" />
										<span>{item.category}</span>
									</div>
								</div>
							);
						})}
					</div>

					<div className="rounded-2xl border border-border/40 bg-muted/30 p-4 space-y-3">
						<div className="text-xs font-semibold text-foreground flex items-center gap-2">
							<GitPullRequest className="size-3.5 text-primary" />
							<span>Development standards in progress:</span>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Clean git commit history, branch workflows, and PR standards
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Unit & integration test suites before production deployment
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Responsive UI with accessible keyboard navigation and dark
									mode
								</span>
							</div>
							<div className="flex items-start gap-2">
								<CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
								<span>
									Open to technical assessments, live coding, and repository
									reviews
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40">
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<span>Want to propose a project or technical assessment?</span>
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
								<span>Contact Me</span>
							</Button>

							{personal.github && (
								<Button
									variant="outline"
									size="sm"
									onClick={() => window.open(personal.github, "_blank")}
									className="gap-1.5 text-xs"
								>
									<Rocket className="size-3.5" />
									<span>Explore Repositories</span>
								</Button>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</section>
	);
}
