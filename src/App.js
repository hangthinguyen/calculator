import React from 'react';
import './App.css';
import NumbersButtonsScreen from './Components/NumbersButtonsScreen/NumbersButtonsScreen'
import ResultScreen from './Components/ResultScreen/ResultScreen'

const App = () => {
  return (
    <div className='App'>
        <ResultScreen />
        <NumbersButtonsScreen />
    </div>
  )
}

export default App