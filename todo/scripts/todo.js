(function () {
  var list = document.querySelector('#list'),
    form = document.querySelector('form'),
    item = document.querySelector('#item'),
    cartCount = document.getElementById('cart-count'),
    totalPrice = document.getElementById('total-price'),
    cartItems = 0,
    cartTotal = 0;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  }, false);

  list.addEventListener('click', function (e) {
    var t = e.target;
    if (t.classList.contains('checked')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  }, false);

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {

    } else {
      list.innerHTML = storedValues;
    }
  }

  getValues();

  // Clear storage
  function clearStorage() {
    localStorage.clear();
    location.reload();
  }

  // Show customizable alert
  function showAlert() {
    alert("This is a customizable alert message!");
  }

  // Remove item from cart
  function removeFromCart(productId) {
    console.log("Removing item from cart:", productId);
    // Logic to update cart, total price, etc.
  }

  // Update cart count and total
  function updateCart() {
    cartCount.innerHTML = cartItems;
    totalPrice.innerHTML = cartTotal;
  }

  // Call the updateCart function when cart changes
  // For example, add products to the cart
  cartItems += 1;
  cartTotal += 100; // Example price
  updateCart();
})();
