import { useState } from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CheckoutModal from '../components/CheckoutModal'

export default function CartPage({ cart, removeFromCart, updateQty }) {
  const [showCheckout, setShowCheckout] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  // show empty state if cart has nothing
  if (cart.length === 0) {
    return (
      <Container className="text-center py-5">
        <div style={{ fontSize: '4rem' }} aria-hidden="true">🛒</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Your cart is empty</h1>
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
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"><span className="visually-hidden">Remove</span></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQty={updateQty}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </tbody>
            </Table>
          </Col>

          {/* order summary */}
          <Col lg={4}>
            <div className="cart-summary">
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, paddingBottom: 14, borderBottom: '1px solid #eee', marginBottom: 16 }}>
                Order Summary
              </h2>
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
              <Button className="btn-red w-100 mt-3" onClick={() => setShowCheckout(true)}>
                Proceed to Checkout
              </Button>
              <Link to="/shop" className="d-block text-center mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                ← Continue Shopping
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <CheckoutModal
        show={showCheckout}
        onHide={() => setShowCheckout(false)}
        total={total}
      />
    </div>
  )
}