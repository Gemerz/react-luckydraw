import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Compass from './compass';


class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Compass
                    size={1200}
                    range={30}
                />


                {/*<svg width="1200" height="1200">*/}
                {/*<g transform="translate(600,600)">*/}
                {/*{AT}*/}
                {/*</g>*/}
                {/*</svg>*/}
            </div>
        );
    }
}

export default App;
