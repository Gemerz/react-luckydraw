import React, {Component} from "react";
import Compass from "./compass";
import "./App.styl";
class App extends Component {

    render() {

        return (
            <div className="App">
                <h1>React-luckydraw</h1>

                    <Compass
                        width={500}
                        height={350}
                        wheelSize={1000}
                        range={30}
                        innerRadius={250}
                        outerRadius={500}
                        showInnerLabels
                        drawLimitSwitch
                        drawLimit={4}
                        fontColor={'#000'}
                        fontSize={'20px'}
                        writingModel={'tb'}
                        drawButtonLabel={'start'}
                        textArray={
                            [
                                'Love you', '龍馬精神', '再来一瓶', '送一个女朋友', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神',
                                '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神',
                                '再来一瓶', '龍馬精神', '再来一瓶', '龍馬精神', '再来一瓶', '龍馬精神', '新年快樂', '龍馬精神', '新年快樂', '龍馬精神'
                            ]
                        }
                        onSuccessDrawReturn={(drawNumber) => {
                            console.log(drawNumber)
                        }}
                        onOutLimitAlert={(limit) => {
                            if (limit) {
                                window.alert('out of limits')
                            }
                        }}

                    />
                </div>
        );
    }
}

export default App;
