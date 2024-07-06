import { Outlet } from "react-router-dom";
import './css/detailLecture.css';
import { useParams, Link } from 'react-router-dom';

function DetailLecture(props) {
  let { id } = useParams();
  const lecture = props.lectures.find((l) => l.id == parseInt(id));

  console.log(lecture)
  if (!lecture) {
    return (
      <>
      Loading...</>
    )
  }

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div>
          <img src={lecture.lectureImage} width="300px" />
          <div>{lecture.title}</div>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <Link to={`/detailLecture/${lecture.id}/introduce`} state={{
            lecture : lecture
          }} className="nav-menu nav-link">강의 소개</Link>
          <Link to={`/detailLecture/${lecture.id}/note`} className="nav-menu nav-link">강의 노트</Link>
          <Link to={`/detailLecture/${lecture.id}/review`} className="nav-menu nav-link">리뷰</Link>
        </div>
        <hr />
        <Outlet/>
      </div>
    </div>
  );
}


export default DetailLecture;
