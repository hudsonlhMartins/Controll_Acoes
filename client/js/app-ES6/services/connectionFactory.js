
    const stores = ['negociacoes']
    const version = 3
    const dbName = 'aluraframe'
    var connection = null
    var close = null
    export class ConnectionFactory{
        static getConeection(){
            return new Promise((resolve, reject)=>{
                let openRequest = window.indexedDB.open(dbName, version)
                openRequest.onupgradeneeded =(e)=>{
                    ConnectionFactory._createConnection(e.target.result)
                }
                openRequest.onsuccess=(e)=>{

                    if(!connection){
                        connection = e.target.result
                        close = connection.close.bind(connection)
                        connection.close = function(){
                            throw Error('Vc não pode chmamar a connection.close direto')
                        }
                    }
                        resolve(connection)
                }
                openRequest.onerror=(e)=>{
                    console.log(e.target.error)
                    reject(e.target.error.name)
                }
            })
        }

        static _createConnection(connection){
            stores.forEach(store =>{
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store)
                }
                connection.createObjectStore(store, {autoIncrement: true})
            })
        }
        static closeConnection(){
            close()
            connection = null
        }
    }

/*
    colocar a function entre parente (function(){})
    depois invoca ela com ()
    e estou dando o return na class para que eu possa usar quando__
    chamar a var ConnectionFactory, assim posso usar todas as prop da class
*/