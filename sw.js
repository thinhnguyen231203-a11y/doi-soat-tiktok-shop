// HKD Studio – cho phép mở ứng dụng khi không có mạng (chỉ hoạt động khi chạy qua web, ví dụ GitHub Pages)
// © 2026 Thịnh Nguyễn · TN-88025F2F-6D2D8BAA
const CACHE = 'hkd-studio-v2.1';
const FILES = ['./', './index.html', './doi-soat-tiktok-shop.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Trang HTML: ưu tiên bản mới trên mạng, mất mạng thì dùng bản đã lưu
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./doi-soat-tiktok-shop.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
