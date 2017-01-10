import React, {Component} from 'react';
import './App.css';

import Compass from './compass';


class App extends Component {

    render() {

        return (
            <div className="App">
               <div className="control__panel">
                   <Compass
                       size={1200}
                       range={30}
                       innerRadius={400}
                       outerRadius={600}
                   />
               </div>

            </div>
        );
    }
}

export default App;
