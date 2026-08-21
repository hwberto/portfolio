export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription?: string;
	tags: string[];
	category: "Full Stack" | "Frontend" | "Backend";
	stars?: number;
	demoUrl?: string;
	githubUrl?: string;
	featured?: boolean;
	image?: string;
}

export interface Experience {
	id: string;
	role: string;
	company: string;
	companyUrl?: string;
	period: string;
	location: string;
	type: "Full-time" | "Contract" | "Freelance";
	description: string;
	highlights: string[];
	skills: string[];
}

export interface SkillCategory {
	title: string;
	skills: {
		name: string;
		level?:
			| "Advanced"
			| "Proficient"
			| "Familiar"
			| "Beginner"
			| "Intermediate";
		icon?: string;
		tag?: string;
	}[];
}

export interface Education {
	degree: string;
	institution: string;
	period: string;
	location: string;
	details?: string;
}

export const PORTFOLIO_DATA = {
	personal: {
		name: "Humberto Gonçalves",
		title: "Full-Stack Developer",
		headline:
			"Building responsive web applications, modern interfaces, and reliable APIs.",
		bio: "Developer based in Brazil. I enjoy building things with TypeScript, React, Next.js, and Node.js. Focused on solid architecture, clean code, and shipping useful software.",
		location: "Brazil",
		timezone: "America/Sao_Paulo",
		email: "hwbertooo@gmail.com",
		github: "https://github.com/hwberto",
		linkedin: "https://linkedin.com",
		twitter: "https://x.com",
		status: "available" as const,
		statusText: "Available for new projects",
		responseTime: "< 24h",
		avatar: "/me.png",
	},
	stats: [
		{ label: "Primary Stack", value: "React • Node" },
		{ label: "Projects Completed", value: "5+" },
		{ label: "Certifications", value: "2" },
		{ label: "Availability", value: "Full-Time" },
	],
	skills: [
		{
			title: "Languages & Core",
			skills: [
				{ name: "TypeScript", level: "Advanced" },
				{ name: "JavaScript (ESNext)", level: "Advanced" },
				{ name: "HTML5 / CSS3", level: "Advanced" },
			],
		},
		{
			title: "Frontend & UI",
			skills: [
				{ name: "React 19", level: "Advanced" },
				{ name: "Next.js", level: "Advanced" },
				{ name: "Tailwind CSS v4", level: "Advanced" },
				{ name: "Motion / Animations", level: "Advanced" },
				{ name: "Vite & Build Tools", level: "Advanced" },
				{ name: "Zustand / Redux", level: "Familiar" },
			],
		},
		{
			title: "Backend & Systems",
			skills: [
				{ name: "Node.js / Bun", level: "Advanced" },
				{ name: "Express / Fastify / Hono / Nest.js", level: "Advanced" },
				{ name: "PostgreSQL", level: "Familiar" },
				{ name: "Prisma / Drizzle ORM", level: "Advanced" },
				{ name: "REST APIs", level: "Advanced" },
			],
		},
	] as SkillCategory[],
	experiences: [] as Experience[],
	projects: [] as Project[],
	education: [
		{
			degree: "React.js Certification",
			institution: "Rocketseat",
			period: "2024",
			location: "Online",
			details:
				"Full-stack and frontend applications with React, modern state management, and ecosystem tooling.",
		},
		{
			degree: "Node.js Certification",
			institution: "Rocketseat",
			period: "2024",
			location: "Online",
			details:
				"Backend architectures, scalable REST APIs, authentication, testing, and Nest.js.",
		},
	] as Education[],
};
