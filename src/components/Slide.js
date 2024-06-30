import { React, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/Slide.css';


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
    <div className="layout-container">
      <Slider {...settings}>
        <div className="layout-image">
          <img src="https://cdn.inflearn.com/public/main_sliders/eac820ce-c6fd-47c9-908c-1a8693b50205/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20(6).png" />
        </div>
        <div className="layout-image">
          <img src="https://cdn.inflearn.com/public/main_sliders/fcc94361-15e2-4bd3-845e-fea6b7e7bcd8/TB_%ED%9E%88%EB%B0%B0_521.png" />
        </div>
        <div className="layout-image">
        <img src={"https://cdn.inflearn.com/public/main_sliders/fdfd9381-cce4-42ae-a051-ef86bae2feb3/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D3%E1%84%89%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB_521.webp"}/>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;