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
        stoke: React.PropTypes.number,
        showInnerLabels: React.PropTypes.bool,
        drawLimitSwitch: React.PropTypes.bool,
        drawLimit: React.PropTypes.number,
        textArray: React.PropTypes.array,
        fontColor: React.PropTypes.string,
        fontSize: React.PropTypes.string,
        writingModel: React.PropTypes.string,
        drawButtonLabel: React.PropTypes.string,
    }
    static defaultProps = {
        size: 800,
        stoke: 20,
        range: 20,
        turns: 2,
        rotateSecond: 5,
        drawLimit: 3,
        drawLimitSwitch: false,
        fontColor: '#000',
        fontSize: '18px',
        writingModel: 'tb',
        drawButtonLabel: 'Start'
    }

    constructor(props) {
        super(props)

        this.state = {
            startDraw: false,
            drawTimes: 1,
            randomNumber: null
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

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
        let drawTime = this.state.drawTimes
        if (this.props.drawLimitSwitch && (drawTime - 1 < this.props.drawLimit)) {
            this.setState({
                startDraw: true,
                randomNumber: this._processRandomNumber(1, this.props.range),
                drawTimes: this.state.drawTimes + 1
            })
        } else {
            alert('out of limit')
        }
    }

    render() {
        const state = this.state
        const props = this.props
        let transformRotate = state.startDraw ? this._processDrawAngle(props.range, props.turns, state.drawTimes, state.randomNumber) : 0
        return (
            <div className="compass__container" style={{
                '&:after': {
                    animation: state.startDraw ? 'none' : ''
                }
            }}>
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
                        {props.drawButtonLabel}
                    </button>
                </div>
            </div>

        );
    }

}

export default Radium(Compass);
