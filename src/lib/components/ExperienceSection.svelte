<script lang="ts">
  import { fly } from 'svelte/transition';
  import { experiences } from '$lib/data';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
</script>

<section id="experience" class="py-16 relative">
  <div class="binary-bg opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(var(--color-primary-rgb),0.3),transparent_70%)] pointer-events-none animate-float"></div>
  <div class="container mx-auto px-4 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8 relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h2 class="text-3xl font-bold mb-2">
          Professional <span class="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary animate-gradient-x">Experience</span>
        </h2>
        <p class="text-base text-white/60 max-w-2xl mx-auto">
          A timeline of my professional journey, highlighting key roles and achievements.
        </p>
      </div>

      <!-- Experience Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div class="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105">
          <div class="flex flex-col items-center justify-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <iconify-icon icon="material-symbols:code" class="text-primary text-2xl group-hover:scale-110 transition-transform duration-300"></iconify-icon>
            </div>
            <div class="text-4xl font-bold text-white mb-1 animate-count" data-target="3">3+</div>
            <div class="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">Years Development</div>
          </div>
        </div>
        
        <div class="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105">
          <div class="flex flex-col items-center justify-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <iconify-icon icon="material-symbols:precision-manufacturing-rounded" class="text-primary text-2xl group-hover:scale-110 transition-transform duration-300"></iconify-icon>
            </div>
            <div class="text-4xl font-bold text-white mb-1 animate-count" data-target="8">8+</div>
            <div class="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">Years Tech Service</div>
          </div>
        </div>
        
        <div class="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center group hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105">
          <div class="flex flex-col items-center justify-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <iconify-icon icon="material-symbols:devices" class="text-primary text-2xl group-hover:scale-110 transition-transform duration-300"></iconify-icon>
            </div>
            <div class="text-4xl font-bold text-white mb-1 animate-count" data-target="20">20+</div>
            <div class="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">Technologies</div>
          </div>
        </div>
      </div>

      <script>
        onMount(() => {
          const animateCount = (element: HTMLElement) => {
            const target = parseInt(element.getAttribute('data-target') || '0');
            const duration = 2000; // 2 seconds
            const steps = 50;
            const stepValue = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += stepValue;
              if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
              } else {
                element.textContent = Math.floor(current) + '+';
              }
            }, duration / steps);
          };

          document.querySelectorAll('.animate-count').forEach((el) => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  animateCount(el as HTMLElement);
                  observer.unobserve(el);
                }
              });
            }, { threshold: 0.5 });

            observer.observe(el);
          });
        });
      </script>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/50 via-white/30 to-transparent"></div>
        
        <div class="space-y-6">
          {#each experiences as exp, i}
            <div 
              in:fly={{ y: 50, duration: 500, delay: i * 100 }}
              class="relative group flex flex-col md:flex-row items-start gap-6 {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}"
            >
              <!-- Timeline dot and year -->
              <div class="absolute left-12 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div class="w-3 h-3 rounded-full bg-white ring-3 ring-white/20 group-hover:ring-white/40 transition-all duration-300"></div>
                <div class="mt-1 text-xs font-medium text-white/90">{exp.period.split('-')[0]}</div>
              </div>
              
              <!-- Content -->
              <div class="ml-16 md:ml-0 w-full md:w-[calc(50%-1.5rem)] {i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}">
                <div class="code-card bg-black/40 backdrop-blur-none rounded-lg border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/20 relative">
                  <div class="code-highlight"></div>
                  <div class="p-4 relative">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <h3 class="text-lg font-bold text-primary mb-0.5">{exp.title}</h3>
                          <p class="text-sm font-medium text-white/90">{exp.company}</p>
                        </div>
                        <span class="text-xs text-white/50 whitespace-nowrap">{exp.period}</span>
                      </div>
                      
                      <!-- Key Achievements -->
                      <div class="mt-2 space-y-1.5">
                        {#each exp.description.split('. ') as achievement}
                          <div class="flex items-start gap-1.5 group/achievement">
                            <div class="w-4 h-4 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                              <iconify-icon icon="material-symbols:check-small" class="text-primary group-hover/achievement:scale-110 transition-transform duration-300" width="14"></iconify-icon>
                            </div>
                            <p class="text-xs text-white/70 leading-relaxed group-hover/achievement:text-white/90 transition-colors duration-300">{achievement}.</p>
                          </div>
                        {/each}
                      </div>
                      
                      <!-- Skills/Technologies used -->
                      {#if exp.technologies}
                        <div class="mt-3 flex flex-wrap gap-1.5">
                          {#each exp.technologies as tech}
                            <div class="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary group-hover/card:bg-primary/20 transition-all duration-300 flex items-center gap-1">
                              <iconify-icon icon={
                                tech.toLowerCase().includes('svelte') ? 'logos:svelte-icon' :
                                tech.toLowerCase().includes('typescript') ? 'logos:typescript-icon' :
                                tech.toLowerCase().includes('firebase') ? 'logos:firebase' :
                                tech.toLowerCase().includes('tailwind') ? 'logos:tailwindcss-icon' :
                                tech.toLowerCase().includes('.net') ? 'logos:dotnet' :
                                tech.toLowerCase().includes('c#') ? 'logos:c-sharp' :
                                'material-symbols:code'
                              } width="12" height="12"></iconify-icon>
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
      <div class="mt-12 text-center">
        <a 
          href="{base}/RESUME - Dan Mossesgeld.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-black/40 hover:bg-primary/20 text-white/90 hover:text-white transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-primary/30"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          <div class="relative flex items-center gap-2">
            <iconify-icon 
              icon="material-symbols:download-rounded" 
              class="text-xl group-hover:scale-110 transition-transform duration-300"
            ></iconify-icon>
            <span class="relative">
              Download Resume
              <span class="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
            </span>
          </div>
          <span class="relative ml-2 text-xs text-white/50 group-hover:text-white/70">(PDF)</span>
        </a>
      </div>
    </div>
  </div>
</section> 