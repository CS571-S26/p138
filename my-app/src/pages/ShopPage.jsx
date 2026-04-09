import { useState } from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ShopPage({ addToCart }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  // filter by category and search, then sort
  let filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  return (
    <div className="shop-page">
      <Container>
        <h1 style={{ fontWeight: 800, color: '#1a1a2e' }}>Shop All Products</h1>
        <p className="text-muted mb-4">Browse our full collection of Asian goods</p>

        {/* search and filter bar */}
        <div className="shop-filters">
          <Row className="g-3 align-items-center">
            <Col md={5}>
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control
                  placeholder="Search products..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <div className="category-filters">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Col>
            <Col md={3}>
              <Form.Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        <p className="text-muted mb-3">{filtered.length} product(s) found</p>

        {filtered.length > 0 ? (
          <Row className="g-4">
            {filtered.map(product => (
              <Col key={product.id} sm={6} lg={4} xl={3}>
                <ProductCard product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-results">
            <p>😔 No products found. Try a different search or category.</p>
          </div>
        )}
      </Container>
    </div>
  )
}