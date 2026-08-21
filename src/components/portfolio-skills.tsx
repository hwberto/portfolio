import { Code2, Cpu, Database, Sparkles, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function PortfolioSkills() {
	const { skills } = PORTFOLIO_DATA;

	const categoryIcons: Record<string, React.ReactNode> = {
		"Languages & Core": <Code2 className="size-4 text-primary" />,
		"Frontend & UI": <Cpu className="size-4 text-primary" />,
		"Backend & Systems": <Database className="size-4 text-primary" />,
		"DevOps & Tooling": <Wrench className="size-4 text-primary" />,
	};

	return (
		<section id="skills" className="space-y-6 pt-6">
			<div className="space-y-1">
				<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
					<Code2 className="size-3.5 text-primary" />
					<span>Expertise</span>
				</div>
				<h2 className="text-2xl font-semibold tracking-tight text-foreground">
					Tech Stack & Skills
				</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{skills.map((category, idx) => (
					<motion.div
						key={category.title}
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.35, delay: idx * 0.08 }}
						className="rounded-2xl border border-border/70 bg-card/60 p-4.5 backdrop-blur-md transition-all duration-300 hover:border-border hover:bg-card/90 hover:shadow-md space-y-3"
					>
						<div className="flex items-center gap-2 font-medium text-sm text-foreground">
							{categoryIcons[category.title] || (
								<Sparkles className="size-4 text-primary" />
							)}
							<span>{category.title}</span>
						</div>

						<div className="flex flex-wrap gap-1.5">
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="group/item flex items-center gap-1.5 rounded-xl border border-border/50 bg-muted/40 px-2.5 py-1 text-xs transition-all hover:border-border hover:bg-muted"
								>
									<span className="font-medium text-foreground text-[11px]">
										{skill.name}
									</span>
									{skill.level && (
										<span
											className={cn(
												"text-[9px] font-mono rounded px-1 py-0.2",
												skill.level === "Advanced"
													? "bg-primary/10 text-primary"
													: skill.level === "Proficient"
														? "bg-muted text-muted-foreground"
														: "text-muted-foreground/70",
											)}
										>
											{skill.level}
										</span>
									)}
								</div>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
