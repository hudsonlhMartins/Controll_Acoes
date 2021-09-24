class ListaNegociacao{
    constructor(armadilha){
        this._negociacoes = []
        // aqui vai receber a instanciacao da class Negociacao__
        // com os elemento do constrcutor
        this._armadilha = armadilha
    }

    adicionar(negocicao){
        this._negociacoes.push(negocicao)
        this._armadilha(this)
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
        this._armadilha(this)
    }
}