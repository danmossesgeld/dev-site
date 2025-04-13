<script lang="ts">
  import { fly } from 'svelte/transition';
  import { experiences } from '$lib/data';
</script>

<section id="experience" class="py-24 relative">
  <div class="binary-bg opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(var(--color-primary-rgb),0.3),transparent_70%)] pointer-events-none animate-float"></div>
  <div class="container mx-auto px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 class="text-4xl font-bold mb-4">
          Professional <span class="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">Experience</span>
        </h2>
        <p class="text-lg text-white/60 max-w-2xl mx-auto">
          A timeline of my professional journey, highlighting key roles and achievements.
        </p>
      </div>

      <!-- Experience Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center group hover:border-primary/30 transition-all duration-500">
          <div class="text-3xl font-bold text-white mb-2">{experiences.length}+</div>
          <div class="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Professional Roles</div>
        </div>
        <div class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center group hover:border-primary/30 transition-all duration-500">
          <div class="text-3xl font-bold text-white mb-2">5+</div>
          <div class="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Years Experience</div>
        </div>
        <div class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center group hover:border-primary/30 transition-all duration-500">
          <div class="text-3xl font-bold text-white mb-2">20+</div>
          <div class="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Projects Completed</div>
        </div>
        <div class="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center group hover:border-primary/30 transition-all duration-500">
          <div class="text-3xl font-bold text-white mb-2">15+</div>
          <div class="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">Technologies</div>
        </div>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-white/30 to-transparent"></div>
        
        <div class="space-y-8">
          {#each experiences as exp, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="relative group flex flex-col md:flex-row items-start gap-8 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}"
            >
              <!-- Timeline dot and year -->
              <div class="absolute left-12 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div class="w-4 h-4 rounded-full bg-white ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300"></div>
                <div class="mt-2 text-sm font-medium text-white/90">{exp.period.split('-')[0]}</div>
              </div>
              
              <!-- Content -->
              <div class="ml-20 md:ml-0 w-full md:w-[calc(50%-2rem)] {i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}">
                <div class="code-card bg-black/40 backdrop-blur-none rounded-xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/20 relative">
                  <div class="code-highlight"></div>
                  <div class="p-6 relative">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-start justify-between gap-4">
                        <div>
                          <h3 class="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                          <p class="text-base font-medium text-white/90">{exp.company}</p>
                        </div>
                        <span class="text-sm text-white/50 whitespace-nowrap">{exp.period}</span>
                      </div>
                      
                      <!-- Key Achievements -->
                      <div class="mt-3 space-y-2">
                        {#each exp.description.split('. ') as achievement}
                          <div class="flex items-start gap-2 group/achievement">
                            <div class="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                              <iconify-icon icon="material-symbols:check-small" class="text-primary group-hover/achievement:scale-110 transition-transform duration-300" width="16"></iconify-icon>
                            </div>
                            <p class="text-sm text-white/70 leading-relaxed group-hover/achievement:text-white/90 transition-colors duration-300">{achievement}.</p>
                          </div>
                        {/each}
                      </div>
                      
                      <!-- Skills/Technologies used -->
                      {#if exp.technologies}
                        <div class="mt-4 flex flex-wrap gap-2">
                          {#each exp.technologies as tech}
                            <div class="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary group-hover/card:bg-primary/20 transition-all duration-300 flex items-center gap-1.5">
                              <iconify-icon icon={
                                tech.toLowerCase().includes('svelte') ? 'logos:svelte-icon' :
                                tech.toLowerCase().includes('typescript') ? 'logos:typescript-icon' :
                                tech.toLowerCase().includes('firebase') ? 'logos:firebase' :
                                tech.toLowerCase().includes('tailwind') ? 'logos:tailwindcss-icon' :
                                tech.toLowerCase().includes('.net') ? 'logos:dotnet' :
                                tech.toLowerCase().includes('c#') ? 'logos:c-sharp' :
                                'material-symbols:code'
                              } width="14" height="14"></iconify-icon>
                              {tech}
                            </div>
                          {/each}
                        </div>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Download Resume Button -->
      <div class="mt-16 text-center">
        <a href="/resume.pdf" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 group hover:scale-105">
          <iconify-icon icon="material-symbols:download" class="group-hover:scale-110 transition-transform duration-300" width="20"></iconify-icon>
          Download Full Resume
        </a>
      </div>
    </div>
  </div>
</section> 