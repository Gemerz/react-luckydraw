import React, {Component} from 'react';
import LuckyDraw from './LuckyDraw';
import 'highlight.js/styles/googlecode.css';
import './App.styl';
import '../lib/LuckyDraw.css';
import './btn.css';
// import Highlight from 'react-highlight';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class App extends Component {

  constructor(porps) {
    super(porps)
    this.state = {
      currentTab: 0
    }
  }

  changeTab = function (key) {
    console.log(key)
    // this.setState({currentTab: key})

  }

  render() {

    return (
        <div className="App">
          <h1>React-luckydraw</h1>

          <Tabs
              selectedIndex={0}
          >
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
                    window.alert(drawNumber);
                  }}
                  onOutLimitAlert={limit => {
                    if (limit) {
                      window.alert('out of limits');
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
                  textArray={[
                    'Hello', 'world', 'php', 'is',
                    'best', 'language', 'in', 'the', 'world'
                  ]}
                  onSuccessDrawReturn={drawNumber => {
                    window.alert(drawNumber);
                  }}
                  onOutLimitAlert={limit => {
                    if (limit) {
                      window.alert('out of limits');
                    }
                  }}
              />
            </TabPanel>

            <TabPanel>
              <h2>Hello from Baz</h2>
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
                  textArray={[
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
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                    'xml is best language',
                  ]}
                  onSuccessDrawReturn={drawNumber => {
                    window.alert(drawNumber);
                  }}
                  onOutLimitAlert={limit => {
                    if (limit) {
                      window.alert('out of limits');
                    }
                  }}
              />
            </TabPanel>

            <TabPanel>
              <h2>Hello from Baz</h2>
            </TabPanel>
          </Tabs>


        </div>
    );
  }
}

export default App;
