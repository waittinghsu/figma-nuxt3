<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- 使用案例列表 -->
      <div class="footer-column">
        <h3 class="footer-title">使用案例</h3>
        <ul class="footer-list">
          <li><a href="#">UI 設計</a></li>
          <li><a href="#">UX 設計</a></li>
          <li><a href="#">線框圖</a></li>
          <li><a href="#">流程圖</a></li>
          <li><a href="#">腦力激盪</a></li>
          <li><a href="#">線上白板</a></li>
          <li><a href="#">團隊協作</a></li>
        </ul>
      </div>

      <!-- 探索列表 -->
      <div class="footer-column">
        <h3 class="footer-title">探索</h3>
        <ul class="footer-list">
          <li><a href="#">設計</a></li>
          <li><a href="#">原型設計</a></li>
          <li><a href="#">開發功能</a></li>
          <li><a href="#">設計系統</a></li>
          <li><a href="#">協作功能</a></li>
          <li><a href="#">設計流程</a></li>
          <li><a href="#">FigJam</a></li>
        </ul>
      </div>

      <!-- 資源列表 -->
      <div class="footer-column">
        <h3 class="footer-title">資源</h3>
        <ul class="footer-list">
          <li><a href="#">部落格</a></li>
          <li><a href="#">最佳實踐</a></li>
          <li><a href="#">顏色</a></li>
          <li><a href="#">色輪</a></li>
          <li><a href="#">支援</a></li>
          <li><a href="#">開發者</a></li>
          <li><a href="#">資源庫</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.footer {
  border-top: 1px solid #d9d9d9;
  background-color: #ffffff;
  padding: 32px 32px 160px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-column {
  width: 262px;
}

.footer-title {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: #1e1e1e;
  margin-bottom: 16px;
  padding-bottom: 16px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 12px;
}

.footer-list a {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #1e1e1e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-list a:hover {
  color: #757575;
}

@media (max-width: 1024px) {
  .footer-content {
    justify-content: space-between;
  }
  
  .footer-column {
    width: calc(33.33% - 16px);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 32px 16px 80px;
  }
  
  .footer-column {
    width: 100%;
  }
}
</style> 