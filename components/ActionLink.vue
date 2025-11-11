<script setup lang="ts">
const props = defineProps<{
    url: string,
    icon: string
}>()

</script>

<template>
    <a :href="url" target="_blank" v-motion-slide-bottom class="bg-transparent hover:bg-black/20 text-muted-foreground hover:text-white cursor-pointer rounded-xl size-10 shrink-0 text-xl flex items-center justify-center"><UIcon :name="icon"/></a>
</template>