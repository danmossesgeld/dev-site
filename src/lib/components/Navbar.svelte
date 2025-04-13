<script lang="ts">
	import { contactInfo } from '$lib/data';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let activeSection = 'about';
	let isMobileMenuOpen = false;
	let scrolled = false;
	let theme = 'light';

	onMount(() => {
		// Check for saved theme preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.setAttribute('data-theme', theme);
		}

		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function scrollToSection(section: string, event: MouseEvent) {
		event.preventDefault();
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			closeMobileMenu();
		}
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {scrolled ? 'bg-base-100/80 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-transparent'} border-b border-base-content/5">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a 
				href="#about" 
				class="group flex items-center gap-3 font-mono font-bold text-base-content relative" 
				on:click|preventDefault={(e) => scrollToSection('about', e)}
			>
				<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-base-100 transition-all duration-500">
					<iconify-icon icon="material-symbols:code-rounded" width="24"></iconify-icon>
				</div>
				<div class="flex flex-col">
					<span class="hidden md:inline text-lg tracking-tight">Dan Oscar C. Mossesgeld</span>
					<span class="md:hidden text-lg">DC</span>
					<span class="text-xs text-base-content/50 hidden md:block">Fullstack Developer</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center justify-center flex-1 px-8">
				<div class="flex gap-1">
					{#each ['About', 'Projects', 'Skills', 'Experience', 'Education'] as section}
						<a 
							href="#{section.toLowerCase()}" 
							class="relative px-4 py-2 rounded-lg hover:bg-base-content/5 transition-all duration-300 group"
							class:active-nav={activeSection === section.toLowerCase()}
							on:click|preventDefault={(e) => scrollToSection(section.toLowerCase(), e)}
						>
							<span class="relative z-10 text-sm font-medium {activeSection === section.toLowerCase() ? 'text-primary' : 'text-base-content/70 group-hover:text-base-content'} transition-colors duration-300">
								{section}
							</span>
							{#if activeSection === section.toLowerCase()}
								<div class="absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300"></div>
							{/if}
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact Icons and Theme Switcher -->
			<div class="flex items-center gap-2">
				<!-- Theme Switcher -->
				<button 
					class="p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
					on:click={toggleTheme}
					title="Toggle theme"
				>
					<div class="transform transition-transform duration-300">
						<iconify-icon icon={theme === 'light' ? "material-symbols:dark-mode" : "material-symbols:light-mode"} width="20"></iconify-icon>
					</div>
				</button>

				<a 
					href="mailto:{contactInfo.email}" 
					class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
				>
					<div class="group-hover:scale-110 transition-transform duration-300">
						<iconify-icon icon="material-symbols:mail-rounded" width="20"></iconify-icon>
					</div>
				</a>
				<a 
					href="https://github.com/yourusername" 
					target="_blank" 
					class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
				>
					<div class="group-hover:scale-110 transition-transform duration-300">
						<iconify-icon icon="mdi:github" width="20"></iconify-icon>
					</div>
				</a>
				<!-- Mobile Menu Button -->
				<button 
					class="md:hidden p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
					on:click={toggleMobileMenu}
				>
					<div class="transform transition-transform duration-300 {isMobileMenuOpen ? 'rotate-180' : ''}">
						<iconify-icon icon={isMobileMenuOpen ? "material-symbols:close" : "material-symbols:menu"} width="20"></iconify-icon>
					</div>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div 
				class="md:hidden absolute top-20 left-0 right-0 bg-base-100/90 backdrop-blur-xl border-t border-base-content/5 shadow-xl"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 200 }}
			>
				<div class="container mx-auto px-4 py-6">
					<div class="flex flex-col gap-2">
						{#each ['About', 'Projects', 'Skills', 'Experience', 'Education'] as section}
							<a 
								href="#{section.toLowerCase()}" 
								class="relative p-4 rounded-lg hover:bg-base-content/5 transition-all duration-300 group flex items-center gap-3"
								class:active-nav={activeSection === section.toLowerCase()}
								on:click|preventDefault={(e) => scrollToSection(section.toLowerCase(), e)}
							>
								<div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center {activeSection === section.toLowerCase() ? 'text-primary' : 'text-base-content/50'} group-hover:text-primary transition-colors duration-300">
									<iconify-icon icon={
										section === 'About' ? 'material-symbols:person' :
										section === 'Projects' ? 'material-symbols:code' :
										section === 'Skills' ? 'material-symbols:analytics' :
										section === 'Experience' ? 'material-symbols:work' :
										'material-symbols:school'
									} width="20"></iconify-icon>
								</div>
								<span class="text-base font-medium {activeSection === section.toLowerCase() ? 'text-primary' : 'text-base-content/70 group-hover:text-base-content'} transition-colors duration-300">
									{section}
								</span>
								{#if activeSection === section.toLowerCase()}
									<div class="absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300 -z-10"></div>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	.active-nav::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: var(--color-primary);
		opacity: 0;
		transition: all 0.3s ease;
	}

	.active-nav:hover::before {
		opacity: 1;
	}

	@keyframes nav-glow {
		0%, 100% { box-shadow: 0 0 5px var(--color-primary); }
		50% { box-shadow: 0 0 15px var(--color-primary); }
	}
</style> 