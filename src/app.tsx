import { AboutMe } from "@/components/about-me";
import { PortfolioContact } from "@/components/portfolio-contact";
import { PortfolioDock } from "@/components/portfolio-dock";
import { PortfolioEducation } from "@/components/portfolio-education";
import { PortfolioExperience } from "@/components/portfolio-experience";
import { PortfolioHero } from "@/components/portfolio-hero";
import { PortfolioProjects } from "@/components/portfolio-projects";
import { PortfolioSkills } from "@/components/portfolio-skills";
import { LightRays } from "@/components/ui/light-rays";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { ThemeProvider } from "@/theme-context";

export function App() {
	return (
		<ThemeProvider defaultTheme="system">
			<div className="fixed inset-0 pointer-events-none overflow-hidden mask-[linear-gradient(to_bottom,black_15%,transparent_100%)]">
				<LightRays color="rgb(104,51,135)" />
				<NoiseTexture />
			</div>

			<div className="relative z-10 flex min-h-screen lg:h-screen w-full justify-center overflow-x-hidden overflow-y-auto lg:overflow-hidden">
				<div className="flex min-h-full lg:h-full w-full max-w-7xl flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
					<AboutMe />

					<main className="h-auto lg:h-full w-full max-w-3xl flex-1 overflow-y-visible lg:overflow-y-auto pr-0 lg:pr-4 space-y-10 sm:space-y-12 pb-32 lg:pb-24 scroll-smooth scrollbar-thin scrollbar-thumb-border/60 scrollbar-track-transparent">
						<PortfolioHero />
						<div className="h-px w-full border-t border-dashed border-border/50" />
						<PortfolioProjects />
						<div className="h-px w-full border-t border-dashed border-border/50" />
						<PortfolioExperience />
						<div className="h-px w-full border-t border-dashed border-border/50" />
						<PortfolioSkills />
						<div className="h-px w-full border-t border-dashed border-border/50" />
						<PortfolioEducation />
						<div className="h-px w-full border-t border-dashed border-border/50" />
						<PortfolioContact />
					</main>
				</div>
			</div>

			<PortfolioDock />
		</ThemeProvider>
	);
}
