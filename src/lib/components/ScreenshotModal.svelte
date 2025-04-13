<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Screenshots, Project } from '$lib/types';

  export let show: boolean;
  export let project: Project;
  export let screenshots: Screenshots;
  export let selectedImageIndex: number;
  export let onClose: () => void;
  export let onNext: () => void;
  export let onPrev: () => void;
</script>

{#if show}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    on:click={onClose}
  >
    <div
      class="relative max-w-6xl w-full max-h-[90vh] bg-black/40 rounded-xl border border-white/10 overflow-hidden"
      on:click|stopPropagation
    >
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white transition-all duration-300"
        on:click={onClose}
      >
        <iconify-icon icon="material-symbols:close" width="24" height="24"></iconify-icon>
      </button>

      <!-- Navigation buttons -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white transition-all duration-300"
        on:click={onPrev}
      >
        <iconify-icon icon="material-symbols:chevron-left" width="24" height="24"></iconify-icon>
      </button>
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white transition-all duration-300"
        on:click={onNext}
      >
        <iconify-icon icon="material-symbols:chevron-right" width="24" height="24"></iconify-icon>
      </button>

      <!-- Image container -->
      <div class="relative w-full h-full">
        {#if screenshots[project.title]?.[selectedImageIndex]}
          <img
            src={screenshots[project.title][selectedImageIndex].url}
            alt={screenshots[project.title][selectedImageIndex].caption}
            class="w-full h-full object-contain"
          />
        {/if}
      </div>

      <!-- Thumbnails -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
        {#if screenshots[project.title]}
          {#each screenshots[project.title] as screenshot, i}
            <button
              class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 {i === selectedImageIndex ? 'border-primary' : 'border-transparent'}"
              on:click={() => selectedImageIndex = i}
            >
              <img
                src={screenshot.url}
                alt={screenshot.caption}
                class="w-full h-full object-cover"
              />
            </button>
          {/each}
        {/if}
      </div>
    </div>
  </div>
{/if} 