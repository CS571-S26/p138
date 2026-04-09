import { Card, Button, Badge } from 'react-bootstrap'

export default function ProductCard({ product, addToCart }) {
  return (
    <Card className="product-card h-100">
      <div className="product-img-wrapper">
        <Card.Img variant="top" src={product.image} alt={product.name} className="product-img" />
        {/* show a badge if the product is on sale or popular */}
        {product.badge && (
          <Badge
            className="product-badge"
            bg={product.badge === 'Sale' ? 'danger' : 'success'}
          >
            {product.badge}
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="product-category">{product.category}</div>
        <Card.Title className="product-name">{product.name}</Card.Title>
        <Card.Text className="product-desc">{product.description}</Card.Text>

        <div className="mt-auto">
          <div className="mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <Button size="sm" className="btn-red" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}