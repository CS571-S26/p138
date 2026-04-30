import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// component 10 — extracted from HomePage
export default function SaleBanner() {
  return (
    <div className="sale-banner">
      <div>
        <h2 style={{ color: 'white', margin: 0, marginBottom: 4, fontWeight: 700, fontSize: '1.3rem' }}>
          🎉 Sale Items Available!
        </h2>
        <p>Check out our discounted items in the shop — limited quantities.</p>
      </div>
      <Button as={Link} to="/shop" variant="light" style={{ fontWeight: 600, color: '#c1121f' }}>
        View Sale
      </Button>
    </div>
  )
}