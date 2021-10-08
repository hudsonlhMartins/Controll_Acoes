'use strict';

System.register(['./View', '../helpers/DateHelper'], function (_export, _context) {
    "use strict";

    var View, DateHelper, _createClass, NegociacoesView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_View2) {
            View = _View2.View;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
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

            _export('NegociacoesView', NegociacoesView = function (_View) {
                _inherits(NegociacoesView, _View);

                function NegociacoesView(elemento) {
                    _classCallCheck(this, NegociacoesView);

                    return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento));
                }

                _createClass(NegociacoesView, [{
                    key: '_template',
                    value: function _template(model) {
                        return '<table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>Quantidade</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n            <Tbody>\n                ' + model.negociacoes.map(function (n) {
                            // n e cada item, cada item do array tem date valor quanntidade ..
                            return '\n                        <tr>\n                            <td>' + DateHelper.dateToString(n.date) + '</td>\n                            <td>' + n.quantidade + '</td>\n                            <td>' + n.valor + '</td>\n                            <td>' + n.volume + '</td>\n                        </tr>\n                         ';
                        }).join('') + '\n            </Tbody>\n            <tfoot>\n                <td colspan="3"> </td>\n                <td>\n                    ' + model.negociacoes.reduce(function (total, i) {
                            return total + i.volume;
                        }, 0.0) + '\n                </td>\n            </tfoot>\n        </table>\n        ';
                        // o model que no casso e o array, e o array esta recebendo a instaciacao da class__
                        // Negociacao, por isso que pode usar n.date pq esta indo na class Negocicao e pegando do date__
                        // pegando o volume que o elemento do constructor dele etc..
                    }
                }]);

                return NegociacoesView;
            }(View));

            _export('NegociacoesView', NegociacoesView);
        }
    };
});
//# sourceMappingURL=NegociacoesViews.js.map