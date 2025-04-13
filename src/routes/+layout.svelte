<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrolled = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	});
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-base-100 to-base-200 px-4">
	<!-- Animated background elements -->
	<div class="fixed inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 to-transparent"></div>
	</div>

	<main class="flex-grow relative z-10">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-100/80 backdrop-blur-md text-base-content relative z-10">
		<div class="container mx-auto">
			<p class="flex items-center gap-2">
				<iconify-icon icon="material-symbols:copyright-rounded"></iconify-icon>
				2024 Dan Oscar C. Mossesgeld - All rights reserved
			</p>
		</div>
	</footer>
</div>

<style>
	.bg-grid-pattern {
		background-image: linear-gradient(to right, currentColor 1px, transparent 1px),
			linear-gradient(to bottom, currentColor 1px, transparent 1px);
		background-size: 30px 30px;
	}
</style>
