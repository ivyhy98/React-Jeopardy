export default function Board({getQuestion, question}){
    return (
      <div className="board">
        <h3>Question: <span>{question.question}</span></h3>
        <button onClick={getQuestion}>Get New Question</button>
        <h3>Category: <span>{question.category.title}</span></h3>
        <h3>Points: <span>{question.value}</span></h3>
      </div>
    );
}