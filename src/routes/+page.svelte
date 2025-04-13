<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
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
  import HeroSection from '$lib/components/HeroSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import ExperienceSection from '$lib/components/ExperienceSection.svelte';

  let activeSection = 'about';
  let typedText = '';
  const fullText = 'Fullstack Web & Desktop Developer';
  let cursorVisible = true;
  let mounted = false;

  onMount(() => {
    mounted = true;
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

<main class="pt-16 text-white relative">
  <HeroSection />
  <ProjectsSection />
  <SkillsSection />
  <ExperienceSection />
</main>

<style>
  main {
    min-height: 100vh;
    position: relative;
  }
</style>
