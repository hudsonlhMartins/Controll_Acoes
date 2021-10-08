'use strict';

System.register(['../models/Negociacao'], function (_export, _context) {
    "use strict";

    var Negociacao, _createClass, negociacaoDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsNegociacao) {
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

            _export('negociacaoDao', negociacaoDao = function () {
                function negociacaoDao(connection) {
                    _classCallCheck(this, negociacaoDao);

                    // essa connection e a connection do e.target.result openRequest do connectionFactory
                    this._connection = connection;
                    this._store = 'negociacoes';
                }

                _createClass(negociacaoDao, [{
                    key: 'adicionar',
                    value: function adicionar(negociacao) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this._connection.transaction(_this._store, 'readwrite').objectStore(_this._store).add(negociacao);

                            request.onsuccess = function (e) {
                                resolve();
                            };
                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi add no store');
                            };
                        });
                    }
                }, {
                    key: 'listaTodos',
                    value: function listaTodos() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();
                            var negociacoes = [];

                            cursor.onsuccess = function (e) {
                                var atual = e.target.result;
                                if (atual) {
                                    var dado = atual.value;
                                    negociacoes.push(new Negociacao(dado._date, dado._quantidade, dado._valor));
                                    atual.continue();
                                } else {
                                    resolve(negociacoes);
                                }
                            };
                            cursor.onerror = function (e) {
                                console.log(e.target.error);
                                reject('não foi posivel lista as negociacoes');
                            };
                        });
                    }
                }, {
                    key: 'apagatodas',
                    value: function apagatodas() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                            request.onsuccess = function (e) {
                                resolve('Negocições apagadas com sucesso!');
                            };
                            request.onerror = function (e) {
                                return reject('Não foi possivel apaga as negociações');
                            };
                        });
                    }
                }]);

                return negociacaoDao;
            }());

            _export('negociacaoDao', negociacaoDao);
        }
    };
});
//# sourceMappingURL=NegociacaoDao.js.map