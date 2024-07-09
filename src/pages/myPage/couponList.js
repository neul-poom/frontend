import SideNav from "../../components/SideNav";
import React from 'react';
import '../css/myPage/couponList.css';

function CouponList() {
    const coupons = [
      {
        name: '10% 할인 쿠폰',
        code: 'ABCD1234',
        discount: 10,
        expirationDate: '2023-12-31',
        isUsed: false
      },
      {
        name: '20% 할인 쿠폰',
        code: 'EFGH5678',
        discount: 20,
        expirationDate: '2024-06-30',
        isUsed: true
      },
      {
        name: '30% 할인 쿠폰',
        code: 'IJKL9012',
        discount: 30,
        expirationDate: '2025-03-31',
        isUsed: false
      }
    ];
  
    return (
      <div className="mypage-layout">
        <SideNav />
        <div className="coupon-list-container">
          <div className="coupon-list-header">
            <div className="coupon-name">쿠폰 이름</div>
            <div className="coupon-code">쿠폰 코드</div>
            <div className="coupon-discount">할인율</div>
            <div className="coupon-expiration">만료일</div>
            <div className="coupon-status">사용 여부</div>
          </div>
          {coupons.map((coupon, index) => (
            <div className="coupon-list-item" key={index}>
              <div className="coupon-name">{coupon.name}</div>
              <div className="coupon-code">{coupon.code}</div>
              <div className="coupon-discount">{coupon.discount}%</div>
              <div className="coupon-expiration">{coupon.expirationDate}</div>
              <div className="coupon-status">{coupon.isUsed ? '사용됨' : '미사용'}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default CouponList;
