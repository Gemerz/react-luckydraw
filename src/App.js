import React, { Component } from 'react';
import LuckyDraw from './LuckyDraw';
import 'highlight.js/styles/googlecode.css';
import './App.styl';
import '../lib/LuckyDraw.css';
import './btn.css';
// import Highlight from 'react-highlight';
class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>React-luckydraw</h1>
        <nav>

          <a href=""><span>based</span></a>
          <a href=""><span>custom with charters</span></a>
          <a href="">basic</a>
        </nav>
        <div className="">
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
            ArabicLabel
            onSuccessDrawReturn={drawNumber => {
              window.alert(drawNumber);
            }}
            onOutLimitAlert={limit => {
              if (limit) {
                window.alert('out of limits');
              }
            }}
          />
        </div>

      </div>
    );
  }
}

export default App;
