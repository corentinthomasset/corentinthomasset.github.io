<script setup lang="ts">
const props = defineProps<{ icon: string; url: string }>()
</script>

<template>
  <a
    :href="props.url"
    target="_blank"
    class="group bg-muted/20 border--border text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground inline-flex items-center gap-1 rounded border p-2 transition-colors dark:shadow-2xl"
  >
    <UIcon :name="icon" class="size-5" />
    <span class="text-sm" v-if="$slots.default"><slot /></span>
  </a>
</template>
