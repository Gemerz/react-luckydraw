import React, {Component} from "react";
import LuckyDraw from "./LuckyDraw";
import 'highlight.js/styles/googlecode.css'
import "./App.styl";
import "../lib/LuckyDraw.css";
import "./btn.css";
// import Highlight from 'react-highlight';
class App extends Component {

    render() {
        const textArrays =
            [
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
            ]

        return (
            <div className="App">
                <h1>React-luckydraw</h1>
                <h2>basic</h2>
                <LuckyDraw
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
                    writingModel={'lr'}
                    drawButtonLabel={'start'}
                    textArray={textArrays}
                    onSuccessDrawReturn={(drawNumber) => {
                        window.alert(textArrays[drawNumber])
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
