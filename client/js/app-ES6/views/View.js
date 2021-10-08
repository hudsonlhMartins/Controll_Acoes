export class View{
    constructor(elemento){
        this._elemento = elemento
    }

    _template(model){
        throw new Error('tamplete tem que ser iniciada')
    }

    _update(model){
       this._elemento.innerHTML = this._template(model)
    }
}