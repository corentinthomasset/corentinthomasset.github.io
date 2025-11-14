<script setup lang="ts">
import StarsCanvas from '~/components/StarsCanvas.vue'
const colorMode = useColorMode()
</script>

<template>
  <div class="absolute h-[80dvh] w-full">
    <stars-canvas :numDots="150" :colorDots="colorMode.value === 'dark' ? '#fff' : '#000'" class="absolute top-0 left-0" />
    <div class="from-background absolute top-0 left-0 h-full w-full bg-linear-to-t to-transparent"></div>
  </div>
  <div class="fixed bottom-0 -left-[50%] h-[80dvh] w-[200%] dark:bg-radial-[at_50%_100%] dark:from-blue-950/80 dark:via-slate-950/50 dark:to-slate-950/0"></div>
</template>
