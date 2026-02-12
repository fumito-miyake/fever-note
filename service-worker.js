const CACHE_NAME = "fever-note-pwa-cache-v1";
const urlsToCache = [
  "./",
  "./manifest.json",
  "./index.html",
  "./icons/fever-note-192.png",
  "./icons/fever-note-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
