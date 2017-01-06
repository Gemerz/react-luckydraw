import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {schemeCategory20, pie, arc} from 'd3';


class App extends Component {

    render() {
        var data = [1, 1, 2, 3, 5, 8, 13, 21];
        let array = []
        for (var i = 0; i < 52; i++) {
            array.push(100 / 52)
        }
        const arcs = pie()(array);

        const AT = arcs.map((i, idx) => {
            const Arc = arc()
                .innerRadius(350)
                .outerRadius(600)
                .startAngle(i.startAngle)
                .endAngle(i.endAngle);
            let colorIdx = idx > 19 ? idx % 20 : idx
            console.log(colorIdx)
            return (
                <g className="pi" key={idx}>
                    <path d={Arc()}
                          fill={schemeCategory20[colorIdx]}
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
                <svg width="1200" height="1200">
                    <g transform="translate(600,600)">
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
