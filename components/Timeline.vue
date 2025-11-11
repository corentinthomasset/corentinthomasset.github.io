<script setup lang="ts">
    const props = defineProps<{items: TimelineItem[]}>()
</script>

<template>
    <ul class="border-l-border border-l-2 mx-4">
        <li v-for="item in items" :key="item.title" class="flex items-baseline -ml-[7px] py-2" v-motion-fade-visible-once>
            <div class="rounded-full size-3 bg-muted-foreground mr-4 border-2 border-background shrink-0"></div>
            <div class="flex flex-col md:flex-row items-start">
                <div class="w-32 shrink-0 text-sm text-muted-foreground/80">{{ item.date }} </div>
                <div class="text-sm text-left">
                    {{ item.title }}
                </div>
            </div>
        </li>
    </ul>
</template>