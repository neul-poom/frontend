import './css/bucket.css'

function Bucket() {
    return (
        <div className="body-container">
            <div className="list-container">
                <div className="item-container">
                    <img className="image" src="https://image.msscdn.net/images/goods_img/20230313/3142574/3142574_16824927242761_320.jpg" alt="이미지"/>
                    <div className="lecture-info">
                        <div className="lecture-name">강의 이름</div>
                        <div className="price">가격</div>
                    </div>
                </div>
                <div className="item-container">
                    <img className="image" src="https://image.msscdn.net/images/goods_img/20230313/3142574/3142574_16824927242761_320.jpg" alt="이미지"/>
                    <div className="lecture-info">
                        <div className="lecture-name">강의 이름</div>
                        <div className="price">가격</div>
                    </div>
                </div>
                <div className="item-container">
                    <img className="image" src="https://image.msscdn.net/images/goods_img/20230313/3142574/3142574_16824927242761_320.jpg" alt="이미지"/>
                    <div className="lecture-info">
                        <div className="lecture-name">강의 이름</div>
                        <div className="price">가격</div>
                    </div>
                </div>
            </div>

            <div className="buy-container">
                <button className="coupon-button">쿠폰 선택</button>
                <div className="total-price">총 가격</div>
                <button className="purchase-button">구매하기</button>
            </div>
        </div>
    )
}

export default Bucket;
