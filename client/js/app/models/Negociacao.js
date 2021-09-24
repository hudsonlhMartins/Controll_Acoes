class Negociacao{
    constructor(data, quantidade, valor){
        this._date = new Date(data.getTime()) // vai criar uma nova data com o valor que vc me passou
        // vai guarda um objetoc não mais uma referencia assim não tem como alterar o valor
        this._quantidade = quantidade
        this._valor = valor
        this.volume = this.obtemVolume
        Object.freeze(this)
    }
    get obtemVolume(){
        return this._quantidade * this._valor
    }
    get date(){
        return new Date(this._date.getTime())
        // ao inves de manda uma revelencia de _date
        // eu estou mandando um novo object 
        // Esta criando uma nova data com a data que user passou, um novo object
    }
    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }
}