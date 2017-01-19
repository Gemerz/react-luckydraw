import React, {Component} from "react";
import Compass from "./compass";
import "./App.styl";
class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="luckdraw">
                    <Compass
                        size={1000}
                        range={30}
                        innerRadius={250}
                        outerRadius={500}
                        showInnerLabels
                        drawLimitSwitch
                        drawLimit={4}
                        fontColor={'#000'}
                        fontSize={'20px'}
                        writingModel={'tb'}
                        drawButtonLabel={'lucky it'}
                        onSuccessDrawReturn={(drawNumber) => {
                            console.log(drawNumber)
                        }}
                        textArray={
                            [
                                '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神',
                                '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神',
                                '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神'
                            ]}
                    />
                </div>

            </div>
        );
    }
}

export default App;
