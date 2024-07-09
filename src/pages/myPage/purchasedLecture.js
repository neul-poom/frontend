import SideNav from "../../components/SideNav";
import '../css/myPage/lecture.css';

function PurchasedLecture() {
    return (
        <div className="mypage-layout">
            <SideNav/>
            <div className="mypage-content">
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>강사 이름</div>
                        <div>가격</div>
                    </div>
                </div>
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>강사 이름</div>
                        <div>가격</div>
                    </div>
                </div>
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>강사 이름</div>
                        <div>가격</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PurchasedLecture;