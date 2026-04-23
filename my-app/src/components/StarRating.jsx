// StarRating.jsx — component #8
export default function StarRating({ rating, reviews }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // full star
      stars.push(<span key={i} style={{ color: '#f4a261' }}>★</span>)
    } else if (rating >= i - 0.5) {
      // half star — same icon, faded
      stars.push(<span key={i} style={{ color: '#f4a261', opacity: 0.4 }}>★</span>)
    } else {
      // empty star
      stars.push(<span key={i} style={{ color: '#ddd' }}>★</span>)
    }
  }
  return (
    <span style={{ fontSize: '0.85rem' }}>
      {stars} {reviews !== undefined && <span className="text-muted">({reviews})</span>}
    </span>
  )
}