import { Navbar, Nav, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


function Header() {

  let navigate = useNavigate();

    return (
        <>
          <Navbar className="header" bg="#39A7FF" data-bs-theme="light">
            <Container>
              <Navbar.Brand onClick={() => { navigate('/')}}>NeulPoom</Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link variant="light" onClick={() => { navigate('/mypage')}}>마이페이지</Nav.Link>
                <Nav.Link variant="light" onClick={() => { navigate('/bucket')}}>장바구니</Nav.Link>
                <Nav.Link variant="light" onClick={() => { navigate('/login')}}>로그인</Nav.Link>
                <Nav.Link variant="light" onClick={() => { navigate('/signup')}}>회원가입</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}

export default Header;