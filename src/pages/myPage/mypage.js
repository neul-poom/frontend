import SideNav from "../../components/SideNav";
import "../css/myPage/mypage.css";

function Mypage() {
  const userInfo = {
    id: "user123",
    name: "John Doe",
    type: "Premium",
    balance: 1000,
  };

  return (
    <div className="mypage-layout">
      <SideNav />
      <div className="mypage-content">
        <div className="user-info">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="profile-image"
          />
          <div className="user-details">
            <div>ID: {userInfo.id}</div>
            <div>이름: {userInfo.name}</div>
            <div>구분: {userInfo.type}</div>
            <div>잔액: ${userInfo.balance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
