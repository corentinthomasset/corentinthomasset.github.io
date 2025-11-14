<script setup lang="ts">
const props = defineProps<{
  url: string
  icon: string
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    v-motion-slide-bottom
    class="text-muted-foreground flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-transparent text-xl hover:bg-black/20 hover:text-white"
    ><UIcon :name="icon"
  /></a>
</template>
