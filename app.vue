<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// 自動導向到 dashboard
const router = useRouter()
onMounted(() => {
  if (window.location.pathname === '/') {
    router.push('/dashboard')
  }
})
</script>

<style>
/* 全局樣式 */
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 移除預設的連結樣式 */
a {
  text-decoration: none;
  color: inherit;
}

/* 移除預設的按鈕樣式 */
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

/* 確保所有圖片都有正確的盒模型 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
