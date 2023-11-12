
function actualizaCacheDinamico(cacheDinamico, req, res){
    if(res.ok){
        return caches.open(cacheDinamico).then(cache =>{
            cache.put(req, res.clone());
            return res.clone();
        })
    }else{
        return res;
    }
}
function actualizaCacheStatico( estaticoCache, req, APP_SHELL_INMUTABLE){
    if(APP_SHELL_INMUTABLE.incluides(req.url)){

    }else{
        return fetch(req)
        .then(res => {
            return actualizaCacheDinamico(estaticoCache, req, res);
        })
    }
}

function manejoApi(cacheName,req){
    if(req.clone().method === 'POST'){
        if (self.registration.sync){
            return req.clone().text().then(body =>{
                const bodyObj = JSON.parse(body)
                return guardarMensaje(bodyObj)
            });           
        }else{
            return fetch(req);
        }
    }else{
        return fetch(req).then(res =>{
            if (res.ok){
                actualizaCacheDinamico(cacheName,req, res.clone())
                return res.clone()
            }else{
                return caches.match(req)
            }
        }).catch(err =>{
            return caches.match(req)
        })
    }
   
}