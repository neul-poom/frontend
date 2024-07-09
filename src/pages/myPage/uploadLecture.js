import SideNav from "../../components/SideNav";
import '../css/myPage/lecture.css';
// import ItemList from "../../components/ItemList";

function UploadLecture() {
    return (
        <div className="mypage-layout">
            <SideNav/>
            <div className="mypage-content">
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>사용자 이름</div>
                        <div>가격</div>
                    </div>
                </div>
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>사용자 이름</div>
                        <div>가격</div>
                    </div>
                </div>
                <div className="user-info">
                    <img className="thumbnail-image" src="thumbnail.jpg" alt="썸네일" />
                    <div className="lecture-details">
                        <div>강의 제목</div>
                        <div>사용자 이름</div>
                        <div>가격</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadLecture;