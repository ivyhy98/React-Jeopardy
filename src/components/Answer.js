export default function Answer({question, reveal, setReveal}){
    const answer = question.answer.replace("<i>", "").replace("</i>", "");
    return (
      <div className='answer'>
      {reveal ? <h2>{answer}</h2>: <></>}
        <button onClick={() => setReveal(true)}>Reveal Answer</button>
      </div>
    );
}