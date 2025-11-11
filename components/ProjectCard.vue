<script setup lang="ts">
import glitchPattern from "@/assets/media/glitch.png"
const props = defineProps< {
    item: Project,
    index: number,
    active: boolean
}>()

const video = useTemplateRef('video-el')
watch(() => [props.active, video.value?.readyState], () => {
    if (props.active && video.value?.readyState === 4) {
        video.value?.play()
    } else {
        video.value?.pause()
    }
}, { immediate: true })
</script>

<template>
    <div class="w-[90%] max-w-[900px] aspect-2/3 md:aspect-3/2 relative rounded-3xl overflow-hidden m-auto bg-muted/20 dark:shadow-2xl border border-border" v-motion-slide-bottom :delay="150 + index * 100">
        <video v-if="item.thumbnailMedia" ref="video-el" class="w-full object-cover aspect-2/3 md:aspect-3/2" muted loop disablepictureinpicture :poster="item.thumbnailPoster">
            <source :src="item.thumbnailMedia" type="video/webm" />
        </video>
        <template v-else>
            <GlitchImage :img="glitchPattern"/>
            <div class="absolute inset-0 flex items-center justify-center md:text-xl">
                <EncryptedText text="this project is confidential" :speed="80" :pause-duration="3000" />
        </div>
        </template>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between absolute left-0 bottom-0 w-full p-6 text-sm">
            <div class="flex flex-col md:flex-row justify-start gap-2">
                <h4 class="font-semibold bg-background/10 backdrop-blur-2xl px-1 rounded">{{  item.title  }}</h4>
                <p class="text-muted-foreground bg-background/10 backdrop-blur-2xl px-1 rounded">{{  item.affiliation }}</p>
            </div>
            <p class="text-muted-foreground bg-background/10 backdrop-blur-2xl px-1 rounded">{{  item.date }}</p>
        </div>
    </div>
    <div class="text-center p-6 max-w-[900px] m-auto" v-motion-fade :delay="200 + index * 100">
        <p class="text-muted-foreground text-center text-sm">{{  item.description }}</p>
        <ul class="inline-flex items-center gap-2 p-2">
            <li v-for="link in item.links" :key="link.url">
                <BadgeLink v-if="!link.label" :icon="link.icon" :url="link.url"/>
                <BadgeLink v-else :icon="link.icon" :url="link.url">{{  link.label  }}</BadgeLink>
            </li>
        </ul>
    </div>
</template>