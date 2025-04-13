<script lang="ts">
  import { contactInfo } from '$lib/data';
  import { onMount } from 'svelte';

  let isVisible = false;
  onMount(() => {
    isVisible = true;
  });
</script>

<section id="about" class="relative min-h-screen flex items-center justify-center py-16">
  <!-- Content Container -->
  <div class="container mx-auto px-4 relative">
    <div class="max-w-[120rem] mx-auto">
      <!-- Profile Section -->
      <div class="flex flex-col items-center text-center gap-8">
        <!-- Profile Image -->
        <div class="relative group" class:opacity-0={!isVisible} class:animate-fade-in={isVisible}>
          <div class="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
          <div class="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition duration-500">
            <img 
              src="/icons/profilepic.png" 
              alt="Dan Mossesgeld"
              class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <!-- Floating Icons -->
          <div class="absolute -inset-6 pointer-events-none">
            {#each Array(6) as _, i}
              <div 
                class="absolute w-6 h-6 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary"
                style="
                  top: {50 + Math.sin(i * (Math.PI / 3)) * 80}%;
                  left: {50 + Math.cos(i * (Math.PI / 3)) * 80}%;
                  animation: float 3s infinite;
                  animation-delay: {i * 0.5}s;
                "
              >
                <iconify-icon icon={[
                  'material-symbols:code',
                  'material-symbols:database',
                  'material-symbols:cloud',
                  'material-symbols:devices',
                  'material-symbols:brush',
                  'material-symbols:analytics'
                ][i]} width="16"></iconify-icon>
              </div>
            {/each}
          </div>
        </div>

        <!-- Name and Title -->
        <div class="space-y-4" class:opacity-0={!isVisible} class:animate-slide-up={isVisible} style="animation-delay: 0.2s">
          <h1 class="text-5xl md:text-6xl font-bold tracking-tight">
            <span class="text-white">DAN</span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">MOSSESGELD</span>
          </h1>
          <h2 class="text-xl md:text-2xl text-white/70 font-light tracking-wide">
            Fullstack Web & Desktop Developer<span class="animate-pulse">|</span>
          </h2>
        </div>

        <!-- Social Links -->
        <div class="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto" class:opacity-0={!isVisible} class:animate-slide-up={isVisible} style="animation-delay: 0.4s">
          <a 
            href="mailto:{contactInfo.email}" 
            class="group flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-primary/10 backdrop-blur rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div class="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-primary group-hover:scale-110 transition duration-300">
              <iconify-icon icon="material-symbols:mail-rounded" width="20"></iconify-icon>
            </div>
            <div class="flex flex-col items-start">
              <span class="text-xs text-white/50">Gmail</span>
              <span class="text-sm text-white group-hover:text-primary transition-colors">{contactInfo.email}</span>
            </div>
          </a>
          <a 
            href="https://github.com/danmossesgeld" 
            target="_blank"
            class="group flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-primary/10 backdrop-blur rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div class="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-primary group-hover:scale-110 transition duration-300">
              <iconify-icon icon="mdi:github" width="20"></iconify-icon>
            </div>
            <div class="flex flex-col items-start">
              <span class="text-xs text-white/50">GitHub</span>
              <span class="text-sm text-white group-hover:text-primary transition-colors">github.com/danmossesgeld</span>
            </div>
          </a>
          <a 
            href="https://facebook.com/danmossesgeld" 
            target="_blank"
            class="group flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-primary/10 backdrop-blur rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <div class="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-primary group-hover:scale-110 transition duration-300">
              <iconify-icon icon="ic:baseline-facebook" width="20"></iconify-icon>
            </div>
            <div class="flex flex-col items-start">
              <span class="text-xs text-white/50">Facebook</span>
              <span class="text-sm text-white group-hover:text-primary transition-colors">facebook.com/danmossesgeld</span>
            </div>
          </a>
        </div>

        <!-- Bio Text -->
        <p class="max-w-2xl text-base text-white/70 leading-relaxed" class:opacity-0={!isVisible} class:animate-slide-up={isVisible} style="animation-delay: 0.6s">
          Full Stack Developer with expertise in modern web technologies and enterprise solutions. 
          Proven track record in developing scalable applications, leading technical teams, 
          and implementing efficient development workflows.
        </p>

        <!-- CTA Button -->
        <a 
          href="#projects"
          class="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-primary/20" 
          class:opacity-0={!isVisible} 
          class:animate-slide-up={isVisible} 
          style="animation-delay: 0.8s"
        >
          <span class="relative z-10 text-sm font-medium">View Projects</span>
          <div class="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            <iconify-icon icon="material-symbols:arrow-forward-rounded" width="20"></iconify-icon>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }

  /* Enhanced gradient animation */
  .animate-gradient-x {
    background-size: 200% auto;
    animation: gradient 8s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
</style> 