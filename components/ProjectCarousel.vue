<script lang="ts" setup>
const props = defineProps<{ items: Project[] }>()
const selectedItem = ref<number>(0)
</script>

<template>
  <UCarousel v-slot="{ item, index }" :items="items" arrows class="m-auto max-w-250" wheel-gestures @select="(index) => (selectedItem = index)">
    <ProjectCard :active="index === selectedItem" :index="index" :item="item" />
  </UCarousel>
</template>
