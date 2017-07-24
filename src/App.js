import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import sweetAlert from 'sweetalert';
import LuckyDraw from './LuckyDraw';
import 'sweetalert/dist/sweetalert.css';
import 'highlight.js/styles/googlecode.css';
import './App.styl';
import '../lib/LuckyDraw.css';
import './btn.css';
// import Highlight from 'react-highlight';


class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      currentTab: 0
    };
  }

  changeTab = function (key) {
    console.log(key);
    // this.setState({currentTab: key})
  };

  render() {
    const example2 = [
      'Hello',
      'world',
      'php',
      'is',
      'best',
      'language',
      'in',
      'the',
    ];
    const example3 = [
      'javascript is best language',
      'php is best language',
      'python is best language',
      'ruby is best language',
      'go is best language',
      'swift is best language',
      'dart is best language',
      'rust is best language',
      'C is best language',
      'C++ is best language',
      'lua is best language',
      'xml is best language',
      'html is best language',
      'Visual Basic .NET is best language',
      'Delphi/Object Pascal is best language',
      'C# is best language',
      'Objective-C is best language',
      'Assembly language is best language',
      'MATLAB is best language',
      'PL/SQL  is best language',
      'Scratch is best language',
      'R is best language',
      'Visual Basic is best language'
    ];
    const example4 = [
      'Big Prize 1',
      'Big Prize 2',
      'Big Prize 3',
      'Big Prize 4',
      'Big Prize 5',
      'Big Prize 6',
      'Big Prize 7',
      'Big Prize 8',
      'Big Prize 9',
      'Big Prize 10'
    ];
    return (
      <div className="App">
        <h1>React-luckydraw</h1>

        <Tabs selectedIndex={0}>
          <TabList>
            <Tab>based</Tab>
            <Tab>custom with charters</Tab>
            <Tab>vertical label</Tab>
            <Tab>effect with confetti</Tab>
          </TabList>

          <TabPanel>
            <h2>based</h2>
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
                sweetAlert('Got ' + (drawNumber + 1).toString(), 'Congratulations !', "success");
              }}
              onOutLimitAlert={limit => {
                if (limit) {
                  sweetAlert("Oops...", "out of limits!!", "error");
                }
              }}
            />

          </TabPanel>
          <TabPanel>
            <h2>custom with charters</h2>
            <LuckyDraw
              width={500}
              height={350}
              wheelSize={1000}
              range={8}
              innerRadius={250}
              outerRadius={500}
              showInnerLabels
              drawLimitSwitch
              drawLimit={4}
              fontColor={'#000'}
              fontSize={'20px'}
              writingModel={'lr'}
              drawButtonLabel={'start'}
              textArray={example2}
              onSuccessDrawReturn={drawNumber => {
                sweetAlert(example2[drawNumber], 'Congratulations !', "success");

              }}
              onOutLimitAlert={limit => {
                if (limit) {
                  sweetAlert("Oops...", "out of limits!!", "error");
                }
              }}
            />
          </TabPanel>

          <TabPanel>
            <h2>vertical label</h2>
            <LuckyDraw
              width={500}
              height={350}
              wheelSize={1000}
              range={20}
              innerRadius={250}
              outerRadius={500}
              showInnerLabels
              drawLimitSwitch
              drawLimit={4}
              fontColor={'#000'}
              fontSize={'14px'}
              writingModel={'tb'}
              drawButtonLabel={'start'}
              textArray={example3}
              onSuccessDrawReturn={drawNumber => {
                sweetAlert(example3[drawNumber], 'Congratulations !', "success");

              }}
              onOutLimitAlert={limit => {
                if (limit) {
                  sweetAlert("Oops...", "out of limits!!", "error");
                }
              }}
            />
          </TabPanel>

          <TabPanel>
            <h2>Effect with confetti</h2>

            <LuckyDraw
              width={500}
              height={350}
              wheelSize={1000}
              range={10}
              innerRadius={250}
              outerRadius={500}
              showInnerLabels
              drawLimitSwitch
              drawLimit={4}
              fontColor={'#000'}
              fontSize={'14px'}
              writingModel={'tb'}
              drawButtonLabel={'start'}
              textArray={example4}
              onSuccessDrawReturn={drawNumber => {

                sweetAlert(example4[drawNumber], 'Congratulations !', "success");

              }}
              onOutLimitAlert={limit => {
                if (limit) {
                  sweetAlert("Oops...", "out of limits!!", "error");
                }
              }}
            />
          </TabPanel>
        </Tabs>

      </div>
    );
  }
}

export default App;
