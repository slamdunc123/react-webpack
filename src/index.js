import React from 'react';
import ReactDOM from 'react-dom';

const hW1 = React.createElement('h3', null, 'Hello')
const hW2 = React.createElement('h3', null, 'Nice to meet you')
const div1 = React.createElement('div', null, hW1, hW2)

ReactDOM.render(
    div1,
    document.getElementById('app')
)