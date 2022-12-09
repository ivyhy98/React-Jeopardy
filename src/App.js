import './App.css';
import { useEffect, useState } from 'react';
import Score from './components/Score';
import Board from './components/Board';
import Answer from './components/Answer';

function App() {
  //set state to hold question
  const [question, setQuestion] = useState(null);
  const [reveal, setReveal] = useState(false); 

  const getQuestion = async () =>{
    try{
      setReveal(false)
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setQuestion(data[0]);
    }catch(err){
      console.log(err);
    };
  };

  useEffect(()=>{
    getQuestion();
  },[]);
  
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      {question? 
      <>
        <Score question={question} />
        <Board getQuestion={getQuestion} question={question} />
        <Answer question={question} reveal={reveal} setReveal={setReveal}/>
      </>
      : <>loading...</>}
      
    </div>
  );
}

export default App;
