import {
	Briefcase,
	Code2,
	FolderGit2,
	GraduationCap,
	Mail,
	Moon,
	Sun,
	User,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { useTheme } from "@/theme-context";

export function PortfolioDock() {
	const { theme, setTheme } = useTheme();

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
		<div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1rem)] px-1">
			<TooltipProvider delay={100}>
				<Dock
					className="border-border/60 bg-background/85 shadow-xl backdrop-blur-xl max-w-full overflow-x-auto scrollbar-none py-1.5 px-2 sm:px-3 sm:py-2 h-auto"
					iconSize={32}
					iconMagnification={46}
					iconDistance={100}
				>
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<Tooltip key={item.id}>
								<TooltipTrigger
									render={
										<DockIcon
											onClick={() => scrollToSection(item.id)}
											className="text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 active:scale-95 size-8 sm:size-9"
											aria-label={`Scroll to ${item.label}`}
										>
											<Icon className="size-3.5 sm:size-4" />
										</DockIcon>
									}
								/>
								<TooltipContent side="top" className="text-xs">
									{item.label}
								</TooltipContent>
							</Tooltip>
						);
					})}

					<div className="h-4 sm:h-5 w-px bg-border/60 mx-0.5 sm:mx-1 shrink-0" />

					<Tooltip>
						<TooltipTrigger
							render={
								<DockIcon
									onClick={() =>
										window.open(PORTFOLIO_DATA.personal.github, "_blank")
									}
									className="text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 active:scale-95 size-8 sm:size-9"
									aria-label="GitHub profile"
								>
									<GithubIcon className="size-3.5 sm:size-4" />
								</DockIcon>
							}
						/>
						<TooltipContent side="top" className="text-xs">
							GitHub
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger
							render={
								<DockIcon
									onClick={() =>
										window.open(PORTFOLIO_DATA.personal.linkedin, "_blank")
									}
									className="text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 active:scale-95 size-8 sm:size-9"
									aria-label="LinkedIn profile"
								>
									<LinkedinIcon className="size-3.5 sm:size-4" />
								</DockIcon>
							}
						/>
						<TooltipContent side="top" className="text-xs">
							LinkedIn
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger
							render={
								<DockIcon
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/60 active:scale-95 size-8 sm:size-9"
									aria-label="Toggle theme"
								>
									{theme === "dark" ? (
										<Sun className="size-3.5 sm:size-4 text-amber-400" />
									) : (
										<Moon className="size-3.5 sm:size-4 text-sky-600" />
									)}
								</DockIcon>
							}
						/>
						<TooltipContent side="top" className="text-xs">
							{theme === "dark" ? "Light Mode" : "Dark Mode"}
						</TooltipContent>
					</Tooltip>
				</Dock>
			</TooltipProvider>
		</div>
	);
}
