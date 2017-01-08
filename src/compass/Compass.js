import React, {Component} from 'react';
import {schemeCategory20, pie, arc} from 'd3';


class Compass extends Component {

    static propTypes = {
        size: React.PropTypes.number.isRequired,
        range: React.PropTypes.number.isRequired
    }

    render() {
        let array = []
        const props = this.props

        for (var i = 0; i < props.range; i++) {
            array.push(100 / props.range)
        }
        const transform = `translate(${ props.size / 2},${ props.size / 2})`;
        console.log(transform)

        const arcs = pie()(array);
        const AT = arcs.map((i, idx) => {
            let colorIdx = idx > 19 ? idx % 20 : idx
            const Arc = arc()
                .innerRadius(props.size / 2 -300)
                .outerRadius(props.size / 2)
                .startAngle(i.startAngle)
                .endAngle(i.endAngle);
            return (
                <g className="rd3" key={idx}>
                    <path d={Arc()}
                          fill={schemeCategory20[colorIdx]}
                          stroke="20"/>
                </g>
            )

        })
        return (
            <svg width={this.props.size} height={this.props.size}>
                <g transform={transform}>
                    {AT}
                </g>
            </svg>
        );
    }
}

export default Compass;
