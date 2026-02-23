const CACHE_NAME = "ghichu-v2"; // tăng version mỗi lần update

const urlsToCache = [
  "login.html",
  "dashboard.html"
  // ❌ BỎ manifest.json
];

// Cài đặt
self.addEventListener("install", event => {
  self.skipWaiting(); // update ngay
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Kích hoạt
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim()) // nhận quyền ngay
  );
});

// Fetch
self.addEventListener("fetch", event => {
  if (event.request.url.includes("manifest.json")) {
    // luôn lấy manifest mới từ server
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
