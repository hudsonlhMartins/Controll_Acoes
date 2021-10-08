"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Negociacao;

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

            _export("Negociacao", Negociacao = function () {
                function Negociacao(data, quantidade, valor) {
                    _classCallCheck(this, Negociacao);

                    this._date = new Date(data.getTime()); // vai criar uma nova data com o valor que vc me passou
                    // vai guarda um objetoc não mais uma referencia assim não tem como alterar o valor
                    this._quantidade = quantidade;
                    this._valor = valor;
                    this.volume = this.obtemVolume;
                    Object.freeze(this);
                }

                _createClass(Negociacao, [{
                    key: "obtemVolume",
                    get: function get() {
                        return this._quantidade * this._valor;
                    }
                }, {
                    key: "date",
                    get: function get() {
                        return new Date(this._date.getTime());
                        // ao inves de manda uma revelencia de _date
                        // eu estou mandando um novo object 
                        // Esta criando uma nova data com a data que user passou, um novo object
                    }
                }, {
                    key: "quantidade",
                    get: function get() {
                        return this._quantidade;
                    }
                }, {
                    key: "valor",
                    get: function get() {
                        return this._valor;
                    }
                }]);

                return Negociacao;
            }());

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map