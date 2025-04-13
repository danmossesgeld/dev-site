<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let scrolled = false;
	let binaryNumbers: { value: string; x: number; y: number; speed: number; opacity: number }[] = [];

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});

		// Initialize binary numbers
		binaryNumbers = Array.from({ length: 50 }, () => ({
			value: Math.random() > 0.5 ? '1' : '0',
			x: Math.random() * 100,
			y: Math.random() * 100,
			speed: Math.random() * 0.5 + 0.2,
			opacity: Math.random() * 0.15 + 0.1
		}));

		// Animate binary numbers
		const animate = () => {
			binaryNumbers = binaryNumbers.map(num => {
				const newY = (num.y + num.speed) % 100;
				return {
					...num,
					y: newY,
					value: Math.random() > 0.95 ? (num.value === '1' ? '0' : '1') : num.value
				};
			});
			requestAnimationFrame(animate);
		};
		animate();
	});
</script>

<div class="min-h-screen flex flex-col relative bg-base-100">
	<!-- Background Container -->
	<div class="fixed inset-0 z-0">
		<!-- Base gradient -->
		<div class="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-100"></div>
		
		<!-- Animated grid -->
		<div class="absolute inset-0 bg-grid-animated opacity-[0.07]"></div>
		
		<!-- Continuous wave effect -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute inset-0 bg-wave-animated opacity-[0.15]"></div>
		</div>

		<!-- Floating binary numbers -->
		<div class="absolute inset-0 overflow-hidden">
			{#each binaryNumbers as num}
				<div class="absolute text-sm font-mono text-base-content/30 select-none" style="
					left: {num.x}%;
					top: {num.y}%;
					opacity: {num.opacity};
					transform: translateY(-50%);
				">
					{num.value}
				</div>
			{/each}
		</div>

		<!-- Subtle floating particles -->
		<div class="absolute inset-0 overflow-hidden">
			{#each Array(40) as _, i}
				<div class="absolute w-1 h-1 bg-base-content/20 rounded-full animate-float" style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation-delay: {i * 0.2}s;
					animation-duration: {Math.random() * 20 + 20}s;
				"></div>
			{/each}
		</div>

		<!-- Subtle gradient overlay -->
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-base-200/30 via-transparent to-transparent"></div>

		<!-- Noise texture -->
		<div class="absolute inset-0 opacity-[0.015] mix-blend-overlay">
			<svg class="w-full h-full">
				<filter id="noise">
					<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)" />
			</svg>
		</div>
	</div>

	<main class="flex-grow relative z-10">
		<slot />
	</main>

	<footer class="footer footer-center p-4 bg-base-200/80 backdrop-blur-md text-base-content relative z-10">
		<div class="container mx-auto">
			<p class="flex items-center gap-2 text-base-content/70">
				<iconify-icon icon="material-symbols:copyright-rounded"></iconify-icon>
				2024 Dan Oscar C. Mossesgeld - All rights reserved
			</p>
		</div>
	</footer>
</div>

<style>
	.bg-grid-animated {
		background-image: 
			linear-gradient(to right, rgba(var(--base-content), 0.03) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(var(--base-content), 0.03) 1px, transparent 1px);
		background-size: 40px 40px;
		animation: grid-move 30s linear infinite;
	}

	.bg-wave-animated {
		background-image: 
			radial-gradient(circle at 50% 50%, rgba(var(--base-content), 0.1) 0%, transparent 50%);
		background-size: 200% 200%;
		animation: wave 20s ease-in-out infinite;
	}

	@keyframes grid-move {
		0% { background-position: 0 0; }
		100% { background-position: 40px 40px; }
	}

	@keyframes wave {
		0% { background-position: 0% 0%; }
		50% { background-position: 100% 100%; }
		100% { background-position: 0% 0%; }
	}

	@keyframes float {
		0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
		50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.2; }
		100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
	}

	.animate-float {
		animation: float 20s ease-in-out infinite;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin-right: 0 !important;
		background-color: hsl(var(--base-100));
	}
</style>
