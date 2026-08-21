import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/theme-context";

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<TooltipProvider delay={150}>
			<Tooltip>
				<TooltipTrigger
					render={
						<Button
							variant="outline"
							size="icon-sm"
							className={className}
							onClick={toggleTheme}
							aria-label="Toggle color theme"
						>
							<Sun className="size-4 rotate-0 scale-100 transition-transform duration-300" />
							<Moon className="absolute size-4 rotate-90 scale-0 transition-transform duration-300" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					}
				/>
				<TooltipContent side="top">
					{theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
