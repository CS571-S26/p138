import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import HeroBanner from '../components/HeroBanner'
import SaleBanner from '../components/SaleBanner'

export default function HomePage({ addToCart }) {
  // only show products marked as popular in the featured section
  const featured = products.filter(p => p.badge === 'Popular')

  return (
    <div>
      {/* hero banner */}
      <HeroBanner />

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
        <SaleBanner />
      </Container>
    </div>
  )
}