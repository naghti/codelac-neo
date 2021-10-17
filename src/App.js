import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import React, { useEffect } from 'react';
import Test from './components/Test';

function App() {
  let a = [
    {
      text:'queastions1',
      answer:'answer1'
    },
    {
      text:'queastions2',
      answer:'answer2'
    },
  ]

  function nextAnswer(){
    
    if(userAnswer == count.answer)
      {setScore(++score)}

    setI(++i)
  
    if (i >= a.length) 
      {alert('ваш счет' + score)}
  
    setCount(a[i])

    console.log(score);
    console.log(userAnswer);
    console.log(count);
    console.log(i);
  }
  
  let 
      [userAnswer, setUserAnswer]      = useState(''),
      [score, setScore]                = useState(0),
      [i, setI]                        = useState(0),
      [count, setCount]                = useState(a[i]);

  return (
    <div>
      <Test count={count} fnc={setUserAnswer}  fncBtn={nextAnswer}/>
    </div>
  )
}

export default App;
