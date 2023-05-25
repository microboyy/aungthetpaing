var staticCacheName = "ATP";

self.addEventListener('install',function(e){
  e.waitUntill(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch",function(event){
  console.log(event.request.url);

  event.respondwith(
    caches.match(event.request).then(function(respon){
      return Response || fetch(event.request);
    })
  );
});