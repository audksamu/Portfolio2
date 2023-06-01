import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from '../home/Home';

function Layout() {
  return (
    <Router>

      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />       
        </Routes>
      </Container>
    </Router>
  );
}

export default Layout;
