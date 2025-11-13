<script setup lang="ts">
import timelineItems from "@/assets/timeline.json"
import projects from "~/assets/projects"
import footerLinks from "@/assets/footerLinks.json"
import actionLinks from "@/assets/actionLinks.json"
</script>

<template>
  <div class="min-h-screen relative overflow-x-hidden">
      <StarsBackground />
      <section class="relative z-10 max-w-4xl text-justify px-12 py-8 m-auto text-muted-foreground">
        <pre class="text-center mt-[15dvh] md:text-xs md:leading-[0.9rem] text-[0.4rem] leading-[0.45rem] select-none text-foreground text-shadow-sm text-shadow-blue-100 dark:text-shadow-blue-900">                                                                   
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
        </pre>
        <div class="relative mt-12 mb-14">
          <ActionBar>
            <div class="flex items-center flex-1 gap-2 @4xl:flex-row-reverse @md:justify-center">
              <SayHi/>
              <div class="flex items-center justify-between @md:justify-start gap-1 flex-1">
                <ActionLink v-for="(link, index) in actionLinks" :url="link.url" :key="link.url" :icon="link.icon" :delay="index * 50"/>
              </div>
              <h1 class="hidden @4xl:block font-semibold pr-4 border-r border-r-border">Corentin Thomasset</h1>
            </div>
          </ActionBar>
        </div>
        <p class="mt-8">Hi, I'm Corentin Thomasset! I dream up cool products and bring them to life. Engineering intuitive frontends, scalable backends, and everything in between — I build impactful solutions fueled by my passion for beautiful UIs, cybersecurity, and pretty much all things tech.</p>
        <p class="mt-8">I currently lead the development of the firmwide Vulnerability Management Platform user interface at Morgan Stanley. I'm also the co-founder of Frostbits Solutions, a small startup building dapps on the Algorand blockchain.</p>
      </section>
      <section class="max-w-4xl text-justify z-1 relative px-12 py-8 m-auto text-muted-foreground">
        <h2 class="text-xl font-semibold text-foreground">Projects</h2>
        <p>A selection of projects highlighting some of the more complete products I've brought to life, alongside numerous smaller prototypes and experiments.</p>
      </section>
      <ProjectCarousel :items="projects"/>
      <section class="max-w-4xl text-justify z-1 relative px-12 py-8 m-auto text-muted-foreground">
        <h2 class="text-xl font-semibold text-foreground">Highlights</h2>
        <p class="mb-8">Key achievements, milestones and recognition that have shaped my career.</p>
        <Timeline :items="timelineItems"/>
      </section>
      <Footer :items="footerLinks"/>
  </div>
</template>