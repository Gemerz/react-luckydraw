import React, {Component} from "react";
import "./Style/compass.styl";
import Wheel from "./Wheel";
import Radium from "radium";


class Compass extends Component {

    static propTypes = {
        size: React.PropTypes.number.isRequired,
        range: React.PropTypes.number.isRequired,
        innerRadius: React.PropTypes.number,
        outerRadius: React.PropTypes.number,
        labelTextFill: React.PropTypes.string,
        valueTextFill: React.PropTypes.string,
        sectorBorderColor: React.PropTypes.string,
        stoke: React.PropTypes.number,
        showInnerLabels: React.PropTypes.bool,
        textArray: React.PropTypes.array,
        onRotate: React.PropTypes.func

    }
    static defaultProps = {}


    _processColor() {

    }

    render() {

        const props = this.props
        return (
            <div className="compass__container">
                <div className="control__panel">
                    <div className="compass__arrow">
                    </div>
                    <div className="compass__spin"
                         style={{
                             width: props.size + "px",
                             height: props.size + "px",
                             transform: ` rotate(-${180 / props.range}deg)`
                         }}>
                        <Wheel
                            {...props}
                        />
                    </div>
                </div>
            </div>

        );
    }

}

export default Radium(Compass);
