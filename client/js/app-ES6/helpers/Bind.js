import {ProxyFactory} from '../services/ProxyFactory'

export class Bind{
    // esse ... sig todo que vier depos de view vai ser um array de props
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model, props, (model) =>
            view._update(model))
            
            view._update(model)

            return proxy
    // constructor pode denovel qualquer valor so colocar um return nele.
    }
}