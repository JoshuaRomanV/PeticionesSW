const db = new PouchDB('mensajes');

function guardarMensaje(mensaje){
    mensaje._id = new Date().toISOString();
    return db.put(mensaje).then(()=>{
    self.ServiceWorkerRegistration.sync.register('nuevopost');
    const newResp = {ok: true, office: true};
    return new Response(JSON.stringify(newResp));
    });
}

function postearMensajes(){
    const posteos = [];

    return db.allDocs({include_docs: true}).then(docs =>{
        docs.rows.forEach(row => {
            const doc = row.doc;
            const fetchPom = fetch('api',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(doc)
            }).then(res =>{
                
            })
        })
    })
}