import '../css/detailLecture/introduceLecture.css';
import { useLocation } from 'react-router-dom';

function Introduce(props) {
    const location = useLocation();
    let lecture = location.state.lecture

    return (
        <div className="lecture-container">
            <div className="lecture-title">{lecture.title}</div>
            <div className="lecture-teacher">{lecture.teacherName}</div>
            <div className="lecture-price">{lecture.price}원</div>
            <div className="lecture-explain">{lecture.explain}</div>
        </div>
    )
}

export default Introduce;