import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

export default function Quiz() {
  const [clientscore, setClientscore] = useState([]);
  const [quesdata, setQuesdata] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const myData = JSON.parse(localStorage.getItem('myData'));
  const { passcode } = useParams();
  const [inputPasscode, setInputPasscode] = useState('');
  const [open, setOpen] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const res = await axios.get("http://localhost:9000/score/score");
        setClientscore(res.data);
        console.log('Fetched Scores:', res.data);
      } catch (err) {
        console.log('Error fetching scores:', err);
      }
    };
    fetchScore();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:9000/newquestions/newquestions");
      const filteredData = res.data.filter(quiz => quiz.passcode === passcode);
      setQuesdata(filteredData);
      console.log('Fetched Questions:', filteredData);
    } catch (err) {
      console.log('Error fetching questions:', err);
    }
  };

  useEffect(() => {
    if (passcode) {
      fetchQuestions();
    }
  }, [passcode]);

  const handlePasscodeSubmit = async () => {
    await fetchQuestions();
    if (quesdata.length > 0 && quesdata[0].questions.length > 0) {
      setOpen(false);
    } else {
      setError('Incorrect passcode. Please try again.');
    }
  };

  const sendNext = (p) => {
    if (quesdata[0]?.questions[p].answers.some(ans => ans.text === selectedOption)) {
      setScore(score + 100);
    }
    setI(p + 1);
  };

  const sendToDb = async () => {
    const saveUser = {
      username: myData.presentname,
      score: score,
    };
    try {
      const res = await axios.post("http://localhost:9000/score/score", saveUser);
      console.log('Saved to DB:', res.data);
    } catch (err) {
      console.log('Error saving score:', err);
    }
  };

  const loggingout = () => {
    localStorage.clear();
    navigate('/');
  };

  const len = quesdata.length > 0 ? quesdata[0]?.questions.length : 0;

  return (
    <div className='flex'>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Enter Passcode</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Passcode"
            type="password"
            fullWidth
            value={inputPasscode}
            onChange={(e) => setInputPasscode(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePasscodeSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <div className='h-screen bg-gradient-to-r rounded-xl from-violet-500 to-fuchsia-500 shadow-2xl w-[20%] p-4'>
        <div className='bg-blue-500 text-white rounded-md p-4 mb-4'>
          <p className='text-2xl text-center'>{myData.presentname}</p>
          <p className='text-lg text-center'>Score: {score}</p>
        </div>

        {clientscore.length > 0 ? clientscore.map((data) => (
          <div className='bg-green-500 text-white rounded-md p-2 mb-2' key={data.username}>
            <p className='text-xl text-center'>{data.username}</p>
            <p className='text-lg text-center'>Score: {data.score}</p>
          </div>
        )) : <p className='text-lg text-center text-white'>No scores available</p>}
      </div>

      <div className='h-screen w-[80%] p-8'>
        <div className='flex justify-between mb-4'>
          <div></div>
          <button className='border-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md p-2 hover:opacity-80 text-lg text-white' onClick={loggingout}>
            LogOut
          </button>
        </div>
        {i < len ?
          <div className='flex flex-col items-center'>
            <p className='text-2xl font-bold mb-4'>Question {`${i + 1}`}:</p>
            <div className='w-full max-w-2xl'>
              <p className='text-xl mb-4'>{quesdata[0]?.questions[i].text}</p>
              {quesdata[0].questions[i]?.answers.map((ans) => (
                <div className='mb-2' key={ans.text}>
                  <input
                    type="radio"
                    id={ans.text}
                    name="option"
                    value={ans.text}
                    checked={selectedOption === ans.text}
                    onChange={() => setSelectedOption(ans.text)}
                    className='mr-2'
                  />
                  <label htmlFor={ans.text} className='text-lg'>{ans.text}</label>
                </div>
              ))}
              <button className='text-white border-0 rounded-md p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-80 mt-4' type='button' onClick={() => sendNext(i)}>
                Submit
              </button>
            </div>
          </div> :
          <div className='text-center p-16'>
            <p className='text-2xl mb-4'>Congratulations! You have completed the Quiz with Score: {score}</p>
            <button className='text-white border-0 rounded-md p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-80' onClick={sendToDb}>
              Click Here to Save Your Score
            </button>
          </div>
        }
      </div>
    </div>
  );
}
