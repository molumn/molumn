


const VERSION = "1"
const CACHE_NAME = "worker_cache-v" + VERSION
const SUB_FILES = [
    "offline.css",
    "offline.html"
]


self.addEventListener('install', (event) => {
    event.waitUntil(
        ( async () => {
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.addAll(SUB_FILES);
                })
        })()
    )
    // self.skipWaiting();
})

self.addEventListener('fetch', (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(
            (async () => {
                try {
                    // First, try to use the navigation preload response if it's supported.
                    const preloadResponse = await event.preloadResponse;
                    if (preloadResponse) {
                        return preloadResponse;
                    }

                    // Always try the network first.
                    return await fetch(event.request);
                } catch (error) {
                    // catch is only triggered if an exception is thrown, which is likely
                    // due to a network error.
                    // If fetch() returns a valid HTTP response with a response code in
                    // the 4xx or 5xx range, the catch() will NOT be called.
                    console.log("Fetch failed; returning offline page instead.", error);

                    const cache = await caches.open(CACHE_NAME);
                    return await cache.match(SUB_FILES);
                }
            })()
        );
    }
})

self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cache_names) => Promise.all(
            cache_names.map((cache_name) => {
                if(!cacheWhiteList.includes(cache_name)) {
                    return caches.delete(cache_name)
                }
            })
        ))
    );
    // self.clients.claim().then(r => {});
})

