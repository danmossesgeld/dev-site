<script lang="ts">
	import { contactInfo } from '$lib/data';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

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

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'} border-b border-primary/20">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a 
				href="#about" 
				class="flex items-center gap-2 font-mono font-bold text-primary" 
				on:click|preventDefault={(e) => scrollToSection('about', e)}
			>
				<iconify-icon icon="material-symbols:code-rounded" width="24"></iconify-icon>
				<span class="hidden md:inline">Dan Oscar C. Mossesgeld</span>
				<span class="md:hidden">DC</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center justify-center flex-1">
				<div class="flex space-x-8">
					{#each ['About', 'Projects', 'Skills', 'Experience', 'Education'] as section}
						<a 
							href="#{section.toLowerCase()}" 
							class="hover:text-primary transition-colors {activeSection === section.toLowerCase() ? 'text-primary' : 'text-white/70'}"
							on:click|preventDefault={(e) => scrollToSection(section.toLowerCase(), e)}
						>
							{section}
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact Icons -->
			<div class="flex gap-4">
				<a href="mailto:{contactInfo.email}" class="btn btn-sm btn-ghost text-white/70 hover:text-primary">
					<iconify-icon icon="material-symbols:mail-rounded" width="20"></iconify-icon>
				</a>
				<a href="https://github.com/yourusername" target="_blank" class="btn btn-sm btn-ghost text-white/70 hover:text-primary">
					<iconify-icon icon="mdi:github" width="20"></iconify-icon>
				</a>
				<!-- Mobile Menu Button -->
				<button 
					class="md:hidden btn btn-sm btn-ghost text-white/70 hover:text-primary"
					on:click={toggleMobileMenu}
				>
					<iconify-icon icon={isMobileMenuOpen ? "material-symbols:close" : "material-symbols:menu"} width="20"></iconify-icon>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div 
				class="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-primary/20"
				in:fade={{ duration: 200 }}
			>
				<div class="container mx-auto px-4 py-4">
					<div class="flex flex-col space-y-4">
						{#each ['About', 'Projects', 'Skills', 'Experience', 'Education'] as section}
							<a 
								href="#{section.toLowerCase()}" 
								class="hover:text-primary transition-colors {activeSection === section.toLowerCase() ? 'text-primary' : 'text-white/70'}"
								on:click|preventDefault={(e) => scrollToSection(section.toLowerCase(), e)}
							>
								{section}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav> 