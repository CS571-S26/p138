import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartPage({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  // show empty state if cart has nothing
  if (cart.length === 0) {
    return (
      <Container className="text-center py-5">
        <div style={{ fontSize: '4rem' }}>🛒</div>
        <h2>Your cart is empty</h2>
        <p className="text-muted">Add some items from the shop to get started!</p>
        <Button as={Link} to="/shop" className="btn-red">Start Shopping</Button>
      </Container>
    )
  }

  return (
    <div className="cart-page">
      <Container>
        <h1 style={{ fontWeight: 800, color: '#1a1a2e' }} className="mb-4">Your Cart</h1>

        <Row className="g-4">
          {/* cart items table */}
          <Col lg={8}>
            <Table responsive bordered>
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ fontSize: '0.72rem', color: '#c1121f', fontWeight: 600, textTransform: 'uppercase' }}>
                        {item.category}
                      </div>
                      {item.name}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="qty-control">
                        <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * item.qty).toFixed(2)}</td>
                    <td>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        🗑
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          {/* order summary */}
          <Col lg={4}>
            <div className="cart-summary">
              <h4>Order Summary</h4>
              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {/* TODO: hook this up to the checkout form */}
              <Button className="btn-red w-100 mt-3">Proceed to Checkout</Button>
              <Link to="/shop" className="d-block text-center mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                ← Continue Shopping
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}