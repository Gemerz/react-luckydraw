import React, {Component} from "react";
import {schemeCategory20, pie} from "d3";
import Arc from "./Arc";
import './Style/compass.styl'

class Wheel extends Component {

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
        onRotate:React.PropTypes.func

    }
    static defaultProps = {


    }

    _processData(range) {
        let array = []
        for (var i = 0; i < range; i++) {
            array.push(100 / range)
        }
        return array
    }

    _processColor() {

    }

    render() {

        const props = this.props
        const transform = `translate(${ props.size / 2},${ props.size / 2})`;
        const data = this._processData(props.range)
        const arcs = pie()(data);
        const Pie = arcs.map((i, idx) => {
            let colorIdx = idx > 19 ? idx % 20 : idx
            return (

                <Arc key={idx}
                     innerRadius={props.innerRadius}
                     outerRadius={props.outerRadius}
                     startAngle={i.startAngle}
                     endAngle={i.endAngle}
                     showInnerLabels
                     fill={schemeCategory20[colorIdx]}
                     stoke={20}
                />
            )

        })
        return (
            <svg width={props.size} height={props.size} onClick={props.onRotate}>
                <g transform={transform}>
                    {Pie}
                </g>
            </svg>
        );
    }
}

export default Wheel;
