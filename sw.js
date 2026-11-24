// GRADIEN lama telah berpindah ke /mathmotion/gradien/. Buang simpanan lama dan nyahdaftar.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('gradien-')).map(n=>caches.delete(n)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('/mathmotion/gradien/'))))});
self.addEventListener('fetch',()=>{});
