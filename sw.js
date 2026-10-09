const CACHE='sgs-snake-v5-interad-final';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./', './index.html', './manifest.json','./icon-192x192.png','./icon-512x512.png'])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});