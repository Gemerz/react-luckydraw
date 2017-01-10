import React, {Component} from "react";
import {arc} from "d3";

class Arc extends Component {

    static propTypes = {
        text: React.PropTypes.string,
        fill: React.PropTypes.string,
        startAngle: React.PropTypes.number,
        endAngle: React.PropTypes.number,
        innerRadius: React.PropTypes.number,
        outerRadius: React.PropTypes.number,
        labelTextFill: React.PropTypes.string,
        valueTextFill: React.PropTypes.string,
        stoke: React.PropTypes.number,
        sectorBorderColor: React.PropTypes.string,
        showInnerLabels: React.PropTypes.bool
    }

    renderInnerLabel(props, Arc) {
        return (
            <text
                className="rld-value"
                transform={`translate(${Arc.centroid()})`}
                dy=".45em"
                style={{
                    shapeRendering: 'crispEdges',
                    textAnchor: 'middle',
                    fill: props.valueTextFill,
                }}
            >
                {props.text}
            </text>
        );
    }

    render() {
        const props = this.props
        const Arc = arc()
            .innerRadius(props.innerRadius)
            .outerRadius(props.outerRadius)
            .startAngle(props.startAngle)
            .endAngle(props.endAngle);

        return (
            <g className="rld-compass">
                <path d={Arc()}
                      fill={props.fill}
                      stroke={props.stoke}
                />
                {props.showInnerLabels ? this.renderInnerLabel(props, Arc) : null}
            </g>
        );
    }
}

export default Arc
