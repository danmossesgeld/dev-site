export interface Deployment {
	name: string;
	icon: string;
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	status?: 'Live' | 'Development' | 'Completed';
	date?: string;
	sourceUrl?: string;
	liveUrl?: string;
	image?: string;
	github?: string;
	deployedOn?: Deployment[];
	features: {
		name: string;
		description: string;
		icon: string;
		imageIndex: number;
	}[];
}

export interface Screenshot {
	url: string;
	caption: string;
}

export type Screenshots = {
	[K in Project['title']]: Screenshot[];
};

export interface Experience {
	title: string;
	period: string;
	company: string;
	description: string;
	technologies?: string[];
}

export interface Education {
	degree: string;
	period: string;
	school: string;
}

export interface TechStackCategory {
	category: string;
	skills: {
		name: string;
		icon: string;
	}[];
} 