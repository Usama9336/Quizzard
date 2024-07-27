import React, { useState } from "react";
import axios from "axios";

const SurveyQuestion = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [questions, setQuestions] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await axios.post("/api/submit-answer", {
        answer: selectedOption,
      });

      if (response.data.success) {
        // Handle successful submission (e.g., show a success message)
        console.log("Answer submitted successfully!");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>1. A check line in a chain surveying?</h2>
      <form onSubmit={handleSubmit}>
        <div>
         <input
            type="text"
            placeholder="Enter question"
            value={question.text}
            onChange={e => handleQuestionChange(e.target.value)}
          />
          <input
            type="radio"
            id="option1"
            name="option"
            value="checks the accuracy of the framework"
            onChange={handleOptionChange}
            checked={selectedOption === "checks the accuracy of the framework"}
          />
          <label htmlFor="option1">
            checks the accuracy of the framework
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            name="option"
            value="enables the surveyor to locate the interior details which are far away from the main chain line"
            onChange={handleOptionChange}
            checked={
              selectedOption ===
              "enables the surveyor to locate the interior details which are far away from the main chain line"
            }
          />
          <label htmlFor="option2">
            enables the surveyor to locate the interior details which are far
            away from the main chain line
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            name="option"
            value="fixes up the directions of all other lines"
            onChange={handleOptionChange}
            checked={
              selectedOption === "fixes up the directions of all other lines"
            }
          />
          <label htmlFor="option3">
            fixes up the directions of all other lines
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="option4"
            name="option"
            value="all of the above"
            onChange={handleOptionChange}
            checked={selectedOption === "all of the above"}
          />
          <label htmlFor="option4">all of the above</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div>
          {errorMessage ? (
            <p className="error">{errorMessage}</p>
          ) : (
            <p>Answer submitted successfully!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyQuestion;