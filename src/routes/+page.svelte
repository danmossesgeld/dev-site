<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { Project, Screenshots } from '$lib/types';
  import { 
    contactInfo, 
    professionalSummary, 
    experiences, 
    education, 
    projects, 
    techStack, 
    screenshots 
  } from '$lib/data';
  import Navbar from '$lib/components/Navbar.svelte';

  let activeSection = 'about';
  let typedText = '';
  const fullText = 'Fullstack Web & Desktop Developer';
  let cursorVisible = true;

  let selectedProject: Project | null = null;
  let showModal = false;
  let selectedImageIndex: number | null = null;

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

    return () => {
      observer.disconnect();
      clearInterval(typeInterval);
    };
  });
</script>

<Navbar {activeSection} />

<main class="pt-16 bg-black text-white">
  <!-- Hero Section -->
  <section id="about" class="min-h-[80vh] relative flex items-center">
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="flex-1 text-center md:text-left" in:fade={{ duration: 1000, delay: 200 }}>
            <div class="mb-6">
              <h1 class="text-4xl md:text-5xl font-bold mb-3">
                <span class="text-primary">Dan Oscar</span><br/>
                C. Mossesgeld
              </h1>
              <p class="text-xl text-white/70 mb-2">{typedText}{#if cursorVisible}<span class="text-primary">|</span>{/if}</p>
            </div>
            <p class="text-base mb-6 text-white/70 bg-white/5 p-4 rounded-lg border border-white/10">
              Innovative Full Stack Developer specializing in modern web applications with SvelteKit, TypeScript, and Firebase. 
              Experienced in building scalable enterprise solutions, from real-time monitoring systems to cloud-based POS applications. 
              Passionate about creating efficient, user-centric applications with clean, maintainable code.
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <a href="mailto:{contactInfo.email}" class="btn btn-sm btn-primary">
                Contact Me
              </a>
              <a href="#projects" class="btn btn-sm btn-outline text-white hover:text-black">
                View Projects
              </a>
            </div>
          </div>
          <div class="w-40 md:w-56" in:fade={{ duration: 1000 }}>
            <div class="aspect-square rounded-lg bg-white/5 p-3 border border-white/10">
              <img 
                src="/icons/profilepic.png" 
                alt="Profile" 
                class="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-20 bg-white/5">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Featured <span class="text-primary">Projects</span>
        </h2>
        <div class="space-y-16">
          {#each projects as project, i}
            <div 
              class="group"
              in:fly={{ y: 50, duration: 500, delay: i * 200 }}
            >
              <div class="bg-black rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-colors duration-300">
                <div class="p-6">
                  <div class="flex flex-col lg:flex-row gap-8">
                    <div class="lg:w-1/3">
                      <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">{project.title}</h3>
                        {#if project.status}
                          <span class="px-2 py-0.5 text-xs font-medium rounded-full {
                            project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                            project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }">{project.status}</span>
                        {/if}
                      </div>
                      <p class="text-white/70 mb-2 text-sm leading-relaxed">{project.description}</p>
                      {#if project.date}
                        <p class="text-xs text-white/50 mb-3 flex items-center gap-1">
                          <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="14"></iconify-icon>
                          {project.date}
                        </p>
                      {/if}
                      <div class="flex gap-2 mb-4">
                        {#if project.liveUrl}
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                             class="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300">
                            <iconify-icon icon="material-symbols:link-rounded" width="16"></iconify-icon>
                            Live Demo
                          </a>
                        {/if}
                        {#if project.sourceUrl}
                          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
                             class="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300">
                            <iconify-icon icon="material-symbols:code-rounded" width="16"></iconify-icon>
                            Source Code
                          </a>
                        {/if}
                      </div>
                      <div class="bg-white/5 rounded-lg p-3 mb-4">
                        <div class="flex items-center gap-2 mb-2">
                          <iconify-icon icon="material-symbols:stack" class="text-primary" width="18"></iconify-icon>
                          <h4 class="text-sm font-medium text-primary">Tech Stack</h4>
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                          {#each project.tech as tech}
                            <div class="px-2 py-2 rounded-lg bg-black/50 backdrop-blur flex flex-col items-center gap-1.5 group hover:bg-primary/20 transition-all duration-300">
                              <div class="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                                <iconify-icon icon={
                                  tech.toLowerCase().includes('svelte') ? 'logos:svelte-icon' :
                                  tech.toLowerCase().includes('typescript') ? 'logos:typescript-icon' :
                                  tech.toLowerCase().includes('firestore') ? 'logos:firebase' :
                                  tech.toLowerCase().includes('firebase') ? 'logos:firebase' :
                                  tech.toLowerCase().includes('tailwind') ? 'logos:tailwindcss-icon' :
                                  tech.toLowerCase().includes('daisyui') ? 'logos:daisyui' :
                                  tech.toLowerCase().includes('.net') ? 'logos:dotnet' :
                                  tech.toLowerCase().includes('c#') ? 'logos:c-sharp' :
                                  tech.toLowerCase().includes('mssql') ? 'material-symbols:database' :
                                  tech.toLowerCase().includes('crystal') ? 'material-symbols:analytics-rounded' :
                                  tech.toLowerCase().includes('javascript') ? 'logos:javascript' :
                                  tech.toLowerCase().includes('quickbooks') ? 'material-symbols:book' :
                                  tech.toLowerCase().includes('rest') ? 'logos:swagger' :
                                  'material-symbols:code'
                                } width="24" height="24"></iconify-icon>
                              </div>
                              <span class="text-[11px] font-medium text-white/70 group-hover:text-primary transition-colors duration-300 text-center leading-tight">{tech}</span>
                            </div>
                          {/each}
                        </div>
                      </div>
                    </div>
                    <div class="lg:w-2/3">
                      <div class="flex flex-col gap-4">
                        <!-- Main Image Display -->
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div class="relative aspect-[16/9] rounded-xl overflow-hidden bg-black cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all duration-300 shadow-lg"
                             on:click={() => openModal(project)}>
                          {#if screenshots[project.title]?.length > 0}
                            <img 
                              src={screenshots[project.title][selectedImageIndex !== null ? selectedImageIndex : 0].url} 
                              alt={screenshots[project.title][selectedImageIndex !== null ? selectedImageIndex : 0].caption}
                              class="w-full h-full object-contain"
                            />
                          {:else}
                            <div class="w-full h-full flex items-center justify-center text-white/30">
                              <iconify-icon icon="material-symbols:image" width="48"></iconify-icon>
                            </div>
                          {/if}
                        </div>

                        <!-- Feature Buttons -->
                        {#if project.features.length > 0}
                          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {#each project.features as feature}
                              <button 
                                class="group bg-black/50 backdrop-blur rounded-lg p-3 hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center {selectedImageIndex === feature.imageIndex ? 'ring-2 ring-primary bg-primary/10' : 'hover:scale-[1.02]'}"
                                on:click={() => selectedImageIndex = feature.imageIndex}
                              >
                                <div class="w-8 h-8 flex items-center justify-center text-primary mb-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                  <iconify-icon icon={feature.icon} width="20"></iconify-icon>
                                </div>
                                <span class="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">{feature.name}</span>
                                <p class="text-[10px] text-white/50 mt-1 line-clamp-2 group-hover:text-white/70 transition-colors duration-300">{feature.description}</p>
                              </button>
                            {/each}
                          </div>
                        {/if}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Screenshot Modal -->
  {#if showModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      on:click={closeModal}
      transition:fade={{ duration: 200 }}
    >
      <div class="relative w-full max-w-6xl h-[80vh]">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button 
          class="absolute -top-12 right-0 text-white/70 hover:text-white"
          on:click={closeModal}
        >
          <iconify-icon icon="material-symbols:close" width="24"></iconify-icon>
        </button>
        {#if selectedProject && screenshots[selectedProject.title]?.length > 0}
          <div class="relative h-full rounded-lg overflow-hidden bg-black">
            <img 
              src={screenshots[selectedProject.title][selectedImageIndex ?? 0].url} 
              alt={screenshots[selectedProject.title][selectedImageIndex ?? 0].caption}
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
  <section id="skills" class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Technical <span class="text-primary">Expertise</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each techStack.slice(0, 4) as category, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-white/5 rounded-lg border border-white/10 p-4 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 class="text-lg font-bold mb-4 text-primary">{category.category}</h3>
              <div class="grid grid-cols-2 gap-3">
                {#each category.skills as skill}
                  <div class="flex items-center gap-2 group">
                    <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="20"></iconify-icon>
                    </div>
                    <span class="text-sm text-white/70 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <h3 class="text-2xl font-bold mt-12 mb-6 text-center">
          Additional <span class="text-primary">Specializations</span>
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          {#each techStack.slice(4) as category, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-white/5 rounded-lg border border-white/10 p-4 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 class="text-lg font-bold mb-4 text-primary">{category.category}</h3>
              <div class="grid grid-cols-2 gap-3">
                {#each category.skills as skill}
                  <div class="flex items-center gap-2 group">
                    <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="20"></iconify-icon>
                    </div>
                    <span class="text-sm text-white/70 group-hover:text-primary transition-colors duration-300">{skill.name}</span>
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
  <section id="experience" class="py-20 bg-white/5">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Professional <span class="text-primary">Experience</span>
        </h2>
        <div class="space-y-6">
          {#each experiences as exp, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-black rounded-lg border border-white/10 p-4"
            >
              <div class="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <h3 class="text-lg font-bold text-primary">{exp.title}</h3>
                <div class="flex-1 h-px bg-white/10 hidden md:block"></div>
                <p class="text-sm text-white/70">{exp.period}</p>
              </div>
              <p class="text-base font-medium mb-2 text-white">{exp.company}</p>
              <p class="text-sm text-white/70">{exp.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          <span class="text-primary">Education</span>
        </h2>
        <div class="space-y-6">
          {#each education as edu, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="bg-white/5 rounded-lg border border-white/10 p-4"
            >
              <h3 class="text-lg font-bold mb-2 text-primary">{edu.degree}</h3>
              <p class="text-base text-white">{edu.school}</p>
              <p class="text-sm text-white/70">{edu.period}</p>
            </div>
          {/each}
        </div>
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
