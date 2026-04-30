import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// component 9 — extracted from HomePage
export default function HeroBanner() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <p style={{ color: '#c1121f', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Welcome to Asian Gifts
            </p>
            <h1 className="hero-title">
              Discover the Beauty of <span className="hero-accent">Asian Culture</span>
            </h1>
            <p className="hero-subtitle">
              Handpicked goods from across Asia — traditional decor, snacks, stationery, accessories, and more.
            </p>
            <Button as={Link} to="/shop" className="btn-red me-2">Shop Now</Button>
            <Button as={Link} to="/shop" variant="outline-secondary">Browse All</Button>
          </Col>
          <Col md={5} className="d-none d-md-block">
            <div className="hero-emoji-grid" aria-hidden="true">
              <span>🏮</span><span>🍵</span>
              <span>🎎</span><span>🌸</span>
              <span>🎋</span><span>🧧</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}