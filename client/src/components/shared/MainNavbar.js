import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => (
  // <nav>
  //   <ul>
  //     <li>Todo List</li>
  //     <Link to='/'>
  //       <li>Home</li>
  //     </Link>
  //     <Link to='/about'>
  //       <li>About</li>
  //     </Link>
  //     <Link to='/lists'>
  //       <li>Lists</li>
  //     </Link>
  //   </ul>
  // </nav>
  <Navbar>
    <Container>
      <Link 
        to='/'
      >
        <Navbar.Brand>TodoList</Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Link to='/'>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link to='/about'>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link to='/lists'>
            <Nav.Link>Lists</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MainNavbar;