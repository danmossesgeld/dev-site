<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { Project, Screenshots } from '$lib/types';
  import { projects, screenshots } from '$lib/data';
  import ProjectCard from './ProjectCard.svelte';

  let selectedProject: Project | null = null;
  let showModal = false;
  let selectedImageIndex: number | null = null;
  let currentProjectIndex = 0;
  let isTransitioning = false;
  let currentFeatureIndex = 0;

  // Sort projects to put eCommerce first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.title.toLowerCase().includes('ecommerce')) return -1;
    if (b.title.toLowerCase().includes('ecommerce')) return 1;
    return 0;
  });

  function nextProject() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentProjectIndex = (currentProjectIndex + 1) % sortedProjects.length;
    setTimeout(() => isTransitioning = false, 500);
  }

  function prevProject() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentProjectIndex = (currentProjectIndex - 1 + sortedProjects.length) % sortedProjects.length;
    setTimeout(() => isTransitioning = false, 500);
  }

  function goToProject(index: number) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentProjectIndex = index;
    setTimeout(() => isTransitioning = false, 500);
  }

  function openModal(project: Project) {
    selectedProject = project;
    showModal = true;
    selectedImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showModal = false;
    selectedProject = null;
    selectedImageIndex = null;
    document.body.style.overflow = 'auto';
  }

  function cycleFeatures(project: Project) {
    if (!project.features.length) return;
    currentFeatureIndex = (currentFeatureIndex + 1) % project.features.length;
    selectedImageIndex = project.features[currentFeatureIndex].imageIndex;
  }
</script>

<section id="projects" class="relative py-24">
  <div class="binary-bg opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--color-primary-rgb),0.3),transparent_70%)] pointer-events-none animate-pulse"></div>
  <div class="container mx-auto px-4 relative">
    <div class="max-w-[120rem] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold mb-4">
          Featured <span class="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">Projects</span>
        </h2>
        <p class="text-xl text-white/70 max-w-3xl mx-auto mb-12">
          A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
        </p>

        <!-- Enhanced Breadcrumb Navigation -->
        <div class="flex flex-col items-center gap-4 mb-16">
          <!-- Progress Dots and Navigation -->
          <div class="flex items-center gap-4">
            <!-- Left Arrow -->
            <button 
              class="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-primary/30 text-white/80 hover:text-primary transition-all duration-300"
              on:click={prevProject}
              aria-label="Previous project"
            >
              <iconify-icon icon="material-symbols:arrow-back-ios-new" width="24"></iconify-icon>
            </button>

            <!-- Progress Dots -->
            <div class="flex items-center gap-4 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              {#each sortedProjects as project, i}
                <button 
                  class="group flex items-center gap-2 transition-all duration-300"
                  on:click={() => goToProject(i)}
                  aria-label={`Go to ${project.title}`}
                >
                  <div class="w-3 h-3 rounded-full transition-all duration-300 {
                    i === currentProjectIndex ? 'bg-primary scale-150' : 'bg-white/30 group-hover:bg-white/50'
                  }"></div>
                  <span class="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 {
                    i === currentProjectIndex ? 'text-primary font-medium' : ''
                  }">{project.title}</span>
                </button>
                {#if i < sortedProjects.length - 1}
                  <div class="w-8 h-px bg-white/20"></div>
                {/if}
              {/each}
            </div>

            <!-- Right Arrow -->
            <button 
              class="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-primary/30 text-white/80 hover:text-primary transition-all duration-300"
              on:click={nextProject}
              aria-label="Next project"
            >
              <iconify-icon icon="material-symbols:arrow-forward-ios" width="24"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <!-- Carousel Items -->
        <div class="relative min-h-[1000px] w-full max-w-[120rem] mx-auto">
          {#each sortedProjects as project, i}
            <div 
              class="absolute inset-0 transition-all duration-500 {i === currentProjectIndex ? 'opacity-100 translate-x-0' : i < currentProjectIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}"
              in:fly={{ y: 50, duration: 500, delay: i * 200 }}
            >
              <div class="h-full w-full flex items-start justify-center">
                <div class="w-full px-4 scale-[0.9] origin-top">
                  <ProjectCard 
                    {project}
                    {screenshots}
                    {selectedImageIndex}
                    {currentFeatureIndex}
                    onOpenModal={openModal}
                  />
                </div>
              </div>
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
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    transition:fade={{ duration: 200 }}
  >
    <button
      class="absolute inset-0 w-full h-full bg-black/90"
      on:click={closeModal}
      on:keydown={(e) => e.key === 'Escape' && closeModal()}
      aria-label="Close modal"
    ></button>
    <div class="relative w-full max-w-6xl h-[80vh] z-10">
      {#if selectedProject && screenshots[selectedProject.title]?.length > 0 && screenshots[selectedProject.title][selectedImageIndex ?? 0]?.url}
        <div class="relative h-full rounded-lg overflow-hidden bg-black">
          <img 
            src={screenshots[selectedProject.title][selectedImageIndex ?? 0].url} 
            alt={screenshots[selectedProject.title][selectedImageIndex ?? 0].caption ?? 'Project screenshot'}
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
      {:else}
        <div class="w-full h-full flex items-center justify-center text-white/30">
          <iconify-icon icon="material-symbols:image" width="48"></iconify-icon>
        </div>
      {/if}
    </div>
  </div>
{/if} 