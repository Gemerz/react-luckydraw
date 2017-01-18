import React, {Component} from "react";
import Compass from "./compass";
import './App.styl'
class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="luckdraw">

                    <Compass className="compass__container"
                             size={800}
                             range={30}
                             innerRadius={200}
                             outerRadius={400}
                    />

                </div>

            </div>
        );
    }
}

export default App;
