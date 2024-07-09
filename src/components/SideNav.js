import { Nav } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import "./css/SideNav.css"

function SideNav(props) {
    let navigate = useNavigate();

    return (
    <div className="wrap"style={{height: "100%"}}>
        <div class="content">
            <div class="aside">
                <ul>
                    <div className="menu"><Nav.Link variant="light" onClick={() => { navigate('/mypage')}}>내 정보</Nav.Link></div>
                    
                    <div className="menu"><Nav.Link variant="light" onClick={() => { navigate('/purchasedlecture')}}>구매한 강의</Nav.Link></div>
                    
                    <div className="menu"><Nav.Link variant="light" onClick={() => { navigate('/likedlecture')}}>찜한 강의</Nav.Link></div>

                    <div className="menu"><Nav.Link variant="light" onClick={() => { navigate('/uploadlecture')}}>업로드한 강의</Nav.Link></div>
                    
                    <div className="menu"><Nav.Link variant="light" onClick={() => { navigate('/couponlist')}}>쿠폰 목록</Nav.Link></div>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default SideNav;