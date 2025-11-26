<script lang="ts" setup>
import timelineItems from '@/assets/timeline.json'
import projects from '~/assets/projects'
import footerLinks from '@/assets/footerLinks.json'
import actionLinks from '@/assets/actionLinks.json'

definePageMeta({
  colorMode: 'dark',
})
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <StarsBackground />
    <section class="text-muted-foreground relative z-10 m-auto max-w-4xl px-12 py-8 text-justify">
      <pre class="text-foreground mt-[15dvh] text-center text-[0.4rem] leading-[0.45rem] select-none text-shadow-blue-100 text-shadow-sm md:text-xs md:leading-[0.9rem] dark:text-shadow-blue-900">

                                                      ,,              
  .g8"""bgd                                    mm     db              
.dP'     `M                                    MM                     
dM'       ` ,pW"Wq.`7Mb,od8 .gP"Ya `7MMpMMMb.mmMMmm `7MM  `7MMpMMMb.  
MM         6W'   `Wb MM' "',M'   Yb  MM    MM  MM     MM    MM    MM  
MM.        8M     M8 MM    8M""""""  MM    MM  MM     MM    MM    MM  
`Mb.     ,'YA.   ,A9 MM    YM.    ,  MM    MM  MM     MM    MM    MM  
  `"bmmmd'  `Ybmd9'.JMML.   `Mbmmd'.JMML  JMML.`Mbmo.JMML..JMML  JMML.

d888888b db   db  .d88b.  .88b  d88.  .d8b.  .d8888. .d8888. d88888b d888888b 
`~~88~~' 88   88 .8P  Y8. 88'YbdP`88 d8' `8b 88'  YP 88'  YP 88'     `~~88~~' 
   88    88ooo88 88    88 88  88  88 88ooo88 `8bo.   `8bo.   88ooooo    88    
   88    88~~~88 88    88 88  88  88 88~~~88   `Y8b.   `Y8b. 88~~~~~    88    
   88    88   88 `8b  d8' 88  88  88 88   88 db   8D db   8D 88.        88    
   YP    YP   YP  `Y88P'  YP  YP  YP YP   YP `8888Y' `8888Y' Y88888P    YP    
        </pre
      >
      <div class="relative mt-12 mb-14">
        <ActionBar>
          <div class="flex flex-1 items-center gap-2 @md:justify-center @4xl:flex-row-reverse">
            <SayHi />
            <div class="flex flex-1 items-center justify-between gap-1 @md:flex-none @md:justify-start @4xl:flex-1">
              <ActionLink v-for="(link, index) in actionLinks" :key="link.url" :delay="index * 50" :icon="link.icon" :url="link.url" />
            </div>
            <h1 class="border-r-border hidden border-r pr-4 font-semibold @4xl:block">Corentin Thomasset</h1>
          </div>
        </ActionBar>
      </div>
      <p class="mt-8">
        Hi, I'm Corentin Thomasset! I dream up cool products and bring them to life. Engineering intuitive frontends, scalable backends, and everything in between — I build impactful solutions fueled
        by my passion for beautiful UIs, cybersecurity, and pretty much all things tech.
      </p>
      <p class="mt-8">
        I currently lead the development of the firmwide Vulnerability Management Platform user interface at Morgan Stanley. I'm also the co-founder of Frostbits Solutions, a small startup building
        dapps on the Algorand blockchain.
      </p>
    </section>
    <section class="text-muted-foreground relative z-1 m-auto max-w-4xl px-12 py-8 text-justify">
      <h2 class="text-foreground text-xl font-semibold">Projects</h2>
      <p>A selection of projects highlighting some of the more complete products I've brought to life, alongside numerous smaller prototypes and experiments.</p>
    </section>
    <ProjectCarousel :items="projects" />
    <section class="text-muted-foreground relative z-1 m-auto max-w-4xl px-12 py-8 text-justify">
      <h2 class="text-foreground text-xl font-semibold">Highlights</h2>
      <p class="mb-8">Key achievements, milestones and recognition that have shaped my career.</p>
      <Timeline :items="timelineItems" />
    </section>
    <Footer :items="footerLinks" />
  </div>
</template>
