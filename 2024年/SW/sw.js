const addResourceToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const cacheMatch = async (request) => {
  const cacheResponse = await caches.match(request);
  if (cacheResponse) return cacheResponse;
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open("v1");
    await cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (err) {
    return new Response("Response not found!");
  }
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourceToCache([
      "./",
      "./app.js",
      "./index.html",
      "./contact.html",
      "./profile.html",
      "./images/contactus.png",
      "./images/home.jpg",
      "./images/profile.jpg",
    ])
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheMatch(event.request));
});
