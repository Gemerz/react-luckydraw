"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d = require("d3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arc = function (_Component) {
    _inherits(Arc, _Component);

    function Arc() {
        _classCallCheck(this, Arc);

        return _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).apply(this, arguments));
    }

    _createClass(Arc, [{
        key: "renderInnerLabel",
        value: function renderInnerLabel(props, Arc) {
            var midAngle = props.endAngle < Math.PI ? props.startAngle / 2 + props.endAngle / 2 : props.startAngle / 2 + props.endAngle / 2 + Math.PI;
            var textAngle = midAngle * 180 / Math.PI > 180 ? midAngle * 180 / Math.PI - 180 : midAngle * 180 / Math.PI;
            return _react2.default.createElement(
                "text",
                {
                    className: "rld-value",
                    transform: "translate(" + Arc.centroid() + ") rotate(" + textAngle + ")",
                    dy: ".45em",
                    style: {
                        shapeRendering: 'crispEdges',
                        textAnchor: 'middle',
                        writingMode: props.writingModel,
                        fontSize: props.fontSize,
                        fill: props.fontColor,
                        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
                    }
                },
                props.text
            );
        }
    }, {
        key: "render",
        value: function render() {
            var props = this.props;
            var Arc = (0, _d.arc)().innerRadius(props.innerRadius).outerRadius(props.outerRadius).startAngle(props.startAngle).endAngle(props.endAngle);

            return _react2.default.createElement(
                "g",
                { className: "rld-compass" },
                _react2.default.createElement("path", { d: Arc(),
                    fill: props.fill,
                    stroke: props.stoke
                }),
                props.showInnerLabels ? this.renderInnerLabel(props, Arc) : null
            );
        }
    }]);

    return Arc;
}(_react.Component);

Arc.propTypes = {
    text: _react2.default.PropTypes.string,
    startAngle: _react2.default.PropTypes.number,
    endAngle: _react2.default.PropTypes.number,
    innerRadius: _react2.default.PropTypes.number,
    outerRadius: _react2.default.PropTypes.number,
    labelTextRotate: _react2.default.PropTypes.number,
    stoke: _react2.default.PropTypes.number,
    showInnerLabels: _react2.default.PropTypes.bool,
    fontColor: _react2.default.PropTypes.string,
    fontSize: _react2.default.PropTypes.string,
    fontFamily: _react2.default.PropTypes.string,
    writingModel: _react2.default.PropTypes.string
};
exports.default = Arc;