<script setup lang="ts">
const props = defineProps<{icon: string, url: string}>()
</script>

<template>
    <a :href="props.url" target="_blank" class="group inline-flex items-center gap-1 p-2 rounded transition-colors bg-muted/20 dark:shadow-2xl border border--border text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground">
        <UIcon :name="icon" class="size-5" />
        <span class="text-sm" v-if="$slots.default"><slot/></span>
    </a>
</template>