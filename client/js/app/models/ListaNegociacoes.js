"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaNegociacao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("ListaNegociacao", ListaNegociacao = function () {
                function ListaNegociacao() {
                    _classCallCheck(this, ListaNegociacao);

                    this._negociacoes = [];
                    // aqui vai receber a instanciacao da class Negociacao__
                    // com os elemento do constrcutor
                }

                _createClass(ListaNegociacao, [{
                    key: "adicionar",
                    value: function adicionar(negocicao) {
                        this._negociacoes.push(negocicao);

                        // esse this._armatilha receber a function => __
                        // this._NegociacoesView._update(model)
                        // e no seu model, resebel o this dessa class a class em si

                        // isso para que quando chmar o adicionar tbm chame o o _update
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {
                        this._negociacoes = [];
                    }
                }, {
                    key: "negociacoes",
                    get: function get() {
                        return [].concat(this._negociacoes);
                    }
                }]);

                return ListaNegociacao;
            }());

            _export("ListaNegociacao", ListaNegociacao);
        }
    };
});
//# sourceMappingURL=ListaNegociacoes.js.map