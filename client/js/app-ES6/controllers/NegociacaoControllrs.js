import {Mensagem} from '../models/Mensagem'
import {ListaNegociacao} from '../models/ListaNegociacoes'
import {Negociacao} from '../models/Negociacao'
import {ConnectionFactory} from '../services/connectionFactory'
import {Bind} from '../helpers/Bind'
import {DateHelper} from '../helpers/DateHelper'
import {negociacaoServer} from '../services/negociacaoServer'
import {NegociacoesView} from '../views/NegociacoesViews'
import {MensagemView} from '../views/MensagemView'
import {negociacaoDao} from '../dao/NegociacaoDao'

export class NegociacaoControllers{
    constructor(){
         let $ = document.querySelector.bind(document)
         this._inputDate = $('#data')
         this._inputQuantidade = $('#quantidade')
         this._inputValor = $('#valor')
        
      
        this._listaNegocicoes = new Bind
            (new ListaNegociacao(), 
            new NegociacoesView($('#negociacoes_viwes')), 
            'adicionar', 'esvazia')

         
        this._messangem = new Bind(
            new Mensagem(), 
            new MensagemView($('#messagemView')),
            'texto')
        
        ConnectionFactory.getConeection().then(connection => new negociacaoDao(connection))
                .then(dao => dao.listaTodos())
                .then(negociacoes => {
                    negociacoes.forEach(negociacao =>{
                        this._listaNegocicoes.adicionar(negociacao)
                    })
                })
                .catch(erro =>{
                    console.log(erro)
                    this._messangem.texto = erro
                })
                
        
    }
    adicionar(event){
        event.preventDefault()
        
        ConnectionFactory.getConeection().then(conection =>{ 
            let negociacao = this._criarNegociacao()
            new negociacaoDao(conection)
            .adicionar(negociacao)
                .then(()=>{
                    this._listaNegocicoes.adicionar(negociacao)
                    this._limpaFormulario()
                    this._messangem.texto = 'Item adicionado com sucesso'
                })
        }).catch(erro => this._messangem.texto = erro)
        
    }

    importaNegociacaoes(){
        let server = new negociacaoServer()

        server
            .obtemNegociacaodaSemana()
            .then(negociacoes => 
                negociacoes.filter(negocicao => 
                    !this._listaNegocicoes.negociacoes.some(negociacaoExistente => 
                        JSON.stringify(negocicao)==JSON.stringify(negociacaoExistente))
                    ))
        

        Promise.all([server.obtemNegociacaodaSemana(),
                    server.obtemNegociacaodaSemanaAnterior(),
                    server.obtemNegociacaodaSemanaRetrasada()]
                    )
                    .then(negociacoes =>{
                        console.log(negociacoes)
// esse negociacoes vai vim um array dentro dele tem 3 array com negocicoes
// por isso usando o reduce para colocar esse 3 array em um só
                        negociacoes.reduce((arrayAchatado, array)=>
                                            arrayAchatado.concat(array),[]
        // array em branco e como o primeiro parametro vai comecar__
        // segundo parametro e o array que estamos varrendo
                        )
                        .forEach(negociacao => this._listaNegocicoes.adicionar(negociacao))
                    })
                    .catch(erro =>{
                        return this._messangem.texto =erro 
                    })
    }

    apagar(){

        ConnectionFactory.getConeection()
            .then(connection => new negociacaoDao(connection))
            .then(dao => dao.apagatodas())
            .then(mensagem => {
                this._messangem.texto = mensagem
                this._listaNegocicoes.esvazia()
            })
            .catch(erro => {
                console.log(erro)
            })
        

        
        
    }

    _criarNegociacao(){
        return new Negociacao(
            DateHelper.stringToDate(this._inputDate.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        ) 
    }

    _limpaFormulario(){
        this._inputDate.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputDate.focus()
    }
}