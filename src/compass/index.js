import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {schemeCategory20, pie, arc} from 'd3';


class App extends Component {

    render() {
        var data = [1, 1, 2, 3, 5, 8, 13, 21];
        const arcs = pie()(data);
        console.log()
        const AT = arcs.map((i, idx) => {
            const Arc = arc()
                .innerRadius(50)
                .outerRadius(110)
                .startAngle(i.startAngle)
                .endAngle(i.endAngle);
            return (
                <g className="rd3">
                    <path d={Arc()}
                          fill={schemeCategory20[idx]}
                          stroke="20"/>
                </g>
            )

        })
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <svg width="500" height="500">
                    <g transform="translate(225,200)">
                        {AT}
                        {/*<g className="rd3">*/}
                        {/*<path d={Arc()}*/}
                        {/*fill={schemeCategory20[0]}*/}
                        {/*stroke="20"/>*/}
                        {/*</g>*/}
                    </g>
                </svg>
            </div>
        );
    }
}

export default App;
