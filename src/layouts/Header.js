import { Navbar, Nav, Button, Container } from "react-bootstrap"


function Header() {
    return (
        <>
          <Navbar className="header" bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">NeulPoom</Navbar.Brand>
              <Nav className="ms-auto">
                <Button variant="light">마이페이지</Button>{' '}
                <Button variant="light">장바구니</Button>{' '}
                <Button variant="light">로그인</Button>{' '}
                <Button variant="light">회원가입</Button>{' '}
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}

export default Header;