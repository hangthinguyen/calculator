import { useCallback, useEffect, useState } from 'react';

import './App.css';
import NumbersButtonsScreen from './Components/NumbersButtonsScreen/NumbersButtonsScreen'
import ResultScreen from './Components/ResultScreen/ResultScreen'

const BUTTON_TYPES = {
    NUMBER: 'number',
    CLEAR_INPUT: 'clear-input',
    MATH_OPERATOR: 'math-op',
    SIGNED_UNSIGNED: 'signed-unsigned',
    PERCENTAGE: 'percentage',
}

const App = () => {
  const [buttons, setButtons] = useState([
    {
        id: Math.random() * 1000,
        text: 'C',
        color: '#66A182',
        type: BUTTON_TYPES.CLEAR_INPUT,
    },
    {
        id: Math.random() * 1000,
        text: '+/-',
        color: '#66A182',
        type: BUTTON_TYPES.SIGNED_UNSIGNED,
    },
    {
        id: Math.random() * 1000,
        text: '%',
        color: '#66A182',
        type: BUTTON_TYPES.PERCENTAGE,
    },
    {
        id: Math.random() * 1000,
        text: '/',
        color: '#F96900',
        type: BUTTON_TYPES.MATH_OPERATOR,
    },
    {
        id: Math.random() * 1000,
        text: '1',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '2',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '3',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: 'X',
        color: '#F96900',
        type: BUTTON_TYPES.MATH_OPERATOR,
    },
    {
        id: Math.random() * 1000,
        text: '4',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '5',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '6',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '-',
        color: '#F96900',
        type: BUTTON_TYPES.MATH_OPERATOR,
    },
    {
        id: Math.random() * 1000,
        text: '7',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '8',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '9',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '+',
        color: '#F96900',
        type: BUTTON_TYPES.MATH_OPERATOR,
    },
    {
        id: Math.random() * 1000,
        text: '0',
        color: '#357266',
        type: BUTTON_TYPES.NUMBER,
    },
    {
        id: Math.random() * 1000,
        text: '.',
        color: '#357266'
    },
    {
        id: Math.random() * 1000,
        text: '=',
        color: '#F96900',
        equalBorder: '50px',
        equalWidth: '128px',
        equalArea: '5/3/span 1/span 2',
        type: BUTTON_TYPES.MATH_OPERATOR,
    },
])

const [input, setInput] = useState('')

const handleOnClick = useCallback((button) => {


  switch (button.type) {
    case BUTTON_TYPES.NUMBER:
        setInput(input + button.text)
        break;
    case BUTTON_TYPES.CLEAR_INPUT:
        setInput('');
        break;
    default:
        console.log('Case not handle')
        break;
  }
}, [input])

  return (
    <div className='App'>
        <ResultScreen input={input} />
        <NumbersButtonsScreen buttons={buttons} onClick={handleOnClick} />
    </div>
  )
}

export default App