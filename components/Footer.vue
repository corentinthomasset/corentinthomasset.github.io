<script setup lang="ts">
    const props = defineProps<{items: Link[]}>()
</script>

<template>
    <footer class="max-w-4xl text-center z-1 relative px-12 py-8 m-auto text-muted-foreground">
        <div class="max-w-xl border-t border-t-border m-auto mb-8"></div>
        <p class="font-semibold text-foreground">hi@corentinthomasset.me</p>
        <ul class="inline-flex items-center gap-2 p-2 mt-2 mb-12">
            <li v-for="(item, index)  in items" :key="item.url">
                <BadgeLink v-if="!item.label" :icon="item.icon" :url="item.url"/>
                <BadgeLink v-else :icon="item.icon" :url="item.url">{{  item.label  }}</BadgeLink>
            </li>
        </ul>
    </footer>
</template>