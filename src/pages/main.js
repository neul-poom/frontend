import { Row, Col,InputGroup, Button, Form } from 'react-bootstrap'
import SimpleSlider from '../components/Slide.js'
import axios from 'axios';
import { useEffect, useState } from 'react';
import data from '../data/lecture.js'
import { useNavigate, useParams } from 'react-router-dom';

function Main(){

    let navigate = useNavigate();

    const handleNavigateToDetail = (lecture) => {
        navigate(`/detaillecture/${lecture.id}`);
    };

    let [lectures, setLectures] = useState(data);
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/v1/lectures')
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div>
                <SimpleSlider/>
            </div>
            <div>
                <Row>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="배우고 싶은 지식을 입력해보세요."
                            aria-label="Recipient's study subject"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            🔎
                        </Button>
                    </InputGroup>
                </Row>
            </div>
            <div style={{ flex: 1 }}>
                <Row>
                {lectures.map((lecture, i) => (
                    <Card key={i} lecture={lecture} onNavigateToDetail={handleNavigateToDetail} />
                ))}
                </Row>
            </div>
        </div>
    )
}

function Card(props) {
    const { lecture, onNavigateToDetail } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        onNavigateToDetail(lecture);
    };

    return (
        <Col onClick={handleClick}>
            <img src={lecture.lectureImage} width="300px" />
            <h4>{lecture.title}</h4>
            <p>{lecture.teacherName}</p>
            <p>{lecture.price}원</p>
        </Col>
    )
}


export default Main;