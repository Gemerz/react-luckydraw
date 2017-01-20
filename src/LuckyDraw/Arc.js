import React, {Component} from "react";
import {arc} from "d3";

class Arc extends Component {

    static propTypes = {
        text: React.PropTypes.string,
        startAngle: React.PropTypes.number,
        endAngle: React.PropTypes.number,
        innerRadius: React.PropTypes.number,
        outerRadius: React.PropTypes.number,
        labelTextRotate: React.PropTypes.number,
        stoke: React.PropTypes.number,
        showInnerLabels: React.PropTypes.bool,
        fontColor: React.PropTypes.string,
        fontSize: React.PropTypes.string,
        fontFamily:React.PropTypes.string,
        writingModel: React.PropTypes.string
    }

    renderInnerLabel(props, Arc) {
        let midAngle = props.endAngle < Math.PI ? props.startAngle / 2 + props.endAngle / 2 : props.startAngle / 2 + props.endAngle / 2 + Math.PI;
        let textAngle = midAngle * 180 / Math.PI > 180 ? midAngle * 180 / Math.PI - 180 : midAngle * 180 / Math.PI;
        return (
            <text
                className="rld-value"
                transform={`translate(${Arc.centroid()}) rotate(${textAngle })`}
                dy=".45em"
                style={{
                    shapeRendering: 'crispEdges',
                    textAnchor: 'middle',
                    writingMode: props.writingModel,
                    fontSize: props.fontSize,
                    fill: props.fontColor,
                    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
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
