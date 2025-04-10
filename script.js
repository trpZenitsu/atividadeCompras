function addToCart(productId) {
  const productNames = {
    'smartphone-xyz': 'Smartphone XYZ',
    'notebook-ultrapro': 'Notebook UltraPro',
    'fone-airbeats': 'Fone Bluetooth AirBeats',
    'smartwatch-lifefit': 'Smartwatch LifeFit'
  };

  const productPrices = {
    'smartphone-xyz': 1999.90,
    'notebook-ultrapro': 4499.00,
    'fone-airbeats': 299.90,
    'smartwatch-lifefit': 799.90
  };

  const name = productNames[productId] || 'Produto desconhecido';
  const price = productPrices[productId] || 0;

  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartItems.push({ id: productId, name, price });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  updateCartCount();
  alert(`Produto adicionado ao carrinho: ${name}`);
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const count = cartItems.length;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const cartButton = document.getElementById('cart-button');
  if (cartButton) {
    cartButton.textContent = `Carrinho (${count}) - R$ ${total}`;
  }
}

document.addEventListener('DOMContentLoaded', updateCartCount);