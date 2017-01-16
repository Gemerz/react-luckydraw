import React, {Component} from "react";
import './Style/compass.styl'
import Wheel from './Wheel'
import Radium from 'radium'


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
        textArray: React.PropTypes.array

    }
    static defaultProps = {}


    _processColor() {

    }

    render() {

        const props = this.props
        console.log(props.size)

        return (
            <div>
                <div className="control__panel">
                    <div className="compass__container" style={{
                        ':hover': {
                            background: '#eee'
                        }

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
