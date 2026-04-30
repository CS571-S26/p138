// component 11 — a single row in the cart table
export default function CartItem({ item, updateQty, removeFromCart }) {
  return (
    <tr>
      <td>
        <div style={{ fontSize: '0.72rem', color: '#c1121f', fontWeight: 600, textTransform: 'uppercase' }}>
          {item.category}
        </div>
        {item.name}
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <div className="qty-control">
          <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
        </div>
      </td>
      <td>${(item.price * item.qty).toFixed(2)}</td>
      <td>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name} from cart`}>
          🗑
        </button>
      </td>
    </tr>
  )
}