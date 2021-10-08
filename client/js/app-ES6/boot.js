import { NegociacaoControllers } from "./controllers/NegociacaoControllrs";

let negociacaoControllers = new NegociacaoControllers()

document.querySelector('.form').onsubmit = negociacaoControllers.adicionar.bind(negociacaoControllers)
document.querySelector("[type= button]").onclick = negociacaoControllers.apagar.bind(negociacaoControllers)
// tem que colocar o.bind(negociacaocontrolers) pq se colocar sem ele ele pereder__
// o this o this vai no constesto do form etc.. por isso que colocamos bind__
// para manter o this no contesto do negociacaocontrolers.

