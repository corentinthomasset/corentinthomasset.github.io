<script setup lang="ts">
const colorMode = useColorMode()
colorMode.value = 'dark'
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtPage/>
  </UApp>
</template>
