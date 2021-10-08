import {View} from './View'
import {DateHelper} from '../helpers/DateHelper'

export class NegociacoesView extends View{
    constructor(elemento){
        super(elemento)
        // aqui passando o dado que vai receber aqui para class pai.
    }
    _template(model){
        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>Quantidade</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <Tbody>
                ${model.negociacoes.map(n =>{
                    // n e cada item, cada item do array tem date valor quanntidade ..
                    return `
                        <tr>
                            <td>${DateHelper.dateToString(n.date)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                         `
                }).join('')}
            </Tbody>
            <tfoot>
                <td colspan="3"> </td>
                <td>
                    ${model.negociacoes.reduce((total, i) => total + i.volume, 0.0)}
                </td>
            </tfoot>
        </table>
        `
        // o model que no casso e o array, e o array esta recebendo a instaciacao da class__
        // Negociacao, por isso que pode usar n.date pq esta indo na class Negocicao e pegando do date__
        // pegando o volume que o elemento do constructor dele etc..
    }
}