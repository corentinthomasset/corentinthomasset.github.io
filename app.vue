<script lang="ts" setup>
const colorMode = useColorMode()
onMounted(() => {
  colorMode.preference = 'dark'
})
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
