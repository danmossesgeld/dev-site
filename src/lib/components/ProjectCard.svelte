<script lang="ts">
  import type { Project } from '$lib/types';
  import type { Screenshots } from '$lib/types';
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';

  export let project: Project;
  export let screenshots: Screenshots;
  export let selectedImageIndex: number | null;
  export let currentFeatureIndex: number;
  export let onOpenModal: (project: Project) => void;

  let isHoveringFeatures = false;
  let intervalId: number;
  let fadeOut = false;

  // Function to cycle through features
  const cycleFeatures = () => {
    if (!isHoveringFeatures && project.features.length > 0) {
      fadeOut = true;
      setTimeout(() => {
        currentFeatureIndex = (currentFeatureIndex + 1) % project.features.length;
        selectedImageIndex = project.features[currentFeatureIndex].imageIndex;
        fadeOut = false;
      }, 300); // Half of the transition duration
    }
  };

  // Start auto-cycling on mount
  onMount(() => {
    intervalId = setInterval(cycleFeatures, 5000); // Cycle every 5 seconds
  });

  // Cleanup on destroy
  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });

  // Handle mouse enter/leave for features section
  const handleMouseEnter = () => {
    isHoveringFeatures = true;
  };

  const handleMouseLeave = () => {
    isHoveringFeatures = false;
  };
</script>

<div class="code-card bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/20 relative group">
  <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div class="code-highlight"></div>
  <div class="p-4 md:p-6 relative">
    <div class="flex flex-col lg:flex-row gap-4 md:gap-6">
      <!-- Left Column - Project Info -->
      <div class="lg:w-[30%] flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent animate-gradient-x">{project.title}</h3>
          {#if project.status}
            <span class="px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md {
              project.status === 'Live' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              project.status === 'Development' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            } shadow-sm">{project.status}</span>
          {/if}
        </div>
        <p class="text-sm text-white/90 leading-relaxed">{project.description}</p>
        {#if project.date}
          <p class="text-xs text-white/50 flex items-center gap-1.5 hover:text-white/70 transition-colors duration-300">
            <iconify-icon icon="material-symbols:calendar-month-outline-rounded" width="14" class="text-primary/70"></iconify-icon>
            {project.date}
          </p>
        {/if}
        <div class="flex gap-2">
          {#if project.liveUrl}
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300 group/btn hover:scale-105 shadow-sm hover:shadow-primary/20">
              <iconify-icon icon="material-symbols:link-rounded" class="group-hover/btn:scale-110 transition-transform duration-300" width="16"></iconify-icon>
              Live Demo
            </a>
          {/if}
          {#if project.sourceUrl}
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-all duration-300 group/btn hover:scale-105 shadow-sm">
              <iconify-icon icon="material-symbols:code-rounded" class="group-hover/btn:scale-110 transition-transform duration-300" width="16"></iconify-icon>
              Source Code
            </a>
          {/if}
        </div>
        <div class="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 border border-white/10 shadow-lg">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-md">
              <iconify-icon icon="material-symbols:stack" class="text-primary" width="16"></iconify-icon>
            </div>
            <h4 class="text-sm font-medium text-primary">Tech Stack</h4>
          </div>
          <div class="grid grid-cols-3 gap-2">
            {#each project.tech as tech}
              <div class="px-2 py-1.5 rounded-md bg-black/50 backdrop-blur-sm flex flex-col items-center gap-1.5 group/tech hover:bg-primary/10 transition-all duration-300 hover:scale-105 border border-white/5 hover:border-primary/20">
                <div class="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md group-hover/tech:bg-primary/10 transition-all duration-300">
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
                  } width="20" height="20" class="group-hover/tech:scale-110 transition-transform duration-300"></iconify-icon>
                </div>
                <span class="text-[10px] font-medium text-white/70 group-hover/tech:text-primary transition-colors duration-300 text-center leading-tight">{tech}</span>
              </div>
            {/each}
          </div>
        </div>

        {#if project.deployedOn && project.deployedOn.length > 0}
          <div class="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 border border-white/10 shadow-lg">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-md">
                <iconify-icon icon="material-symbols:deployed-code-rounded" class="text-primary" width="16"></iconify-icon>
              </div>
              <h4 class="text-sm font-medium text-primary">Currently Deployed</h4>
            </div>
            <div class="flex flex-col gap-2">
              {#each project.deployedOn as deployment}
                <div class="px-3 py-2 rounded-md bg-black/50 backdrop-blur-sm flex items-center gap-2 group/deploy hover:bg-primary/10 transition-all duration-300 border border-white/5 hover:border-primary/20">
                  <div class="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md group-hover/deploy:bg-primary/10 transition-all duration-300 overflow-hidden">
                    {#if deployment.icon.startsWith('/')}
                      <img src="{base}{deployment.icon}" alt={deployment.name} class="w-6 h-6 object-contain" />
                    {:else}
                      <iconify-icon icon={deployment.icon} width="16" height="16" class="text-white/70 group-hover/deploy:text-primary transition-colors duration-300"></iconify-icon>
                    {/if}
                  </div>
                  <span class="text-xs font-medium text-white/70 group-hover/deploy:text-white transition-colors duration-300">{deployment.name}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <!-- Right Column - Screenshots and Features -->
      <div class="lg:w-[70%]">
        <div class="flex flex-col gap-4">
          <!-- Main Image Display -->
          <div 
            class="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-black/60 to-black/40 cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all duration-300 shadow-xl group/img"
            on:click={() => onOpenModal(project)}
            on:keydown={(e) => e.key === 'Enter' && onOpenModal(project)}
            role="button"
            tabindex="0"
          >
            {#if screenshots[project.title]?.length > 0 && screenshots[project.title][selectedImageIndex ?? 0]?.url}
              <img 
                src="{base}{screenshots[project.title][selectedImageIndex ?? 0].url}" 
                alt={screenshots[project.title][selectedImageIndex ?? 0].caption ?? 'Project screenshot'}
                class="w-full h-full object-contain bg-black/80 group-hover/img:scale-[1.02] transition-transform duration-500 {fadeOut ? 'opacity-0' : 'opacity-100'} transition-opacity duration-600"
              />
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 transform translate-y-full group-hover/img:translate-y-0 transition-transform duration-500">
                <p class="text-sm text-white/90">{screenshots[project.title][selectedImageIndex ?? 0].caption}</p>
              </div>
            {:else}
              <div class="w-full h-full flex items-center justify-center text-white/30">
                <iconify-icon icon="material-symbols:image" width="40"></iconify-icon>
              </div>
            {/if}
          </div>

          <!-- Feature Buttons -->
          {#if project.features.length > 0}
            <div 
              class="grid grid-cols-2 sm:grid-cols-3 gap-2"
              on:mouseenter={handleMouseEnter}
              on:mouseleave={handleMouseLeave}
            >
              {#each project.features as feature, featureIndex}
                <button 
                  class="group/feat bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-md p-3 hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center border border-white/10 hover:border-primary/20 {selectedImageIndex === feature.imageIndex ? 'ring-2 ring-primary/30 bg-primary/5 border-primary/20' : 'hover:scale-[1.02]'}"
                  on:click={() => {
                    selectedImageIndex = feature.imageIndex;
                    currentFeatureIndex = featureIndex;
                  }}
                >
                  <div class="w-8 h-8 flex items-center justify-center text-white mb-2 bg-white/10 rounded-md group-hover/feat:bg-primary/10 group-hover/feat:scale-110 transition-all duration-300">
                    <iconify-icon icon={feature.icon} width="20" height="20" class="group-hover/feat:scale-110 transition-transform duration-300"></iconify-icon>
                  </div>
                  <span class="text-sm font-medium text-white/90 group-hover/feat:text-white transition-colors duration-300 mb-1">{feature.name}</span>
                  <p class="text-xs text-white/60 group-hover/feat:text-white/80 transition-colors duration-300 line-clamp-2">{feature.description}</p>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div> 