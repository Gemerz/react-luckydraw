import React, {Component} from "react";
import "./Style/compass.styl";
import "./Style/btn.css";
import Wheel from "./Wheel";
import Radium from "radium";


class Compass extends Component {

    static propTypes = {
        size: React.PropTypes.number.isRequired,
        range: React.PropTypes.number.isRequired,
        turns: React.PropTypes.number,
        innerRadius: React.PropTypes.number,
        outerRadius: React.PropTypes.number,
        labelTextFill: React.PropTypes.string,
        valueTextFill: React.PropTypes.string,
        sectorBorderColor: React.PropTypes.string,
        stoke: React.PropTypes.number,
        showInnerLabels: React.PropTypes.bool,
        textArray: React.PropTypes.array,
        startDraw: React.PropTypes.bool

    }
    static defaultProps = {
        size: 800,
        range: 20,
        turns: 2,
        rotateSecond: 5
    }

    constructor(props) {
        super(props)

        if (!('turns' in props) || !('rotateSecond' in props)) {
            props.turns = this.defaultProps.turns
            props.rotateSecond = this.defaultProps.rotateSecond
        }
        this.state = {
            startDraw: false,
            drawTimes: 1,
            randomNumber: null
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true
    // }
    _processRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    _processDrawAngle(range, turns, drawTimes, drawNumber) {
        const peer = 360 / range
        const totalAngle = 360 * turns * drawTimes + drawNumber * peer
        return totalAngle
    }

    _processDrawing(e) {
        e.preventDefault()
        this.setState({
            startDraw: true,
            randomNumber: this._processRandomNumber(1, this.props.range),
            drawTimes: this.state.drawTimes + 1
        })
    }

    render() {

        const state = this.state
        const props = this.props
        let transformRotate = state.startDraw ? this._processDrawAngle(props.range, props.turns, state.drawTimes, state.randomNumber) : 0
        console.log(state)
        return (
            <div className="compass__container">
                <div className="control__panel">
                    <div className="compass__arrow">
                    </div>
                    <div className="compass__spin"
                         style={{
                             width: props.size + "px",
                             height: props.size + "px",
                             transform: `rotate(${transformRotate}deg) translate3d(0,0,-1px)`,
                             transitionDuration: `${props.rotateSecond}s`
                         }}>
                        <Wheel
                            {...props}
                        />
                    </div>
                </div>
                <div className="compass__btn">
                    <button
                        className="bttn-jelly bttn-md bttn-danger"
                        onClick={(e) => {
                            this._processDrawing(e)
                        }}>
                        开始抽奖
                    </button>
                </div>
            </div>

        );
    }

}

export default Radium(Compass);
