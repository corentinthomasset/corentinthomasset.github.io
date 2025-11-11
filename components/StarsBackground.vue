<script setup lang="ts">
import StarsCanvas from '~/components/StarsCanvas.vue';
const colorMode = useColorMode()
</script>

<template>
    <div class="absolute w-full h-[80dvh]">
        <stars-canvas :numDots="150" :colorDots="colorMode.value === 'dark' ? '#fff' : '#000'" class="absolute top-0 left-0"/>
        <div class="absolute top-0 left-0 w-full h-full bg-linear-to-t from-background to-transparent"></div>
    </div>
    <div class="fixed -left-[50%] bottom-0 w-[200%] h-[80dvh] dark:bg-radial-[at_50%_100%] dark:from-blue-950/80 dark:via-slate-950/50 dark:to-slate-950/0"></div>
</template>