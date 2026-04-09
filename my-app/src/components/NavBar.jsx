import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'

export default function NavBar({ cartCount }) {
  const location = useLocation()

  return (
    <Navbar className="site-navbar" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span> "Insert Logo" </span>   {/* change later */}
          <span className="brand-name">Asian Gifts</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" active={location.pathname === '/shop'}>
              Shop
            </Nav.Link>
            {/* cart icon with item count badge */}
            <Nav.Link as={Link} to="/cart" className="cart-link" active={location.pathname === '/cart'}>
              <BsCart3 size={20} />
              {cartCount > 0 && (
                <Badge bg="danger" pill className="cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
