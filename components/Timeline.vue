<script setup lang="ts">
const props = defineProps<{ items: TimelineItem[] }>()
</script>

<template>
  <ul class="border-l-border mx-4 border-l-2">
    <li v-for="item in items" :key="item.title" class="-ml-[7px] flex items-baseline py-2" v-motion-fade-visible-once>
      <div class="bg-muted-foreground border-background mr-4 size-3 shrink-0 rounded-full border-2"></div>
      <div class="flex flex-col items-start md:flex-row">
        <div class="text-muted-foreground/80 w-32 shrink-0 text-sm">{{ item.date }}</div>
        <div class="text-left text-sm">
          {{ item.title }}
        </div>
      </div>
    </li>
  </ul>
</template>
