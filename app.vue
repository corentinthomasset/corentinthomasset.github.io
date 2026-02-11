<script lang="ts" setup>
import ogimage from '~/assets/media/ogimage.png'

const toaster = { expand: document.body.getBoundingClientRect().width > 768 }

useSeoMeta({
  title: "Hi, I'm Corentin Thomasset!",
  ogTitle: "Hi, I'm Corentin Thomasset!",
  description:
    'I dream up cool products and bring them to life. Engineering intuitive frontends, scalable backends, and everything in between — I build impactful solutions fueled by my passion for beautiful UIs, cybersecurity, and pretty much all things tech.',
  ogDescription:
    'I dream up cool products and bring them to life. Engineering intuitive frontends, scalable backends, and everything in between — I build impactful solutions fueled by my passion for beautiful UIs, cybersecurity, and pretty much all things tech.',
  ogImage: ogimage,
})
</script>
<template>
  <UApp :toaster="toaster">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
