import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './CreateQuiz.css'; // Make sure to create a CSS file for your styles

export const CreateQuiz = () => {
  const [questions, setQuestions] = useState([
    { id: uuidv4(), text: "", answers: [{ id: uuidv4(), text: "" }], correctAnswer: "" }
  ]);

const [heading,setheading]=useState("");
const [passcode, setpasscode] = useState("")

const handleheadingChange=(head)=>{
  setheading(head);
}
const handlepassChange=(pass)=>{
  setpasscode(pass);
}



  const handleQuestionChange = (id, text) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === id ? { ...question, text } : question
      )
    );
  };

  const handleAnswerChange = (questionId, answerId, text) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => {
        if (question.id === questionId) {
          const updatedAnswers = question.answers.map(answer =>
            answer.id === answerId ? { ...answer, text } : answer
          );
          return { ...question, answers: updatedAnswers };
        }
        return question;
      })
    );
  };

  const handleCorrectAnswerChange = (questionId, answerId) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId ? { ...question, correctAnswer: answerId } : question
      )
    );
  };

  const addQuestion = () => {
    setQuestions([...questions, { id: uuidv4(), text: "", answers: [{ id: uuidv4(), text: "" }], correctAnswer: "" }]);
  };

  const addAnswer = (questionId) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: [...question.answers, { id: uuidv4(), text: "" }]
          };
        }
        return question;
      })
    );
  };

  const handleSubmit = () => {
    axios.post('http://localhost:9000/newquestions/newquestions', {
      heading:heading,
      passcode:passcode,
      questions:questions 
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error submitting the questions!", error);
      });
  };

  return (
    <div className="container">
      <h1>Add Questions and Answers</h1>
      <div  className="question-block">
          <input
            type="text"
            className="question-input"
            placeholder="Enter Heading Of Quiz"
            value={heading}
            onChange={(e) => handleheadingChange(e.target.value)}
          />
          <input
            type='number'
            className="question-input"
            placeholder="Enter Passcode Of Quiz"
            value={passcode}
            onChange={(e) => handlepassChange(e.target.value)}
          />
          </div>
      {questions.map((question) => (
        <div key={question.id} className="question-block">
          <input
            type="text"
            className="question-input"
            placeholder="Enter question"
            value={question.text}
            onChange={(e) => handleQuestionChange(question.id, e.target.value)}
          />
          {question.answers.map((answer) => (
            <div key={answer.id} className="answer-block">
              <input
                type="text"
                className="answer-input"
                placeholder="Enter answer"
                value={answer.text}
                onChange={(e) => handleAnswerChange(question.id, answer.id, e.target.value)}
              />
              <button
                className={`correct-answer-button ${question.correctAnswer === answer.id ? 'active' : ''}`}
                onClick={() => handleCorrectAnswerChange(question.id, answer.id)}
              >
                {question.correctAnswer === answer.id ? 'Correct Answer' : 'Set as Correct'}
              </button>
            </div>
          ))}
          <button
            className="add-answer-button"
            onClick={() => addAnswer(question.id)}
          >
            Add Another Answer
          </button>
        </div>
      ))}
      <button
        className="add-question-button"
        onClick={addQuestion}
      >
        Add Another Question
      </button>
      <button
        className="submit-button"
        onClick={handleSubmit}
      >
        Submit Questions and Answers
      </button>
    </div>
  );
};
