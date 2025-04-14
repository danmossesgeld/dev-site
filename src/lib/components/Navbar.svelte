<script lang="ts">
	import { contactInfo } from '$lib/data';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let activeSection = 'about';
	let isMobileMenuOpen = false;
	let scrolled = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	});

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
					{#each ['About', 'Projects', 'Skills', 'Experience'] as section}
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

			<!-- Contact Icons and Resume -->
			<div class="flex items-center gap-2">
				<a 
					href="mailto:{contactInfo.email}" 
					class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
					title="Email me"
				>
					<div class="group-hover:scale-110 transition-transform duration-300">
						<iconify-icon icon="material-symbols:mail-rounded" width="20"></iconify-icon>
					</div>
				</a>
				<a 
					href="https://github.com/danmossesgeld" 
					target="_blank" 
					class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
					title="GitHub Profile"
				>
					<div class="group-hover:scale-110 transition-transform duration-300">
						<iconify-icon icon="mdi:github" width="20"></iconify-icon>
					</div>
				</a>
				<a 
					href="https://facebook.com/danmossesgeld" 
					target="_blank" 
					class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
					title="Facebook Profile"
				>
					<div class="group-hover:scale-110 transition-transform duration-300">
						<iconify-icon icon="ic:baseline-facebook" width="20"></iconify-icon>
					</div>
				</a>
				<div class="w-px h-6 bg-base-content/10 mx-1"></div>
				<a 
					href="{base}/RESUME - Dan Mossesgeld.pdf" 
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20 hover:border-primary/30"
				>
					<iconify-icon 
						icon="material-symbols:download-rounded" 
						class="group-hover:scale-110 transition-transform duration-300" 
						width="18"
					></iconify-icon>
					<span class="text-sm font-medium">Resume</span>
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
						{#each ['About', 'Projects', 'Skills', 'Experience'] as section}
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
										'material-symbols:work'
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
						
						<!-- Mobile Social Links -->
						<div class="mt-4 flex items-center justify-center gap-4 p-4 rounded-lg bg-base-content/5">
							<a 
								href="mailto:{contactInfo.email}" 
								class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
								title="Email me"
							>
								<div class="group-hover:scale-110 transition-transform duration-300">
									<iconify-icon icon="material-symbols:mail-rounded" width="24"></iconify-icon>
								</div>
							</a>
							<a 
								href="https://github.com/danmossesgeld" 
								target="_blank" 
								class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
								title="GitHub Profile"
							>
								<div class="group-hover:scale-110 transition-transform duration-300">
									<iconify-icon icon="mdi:github" width="24"></iconify-icon>
								</div>
							</a>
							<a 
								href="https://facebook.com/danmossesgeld" 
								target="_blank" 
								class="group p-2 rounded-lg hover:bg-base-content/5 text-base-content/70 hover:text-primary transition-all duration-300"
								title="Facebook Profile"
							>
								<div class="group-hover:scale-110 transition-transform duration-300">
									<iconify-icon icon="ic:baseline-facebook" width="24"></iconify-icon>
								</div>
							</a>
						</div>
						
						<!-- Mobile Resume Download -->
						<a 
							href="{base}/RESUME - Dan Mossesgeld.pdf" 
							target="_blank"
							rel="noopener noreferrer"
							class="mt-2 group flex items-center justify-center gap-2 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
						>
							<iconify-icon 
								icon="material-symbols:download-rounded" 
								class="group-hover:scale-110 transition-transform duration-300" 
								width="24"
							></iconify-icon>
							<span class="text-base font-medium">Download Resume</span>
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	:global(.active-nav) {
		color: rgb(var(--color-primary-rgb));
	}
</style> 