const cacheName = 'assets-v1';

self.addEventListener('install', event => {
    console.log('installing ');
    const preCache = async () => {
        const cache = await caches.open('static-v1');
        await cache.addAll(serviceWorkerOption.assets);
    };
    event.waitUntil(preCache());
    console.log('installing called');
});

self.addEventListener('active', event => {
    console.log('activated...');
});

self.addEventListener('fetch', event => {
    console.log(event.request.url);
});