#react-luckydraw

[![Greenkeeper badge](https://badges.greenkeeper.io/Gemerz/react-luckydraw.svg)](https://greenkeeper.io/)
![](https://travis-ci.org/Gemerz/react-luckydraw.svg?branch=master)



## Installation

```js
$ npm install --save react-luckydraw
```

## Usage
``` javascript
import React from 'react';
import LuckyDraw from 'react-luckydraw';

// include styles
import 'react-luckydraw/lib/LuckyDraw.css';

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
             <LuckyDraw
                width={500}
                height={350}
                wheelSize={1000}
                range={10}
                innerRadius={250}
                outerRadius={500}
                showInnerLabels
                drawLimitSwitch
                drawLimit={5}
                fontColor={'#000'}
                fontSize={'20px'}
                writingModel={'tb'}
                drawButtonLabel={'start'}
                textArray={[
                    'Love you x1', 'Love you x2', 'Love you x3', 'Love you x4', 'Love you x5', 'Love you x6', 'Love you x7', 'Love you x8', 'Love you x9', 'Love you x10',
              ]}
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
        )
    }
}
```

## Props

Property|Type|Default|Description
---|---|---|---
width|number|500|width of luckydraw
height|number|350|height of luckydraw
wheelSize|number|width * 2|size of luckydraw Wheel
range|number|30|range of luckydraw
outerRadius|number|wheelSize/2|outerRadius of luckydraw Wheel
innerRadius|number|outerRadius/2|innerRadius of luckydraw Wheel
turns|number|3| Defines how many revolutions to rotate
rotateSecond|number|5| Define how many seconds to turn around
showInnerLabels|boolean|true|show Labels on luckydraw Wheel
drawLimitSwitch|boolean|true|a switch of drawing wheel limit
drawLimit|number|5|a limit for drawing times with wheel
fontColor|string|'black'|set color for label on wheel
fontSize|string|'18px'|set size for label on wheel
drawButtonLabel|string|'start'|set text for drawing button
textArray|array| - |set text array for wheel label
onSuccessDrawReturn|function| - |callback function for draw success with the draw number
onOutLimitAlert|function| - |callback function for limit times out


