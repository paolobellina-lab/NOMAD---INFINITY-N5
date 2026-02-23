// File sw.js
const CACHE_NAME = 'infinity-v1';

self.addEventListener('install', (event) => {
  console.log('SW: Installato');
  self.skipWaiting();
});
self.addEventListener('fetch', () => {});
self.addEventListener('fetch', (event) => {
  // Lascia vuoto o gestisci il caching, ma l'evento deve esserci
});
