import { React, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.css';


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 후 실행
    applyLayoutStyles();
  }, []);

  const applyLayoutStyles = () => {
    // 각 슬라이드 항목에 CSS 적용
    document.querySelectorAll('.layout-item').forEach((item) => {
      item.style.display = 'flex';
      item.style.flexDirection = 'row';
      item.style.justifyContent = 'center';
      item.style.alignItems = 'center';
    });
  };

  useEffect(() => {
    // 컴포넌트가 마운트된 후 실행
    applyLayoutStyles();
  }, []);

  return (
    <div style={{ marginTop: '55px' }}>
      <Slider {...settings}>
        <div className="layout-item">
          <img src="https://cdn.inflearn.com/public/courses/326311/cover/7e5ce977-edea-4e65-a356-299c0a836cd7/%EB%8C%80%EC%84%B8%EB%8A%94%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20(Helm%ED%8E%B8)%202.jpg?w=420" />
        </div>
        <div className="layout-item">
          <img src="https://cdn.inflearn.com/public/course-325848-cover/eb1bbb3f-adec-4b2f-a295-c0799dae4b48?w=420" />
        </div>
        <div className="layout-item">
        <img src={"https://cdn.inflearn.com/public/courses/326544/cover/02f637a6-7369-4ab0-b638-3eccd9c339db/326544-eng.png?w=420"}/>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;



    // <div style={{marginTop: '55px'}}>
    //   <div className='layout-container'>
    //     <div className='layout-item'>
    //       <img src={"https://cdn.inflearn.com/public/courses/326311/cover/7e5ce977-edea-4e65-a356-299c0a836cd7/%EB%8C%80%EC%84%B8%EB%8A%94%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20(Helm%ED%8E%B8)%202.jpg?w=420"}/>
    //     </div>
    //     <div className='layout-item'>
    //     <img src={"https://cdn.inflearn.com/public/course-325848-cover/eb1bbb3f-adec-4b2f-a295-c0799dae4b48?w=420"}/>
    //     </div>
    //     <div className='layout-item'>
    //     <img src={"https://cdn.inflearn.com/public/courses/326544/cover/02f637a6-7369-4ab0-b638-3eccd9c339db/326544-eng.png?w=420"}/>
    //     </div>
    //   </div>
    // </div>