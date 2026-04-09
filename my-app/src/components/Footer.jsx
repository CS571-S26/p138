import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="py-4 gy-3">
          <Col md={4}>
            <div className="footer-brand mb-2">
              <span> "Insert Logo" </span>               {/* change later */}
              <span className="brand-name">Asian Gifts</span>
            </div>
            <p style={{ fontSize: '0.875rem' }}>
              Bringing the beauty of Asian culture to your doorstep.
            </p>
          </Col>

          <Col md={4}>
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="footer-heading">Visit Us</h6>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.8' }}>
              Asian Gifts<br />
              Palmer Park Mall<br />
              NJ
            </p>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="mb-0">© {new Date().getFullYear()} Asian Gifts. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}