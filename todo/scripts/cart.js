function updateCartTotal() {
    const cartList = document.getElementById('cart-list');
    let total = 0;
    for (let item of cartList.children) {
      const itemText = item.textContent;
      const price = parseFloat(itemText.split(' - $')[1]);
      total += price;
    }
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = "Total: $" + total.toFixed(2);
  }
  
  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-list').children.length;
    cartCount.textContent = cartItems;
  }
  
  function clearCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    updateCartTotal();
    updateCartCount();
    checkEmptyCart();
  }
  
  function checkEmptyCart() {
    const cartList = document.getElementById('cart-list');
    const emptyMessage = document.getElementById('empty-cart-message');
    if (cartList.children.length === 0) {
      emptyMessage.style.display = 'block';
    } else {
      emptyMessage.style.display = 'none';
    }
  }
  