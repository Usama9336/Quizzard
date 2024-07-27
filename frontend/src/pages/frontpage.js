import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AppBar, Toolbar, Typography, Button, Container, Paper, Grid, Card, CardContent, CardMedia, Modal,
  Backdrop, Fade, TextField, Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Pagecontent1 from '../components/pagecontent1';
import Pagecontent2 from '../components/pagecontent2';

const QuizFrontPage = () => {
  const navigate = useNavigate();
  const [quizpart, setQuizpart] = useState([]);
  const [open, setOpen] = useState(false); // State for controlling modal open/close
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get("http://localhost:9000/newquestions/newquestions");
        setQuizpart(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:9000/user/user");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      localStorage.setItem('myData', JSON.stringify({ presentname: username }));
      setOpen(false); // Close modal on successful login
      navigate('/'); // Navigate to quiz page
    } else {
      console.log("Invalid credentials");
      // Handle invalid login (show message, clear fields, etc.)
    }
  };

  const gotoquiz = (newpass) => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('myData');
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate(`/quiz/${newpass}`);
    } else {
      handleOpen(); // Open login modal if not logged in
    }
  };

  return (
    <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0'
        }}>
          <h1>QUIZZARD</h1>
        </div>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <ul style={{
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex'
          }}>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333'
              }}>For Schools</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333'
              }}>Plans</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333'
              }}>Solutions</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333'
              }}>Resources</a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a href="#" style={{
                textDecoration: 'none',
                color: '#333'
              }}>For Business</a>
            </li>
          </ul>
        </nav>
        {
        (localStorage.getItem('myData'))?'':<div style={{ display: 'flex' }}>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>Log in</Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate("/signup")}>Sign up</Button>
        </div>
        }
      </header>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>Welcome to the Ultimate Quiz</h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.5'
          }}>Test your knowledge and challenge yourself with our fun and interactive quiz!</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            <Button variant="contained" color="primary" onClick={() => handleOpen()}>Start Quiz</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate("/create")}>Create New Quiz</Button>
          </div>
        </div>

        <Container style={{
          maxWidth: '95%',
          overflowX: 'auto',
          marginTop: '30px',
          paddingBottom: '30px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid container spacing={4} style={{ display:'flex', justifyItems:'center',alignItems:'center',justifyContent:'center'
                   }}>
            {quizpart.map((quiz, index) => (
              <Grid item key={index}>
                <Card style={{ 
                  cursor: 'pointer',
                  height: '150'
                 }}>
                  <CardMedia
                    component="img"
                    alt={quiz.heading}
                    image="https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg"
                  />
                  <CardContent style={{ display:'flex', justifyItems:'center',alignItems:'center',justifyContent:'center'
                   }} >
                    <div>
                    <Typography variant="h5" component="div" style={{ display:'flex', justifyItems:'center',alignItems:'center',justifyContent:'center'
                   }}>
                      {quiz.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ display:'flex', justifyItems:'center',alignItems:'center',justifyContent:'center'
                   }}>
                      Passcode: {quiz.passcode}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => gotoquiz(quiz.passcode)}>Attempt Quiz</Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Login Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            backgroundColor: '#fff',
            border: '2px solid #000',
            boxShadow: 24,
            padding: 20
          }}>
            <Typography variant="h6" gutterBottom>
              LOGIN
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/signup")}
            >
              Not a User / Signup
            </Button>
          </Paper>
        </Fade>
      </Modal>
    </div>
    <Pagecontent1/>
    <Pagecontent2/>
    <footer style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        width:'100%'
      }}>
        <p>&copy; 2024 Quizzard. All rights reserved.</p>
      </footer>
  </>
  );
};

export default QuizFrontPage;
