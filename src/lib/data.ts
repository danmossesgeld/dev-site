import type { Project, Experience, Education, TechStackCategory, Screenshots } from './types';

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
		description: 'Developing cloud-based enterprise solutions using modern web technologies. Building scalable applications with Firebase and SvelteKit. Implemented automated CI/CD pipelines and optimized application performance for high-traffic workloads.',
		technologies: ['SvelteKit', 'TypeScript', 'Firebase', 'TailwindCSS', 'DaisyUI', 'GitHub Actions']
	},
	{
		title: 'Senior Developer',
		period: '2023 - 2025',
		company: 'Digisoft Business Solutions Inc.',
		description: 'Led development of enterprise accounting systems with QuickBooks integration. Designed and implemented secure multi-tenant architecture serving 50+ business clients. Achieved 80% reduction in manual data entry through real-time synchronization systems.',
		technologies: ['C#', '.NET', 'MSSQL', 'QuickBooks API', 'REST APIs', 'Crystal Reports']
	},
	{
		title: 'Software Solutions Architect',
		period: '2021 - 2023',
		company: 'MinebeaMitsumi Inc.',
		description: 'Architected and implemented real-time production monitoring systems improving manufacturing efficiency by 35%. Designed system architecture for cross-facility data integration. Led technical planning and implementation across 3 production facilities.',
		technologies: ['C#', '.NET', 'MSSQL', 'JavaScript', 'REST APIs', 'SignalR']
	}
];

export const education: Education[] = [
	{
		degree: 'Bachelor of Science in Information Technology',
		period: '2017 - 2021',
		school: 'Polytechnic University of the Philippines'
	}
];

export const projects: Project[] = [
	{
		title: "Computerized Accounting System",
		description: "Enterprise-grade accounting solution with comprehensive financial management, reporting, and multi-user support. Features include automated journal entries, financial statements, and audit trails.",
		tech: ["VB.NET", "MSSQL", "Crystal Reports", "Visual Studio"],
		status: "Live",
		date: "2022 - 2023",
		sourceUrl: "#",
		liveUrl: "#",
		deployedOn: [
			{
				name: "Eomong Trade Sales Inc",
				icon: "/icons/eomong logo.png"
			},
			{
				name: "Ace Promotion Marketing Strategies",
				icon: "/icons/ace logo.png"
			},
			{
				name: "Hideco Sugar Milling Company",
				icon: "/icons/hideco logo.png"
			}
		],
		features: [
			{
				name: "Main Dashboard",
				description: "Comprehensive dashboard providing overview of financial status, key metrics, and quick access to all accounting modules",
				icon: "material-symbols:dashboard-rounded",
				imageIndex: 0
			},
			{
				name: "Master Data Management",
				description: "Centralized management of company accounts, products, assets, customers, and vendors with detailed tracking and categorization",
				icon: "material-symbols:database-rounded",
				imageIndex: 1
			},
			{
				name: "Financial Reports",
				description: "Multiple accounting and management reports including balance sheets, income statements, and custom financial analysis",
				icon: "material-symbols:summarize-rounded",
				imageIndex: 2
			},
			{
				name: "Sales Management",
				description: "Complete sales cycle management including customer invoicing, delivery receipts, sales orders, and billing statements",
				icon: "material-symbols:receipt-long-rounded",
				imageIndex: 3
			},
			{
				name: "Purchase Management",
				description: "Vendor management system with purchase orders, receiving reports, accounts payable, and debit memo processing",
				icon: "material-symbols:inventory-2-rounded",
				imageIndex: 4
			},
			{
				name: "Report Generation",
				description: "Integrated Crystal Reports for professional document generation and printing across all accounting forms",
				icon: "material-symbols:print-rounded",
				imageIndex: 5
			}
		]
	},
	{
		title: "Production Monitoring System",
		description: "Real-time manufacturing monitoring system that tracks production lines and loss times across the entire department. Features live data collection, real-time graph visualizations, and comprehensive error tracking to optimize manufacturing efficiency and minimize downtime.",
		tech: ["VB.NET", "MSSQL", "Crystal Reports", "Visual Studio"],
		status: "Live",
		date: "2021 - 2022",
		sourceUrl: "#",
		liveUrl: "#",
		features: [
			{
				name: "Department Production Dashboard",
				description: "Real-time monitoring of all production lines with live data visualization and performance metrics across the entire manufacturing department",
				icon: "material-symbols:monitoring-rounded",
				imageIndex: 0
			},
			{
				name: "Line Production Tracking",
				description: "Individual production line monitoring with real-time output tracking, efficiency metrics, and live status updates",
				icon: "material-symbols:analytics-rounded",
				imageIndex: 1
			},
			{
				name: "Department Loss Time Analysis",
				description: "Comprehensive error tracking system showing loss times and manufacturing issues across all production lines in real-time",
				icon: "material-symbols:error-circle-rounded",
				imageIndex: 2
			},
			{
				name: "Line Error Monitoring",
				description: "Detailed error tracking for individual production lines with real-time alerts and loss time analysis for immediate response",
				icon: "material-symbols:warning-outline-rounded",
				imageIndex: 3
			}
		]
	},
	{
		title: "E-Commerce Platform",
		description: "Modern online store platform with real-time inventory management, secure payment processing, and responsive design. Features include user authentication, order tracking, and admin dashboard.",
		tech: ["SvelteKit", "TypeScript", "Firebase Hosting", "Firestore Cloud", "DaisyUI", "TailwindCSS"],
		status: "Development",
		date: "2023 - Present",
		sourceUrl: "#",
		liveUrl: "#",
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
		{ url: "/projectimages/cas/cas-dashboard.png", caption: "Main Dashboard" },
		{ url: "/projectimages/cas/master list of company accounts, products, assets, customer and vendor.png", caption: "Master Data Management" },
		{ url: "/projectimages/cas/multiple accounting and management reports.png", caption: "Financial Reports" },
		{ url: "/projectimages/cas/customer invoicing, delivery receipt, sales order, billing statement, etc.png", caption: "Sales Management" },
		{ url: "/projectimages/cas/vendor PO, receiving reports, accounts payables, debit memo, etc..png", caption: "Purchase Management" },
		{ url: "/projectimages/cas/crystal report printing integration for each form.png", caption: "Report Generation" }
	],
	"Production Monitoring System": [
		{ url: "/projectimages/pms/line production monitoring serve (WHOLE DEPARTMENT).png", caption: "Department-wide Production Monitoring" },
		{ url: "/projectimages/pms/line production monitoring.png", caption: "Individual Line Production Tracking" },
		{ url: "/projectimages/pms/production error monitoring SERVER (whole department).png", caption: "Department Error Monitoring System" },
		{ url: "/projectimages/pms/production error monitoring.png", caption: "Line-specific Error Analysis" }
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