import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

// component 12 — checkout modal with email confirmation form
export default function CheckoutModal({ show, onHide, total }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!name || !email) return
    setSubmitted(true)
  }

  function handleClose() {
    // reset everything when modal closes
    setSubmitted(false)
    setName('')
    setEmail('')
    onHide()
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: 700 }}>Complete Your Order</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {submitted ? (
          // success state
          <div className="text-center py-3">
            <div style={{ fontSize: '3rem' }} aria-hidden="true">🎉</div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>Thanks, {name}!</h2>
            <p className="text-muted">
              We'll send a confirmation to <strong>{email}</strong> once we receive your payment.
              We'll also confirm the items in your order!
            </p>
          </div>
        ) : (
          <>
            <p className="text-muted mb-3">
              Send <strong>${total.toFixed(2)}</strong> via Zelle or Venmo and include your name in the note.
            </p>

            {/* Zelle */}
            <div className="cart-summary mb-3">
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>💜 Zelle</h2>
              <p className="mb-0">Send to: <strong>asiangifts@email.com</strong></p>{/* TODO: replace */}
              <p className="text-muted" style={{ fontSize: '0.82rem' }}>Note: your name + "Asian Gifts order"</p>
            </div>

            {/* Venmo */}
            <div className="cart-summary mb-3">
              <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>💙 Venmo</h2>
              <p className="mb-0">Send to: <strong>@AsianGifts</strong></p>{/* TODO: replace */}
              <p className="text-muted" style={{ fontSize: '0.82rem' }}>Note: your name + "Asian Gifts order"</p>
            </div>

            <hr />
            <p style={{ fontWeight: 600, marginBottom: 12 }}>Enter your info to get a confirmation email:</p>

            {/* accessible form — labels tied to inputs via controlId */}
            <Form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
              <Form.Group className="mb-3" controlId="checkoutName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="checkoutEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        {submitted ? (
          <Button className="btn-red" onClick={handleClose}>Close</Button>
        ) : (
          <>
            <Button variant="outline-secondary" onClick={handleClose}>Go Back</Button>
            <Button className="btn-red" onClick={handleSubmit} disabled={!name || !email}>
              Submit Order
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  )
}