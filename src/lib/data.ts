import type { Project, Experience, TechStackCategory, Screenshots } from './types';

export const contactInfo = {
	email: 'danmossesgeld@gmail.com'
};

export const professionalSummary = `Full Stack Developer with expertise in modern web technologies and enterprise solutions. 
Proven track record in developing scalable applications, leading technical teams, and implementing 
efficient development workflows.`;

export const experiences: Experience[] = [
	{
		title: 'Web Developer',
		period: '2025 - Present',
		company: 'Mage Technologies, Inc.',
		description: 'Developing cloud-based enterprise solutions using modern web technologies. Building scalable applications with Firebase and SvelteKit. Implemented automated CI/CD pipelines and optimized application performance for high-traffic workloads.'
	},
	{
		title: 'Senior Developer',
		period: '2023 - 2025',
		company: 'Digisoft Business Solutions Inc.',
		description: 'Led development of enterprise accounting systems with QuickBooks integration. Designed and implemented secure multi-tenant architecture serving 50+ business clients. Achieved 80% reduction in manual data entry through real-time synchronization systems.'
	},
	{
		title: 'Software Solutions Architect',
		period: '2021 - 2023',
		company: 'MinebeaMitsumi Inc.',
		description: 'Architected and implemented real-time production monitoring systems improving manufacturing efficiency by 35%. Designed system architecture for cross-facility data integration. Led technical planning and implementation across 3 production facilities.'
	}
];

export const projects: Project[] = [
	{
		title: "E-Commerce Platform",
		description: "Modern online store platform with real-time inventory management, secure payment processing, and responsive design. Features include user authentication, order tracking, and admin dashboard.",
		tech: ["SvelteKit", "TypeScript", "Firebase Hosting", "Firestore Cloud", "DaisyUI", "TailwindCSS"],
		status: "Live",
		date: "2023 - Present",
		sourceUrl: "https://github.com/danmossesgeld/online-shop",
		liveUrl: "https://doki-shop.web.app/",
		features: [
			{
				name: "Reactive Homepage",
				description: "Dynamic content updates with real-time data synchronization",
				icon: "material-symbols:home-rounded",
				imageIndex: 0
			},
			{
				name: "Dynamic Categories",
				description: "Flexible category management with sorting and filtering",
				icon: "material-symbols:category-rounded",
				imageIndex: 1
			},
			{
				name: "Category Sorting",
				description: "Advanced sorting and organization of product categories",
				icon: "material-symbols:sort-rounded",
				imageIndex: 2
			},
			{
				name: "Product Cards",
				description: "Visually appealing product display with essential information",
				icon: "material-symbols:view-card-rounded",
				imageIndex: 3
			},
			{
				name: "Product Registration",
				description: "Streamlined product creation and inventory management",
				icon: "material-symbols:add-box-rounded",
				imageIndex: 4
			},
			{
				name: "Product Editing",
				description: "Comprehensive product information management",
				icon: "material-symbols:edit-rounded",
				imageIndex: 5
			},
			{
				name: "Admin Dashboard",
				description: "Powerful admin interface with real-time analytics",
				icon: "material-symbols:dashboard-rounded",
				imageIndex: 6
			},
			{
				name: "Firetable Integration",
				description: "Advanced data management with Firetable",
				icon: "material-symbols:table-view-rounded",
				imageIndex: 7
			},
			{
				name: "Mobile Ready",
				description: "Fully responsive design for all devices",
				icon: "material-symbols:devices-rounded",
				imageIndex: 8
			},
			{
				name: "Theme Support",
				description: "Multiple theme options for customization",
				icon: "material-symbols:palette-rounded",
				imageIndex: 9
			},
			{
				name: "Persistent Cart",
				description: "Shopping cart that persists across sessions",
				icon: "material-symbols:shopping-cart-rounded",
				imageIndex: 10
			}
		]
	},
	{
		title: "Computerized Accounting System",
		description: "Enterprise-grade accounting solution with comprehensive financial management, reporting, and multi-user support. Features include automated journal entries, financial statements, and audit trails.",
		tech: ["C#", ".NET", "MSSQL", "Crystal Reports"],
		status: "Live",
		date: "2022 - 2023",
		sourceUrl: "#",
		liveUrl: "#",
		features: []
	},
	{
		title: "Production Monitoring System",
		description: "Real-time production tracking system with live analytics, KPI dashboards, and automated reporting. Enables efficient monitoring of manufacturing processes and productivity metrics.",
		tech: ["C#", ".NET", "MSSQL", "JavaScript"],
		status: "Live",
		date: "2021 - 2022",
		sourceUrl: "#",
		liveUrl: "#",
		features: []
	},
	{
		title: "Web-Based POS System",
		description: "Cloud-based point of sale system with inventory management, sales tracking, and real-time reporting. Includes features for multiple branches, user roles, and offline functionality.",
		tech: ["SvelteKit", "TypeScript", "Firebase", "DaisyUI"],
		status: "Development",
		date: "2023 - Present",
		sourceUrl: "#",
		liveUrl: "#",
		features: []
	},
	{
		title: "QuickBooks Desktop Integration",
		description: "Custom API integration solution enabling seamless data synchronization between enterprise systems and QuickBooks Desktop. Features automated transaction posting and real-time sync.",
		tech: [".NET", "C#", "QuickBooks SDK", "REST API"],
		status: "Completed",
		date: "2022 - 2023",
		sourceUrl: "#",
		liveUrl: "#",
		features: []
	}
];

export const techStack: TechStackCategory[] = [
	{
		category: "Frontend Development",
		skills: [
			{ name: "SvelteKit", icon: "logos:svelte-icon" },
			{ name: "TypeScript", icon: "logos:typescript-icon" },
			{ name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
			{ name: "DaisyUI", icon: "logos:daisyui" },
			{ name: "React", icon: "logos:react" },
			{ name: "Vue", icon: "logos:vue" }
		]
	},
	{
		category: "Backend Development",
		skills: [
			{ name: ".NET Core", icon: "logos:dotnet" },
			{ name: "C#", icon: "logos:c-sharp" },
			{ name: "Firebase", icon: "logos:firebase" },
			{ name: "Node.js", icon: "logos:nodejs-icon" },
			{ name: "REST APIs", icon: "logos:swagger" },
			{ name: "GraphQL", icon: "logos:graphql" }
		]
	},
	{
		category: "Database & Cloud",
		skills: [
			{ name: "MSSQL", icon: "material-symbols:database" },
			{ name: "Firebase", icon: "logos:firebase" },
			{ name: "MongoDB", icon: "logos:mongodb-icon" },
			{ name: "MySQL", icon: "material-symbols:database" },
			{ name: "Redis", icon: "logos:redis" },
			{ name: "Docker", icon: "logos:docker-icon" }
		]
	},
	{
		category: "Development Tools",
		skills: [
			{ name: "Git", icon: "logos:git-icon" },
			{ name: "GitHub", icon: "logos:github-icon" },
			{ name: "VS Code", icon: "logos:visual-studio-code" },
			{ name: "Postman", icon: "logos:postman-icon" },
			{ name: "Figma", icon: "logos:figma" },
			{ name: "Azure DevOps", icon: "logos:azure-icon" }
		]
	},
	{
		category: "Hardware & Networking",
		skills: [
			{ name: "Network Administration", icon: "material-symbols:settings-ethernet-rounded" },
			{ name: "System Maintenance", icon: "material-symbols:settings-suggest-rounded" },
			{ name: "Hardware Troubleshooting", icon: "material-symbols:build-rounded" },
			{ name: "Server Management", icon: "material-symbols:dns-rounded" },
			{ name: "Data Recovery", icon: "material-symbols:restore-rounded" },
			{ name: "Security Systems", icon: "material-symbols:security-rounded" }
		]
	},
	{
		category: "IT Support & Systems",
		skills: [
			{ name: "Windows Server", icon: "logos:microsoft-windows" },
			{ name: "Linux Systems", icon: "logos:linux-tux" },
			{ name: "Active Directory", icon: "material-symbols:admin-panel-settings-rounded" },
			{ name: "Virtualization", icon: "material-symbols:layers-rounded" },
			{ name: "IT Asset Management", icon: "material-symbols:inventory-2-rounded" },
			{ name: "Help Desk Support", icon: "material-symbols:help-center-rounded" }
		]
	}
];

export const screenshots: Screenshots = {
	"Computerized Accounting System": [
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=CAS+Dashboard", caption: "Main Dashboard" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=CAS+Journal+Entry", caption: "Journal Entry" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=CAS+Reports", caption: "Financial Reports" }
	],
	"Production Monitoring System": [
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=PMS+Dashboard", caption: "Production Dashboard" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=PMS+Analytics", caption: "Analytics View" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=PMS+Reports", caption: "Reports" }
	],
	"E-Commerce Platform": [
		{ url: "/projectimages/ecommerce/reactive-homepage.png", caption: "Reactive Homepage" },
		{ url: "/projectimages/ecommerce/dynamic-category.png", caption: "Dynamic Category Management" },
		{ url: "/projectimages/ecommerce/category-sorting.png", caption: "Category Sorting" },
		{ url: "/projectimages/ecommerce/product-cardview.png", caption: "Product Card View" },
		{ url: "/projectimages/ecommerce/product-registration.png", caption: "Product Registration" },
		{ url: "/projectimages/ecommerce/product-editing.png", caption: "Product Editing" },
		{ url: "/projectimages/ecommerce/admin-dashboard.png", caption: "Admin Dashboard" },
		{ url: "/projectimages/ecommerce/reactive-firetable.png", caption: "Reactive Firetable" },
		{ url: "/projectimages/ecommerce/mobile-ready-pages.png", caption: "Mobile Ready Pages" },
		{ url: "/projectimages/ecommerce/multiple-themes.png", caption: "Multiple Themes" },
		{ url: "/projectimages/ecommerce/persistent-cart.png", caption: "Persistent Cart" }
	],
	"Web-Based POS System": [
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=POS+Terminal", caption: "POS Terminal" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=POS+Inventory", caption: "Inventory Management" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=POS+Reports", caption: "Sales Reports" }
	],
	"QuickBooks Desktop Integration": [
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=QB+Integration", caption: "Integration Dashboard" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=QB+Sync", caption: "Sync Status" },
		{ url: "https://placehold.co/1920x1080/2563eb/ffffff?text=QB+Mapping", caption: "Data Mapping" }
	]
}; 