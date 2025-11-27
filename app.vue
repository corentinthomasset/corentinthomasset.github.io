<script lang="ts" setup>
const toaster = { expand: document.body.getBoundingClientRect().width > 768 }
</script>
<template>
  <UApp :toaster="toaster">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
