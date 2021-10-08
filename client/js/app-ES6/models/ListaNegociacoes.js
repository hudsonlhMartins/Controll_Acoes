export class ListaNegociacao{
    constructor(){
        this._negociacoes = []
        // aqui vai receber a instanciacao da class Negociacao__
        // com os elemento do constrcutor
        
    }

    adicionar(negocicao){
        this._negociacoes.push(negocicao)
      
        // esse this._armatilha receber a function => __
        // this._NegociacoesView._update(model)
        // e no seu model, resebel o this dessa class a class em si

        // isso para que quando chmar o adicionar tbm chame o o _update
    }
    get negociacoes(){
        return [].concat(this._negociacoes)
    }

    esvazia(){
        this._negociacoes = []
     
    }
}