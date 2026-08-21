import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function PortfolioEducation() {
	const { education } = PORTFOLIO_DATA;

	return (
		<section id="education" className="space-y-6 pt-6">
			<div className="space-y-1">
				<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
					<GraduationCap className="size-3.5 text-primary" />
					<span>Academic & Credentials</span>
				</div>
				<h2 className="text-2xl font-semibold tracking-tight text-foreground">
					Education & Certifications
				</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{education.map((item, idx) => (
					<motion.div
						key={item.degree}
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.35, delay: idx * 0.08 }}
						className="rounded-2xl border border-border/70 bg-card/60 p-4.5 backdrop-blur-md transition-all duration-300 hover:border-border hover:bg-card/90 hover:shadow-md dark:bg-card/30 space-y-2.5"
					>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								<Award className="size-4 text-primary shrink-0" />
								<h3 className="font-semibold text-sm text-foreground">
									{item.degree}
								</h3>
							</div>
						</div>

						<div className="text-xs font-medium text-foreground">
							{item.institution}
						</div>

						<div className="flex items-center gap-3 text-[11px] text-muted-foreground font-mono">
							<div className="flex items-center gap-1">
								<Calendar className="size-3" />
								<span>{item.period}</span>
							</div>
							<div className="flex items-center gap-1">
								<MapPin className="size-3" />
								<span>{item.location}</span>
							</div>
						</div>

						{item.details && (
							<p className="text-xs leading-relaxed text-muted-foreground pt-1">
								{item.details}
							</p>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
}
