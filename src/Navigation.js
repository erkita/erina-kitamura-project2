import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Wordle</Nav.Link>
                            <Nav.Link href='/howToPlay'>How To Play</Nav.Link>
                            <Nav.Link href='/easy'>Easy</Nav.Link>
                            <Nav.Link href='/medium'>Medium</Nav.Link>
                            <Nav.Link href='/hard'>Hard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;