const CACHE_NAME = "healthy-bites-cache";

const urlsToCache = [
"/mobile/",
"/mobile/index.html",
"/mobile/style.css",
"/mobile/snack.jpg"
];

self.addEventListener("install", function(event) {

event.waitUntil(

caches.open(CACHE_NAME)
.then(function(cache) {
return cache.addAll(urlsToCache);
})

);

});

self.addEventListener("fetch", function(event) {

event.respondWith(

caches.match(event.request)
.then(function(response) {

if(response){
return response;
}

return fetch(event.request);

})

);

});
