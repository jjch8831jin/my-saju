// sw.js — 크롬이 "설치(진짜 앱)"를 허락해 주는 데 필요한 최소한의 서비스 워커입니다.
// 오프라인 저장이나 캐싱은 하지 않고, 요청을 그대로 통과시키기만 합니다.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
