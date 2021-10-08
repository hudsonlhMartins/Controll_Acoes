'use strict';

System.register(['../models/Mensagem', '../models/ListaNegociacoes', '../models/Negociacao', '../services/connectionFactory', '../helpers/Bind', '../helpers/DateHelper', '../services/negociacaoServer', '../views/NegociacoesViews', '../views/MensagemView', '../dao/NegociacaoDao'], function (_export, _context) {
    "use strict";

    var Mensagem, ListaNegociacao, Negociacao, ConnectionFactory, Bind, DateHelper, negociacaoServer, NegociacoesView, MensagemView, negociacaoDao, _createClass, NegociacaoControllers;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_modelsListaNegociacoes) {
            ListaNegociacao = _modelsListaNegociacoes.ListaNegociacao;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
        }, function (_servicesConnectionFactory) {
            ConnectionFactory = _servicesConnectionFactory.ConnectionFactory;
        }, function (_helpersBind) {
            Bind = _helpersBind.Bind;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
        }, function (_servicesNegociacaoServer) {
            negociacaoServer = _servicesNegociacaoServer.negociacaoServer;
        }, function (_viewsNegociacoesViews) {
            NegociacoesView = _viewsNegociacoesViews.NegociacoesView;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_daoNegociacaoDao) {
            negociacaoDao = _daoNegociacaoDao.negociacaoDao;
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

            _export('NegociacaoControllers', NegociacaoControllers = function () {
                function NegociacaoControllers() {
                    var _this = this;

                    _classCallCheck(this, NegociacaoControllers);

                    var $ = document.querySelector.bind(document);
                    this._inputDate = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');

                    this._listaNegocicoes = new Bind(new ListaNegociacao(), new NegociacoesView($('#negociacoes_viwes')), 'adicionar', 'esvazia');

                    this._messangem = new Bind(new Mensagem(), new MensagemView($('#messagemView')), 'texto');

                    ConnectionFactory.getConeection().then(function (connection) {
                        return new negociacaoDao(connection);
                    }).then(function (dao) {
                        return dao.listaTodos();
                    }).then(function (negociacoes) {
                        negociacoes.forEach(function (negociacao) {
                            _this._listaNegocicoes.adicionar(negociacao);
                        });
                    }).catch(function (erro) {
                        console.log(erro);
                        _this._messangem.texto = erro;
                    });
                }

                _createClass(NegociacaoControllers, [{
                    key: 'adicionar',
                    value: function adicionar(event) {
                        var _this2 = this;

                        event.preventDefault();

                        ConnectionFactory.getConeection().then(function (conection) {
                            var negociacao = _this2._criarNegociacao();
                            new negociacaoDao(conection).adicionar(negociacao).then(function () {
                                _this2._listaNegocicoes.adicionar(negociacao);
                                _this2._limpaFormulario();
                                _this2._messangem.texto = 'Item adicionado com sucesso';
                            });
                        }).catch(function (erro) {
                            return _this2._messangem.texto = erro;
                        });
                    }
                }, {
                    key: 'importaNegociacaoes',
                    value: function importaNegociacaoes() {
                        var _this3 = this;

                        var server = new negociacaoServer();

                        server.obtemNegociacaodaSemana().then(function (negociacoes) {
                            return negociacoes.filter(function (negocicao) {
                                return !_this3._listaNegocicoes.negociacoes.some(function (negociacaoExistente) {
                                    return JSON.stringify(negocicao) == JSON.stringify(negociacaoExistente);
                                });
                            });
                        });

                        Promise.all([server.obtemNegociacaodaSemana(), server.obtemNegociacaodaSemanaAnterior(), server.obtemNegociacaodaSemanaRetrasada()]).then(function (negociacoes) {
                            console.log(negociacoes);
                            // esse negociacoes vai vim um array dentro dele tem 3 array com negocicoes
                            // por isso usando o reduce para colocar esse 3 array em um só
                            negociacoes.reduce(function (arrayAchatado, array) {
                                return arrayAchatado.concat(array);
                            }, []
                            // array em branco e como o primeiro parametro vai comecar__
                            // segundo parametro e o array que estamos varrendo
                            ).forEach(function (negociacao) {
                                return _this3._listaNegocicoes.adicionar(negociacao);
                            });
                        }).catch(function (erro) {
                            return _this3._messangem.texto = erro;
                        });
                    }
                }, {
                    key: 'apagar',
                    value: function apagar() {
                        var _this4 = this;

                        ConnectionFactory.getConeection().then(function (connection) {
                            return new negociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.apagatodas();
                        }).then(function (mensagem) {
                            _this4._messangem.texto = mensagem;
                            _this4._listaNegocicoes.esvazia();
                        }).catch(function (erro) {
                            console.log(erro);
                        });
                    }
                }, {
                    key: '_criarNegociacao',
                    value: function _criarNegociacao() {
                        return new Negociacao(DateHelper.stringToDate(this._inputDate.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    }
                }, {
                    key: '_limpaFormulario',
                    value: function _limpaFormulario() {
                        this._inputDate.value = '';
                        this._inputQuantidade.value = 1;
                        this._inputValor.value = 0.0;

                        this._inputDate.focus();
                    }
                }]);

                return NegociacaoControllers;
            }());

            _export('NegociacaoControllers', NegociacaoControllers);
        }
    };
});
//# sourceMappingURL=NegociacaoControllrs.js.map