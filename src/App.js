import React, {Component} from "react";
import Compass from "./compass";
import './App.styl'
class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="luckdraw">

                    <Compass className="compass__container"
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
