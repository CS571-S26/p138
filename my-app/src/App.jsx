import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

function App() {
  const [cart, setCart] = useState([])

  // add item to cart, or increase qty if it's already there
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  function updateQty(id, newQty) {
    if (newQty < 1) {
      removeFromCart(id)
      return
    }
    setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <Router>
      <NavBar cartCount={totalItems} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App