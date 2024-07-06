import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main.js'
import Signup from './pages/signup.js'
import Login from './pages/login.js'
import Mypage from './pages/mypage.js'
import Bucket from './pages/bucket.js'
import Layout from './layouts/Layout.js'
import SimpleSlider from './components/Slide.js'
import UploadLecture from './pages/uploadLecture.js'
import PurchasedLecture from './pages/purchasedLecture.js'
import LikedLecture from './pages/likedLecture.js'
import Payment from './pages/payment.js'
import CouponList from './pages/couponList.js'
import DetailLecture from './pages/detailLecture.js'
import Review from './pages/detailLecture/reviewLecture.js'
import Introduce from './pages/detailLecture/introduceLecture.js'
import Note from './pages/detailLecture/noteLecture.js'
import data from './data/lecture.js'

function App(){
  return (
      <div className="App">
          <Layout>
            <div>
              <Routes>
                <Route  path="/" element={
                  <Main/>
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
                <Route path="/bucket" element={
                  <Bucket/>
                }/>
                <Route path="/uploadlecture" element={
                  <UploadLecture/>
                }/>
                <Route path="/purchasedlecture" element={
                  <PurchasedLecture/>
                }/>
                <Route path="/likedlecture" element={
                  <LikedLecture/>
                }/>
                <Route path="/couponlist" element={
                  <CouponList/>
                }/>
                <Route path="/payment" element={
                  <Payment/>
                }/>
                <Route path="/detaillecture/:id/*" element={<DetailLecture lectures={data} />}>
                  <Route path="introduce" element={<Introduce />} />
                  <Route path="note" element={<Note />} />
                  <Route path="review" element={<Review />} />
                </Route>
              </Routes>                
            </div>
          </Layout>
        </div>
  );
}



export default App;