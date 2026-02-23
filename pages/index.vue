<template>
  <div>
    <!-- 這個頁面會自動重定向到 dashboard -->
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

// 當組件掛載時自動重定向到 dashboard
onMounted(() => {
  router.push('/dashboard');
});
</script> 