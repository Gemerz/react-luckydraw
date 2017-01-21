"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

var _Arc = require("./Arc");

var _Arc2 = _interopRequireDefault(_Arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wheel = function (_Component) {
    _inherits(Wheel, _Component);

    function Wheel() {
        _classCallCheck(this, Wheel);

        return _possibleConstructorReturn(this, (Wheel.__proto__ || Object.getPrototypeOf(Wheel)).apply(this, arguments));
    }

    _createClass(Wheel, [{
        key: "_processData",
        value: function _processData(range) {
            var array = [];
            for (var i = 0; i < range; i++) {
                array.push(100 / range);
            }
            return array;
        }
    }, {
        key: "render",
        value: function render() {

            var props = this.props;
            var transform = "translate(" + props.wheelSize / 2 + "," + props.wheelSize / 2 + ") rotate(-" + 180 / props.range + ")";
            var data = this._processData(props.range);
            var arcs = (0, _d.pie)()(data);
            var Pie = arcs.map(function (i, idx) {
                var colorIdx = idx > 19 ? idx % 20 : idx;
                return _react2.default.createElement(_Arc2.default, { key: idx,
                    innerRadius: props.innerRadius,
                    outerRadius: props.outerRadius,
                    startAngle: i.startAngle,
                    endAngle: i.endAngle,
                    showInnerLabels: props.showInnerLabels,
                    text: props.textArray[idx],
                    fill: _d.schemeCategory20[colorIdx],
                    stoke: props.stoke,
                    fontColor: props.fontColor,
                    fontSize: props.fontSize,
                    writingModel: props.writingModel
                });
            });
            return _react2.default.createElement(
                "svg",
                { width: props.wheelSize, height: props.wheelSize },
                _react2.default.createElement(
                    "g",
                    { transform: transform },
                    Pie
                )
            );
        }
    }]);

    return Wheel;
}(_react.Component);

Wheel.propTypes = {
    wheelSize: _react2.default.PropTypes.number.isRequired,
    range: _react2.default.PropTypes.number.isRequired,
    innerRadius: _react2.default.PropTypes.number,
    outerRadius: _react2.default.PropTypes.number,
    stoke: _react2.default.PropTypes.number,
    showInnerLabels: _react2.default.PropTypes.bool,
    textArray: _react2.default.PropTypes.array,
    fontColor: _react2.default.PropTypes.string,
    fontSize: _react2.default.PropTypes.string,
    writingModel: _react2.default.PropTypes.string

};
Wheel.defaultProps = {};
exports.default = Wheel;