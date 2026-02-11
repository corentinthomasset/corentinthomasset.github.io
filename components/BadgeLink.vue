<script lang="ts" setup>
const props = defineProps<{ icon: string; url: string }>()

function handleClick() {
  umami.track('click-badge-link', {
    url: props.url,
  })
}
</script>

<template>
  <a
    :href="props.url"
    class="group bg-muted/20 border--border text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground inline-flex items-center gap-1 rounded border p-2 transition-colors dark:shadow-2xl"
    target="_blank"
    @click="handleClick"
  >
    <UIcon :name="icon" class="size-5" />
    <span v-if="$slots.default" class="text-sm"><slot /></span>
  </a>
</template>
