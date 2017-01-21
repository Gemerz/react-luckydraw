#react-luckydraw


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
                drawLimit={4}
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
wheelSize|number|1000|size of luckydraw Wheel

