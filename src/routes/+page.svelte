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

  // Update activeProjectIndex when navigating
  function navigateToSlide(index: number): void {
    activeProjectIndex = (index + projects.length) % projects.length;
    const targetSlide = document.getElementById(`slide-${activeProjectIndex}`);
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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

<main class="pt-12 bg-black text-white">
  <!-- Hero Section -->
  <section id="about" class="min-h-screen flex items-center overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="flex-1 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="text-primary">Dan Oscar</span> C. Mossesgeld
            </h1>
            <p class="text-lg text-white/70 mb-4">{typedText}{#if cursorVisible}<span class="text-primary">|</span>{/if}</p>
            <p class="text-base text-white/70 bg-white/5 p-4 rounded border border-white/10 mb-4">{professionalSummary}</p>
            <div class="flex gap-4 justify-center lg:justify-start">
              <a href="mailto:{contactInfo.email}" class="btn btn-primary btn-sm">Contact Me</a>
              <a href="#projects" class="btn btn-outline btn-sm">View Projects</a>
            </div>
          </div>
          <div class="w-40 md:w-56">
            <div class="aspect-square rounded bg-white/5 p-2 border border-white/10">
              <img src="/icons/profilepic.png" alt="" class="rounded object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-16 bg-white/5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Featured <span class="text-primary">Projects</span></h2>
          <p class="text-base text-white/70">A showcase of my most recent work.</p>
        </div>
        <div class="carousel w-full">
          {#each projects as project, i}
            <div id={`slide-${i}`} class="carousel-item w-full flex justify-center">
              <ProjectCard {project} {selectedImageIndex} onFeatureSelect={selectFeature} onModalOpen={openModal} />
            </div>
          {/each}
        </div>
        <div class="flex justify-between mt-4">
          <button class="btn btn-circle btn-sm" on:click={() => navigateToSlide(activeProjectIndex - 1)}>❮</button>
          <button class="btn btn-circle btn-sm" on:click={() => navigateToSlide(activeProjectIndex + 1)}>❯</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshot Modal -->
  {#if showModal}
    <div 
      role="button" 
      tabindex="0" 
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      on:click={closeModal} 
      on:keydown={(e) => e.key === 'Enter' && closeModal()} 
      transition:fade={{ duration: 200 }}
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
  <section id="skills" class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Technical <span class="text-primary">Expertise</span></h2>
        <div class="grid md:grid-cols-2 gap-4">
          {#each techStack as category}
            <div class="bg-white/5 rounded border border-white/10 p-4">
              <h3 class="text-lg font-bold mb-4 text-primary">{category.category}</h3>
              <div class="grid grid-cols-2 gap-2">
                {#each category.skills as skill}
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 flex items-center justify-center rounded bg-primary/10 text-primary">
                      <iconify-icon icon={skill.icon} width="16"></iconify-icon>
                    </div>
                    <span class="text-sm text-white/70">{skill.name}</span>
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
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
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
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Get in <span class="text-primary">Touch</span></h2>
        <p class="text-base text-white/70 mb-4">I'm open to discussing new projects or opportunities.</p>
        <a href="mailto:{contactInfo.email}" class="btn btn-primary btn-sm">Contact Me</a>
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
</style>
