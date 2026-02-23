import { MCPClient } from '@figma/mcp-client'

const client = new MCPClient({
  port: 7777,
  host: 'localhost'
})

// 監聽來自 Figma 的消息
client.on('message', async (message) => {
  console.log('收到來自 Figma 的消息:', message)
  
  // 這裡可以處理來自 Figma 的消息
  // 例如：接收設計元素並轉換為 Nuxt3 代碼
})

// 發送消息到 Figma
async function sendMessageToFigma(message: any) {
  try {
    await client.send(message)
  } catch (error) {
    console.error('發送消息失敗:', error)
  }
}

export { sendMessageToFigma } 