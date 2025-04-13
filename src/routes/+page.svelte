<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { Project, Screenshots } from '$lib/types';
  import { 
    contactInfo, 
    professionalSummary, 
    experiences, 
    projects, 
    techStack, 
    screenshots 
  } from '$lib/data';
  import Navbar from '$lib/components/Navbar.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // Helper function for tech icons
  function getTechIcon(tech: string): string {
    const techLower = tech.toLowerCase();
    if (techLower.includes('svelte')) return 'logos:svelte-icon';
    if (techLower.includes('typescript')) return 'logos:typescript-icon';
    if (techLower.includes('firestore') || techLower.includes('firebase')) return 'logos:firebase';
    if (techLower.includes('tailwind')) return 'logos:tailwindcss-icon';
    if (techLower.includes('daisyui')) return 'logos:daisyui';
    if (techLower.includes('.net')) return 'logos:dotnet';
    if (techLower.includes('c#')) return 'logos:c-sharp';
    if (techLower.includes('mssql')) return 'material-symbols:database';
    if (techLower.includes('crystal')) return 'material-symbols:analytics-rounded';
    if (techLower.includes('javascript')) return 'logos:javascript';
    if (techLower.includes('quickbooks')) return 'material-symbols:book';
    if (techLower.includes('rest')) return 'logos:swagger';
    return 'material-symbols:code';
  }

  // State management
  let activeSection = 'about';
  let typedText = '';
  const fullText = 'Fullstack Web & Desktop Developer';
  let cursorVisible = true;
  let selectedProject: Project | null = null;
  let showModal = false;
  let selectedImageIndex: number | null = null;
  let projectsContainer: HTMLElement;
  let activeProjectIndex = 0;

  // Modal handlers
  function openModal(project: Project): void {
    selectedProject = project;
    showModal = true;
    selectedImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeModal(): void {
    showModal = false;
    selectedProject = null;
    selectedImageIndex = null;
    document.body.style.overflow = 'auto';
  }

  // Feature selection handler
  function selectFeature(index: number, event: MouseEvent): void {
    event.stopPropagation(); // Prevent modal from closing
    selectedImageIndex = index;
  }

  // Handle keyboard events for modal
  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && showModal) {
      closeModal();
    }
  }

  function handleScroll() {
    if (projectsContainer) {
      const scrollLeft = projectsContainer.scrollLeft;
      const containerWidth = projectsContainer.clientWidth;
      activeProjectIndex = Math.round(scrollLeft / containerWidth);
    }
  }

  // Intersection Observer setup
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Typing animation
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        typedText += fullText[i];
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Cursor blink
    setInterval(() => {
      cursorVisible = !cursorVisible;
    }, 500);

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeydown);

    return () => {
      observer.disconnect();
      clearInterval(typeInterval);
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<Navbar {activeSection} />

<main class="pt-16 bg-black text-white">
  <!-- Hero Section -->
  <section id="about" class="min-h-screen relative flex items-center overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
    <div class="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 py-20 relative">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="flex-1 text-center lg:text-left" in:fade={{ duration: 1000, delay: 200 }}>
            <div class="mb-8">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span class="text-primary">Dan Oscar</span><br/>
                C. Mossesgeld
              </h1>
              <p class="text-2xl md:text-3xl text-white/70 mb-6">
                {typedText}{#if cursorVisible}<span class="text-primary">|</span>{/if}
              </p>
            </div>
            <p class="text-lg mb-8 text-white/70 bg-white/5 p-6 rounded-xl border border-white/10 max-w-2xl mx-auto lg:mx-0">
              {professionalSummary}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="mailto:{contactInfo.email}" class="btn btn-primary btn-lg group">
                <span class="flex items-center gap-2">
                  <iconify-icon icon="material-symbols:mail-rounded" width="24"></iconify-icon>
                  Contact Me
                </span>
              </a>
              <a href="#projects" class="btn btn-outline btn-lg text-white hover:text-black group">
                <span class="flex items-center gap-2">
                  <iconify-icon icon="material-symbols:code-rounded" width="24"></iconify-icon>
                  View Projects
                </span>
              </a>
            </div>
          </div>
          <div class="w-48 md:w-64 lg:w-80" in:fade={{ duration: 1000 }}>
            <div class="aspect-square rounded-2xl bg-white/5 p-4 border border-white/10 relative group">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/icons/profilepic.png" 
                alt="Profile picture of Dan Oscar C. Mossesgeld" 
                class="rounded-xl object-cover w-full h-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-32 bg-white/5 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Featured <span class="text-primary">Projects</span>
          </h2>
          <p class="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my most recent and impactful work, demonstrating my expertise in full-stack development and modern web technologies.
          </p>
        </div>
        
        <div class="relative">
          <!-- Breadcrumb Navigation -->
          <div class="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
            {#each projects as project, i}
              <button 
                class="flex items-center gap-2 group relative"
                on:click={() => {
                  const container = document.querySelector('.projects-container');
                  if (container) {
                    container.scrollTo({
                      left: i * container.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Go to ${project.title}`}
              >
                <div class="flex flex-col items-center gap-1">
                  <div class="w-3 h-3 rounded-full bg-white/20 group-hover:bg-primary transition-all duration-300 {activeProjectIndex === i ? 'bg-primary scale-150 ring-4 ring-primary/20' : ''}"></div>
                  <span class="text-sm text-white/50 group-hover:text-white transition-colors duration-300 {activeProjectIndex === i ? 'text-white font-medium' : ''} whitespace-nowrap">
                    {project.title}
                  </span>
                </div>
                {#if i < projects.length - 1}
                  <div class="w-8 h-px bg-white/20 group-hover:bg-primary/50 transition-colors duration-300"></div>
                {/if}
              </button>
            {/each}
          </div>

          <!-- Scroll buttons -->
          <button 
            class="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/20 transition-all duration-300 z-10 backdrop-blur-sm -translate-x-8"
            on:click={() => {
              const container = document.querySelector('.projects-container');
              if (container) {
                container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll projects left"
          >
            <iconify-icon icon="material-symbols:chevron-left" width="32"></iconify-icon>
          </button>
          
          <button 
            class="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-primary/20 transition-all duration-300 z-10 backdrop-blur-sm translate-x-8"
            on:click={() => {
              const container = document.querySelector('.projects-container');
              if (container) {
                container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
              }
            }}
            aria-label="Scroll projects right"
          >
            <iconify-icon icon="material-symbols:chevron-right" width="32"></iconify-icon>
          </button>

          <!-- Projects container -->
          <div 
            class="projects-container flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16"
            bind:this={projectsContainer}
            on:scroll={handleScroll}
          >
            {#each projects as project, i}
              <div class="flex-none w-[75vw] md:w-[55vw] lg:w-[45vw] snap-center px-8 {activeProjectIndex === i ? 'scale-100' : 'scale-95 opacity-70'} transition-all duration-500">
                <ProjectCard 
                  {project}
                  {selectedImageIndex}
                  onFeatureSelect={selectFeature}
                  onModalOpen={openModal}
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshot Modal -->
  {#if showModal}
    <div 
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
      role="dialog"
      aria-modal="true"
      aria-label="Project Screenshot Modal"
    >
      <div class="relative w-full max-w-6xl h-[80vh]">
        <button 
          class="absolute -top-12 right-0 text-white/70 hover:text-white"
          on:click={closeModal}
          aria-label="Close modal"
        >
          <iconify-icon icon="material-symbols:close" width="24"></iconify-icon>
        </button>
        {#if selectedProject && screenshots[selectedProject.title]?.length > 0}
          <div class="relative h-full rounded-lg overflow-hidden bg-black">
            <img 
              src={screenshots[selectedProject.title][selectedImageIndex ?? 0]?.url ?? ''} 
              alt={screenshots[selectedProject.title][selectedImageIndex ?? 0]?.caption ?? `Screenshot of ${selectedProject.title}`}
              class="w-full h-full object-contain"
            />
            {#if selectedProject.features.length > 0}
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <iconify-icon icon={selectedProject.features.find(f => f.imageIndex === selectedImageIndex)?.icon ?? selectedProject.features[0].icon} width="24"></iconify-icon>
                  </div>
                  <div>
                    <h3 class="text-white font-medium">{selectedProject.features.find(f => f.imageIndex === selectedImageIndex)?.name ?? selectedProject.features[0].name}</h3>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Skills Section -->
  <section id="skills" class="py-32">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-16 text-center">
          Technical <span class="text-primary">Expertise</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each techStack.slice(0, 4) as category, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 class="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div class="grid grid-cols-2 gap-4">
                {#each category.skills as skill}
                  <div class="flex items-center gap-3 group">
                    <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="24"></iconify-icon>
                    </div>
                    <span class="text-base text-white/70 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <h3 class="text-3xl font-bold mt-20 mb-12 text-center">
          Additional <span class="text-primary">Specializations</span>
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          {#each techStack.slice(4) as category, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 class="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div class="grid grid-cols-2 gap-4">
                {#each category.skills as skill}
                  <div class="flex items-center gap-3 group">
                    <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="24"></iconify-icon>
                    </div>
                    <span class="text-base text-white/70 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="py-32 bg-white/5">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-16 text-center">
          Professional <span class="text-primary">Experience</span>
        </h2>
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-transparent"></div>
          
          <div class="space-y-16">
            {#each experiences as experience, i}
              <div 
                class="relative group"
                in:fly={{ y: 50, duration: 500, delay: i * 200 }}
              >
                <!-- Timeline dot -->
                <div class="absolute left-3 md:left-[calc(50%-0.5rem)] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-8 transition-all duration-300"></div>
                
                <div class="ml-8 md:ml-0 md:flex md:justify-between md:items-start gap-8">
                  <!-- Left side (dates) for desktop -->
                  <div class="hidden md:block w-1/2 text-right pr-8">
                    <p class="text-sm text-white/50">{experience.period}</p>
                  </div>
                  
                  <!-- Content card -->
                  <div class="md:w-1/2 md:pl-8">
                    <div class="bg-black/50 rounded-xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-[1.02]">
                      <div class="flex flex-col gap-4">
                        <div>
                          <h3 class="text-2xl font-bold text-primary">{experience.title}</h3>
                          <p class="text-white/70">{experience.company}</p>
                        </div>
                        <!-- Dates for mobile -->
                        <p class="text-sm text-white/50 md:hidden">{experience.period}</p>
                        <p class="text-white/70 leading-relaxed">{experience.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-32">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">
          Get in <span class="text-primary">Touch</span>
        </h2>
        <p class="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <a href="mailto:{contactInfo.email}" class="btn btn-primary btn-lg group">
          <span class="flex items-center gap-2">
            <iconify-icon icon="material-symbols:mail-rounded" width="24"></iconify-icon>
            Contact Me
          </span>
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 2rem 2rem;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  section {
    scroll-margin-top: 4rem;
  }

  :global(body) {
    margin-right: 0 !important;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .projects-container {
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 8rem;
  }

  .projects-container > div {
    scroll-snap-align: center;
    scroll-snap-stop: always;
    flex: 0 0 auto;
    transform-origin: center;
  }

  @media (max-width: 768px) {
    .projects-container {
      padding: 0 4rem;
    }
  }
</style>
