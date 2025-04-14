import type { Project, Experience, Education, TechStackCategory, Screenshots } from './types';

export const contactInfo = {
	email: 'danmossesgeld@gmail.com'
};

export const professionalSummary = `Full Stack Developer with expertise in modern web technologies and enterprise solutions. 
Proven track record in developing scalable applications, leading technical teams, and implementing 
efficient development workflows.`;

export const experiences: Experience[] = [
	{
		title: 'Full Stack Web Developer',
		period: '2025 - Present',
		company: 'Mage Technologies, Inc.',
		description: 'Collaborated with a team of developers using GitHub as the primary platform to design, build, and deploy web-based ERP and POS systems. Implemented modern web technologies and cloud solutions for enterprise applications.',
		technologies: ['SvelteKit', 'TypeScript', 'Firebase', 'GitHub', 'TailwindCSS', 'DaisyUI']
	},
	{
		title: 'Full Stack .NET Developer',
		period: '2023 - 2025',
		company: 'Digisoft Business Solutions Inc.',
		description: 'Designed and developed custom .NET-based accounting systems with advanced financial reporting and transaction management. Implemented QuickBooks integration and SAP Crystal Reports. Provided technical support and consultation to clients.',
		technologies: ['C#', '.NET', 'MSSQL', 'QuickBooks SDK', 'SAP Crystal Reports']
	},
	{
		title: 'Full Stack .NET Developer',
		period: '2022 - 2023',
		company: 'MinebeaMitsumi Inc.',
		description: 'Developed production monitoring software for real-time data visualization and analysis. Led training sessions and provided technical support for international teams. Implemented solutions to improve production efficiency and problem resolution.',
		technologies: ['C#', '.NET', 'MSSQL', 'JavaScript', 'Data Visualization']
	},
	{
		title: 'Freelance IT Technician',
		period: '2015 - Present',
		company: 'Freelance',
		description: 'Provided hardware and software maintenance, custom PC building, and system configuration services. Diagnosed and resolved technical issues, optimized system performance, and delivered tailored solutions for diverse client needs.',
		technologies: ['Hardware Maintenance', 'System Configuration', 'Software Installation', 'PC Building', 'Troubleshooting']
	},
	{
		title: 'Student I.T. Support',
		period: '2018 - 2021',
		company: 'Polytechnic University of the Philippines - Bataan',
		description: 'Provided technical support for hardware and network issues. Performed system maintenance, malware removal, and OS updates. Assisted students and staff with technical problems and system optimizations.',
		technologies: ['Technical Support', 'System Maintenance', 'Network Troubleshooting', 'OS Management', 'Hardware Repair']
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
		description: "Custom API integration solution enabling seamless data synchronization between enterprise systems and QuickBooks Desktop. Features automated transaction posting, real-time sync, and comprehensive reporting tools with Crystal Reports integration.",
		tech: ["VB.NET", "MSSQL", "Crystal Reports", "Visual Studio", "QuickBooks SDK"],
		status: "Completed",
		date: "2022 - 2023",
		sourceUrl: "#",
		liveUrl: "#",
		features: [
			{
				name: "Multi-Form Data Extraction",
				description: "Multiple specialized forms for efficient data extraction and processing from QuickBooks Desktop",
				icon: "material-symbols:dashboard-customize-rounded",
				imageIndex: 0
			},
			{
				name: "Auto-Generated IDs",
				description: "Automated document ID generation system with cloud SQL synchronization for reliable tracking",
				icon: "material-symbols:cloud-sync-rounded",
				imageIndex: 1
			},
			{
				name: "Check Printing Tool",
				description: "Integrated check printing functionality with customizable templates and security features",
				icon: "material-symbols:payments-rounded",
				imageIndex: 2
			},
			{
				name: "Crystal Reports Integration",
				description: "Fully customizable report generation and printouts using Crystal Reports",
				icon: "material-symbols:description-rounded",
				imageIndex: 3
			},
			{
				name: "Report Management",
				description: "Comprehensive system for managing saved reports, generation tools, and documentation details",
				icon: "material-symbols:folder-managed-rounded",
				imageIndex: 4
			}
		]
	}
];

export const techStack: TechStackCategory[] = [
	{
		category: 'Frontend Technologies',
		skills: [
			{ name: 'SvelteKit', icon: 'logos:svelte-icon' },
			{ name: 'TypeScript', icon: 'logos:typescript-icon' },
			{ name: 'JavaScript', icon: 'logos:javascript' },
			{ name: 'HTML5', icon: 'logos:html-5' },
			{ name: 'CSS3', icon: 'logos:css-3' },
			{ name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
			{ name: 'DaisyUI', icon: 'logos:tailwindcss-icon' },
			{ name: 'Responsive Design', icon: 'material-symbols:devices-rounded' }
		]
	},
	{
		category: 'Backend & Database',
		skills: [
			{ name: 'VB.NET', icon: 'logos:dotnet' },
			{ name: 'C#', icon: 'logos:c-sharp' },
			{ name: '.NET', icon: 'logos:dotnet' },
			{ name: 'MSSQL', icon: 'logos:microsoft-sql-server' },
			{ name: 'ASP.NET', icon: 'logos:dotnet' },
			{ name: 'Firebase', icon: 'logos:firebase' },
			{ name: 'Firestore', icon: 'logos:firebase' },
			{ name: 'RESTful APIs', icon: 'material-symbols:api-rounded' }
		]
	},
	{
		category: 'Development Ecosystem',
		skills: [
			{ name: 'Git', icon: 'logos:git-icon' },
			{ name: 'GitHub', icon: 'logos:github-icon' },
			{ name: 'VS Code', icon: 'logos:visual-studio-code' },
			{ name: 'Cursor', icon: 'logos:visual-studio-code' },
			{ name: 'Visual Studio', icon: 'logos:visual-studio' },
			{ name: 'CI/CD', icon: 'material-symbols:sync-rounded' },
			{ name: 'Docker', icon: 'logos:docker-icon' }
		]
	},
	{
		category: 'Enterprise Solutions',
		skills: [
			{ name: 'QuickBooks SDK', icon: 'material-symbols:account-balance-rounded' },
			{ name: 'SAP Crystal Reports', icon: 'material-symbols:description-rounded' },
			{ name: 'Data Visualization', icon: 'material-symbols:analytics-rounded' },
			{ name: 'Microsoft Office', icon: 'logos:microsoft-icon' },
			{ name: 'ERP Systems', icon: 'material-symbols:business-center-rounded' },
			{ name: 'POS Systems', icon: 'material-symbols:point-of-sale-rounded' },
			{ name: 'Accounting Software', icon: 'material-symbols:payments-rounded' }
		]
	},
	{
		category: 'Cloud & Infrastructure',
		skills: [
			{ name: 'Firebase Hosting', icon: 'logos:firebase' },
			{ name: 'Cloud Functions', icon: 'material-symbols:cloud-rounded' },
			{ name: 'System Configuration', icon: 'material-symbols:settings-rounded' },
			{ name: 'Network Infrastructure', icon: 'material-symbols:network-node-rounded' },
			{ name: 'Server Management', icon: 'material-symbols:dns-rounded' },
			{ name: 'Security Protocols', icon: 'material-symbols:security-rounded' },
			{ name: 'Performance Optimization', icon: 'material-symbols:speed-rounded' }
		]
	},
	{
		category: 'Technical Support',
		skills: [
			{ name: 'System Maintenance', icon: 'material-symbols:build-circle-rounded' },
			{ name: 'Malware Removal', icon: 'material-symbols:security-update-good-rounded' },
			{ name: 'OS Management', icon: 'material-symbols:computer-rounded' },
			{ name: 'Hardware Repair', icon: 'material-symbols:tools-wrench-rounded' },
			{ name: 'Software Installation', icon: 'material-symbols:install-desktop-rounded' },
			{ name: 'System Optimization', icon: 'material-symbols:tune-rounded' },
			{ name: 'Technical Support', icon: 'material-symbols:support-agent-rounded' },
			{ name: 'Troubleshooting', icon: 'material-symbols:troubleshoot-rounded' },
			{ name: 'PC Building', icon: 'material-symbols:precision-manufacturing-rounded' }
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
		{ url: "/projectimages/qbintegration/mainscreen (multiple forms for data extracting.png", caption: "Multi-Form Data Extraction Interface" },
		{ url: "/projectimages/qbintegration/documents have auto generated ID and saved to cloud SQL.png", caption: "Auto-Generated Document IDs" },
		{ url: "/projectimages/qbintegration/check printing tool.png", caption: "Check Printing Tool" },
		{ url: "/projectimages/qbintegration/fully customizable printout using crystal report.png", caption: "Customizable Crystal Reports" },
		{ url: "/projectimages/qbintegration/form that shows saved reports, report generation tool and documentation details .jpg", caption: "Report Management System" }
	]
}; 