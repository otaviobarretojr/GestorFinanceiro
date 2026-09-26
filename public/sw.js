const CACHE='minha-casa-shell-v3';
const SHELL=['./','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||req.url.includes('supabase.co'))return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).then(res=>{if(res.ok)caches.open(CACHE).then(c=>c.put('./',res.clone()));return res}).catch(()=>caches.match('./')));return}
 event.respondWith(fetch(req).then(res=>{if(res.ok&&new URL(req.url).origin===self.location.origin){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match(req)))
});