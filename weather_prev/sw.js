// 01 - 02 in main_2.js
// 03 installing service worker
// script will serve as service worker
const cacheName = "v1";
const resources = ["index.html", "about.html", "main_2.css"];

self.addEventListener("install", (e) => {
  console.log("service worker installed");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(resources);
      })
      .then(() => {
        self.skipWaiting();
      })
      .catch((err) => console.log(err))
  );
});

self.addEventListener("activate", () => {
  console.log("service Workers Activated!");
});
self.addEventListener("fetch", (event) => {
  console.log("Request has been fetched!");
  event.respondWith(
    fetch(event.request).catch(() => {
      caches.match(event.request);
    })
  );
});
