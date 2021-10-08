'use strict';

System.register(['./HttpService', '../models/Negociacao'], function (_export, _context) {
    "use strict";

    var HttpService, Negociacao, _createClass, negociacaoServer;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_HttpService) {
            HttpService = _HttpService.HttpService;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
        }],
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

            _export('negociacaoServer', negociacaoServer = function () {
                function negociacaoServer() {
                    _classCallCheck(this, negociacaoServer);

                    this._http = new HttpService();
                }

                _createClass(negociacaoServer, [{
                    key: 'obtemNegociacaodaSemana',
                    value: function obtemNegociacaodaSemana() {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            _this._http.get('negociacoes/semana').then(function (negociaçoes) {
                                resolve(negociaçoes.map(function (objeto) {
                                    return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                                }));
                            }).catch(function (erro) {
                                console.log(erro);
                                reject('error ao adicionar lista da semana');
                            });
                        });
                    }
                }, {
                    key: 'obtemNegociacaodaSemanaAnterior',
                    value: function obtemNegociacaodaSemanaAnterior() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            _this2._http.get('negociacoes/anterior').then(function (negociaçoes) {
                                resolve(negociaçoes.map(function (objeto) {
                                    return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                                }));
                            }).catch(function (erro) {
                                console.log(erro);
                                reject('não foi posivel adiciona a lista da semana anterior');
                            });
                        });
                    }
                }, {
                    key: 'obtemNegociacaodaSemanaRetrasada',
                    value: function obtemNegociacaodaSemanaRetrasada() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            _this3._http.get('negociacoes/retrasada').then(function (negociacoes) {
                                resolve(negociacoes.map(function (objeto) {
                                    return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                                }));
                            }).catch(function (erro) {
                                console.log(erro);
                                reject('não foi posivel add a lista da semana retrasada');
                            });
                        });
                    }
                }]);

                return negociacaoServer;
            }());

            _export('negociacaoServer', negociacaoServer);
        }
    };
});
//# sourceMappingURL=negociacaoServer.js.map