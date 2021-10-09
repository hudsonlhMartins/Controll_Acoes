"use strict";

System.register(["./controllers/NegociacaoControllrs"], function (_export, _context) {
  "use strict";

  var NegociacaoControllers, negociacaoControllers;
  return {
    setters: [function (_controllersNegociacaoControllrs) {
      NegociacaoControllers = _controllersNegociacaoControllrs.NegociacaoControllers;
    }],
    execute: function () {
      negociacaoControllers = new NegociacaoControllers();


      document.querySelector('.form').onsubmit = negociacaoControllers.adicionar.bind(negociacaoControllers);
      document.querySelector("[type= button]").onclick = negociacaoControllers.apagar.bind(negociacaoControllers);
      document.querySelector("[type= import]").onclick = negociacaoControllers.importaNegociacaoes.bind(negociacaoControllers);

      // tem que colocar o.bind(negociacaocontrolers) pq se colocar sem ele ele pereder__
      // o this o this vai no constesto do form etc.. por isso que colocamos bind__
      // para manter o this no contesto do negociacaocontrolers.
    }
  };
});
//# sourceMappingURL=boot.js.map