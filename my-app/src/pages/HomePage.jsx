import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function HomePage({ addToCart }) {
  // only show products marked as popular in the featured section
  const featured = products.filter(p => p.badge === 'Popular')

  return (
    <div>
      {/* hero banner */}
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
              <div className="hero-emoji-grid">
                <span>🏮</span><span>🍵</span>
                <span>🎎</span><span>🌸</span>
                <span>🎋</span><span>🧧</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* category links */}
      <section className="categories-section">
        <Container>
          <div className="categories-strip">
            {['🎁 Festive', '🍵 Kitchenware', '📝 Stationery', '👜 Accessories', '🍡 Snacks', '🖼 Decor'].map(cat => (
              <Link key={cat} to="/shop" className="category-chip">{cat}</Link>
            ))}
          </div>
        </Container>
      </section>

      {/* popular products */}
      <section className="featured-section">
        <Container>
          <div className="section-header">
            <h2>Popular Products</h2>
            <Link to="/shop" className="see-all-link">See all →</Link>
          </div>
          <Row className="g-4">
            {featured.map(product => (
              <Col key={product.id} sm={6} lg={4}>
                <ProductCard product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* sale banner */}
      <Container>
        <div className="sale-banner">
          <div>
            <h3>🎉 Sale Items Available!</h3>
            <p>Check out our discounted items in the shop — limited quantities.</p>
          </div>
          <Button as={Link} to="/shop" variant="light" style={{ fontWeight: 600, color: '#c1121f' }}>
            View Sale
          </Button>
        </div>
      </Container>
    </div>
  )
}