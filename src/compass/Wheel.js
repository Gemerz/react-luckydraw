import React, {Component} from "react";
import {schemeCategory20, pie} from "d3";
import Arc from "./Arc";
import "./Style/compass.styl";

class Wheel extends Component {

    static propTypes = {
        size: React.PropTypes.number.isRequired,
        range: React.PropTypes.number.isRequired,
        innerRadius: React.PropTypes.number,
        outerRadius: React.PropTypes.number,
        stoke: React.PropTypes.number,
        showInnerLabels: React.PropTypes.bool,
        textArray: React.PropTypes.array,
        fontColor: React.PropTypes.string,
        fontSize: React.PropTypes.string,
        writingModel: React.PropTypes.string

    }
    static defaultProps = {}

    _processData(range) {
        let array = []
        for (var i = 0; i < range; i++) {
            array.push(100 / range)
        }
        return array
    }

    render() {

        const props = this.props
        const transform = `translate(${ props.size / 2},${ props.size / 2}) rotate(-${180 / props.range})`;
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
                     showInnerLabels={props.showInnerLabels}
                     text={props.textArray[idx]}
                     fill={schemeCategory20[colorIdx]}
                     stoke={props.stoke}
                     fontColor={props.fontColor}
                     fontSize={props.fontSize}
                     writingModel={props.writingModel}
                />
            )

        })
        return (
            <svg width={props.size} height={props.size}>
                <g transform={transform}>
                    {Pie}
                </g>
            </svg>
        );
    }
}

export default Wheel;
