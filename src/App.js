import './App.css'
import { useState } from 'react'
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import data from './data/lecture.js'
import Main from './page/main.js'
import Signup from './page/signup.js'
import Login from './page/login.js'




function App(){

  let [lectures, setLectures] = useState(data);

  // console.log(lectures)
  return (
      <div className="App">
        <div>

          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">NeulPoom</Navbar.Brand>
              <Nav className="ms-auto">
                <Button variant="light">로그인</Button>{' '}
                <Button variant="light">회원가입</Button>{' '}
              </Nav>
            </Container>
          </Navbar>


          <Routes>
            <Route path="/" element={
              <Main lectures={lectures}/>
            }/>

          <Route path="/signup" element={
              <Signup/>
            }/>
          

          <Route path="/login" element={
              <Login/>
            }/>




          </Routes>

        </div>
      </div>
  );
}



export default App;