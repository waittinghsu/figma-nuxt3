<template>
  <div>
    <h2>Figma 連接測試</h2>
    <pre>{{ config }}</pre>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log('Figma Config:', {
  fileKey: config.public.figmaFileKey,
})
</script> 