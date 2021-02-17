
//run only one time ! 
self.addEventListener("install", e => {
    console.log("SW installed!");
    e.waitUntil(
        caches.open("static").then(cache => { //static is OUR name for static ressources
            return cache.addAll(["./index.html", "./wwwnavigator.css","./image/logo192.png"]); //in crome dev tools under application -> Cache ->"static"
        })
    )
});


//run if a fetch request comes in
self.addEventListener("fetch", e => { 
    console.log("someone fetched:"+e.request.url );
})