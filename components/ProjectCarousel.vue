<script setup lang="ts">
const props = defineProps<{items: Project[]}>()
const selectedItem = ref<number>(0)
</script>

<template>
  <UCarousel v-slot="{ item, index }" arrows wheel-gestures :items="items" class="max-w-250 m-auto" @select="(index) => selectedItem = index">
    <ProjectCard :item="item" :index="index" :active="index === selectedItem"/>
  </UCarousel>
</template>

