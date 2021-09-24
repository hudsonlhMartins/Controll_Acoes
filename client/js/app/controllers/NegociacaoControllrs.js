class NegociacaoControllers{
    constructor(){
         let $ = document.querySelector.bind(document)
         this._inputDate = $('#data')
         this._inputQuantidade = $('#quantidade')
         this._inputValor = $('#valor')

         this._listaNegocicoes = new ListaNegociacao(model=>
            this._NegociacoesView._update(model)
           )

         this._NegociacoesView = new NegociacoesView($('#negociacoes_viwes'))
         this._NegociacoesView._update(this._listaNegocicoes)

         // passando o array que esta em listaNegociacao
        
         this._messangem = new Mensagem()
         this._messagemView = new MensagemView($('#messagemView'))
         this._messagemView._update(this._messangem)
    }
    adicionar(event){
        event.preventDefault()
    
        this._listaNegocicoes.adicionar(this._criarNegociacao())
        // não precisa chamar o  updtade pos ja instaciamos ele com a class. 
        this._NegociacoesView._update(this._listaNegocicoes)
        this._limpaFormulario()
        
        this._messangem.texto = 'Item adicionado com sucesso'
        this._messagemView._update(this._messangem)

        console.log(this._listaNegocicoes.negociacoes)
        // essa .negociacoes e um method da class ListaNegocicao que e so para read

    }

    apagar(){
        this._listaNegocicoes.esvazia()
        this._NegociacoesView._update(this._listaNegocicoes)

        this._messangem.texto ='Lista apagada'
        this._messagemView._update(this._messangem)
        
    }

    _criarNegociacao(){
        return new Negociacao(
            DateHelper.stringToDate(this._inputDate.value),
            this._inputQuantidade.value,
            this._inputValor.value
        ) 
    }

    _limpaFormulario(){
        this._inputDate.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputDate.focus()
    }
}