export class FavoritosService {

    private db: Array<Object> = [];    

    salvar(filme:Object) {
        return new Promise( resolve => {
            this.buscarTodos()
                .then((res:Array<Object>) => {
                    res.push(filme)
                    let dbComoString = JSON.stringify(res);
                    localStorage.setItem('db', dbComoString);        
                    resolve(res);
                });
        })
    }

    buscarTodos() {
        return new Promise(resolve =>{
            let dbComoString = localStorage.getItem('db');
            if(dbComoString != null) resolve( JSON.parse(dbComoString));
            else resolve([]);
        })
    }

    teste() {
        console.log("service funcionando");
    }

}