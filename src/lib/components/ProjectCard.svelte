<script lang="ts">
  import type { Project, Screenshots } from '$lib/types';
  import { screenshots } from '$lib/data';
  import { fly } from 'svelte/transition';

  export let project: Project;
  export let selectedImageIndex: number | null = null;
  export let onFeatureSelect: (index: number, event: MouseEvent) => void;
  export let onModalOpen: (project: Project) => void;

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
</script>

<div 
  class="group w-full max-w-7xl mx-auto"
  in:fly={{ y: 50, duration: 500, delay: 200 }}
>
  <div class="bg-black/50 rounded-2xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
    <div class="p-12">
      <div class="flex flex-col lg:flex-row gap-20">
        <!-- Left Column - Project Info -->
        <div class="lg:w-[45%]">
          <div class="flex flex-col gap-3 mb-4">
            <div class="relative group">
              <h3 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent relative z-10">
                {project.title}
              </h3>
              <div class="absolute -bottom-2 left-0 w-24 h-1 bg-primary/50 rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            {#if project.status}
              <span class="px-3 py-1 text-xs font-medium rounded-full w-fit {
                project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }">{project.status}</span>
            {/if}
          </div>
          
          <p class="text-white/70 mb-6 text-base leading-relaxed">{project.description}</p>
          
          {#if project.date}
            <p class="text-sm text-white/50 mb-6 flex items-center gap-2">
              <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="16"></iconify-icon>
              {project.date}
            </p>
          {/if}

          <div class="flex flex-wrap gap-3 mb-8">
            {#if project.liveUrl}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 group">
                <iconify-icon icon="material-symbols:link-rounded" width="18"></iconify-icon>
                Live Demo
              </a>
            {/if}
            {#if project.sourceUrl}
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 group">
                <iconify-icon icon="material-symbols:code-rounded" width="18"></iconify-icon>
                Source Code
              </a>
            {/if}
          </div>

          <div class="bg-white/5 rounded-xl p-4 border border-white/10">
            <div class="flex items-center gap-2 mb-4">
              <iconify-icon icon="material-symbols:stack" class="text-primary" width="20"></iconify-icon>
              <h4 class="text-base font-medium text-primary">Tech Stack</h4>
            </div>
            <div class="grid grid-cols-3 gap-3">
              {#each project.tech as tech}
                <div class="px-3 py-3 rounded-xl bg-black/50 backdrop-blur flex flex-col items-center gap-2 group hover:bg-primary/20 transition-all duration-300">
                  <div class="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                    <iconify-icon icon={getTechIcon(tech)} width="28" height="28"></iconify-icon>
                  </div>
                  <span class="text-xs font-medium text-white/70 group-hover:text-primary transition-colors duration-300 text-center leading-tight">{tech}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Right Column - Project Preview -->
        <div class="lg:w-[55%]">
          <div class="flex flex-col gap-6">
            <!-- Main Image Display -->
            <button 
              class="relative aspect-[16/9] rounded-xl overflow-hidden bg-black cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all duration-300 shadow-lg group"
              on:click={() => onModalOpen(project)}
              aria-label={`View ${project.title} screenshots`}
            >
              {#if screenshots[project.title]?.length > 0}
                <img 
                  src={screenshots[project.title][selectedImageIndex ?? 0]?.url ?? ''} 
                  alt={screenshots[project.title][selectedImageIndex ?? 0]?.caption ?? `Screenshot of ${project.title}`}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p class="text-sm font-medium">Click to view more screenshots</p>
                </div>
              {:else}
                <div class="w-full h-full flex items-center justify-center text-white/30">
                  <iconify-icon icon="material-symbols:image" width="48"></iconify-icon>
                </div>
              {/if}
            </button>

            <!-- Feature Buttons -->
            {#if project.features.length > 0}
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {#each project.features as feature, index}
                  <button 
                    class="group bg-black/50 backdrop-blur rounded-xl p-4 hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center {selectedImageIndex === index ? 'ring-2 ring-primary bg-primary/10' : 'hover:scale-[1.02]'}"
                    on:click={(e) => onFeatureSelect(index, e)}
                    aria-label={`View ${feature.name} feature`}
                  >
                    <div class="w-10 h-10 flex items-center justify-center text-primary mb-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <iconify-icon icon={feature.icon} width="22"></iconify-icon>
                    </div>
                    <span class="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">{feature.name}</span>
                    <p class="text-xs text-white/50 mt-1 line-clamp-2 group-hover:text-white/70 transition-colors duration-300">{feature.description}</p>
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