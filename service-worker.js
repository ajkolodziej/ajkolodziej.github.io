const CACHE_NAME = 'app-cache';

const urlsToCache = [
  '/index.html',
  '/',
  'css/style.css',
  'js/app.js',
  'https://fonts.googleapis.com/css?family=Roboto:100'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
    return cache.addAll(urlsToCache);
  }));
});
