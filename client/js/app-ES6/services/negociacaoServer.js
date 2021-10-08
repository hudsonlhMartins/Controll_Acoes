import {HttpService} from './HttpService'
import {Negociacao} from '../models/Negociacao'



export class negociacaoServer{
    constructor(){
        this._http = new HttpService()
    }

    obtemNegociacaodaSemana(){
        
        return new Promise((resolve, reject)=>{
            this._http.get('negociacoes/semana')
            .then(negociaçoes =>{
                resolve(negociaçoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            }).catch(erro =>{
                console.log(erro)
                reject('error ao adicionar lista da semana')
            })
        })
    }

    obtemNegociacaodaSemanaAnterior(){

        return new Promise((resolve, reject)=>{
            this._http.get('negociacoes/anterior')
            .then(negociaçoes => {
                resolve(negociaçoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(erro =>{
                console.log(erro)
                reject('não foi posivel adiciona a lista da semana anterior')
            })
        })
        
    }

    obtemNegociacaodaSemanaRetrasada(){
        return new Promise((resolve, reject)=>{
            this._http.get('negociacoes/retrasada')
            .then(negociacoes =>{
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
            .catch(erro =>{
                console.log(erro)
                reject('não foi posivel add a lista da semana retrasada')
            })
        })
    }
}