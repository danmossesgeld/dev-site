<script lang="ts">
  import { fly } from 'svelte/transition';
  import { techStack } from '$lib/data';
</script>

<section id="skills" class="py-24 relative">
  <div class="binary-bg opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--color-primary-rgb),0.3),transparent_70%)] pointer-events-none animate-glow"></div>
  <div class="container mx-auto px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 class="text-4xl font-bold mb-4">
          Core <span class="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">Stack</span>
        </h2>
        <p class="text-lg text-white/60 max-w-2xl mx-auto">
          A comprehensive overview of my development stack and technical proficiencies in modern software engineering.
        </p>
      </div>

      <!-- Main Skills -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {#each techStack.slice(0, 4) as category, i}
          <div 
            in:fly={{ y: 50, duration: 500, delay: i * 100 }}
            class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div class="p-6 relative">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <iconify-icon icon={
                    category.category.toLowerCase().includes('frontend') ? 'material-symbols:code' :
                    category.category.toLowerCase().includes('backend') ? 'material-symbols:database' :
                    category.category.toLowerCase().includes('cloud') ? 'material-symbols:cloud' :
                    'material-symbols:apps'
                  } width="28"></iconify-icon>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{category.category}</h3>
              </div>
              
              <div class="space-y-3">
                {#each category.skills as skill}
                  <div class="flex items-center gap-3 group/skill p-2 rounded-lg hover:bg-primary/10 transition-all duration-300">
                    <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-black/30 text-primary group-hover/skill:bg-primary/20 transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="20"></iconify-icon>
                    </div>
                    <span class="text-sm font-medium text-white/70 group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Additional Skills -->
      <div class="relative mb-12">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <h3 class="text-2xl font-bold py-8 text-center relative">
          Extended <span class="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">Infrastructure</span>
        </h3>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        {#each techStack.slice(4) as category, i}
          <div 
            in:fly={{ y: 50, duration: 500, delay: i * 100 }}
            class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div class="p-6 relative">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <iconify-icon icon={
                    category.category.toLowerCase().includes('tools') ? 'material-symbols:tools' :
                    category.category.toLowerCase().includes('design') ? 'material-symbols:design-services' :
                    'material-symbols:apps'
                  } width="28"></iconify-icon>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{category.category}</h3>
              </div>

              <div class="grid grid-cols-2 gap-3">
                {#each category.skills as skill}
                  <div class="flex items-center gap-3 group/skill p-2 rounded-lg hover:bg-primary/10 transition-all duration-300">
                    <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-black/30 text-primary group-hover/skill:bg-primary/20 transition-all duration-300">
                      <iconify-icon icon={skill.icon} width="20"></iconify-icon>
                    </div>
                    <span class="text-sm font-medium text-white/70 group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section> 