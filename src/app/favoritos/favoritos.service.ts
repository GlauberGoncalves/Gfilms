export class FavoritosService {

    private db: Array<Object> = [];    

    salvar(filme:Object) {
        return new Promise( resolve => {
            this.buscarTodos()
                .then((res:Array<Object>) => {
                    res.map(obj => {
                        if(obj["id"] == filme["id"]){
                            resolve(null);
                        }
                    });

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

    buscaUm(id:number){
        return new Promise(resolve => {
            this.buscarTodos()
                .then( (res: Array<Object>) => {
                    res.map(obj => {
                        if(obj['id'] == id){                            
                            resolve(obj);
                        }
                    });
                    resolve(null);
                })
        })
    }

    remove(id:number){
        this.buscarTodos().then( (res:Array<any>) => {
            for(let i=0; i < res.length; i++){
                if(res[i].id == id){
                    res.splice(i,1);
                }
            }
            localStorage.setItem('db', JSON.stringify(res));
        })
    }

    teste() {
        console.log("service funcionando");
    }

}