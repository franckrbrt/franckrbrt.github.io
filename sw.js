const CACHE_NAME = "pwa-example";
const urlsToCache = [
  "index.html",
  "scripts/main.js",
  "scripts/utils.js",
  "data/helloworld.json",
  "styles/main.css",
  "styles/normalize.css",
  "images/icons/ic_info_outline_black_24px.svg",
  "images/icons/ic_refresh_black_24px.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});