"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Wheel = require("./Wheel");

var _Wheel2 = _interopRequireDefault(_Wheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LuckyDraw = function (_Component) {
    _inherits(LuckyDraw, _Component);

    function LuckyDraw(props) {
        _classCallCheck(this, LuckyDraw);

        var _this = _possibleConstructorReturn(this, (LuckyDraw.__proto__ || Object.getPrototypeOf(LuckyDraw)).call(this, props));

        _this.state = {
            startDraw: false,
            drawTimes: 1,
            randomNumber: null,
            rolling: false
        };
        return _this;
    }

    _createClass(LuckyDraw, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: "_processRandomNumber",
        value: function _processRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }, {
        key: "_processDrawAngle",
        value: function _processDrawAngle(range, turns, drawTimes, drawNumber) {
            var peer = 360 / range;
            var totalAngle = 360 * turns * drawTimes + drawNumber * peer;
            return totalAngle;
        }
    }, {
        key: "_processDrawing",
        value: function _processDrawing(e) {
            var _this2 = this;

            e.preventDefault();
            var drawTime = this.state.drawTimes;
            if (this.props.drawLimitSwitch && drawTime - 1 < this.props.drawLimit) {
                this.setState({
                    startDraw: true,
                    rolling: true,
                    randomNumber: this._processRandomNumber(1, this.props.range),
                    drawTimes: this.state.drawTimes + 1
                });
                setTimeout(function () {
                    _this2.setState({
                        rolling: false
                    });
                    _this2.props.onSuccessDrawReturn(_this2.state.randomNumber);
                }, this.props.rotateSecond * 1000);
            } else {
                this.props.onOutLimitAlert(true);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var state = this.state;
            var props = this.props;
            var transformRotate = state.startDraw ? this._processDrawAngle(props.range, props.turns, state.drawTimes, state.randomNumber) : 0;
            return _react2.default.createElement(
                "div",
                { className: "react_luckyDraw", style: {
                        width: props.width,
                        height: props.height
                    } },
                _react2.default.createElement(
                    "div",
                    { className: state.rolling ? 'compass__container rolling' : 'compass__container' },
                    _react2.default.createElement(
                        "div",
                        { className: "control__panel" },
                        _react2.default.createElement("div", { className: "compass__arrow" }),
                        _react2.default.createElement(
                            "div",
                            { className: "compass__spin",
                                style: {
                                    width: props.wheelSize + "px",
                                    height: props.wheelSize + "px",
                                    transform: "rotate(" + transformRotate + "deg) translate3d(0,0,-1px)",
                                    transitionDuration: props.rotateSecond + "s"
                                } },
                            _react2.default.createElement(_Wheel2.default, props)
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "compass__btn" },
                        _react2.default.createElement(
                            "button",
                            {
                                className: "bttn-jelly bttn-md bttn-danger",
                                onClick: function onClick(e) {
                                    _this3._processDrawing(e);
                                } },
                            props.drawButtonLabel
                        )
                    )
                )
            );
        }
    }]);

    return LuckyDraw;
}(_react.Component);

LuckyDraw.propTypes = {
    width: _react2.default.PropTypes.number.isRequired,
    height: _react2.default.PropTypes.number.isRequired,
    wheelSize: _react2.default.PropTypes.number.isRequired,
    range: _react2.default.PropTypes.number.isRequired,
    turns: _react2.default.PropTypes.number,
    innerRadius: _react2.default.PropTypes.number,
    outerRadius: _react2.default.PropTypes.number,
    stoke: _react2.default.PropTypes.number,
    showInnerLabels: _react2.default.PropTypes.bool,
    drawLimitSwitch: _react2.default.PropTypes.bool,
    drawLimit: _react2.default.PropTypes.number,
    textArray: _react2.default.PropTypes.array,
    fontColor: _react2.default.PropTypes.string,
    fontSize: _react2.default.PropTypes.string,
    writingModel: _react2.default.PropTypes.string,
    drawButtonLabel: _react2.default.PropTypes.string,
    onSuccessDrawReturn: _react2.default.PropTypes.func,
    onOutLimitAlert: _react2.default.PropTypes.func
};
LuckyDraw.defaultProps = {
    size: 800,
    stoke: 20,
    range: 20,
    turns: 3,
    rotateSecond: 5,
    drawLimit: 3,
    drawLimitSwitch: false,
    fontColor: '#000',
    fontSize: '18px',
    writingModel: 'tb',
    drawButtonLabel: 'Start'
};
exports.default = LuckyDraw;