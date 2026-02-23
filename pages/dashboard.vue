<!-- Dashboard Page -->
<template>
  <div class="dashboard">
    <div class="content">
      <!-- Hero Basic Section -->
      <section class="hero-basic">
        <div class="text-content">
          <h1 class="title">歡迎來到 101tokyo</h1>
          <p class="subtitle">探索最新的設計與開發資源</p>
        </div>
      </section>

      <!-- Panel Image Double Section -->
      <section class="panel-image-double">
        <div class="image-container">
          <img src="/placeholder-1.jpg" alt="Feature image 1" class="feature-image" />
          <img src="/placeholder-2.jpg" alt="Feature image 2" class="feature-image" />
        </div>
      </section>

      <!-- Card Grid Content List Section -->
      <section class="card-grid-content">
        <div class="section-header">
          <h2 class="heading">探索我們的服務</h2>
          <p class="subheading">為您的專案找到最佳解決方案</p>
        </div>
        
        <div class="cards-container">
          <!-- Regular Card 1 -->
          <div class="card">
            <div class="card-image">
              <img src="/service-1.jpg" alt="Service 1" />
            </div>
            <div class="card-body">
              <h3 class="card-title">UI/UX 設計</h3>
              <p class="card-text">提供專業的使用者介面設計和使用者體驗優化服務，幫助您打造出色的數位產品。</p>
              <button class="card-button">了解更多</button>
            </div>
          </div>

          <!-- Regular Card 2 -->
          <div class="card">
            <div class="card-image">
              <img src="/service-2.jpg" alt="Service 2" />
            </div>
            <div class="card-body">
              <h3 class="card-title">前端開發</h3>
              <p class="card-text">使用最新的技術框架，為您的設計帶來生命力，打造響應式且高效能的網站。</p>
              <button class="card-button">了解更多</button>
            </div>
          </div>

          <!-- Pricing Card -->
          <div class="pricing-card">
            <div class="pricing-header">
              <h3 class="pricing-title">專業版</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">50</span>
                <span class="period">/ 月</span>
              </div>
            </div>
            <ul class="feature-list">
              <li>無限專案數量</li>
              <li>優先技術支援</li>
              <li>自訂域名支援</li>
              <li>進階數據分析</li>
              <li>團隊協作功能</li>
            </ul>
            <button class="pricing-button">立即開始</button>
          </div>
        </div>
      </section>
    </div>
    <!-- 添加 Footer 組件 -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
}

/* Hero Basic Section */
.hero-basic {
  padding: 160px 64px;
  text-align: center;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
}

.text-content {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-family: 'Inter', sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #1e1e1e;
  margin-bottom: 1rem;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  line-height: 1.2;
  color: #757575;
}

/* Panel Image Double Section */
.panel-image-double {
  padding: 64px;
  margin-bottom: 2rem;
}

.image-container {
  display: flex;
  gap: 48px;
  justify-content: center;
}

.feature-image {
  width: calc(50% - 24px);
  height: 400px;
  object-fit: cover;
  background-color: #e3e3e3;
}

/* Card Grid Content List Section */
.card-grid-content {
  padding: 64px;
}

.section-header {
  text-align: left;
  margin-bottom: 48px;
}

.heading {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1e1e1e;
  margin-bottom: 8px;
}

.subheading {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 1.2;
  color: #757575;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Regular Card Styles */
.card {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 160px;
  background-color: #e3e3e3;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 24px;
}

.card-title {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1e1e1e;
  margin-bottom: 8px;
}

.card-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #757575;
  margin-bottom: 16px;
}

.card-button {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  padding: 12px;
  background-color: #e3e3e3;
  border: 1px solid #522504;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-button:hover {
  background-color: #d1d1d1;
}

/* Pricing Card Styles */
.pricing-card {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing-header {
  text-align: center;
  margin-bottom: 16px;
}

.pricing-title {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1e1e1e;
  margin-bottom: 16px;
}

.price {
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
}

.currency {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #1e1e1e;
}

.amount {
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #1e1e1e;
}

.period {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #1e1e1e;
  margin-left: 4px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  width: 100%;
}

.feature-list li {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #757575;
  padding: 12px 0;
  border-bottom: 1px solid #e3e3e3;
}

.feature-list li:last-child {
  border-bottom: none;
}

.pricing-button {
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  padding: 12px;
  background-color: #2c2c2c;
  color: #f5f5f5;
  border: 1px solid #2c2c2c;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background-color: #1a1a1a;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-basic {
    padding: 80px 32px;
  }

  .title {
    font-size: 48px;
  }

  .subtitle {
    font-size: 24px;
  }

  .panel-image-double {
    padding: 32px;
  }

  .image-container {
    flex-direction: column;
    gap: 24px;
  }

  .feature-image {
    width: 100%;
    height: 300px;
  }

  .card-grid-content {
    padding: 32px;
  }

  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style> 