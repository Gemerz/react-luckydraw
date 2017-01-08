import React, {Component} from 'react';
import {schemeCategory20, pie, arc} from 'd3';


class Arc extends Component {

    static propTypes = {
        width: React.PropTypes.number.isRequired,
        data: React.PropTypes.array.isRequired,
    }

    render() {

        const arcs = pie()(this.props.data);
        console.log()
        const AT = arcs.map((i, idx) => {
            const Arc = arc()
                .innerRadius(50)
                .outerRadius(110)
                .startAngle(i.startAngle)
                .endAngle(i.endAngle);
            return (
                <g className="rd3" key={idx}>
                    <path d={Arc()}
                          fill={schemeCategory20[idx]}
                          stroke="20"/>
                </g>
            )

        })
        return (
            <svg width="500" height="500">
                <g transform="translate(225,200)">
                    {AT}
                </g>
            </svg>
        );
    }
}

export default Arc;
