import { useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import StarRating from './StarRating'

export default function ProductCard({ product, addToCart }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = product.images || [product.image]

  function prev(e) {
    e.stopPropagation()
    setImgIndex(i => (i - 1 + images.length) % images.length)
  }

  function next(e) {
    e.stopPropagation()
    setImgIndex(i => (i + 1) % images.length)
  }

  return (
    <Card className="product-card h-100">
      <div className="product-img-wrapper">
        
        {/* show a badge if the product is on sale or popular */}
        <Card.Img
          variant="top"
          src={images[imgIndex]}
          alt={product.name}
          className="product-img"
        />

        {/* badge */}
        {product.badge && (
          <Badge
            className="product-badge"
            bg={product.badge === 'Sale' ? 'danger' : 'success'}
          >
            {product.badge}
          </Badge>
        )}

        {/* prev/next arrows — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button onClick={prev} style={arrowStyle('left')}>‹</button>
            <button onClick={next} style={arrowStyle('right')}>›</button>

            {/* dot indicators */}
            <div style={dotsContainerStyle}>
              {images.map((_, i) => (
                <span
                  key={i}
                  style={{
                    ...dotStyle,
                    background: i === imgIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="product-category">{product.category}</div>
        <Card.Title className="product-name">{product.name}</Card.Title>
        <Card.Text className="product-desc">{product.description}</Card.Text>

        <div className="mt-auto">
          <div className="mb-2">
            <StarRating rating={product.rating} reviews={product.reviews} />
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

function arrowStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '6px',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.35)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: 28,
    height: 28,
    fontSize: '1.1rem',
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  }
}

const dotsContainerStyle = {
  position: 'absolute',
  bottom: 6,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 5,
  zIndex: 2,
}

const dotStyle = {
  width: 6,
  height: 6,
  borderRadius: '50%',
  display: 'inline-block',
  transition: 'background 0.2s',
}