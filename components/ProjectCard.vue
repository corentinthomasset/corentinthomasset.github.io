<script lang="ts" setup>
import glitchPattern from '@/assets/media/glitch.png'

const props = defineProps<{
  item: Project
  index: number
  active: boolean
}>()

const video = useTemplateRef<HTMLVideoElement>('video-el')
const canPlay = ref(false)
watch(
  () => props.active && canPlay.value,
  () => {
    if (props.active && canPlay.value) {
      video.value?.play()
      umami.track('play-project-video', {
        title: props.item.title,
      })
    } else {
      video.value?.pause()
    }
  },
  { immediate: true }
)

function handleClick() {
  umami.track('click-project-card', {
    url: props.item.links[0]?.url,
  })
}
</script>

<template>
  <a
    v-motion-slide-bottom
    :delay="150 + index * 100"
    :href="item.links[0]?.url"
    class="bg-muted/20 border-border relative m-auto block w-[90%] max-w-[900px] overflow-hidden rounded-3xl border md:aspect-3/2 dark:shadow-2xl"
    target="_blank"
    @click="handleClick"
  >
    <video v-if="item.thumbnailMedia" ref="video-el" :poster="item.thumbnailPoster" class="object-fit aspect-3/2 w-full" disablepictureinpicture loop muted playinline @canplay="canPlay = true">
      <source :src="item.thumbnailMedia" type="video/webm" />
    </video>
    <template v-else>
      <GlitchImage :img="glitchPattern" />
      <div class="absolute inset-0 flex items-center justify-center md:text-xl">
        <EncryptedText :pause-duration="3000" :speed="80" text="this project is confidential" />
      </div>
    </template>
    <div class="bottom-0 left-0 flex w-full flex-col items-start justify-between p-6 text-sm md:absolute md:flex-row md:items-center">
      <div class="flex flex-col justify-start gap-2 md:flex-row">
        <h4 class="bg-background/10 rounded px-1 font-semibold backdrop-blur-2xl">{{ item.title }}</h4>
        <p class="text-muted-foreground bg-background/10 rounded px-1 backdrop-blur-2xl">{{ item.affiliation }}</p>
      </div>
      <p class="text-muted-foreground bg-background/10 rounded px-1 backdrop-blur-2xl">{{ item.date }}</p>
    </div>
  </a>
  <div v-motion-fade :delay="200 + index * 100" class="m-auto max-w-[900px] p-6 text-center">
    <p class="text-muted-foreground text-center text-sm">{{ item.description }}</p>
    <ul class="inline-flex items-center gap-2 p-2">
      <li v-for="link in item.links" :key="link.url">
        <BadgeLink v-if="!link.label" :icon="link.icon" :url="link.url" />
        <BadgeLink v-else :icon="link.icon" :url="link.url">{{ link.label }}</BadgeLink>
      </li>
    </ul>
  </div>
</template>
