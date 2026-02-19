import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch products from n8n Webhook
    fetch('http://localhost:5678/webhook/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then(data => {
        // n8n returns an array or a single object. Ensure it's an array.
        const productList = Array.isArray(data) ? data : (data ? [data] : [])
        setProducts(productList)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Impossible d\'afficher les produits. Vérifie que n8n est lancé.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>📦 Catalogue Produits</h1>
        <p>Géré en temps réel via Google Sheets & n8n</p>
      </header>

      {loading && <div className="loader">Chargement des produits...</div>}

      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.product_id || Math.random()} className="product-card">
                <div className="product-badge">{product.category || 'Général'}</div>
                <h3>{product.name}</h3>
                <div className="product-info">
                  <span className="price">{product.price} €</span>
                  <span className={`stock ${product.stock > 10 ? 'in-stock' : 'low-stock'}`}>
                    Stock: {product.stock}
                  </span>
                </div>
                <button className="buy-btn">Commander</button>
              </div>
            ))
          ) : (
            <p>Aucun produit trouvé dans Google Sheets.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default App
