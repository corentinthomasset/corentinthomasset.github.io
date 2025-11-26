<script lang="ts" setup>
const colorMode = useColorMode()
onMounted(() => {
  colorMode.value = 'dark'
})
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
  </UApp>
</template>
