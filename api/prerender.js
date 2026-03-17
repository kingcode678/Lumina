// api/prerender.js
export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // 1. User-Agent yoxla (kim gəlib?)
  const userAgent = request.headers.get('user-agent') || '';
  
  // 2. Bot siyahısı
  const isBot = /googlebot|bingbot|facebook|twitter|linkedin|whatsapp|discord|slack|telegrambot/i.test(userAgent.toLowerCase());
  
  // 3. URL-i al
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  console.log('User-Agent:', userAgent);
  console.log('Is Bot:', isBot);
  console.log('Path:', pathname);
  
  // 4. Əgər botdursa → Prerender.io-ya yönləndir
  if (isBot) {
    const targetUrl = `https://luminaedu.online${pathname}`;
    const prerenderUrl = `https://service.prerender.io/${targetUrl}`;
    
    console.log('Prerender URL:', prerenderUrl);
    
    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'IY4MbEsySXbfTCJ6sOkv',
        },
      });
      
      // Prerender.io cavabını qaytar
      const html = await response.text();
      
      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=86400', // 1 gün cache
        },
      });
      
    } catch (error) {
      console.error('Prerender error:', error);
      
      // Xəta olsa, normal səhifəni göstər
      return fetch(request);
    }
  }
  
  // 5. Normal istifadəçi → React app-ə yönləndir
  return fetch(request);
}