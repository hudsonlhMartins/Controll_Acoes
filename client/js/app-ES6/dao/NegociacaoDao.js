import { Negociacao } from "../models/Negociacao"

export class negociacaoDao{
    constructor(connection){
        // essa connection e a connection do e.target.result openRequest do connectionFactory
        this._connection = connection
        this._store = 'negociacoes'
    }
    adicionar(negociacao){
        return new Promise ((resolve, reject)=>{
            let request = this._connection.transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .add(negociacao)
            
                request.onsuccess = e =>{
                    resolve()
                }
                request.onerror = e =>{
                    console.log(e.target.error)
                    reject('Não foi add no store')
                }
        })
    }
    listaTodos(){
        return new Promise ((resolve, reject)=>{
            let cursor = this._connection.transaction([this._store], 'readwrite')
            .objectStore(this._store)
            .openCursor()
        let negociacoes = []

        cursor.onsuccess = e =>{
            let atual = e.target.result
            if(atual){
                let dado = atual.value
                negociacoes.push(new Negociacao(dado._date, dado._quantidade, dado._valor))
                atual.continue()
            }else{
                resolve(negociacoes)
            }
        }
        cursor.onerror = e=>{
            console.log(e.target.error)
            reject('não foi posivel lista as negociacoes')
        }

        })
    }
    apagatodas(){
        return new Promise((resolve, reject)=>{
            let request = this._connection.transaction([this._store], 'readwrite')
            .objectStore(this._store)
            .clear()

            request.onsuccess = e =>{
                resolve('Negocições apagadas com sucesso!')
            }
            request.onerror = e => reject('Não foi possivel apaga as negociações')
        })
    }
}