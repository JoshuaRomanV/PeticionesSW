const CACHE_DYNAMIC = 'dynamic-v1' //Para los archivos que se van a descargar
const CACHE_STATIC = 'static-v1' //App shell
const CACHE_INMUTABLE = 'inmutable-v1'// CDN de terceros. LIBRERIAS
const CACHE_NOTES = 'notes-v1'; // Caché para las notas

const limpiarCache = (cacheName, numberItem) => {
    caches.open(cacheName)
        .then(cache => {
            cache.keys()
                .then(keys => {
                    if (keys.length > numberItem) {
                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numberItem))
                    }
                })
        })

}

self.addEventListener('install', function (event) {

    const cachePromise = caches.open(CACHE_STATIC).then(function (cache) {

        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/sw.js',
            '/vite.svg',
            '/pages/offline.html'
        ])
    })
    //No Llamamos librerias de terceros
    /* 
    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(function (cache) {

        return cache.addAll([
            'https://fonts.googleapis.com/css2?family=Roboto&display=swap'

        ])
    })
    */
    event.waitUntil(Promise.all([cachePromise]))
})

// self.addEventListener('fetch', function (event) {
//     //Cache with network fallback
//     const respuesta = caches.match(event.request)
//         .then(response => {
//             if (response) return response
//             //Si no existe el archivo lo descarga de la web
//             return fetch(event.request)
//                 .then(newResponse => {

//                     caches.open(CACHE_DYNAMIC)
//                         .then(cache => {
//                             cache.put(event.request, newResponse)
//                             limpiarCache(CACHE_DYNAMIC, 40)
//                         })
//                     return newResponse.clone()
//                 })
//                 .catch(err => {
//                     if (event.request.headers.get('accept').includes('text/html')) {
//                         return caches.match('/pages/offline.html')
//                     }
//                 })
//         })
//     event.respondWith(respuesta)
// })


// self.addEventListener('fetch', function (event) {
//     if (event.request.url.includes('/api/note')) {
//       // Para las solicitudes a la API de notas, primero intentamos recuperar la respuesta desde la caché
//       event.respondWith(
//         caches.open(CACHE_NOTES).then(cache => {
//           return cache.match(event.request).then(response => {
//             return (
//               response ||
//               fetch(event.request).then(newResponse => {
//                 cache.put(event.request, newResponse.clone());
//                 return newResponse;
//               })
//             );
//           });
//         })
//       );
//     } else {
//       // Otras solicitudes se gestionan de manera similar a como lo hacías antes
//       const respuesta = caches.match(event.request).then(response => {
//         if (response) return response;
//         return fetch(event.request)
//           .then(newResponse => {
//             caches.open(CACHE_DYNAMIC).then(cache => {
//               cache.put(event.request, newResponse);
//               limpiarCache(CACHE_DYNAMIC, 40);
//             });
//             return newResponse.clone();
//           })
//           .catch(err => {
//             if (event.request.headers.get('accept').includes('text/html')) {
//               return caches.match('/pages/offline.html');
//             }
//           });
//       });
//       event.respondWith(respuesta);
//     }
//   })

self.addEventListener('activate', function(event){
  const respuesta = caches.keys()
  .then(keys => {
    keys.forEach(key => {
      if(key !== CACHE_STATIC && key.includes('static')){
        return caches.delete(key)
      }
    })
  })
  event.waitUntil(respuesta)
})
  // self.addEventListener('fetch', event => {
  //   const respuesta = caches.match(event.request,{ cache: "no-store"}).then(res => {
  //     if(res){
  //       actualizaCacheStatico(CACHE_STATIC, event.request, CACHE_INMUTABLE);
  //       return res;
  //     }else{
  //       return fetch(event.request).then(newRes =>{
  //         return actualizaCacheDinamico(CACHE_DYNAMIC, event.request, newRes);
  //       });
  //     }
  //   });
  //   event.respondWith(respuesta)
   
  // })

self.addEventListener('fetch', event =>{
  let respuesta

  if (event.request.url.includes('/api')){
    respuesta = manejoApi(DINAMICO_CACHE, event.request)
  }else{
    respuesta = caches.match(event.request).then(res =>{
      if(res){
        actualizaCacheStatico(ESTATICO_CACHE, event.request, APP_SHELL_INMUTABLE);
        return res;
      }else{
        return fetch(event.request).then(newRes => {
            return actualizaCacheDinamico(DINAMICO_CACHE, event.request, newRes)
        })
      }
    })
  }
})
