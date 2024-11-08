let cacheName = "Magic Pot";
let filesToCache = ["/", "/index.html", "/CSS/style.css", "/js/main.js", "/pages/carnes", "/pages/doces", "/pages/massas", "/images/img3.png"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
