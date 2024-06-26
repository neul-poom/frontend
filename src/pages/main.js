import { Row, Col,InputGroup, Button, Form } from 'react-bootstrap'
import SimpleSlider from '../components/Slide.js'


function Main(props){
    return (
        <div style={{marginTop: '55px'}}>
            <SimpleSlider/>
            <br/>
            <br/>
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
            <br/>
            <br/>
            <Row>
                {
                    props.lectures.map(function(lecture,i) {
                        return (
                            <Card key={i} lectures={lecture}/>
                        )
                    })
                }
            </Row>
        </div>
    )

}

function Card(props) {

    return (
        <Col>
            <img src={props.lectures.image} width="300px" />
            <h4>{props.lectures.title}</h4>
            <p>{props.lectures.teacher}</p>
            <p>{props.lectures.price}원</p>
        </Col>
    )
}

export default Main;