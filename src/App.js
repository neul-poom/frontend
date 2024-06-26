import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import data from './data/lecture.js'
import Main from './pages/main.js'
import Signup from './pages/signup.js'
import Login from './pages/login.js'
import Mypage from './pages/mypage.js'

import Layout from './layouts/Layout.js'
import SimpleSlider from './components/Slide.js'

function App(){

  let [lectures, setLectures] = useState(data);

  // console.log(lectures)
  return (
      <div className="App">
        <div>
          <Layout>
            <Routes>
              <Route  path="/" element={
                <Main lectures={lectures}/>
              }/>
              <Route path="/signup" element={
                <Signup/>
              }/>
              <Route  path="/login" element={
                <Login/>
              }/>
              <Route path="/mypage" element={
                <Mypage/>
              }/>
              <Route path="/slide" element={
                <SimpleSlider/>
              }/>
            </Routes>
                      
          </Layout>

        </div>
      </div>
  );
}



export default App;