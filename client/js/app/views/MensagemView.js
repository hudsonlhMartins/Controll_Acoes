class MensagemView extends View{
    constructor(elemento){
        super(elemento)
    }

    _template(model){
        return  model.texto ? `<p class="alert alert-primary" role="alert">${model.texto}</p>` : '<p></p>'
        // para como o valor padrao do texto e um string em branco então vai cair__
        // no false, como elatem conteudo e true então vai inicar oq esta apos ?
    }
    
}