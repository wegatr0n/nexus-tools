const cacheName = 'nexus-tools-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/sw.js',
  '/apps/meme.html',
  '/apps/compress.html',
  '/apps/password.html',
  '/apps/text.html',
  '/apps/json.html',
  '/apps/unit.html',
  '/apps/qr.html',
  '/apps/colors.html',
  '/apps/markdown.html',
  '/apps/base64.html',
  '/apps/hash.html',
  '/apps/timestamp.html',
  '/apps/bmi.html',
  '/apps/lorem.html',
  '/apps/index.html',
  '/timestamp.html',
  '/bmi.html',
  '/lorem.html',
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
