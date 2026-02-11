<script lang="ts" setup>
const props = defineProps<{
  url: string
  icon: string
}>()

function handleClick() {
  umami.track('click-action-link', {
    url: props.url,
  });
}
</script>

<template>
  <a
    v-motion-slide-bottom
    :href="url"
    class="text-muted-foreground flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-transparent text-xl hover:bg-black/20 hover:text-white"
    target="_blank"
    @click="handleClick"
    ><UIcon :name="icon"
  /></a>
</template>
