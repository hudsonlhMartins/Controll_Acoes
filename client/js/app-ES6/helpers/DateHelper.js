export class DateHelper{
    constructor(){
        throw new Error('Essa class não pode ser instaciada')
        // caso o dev de um new DateHelper, vai aparecer esse error.
    }
    static stringToDate(texto){
        // isso e um expressão regular para fazer ela colocar ela entre / \d .... /
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw Error ('A data que tem que passa em aaa-mm-dd')
        // vai test(o parametro, se não estive como na expreção vai jogar um error)

        return new Date (...texto.split('-').map((item, index) => item - index %2))
      // esse texto vai receber this._inputDate.value
    }

    static dateToString(data){
        
          return  `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`
    }
}