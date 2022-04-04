import { useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();

  return (
    <div>
      <h1>Form 🧮</h1>
      <h2>Question {questionNumber}</h2>
    </div>
  );
}

export default Survey;
