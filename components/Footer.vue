<script setup lang="ts">
const props = defineProps<{ items: Link[] }>()
</script>

<template>
  <footer class="text-muted-foreground relative z-1 m-auto max-w-4xl px-12 py-8 text-center">
    <div class="border-t-border m-auto mb-8 max-w-xl border-t"></div>
    <p class="text-foreground font-semibold">hi@corentinthomasset.me</p>
    <ul class="mt-2 mb-12 inline-flex items-center gap-2 p-2">
      <li v-for="(item, index) in items" :key="item.url">
        <BadgeLink v-if="!item.label" :icon="item.icon" :url="item.url" />
        <BadgeLink v-else :icon="item.icon" :url="item.url">{{ item.label }}</BadgeLink>
      </li>
    </ul>
  </footer>
</template>
