// Cart functionality
let cart = [];
let cartTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Add to cart buttons
  document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const menuItem = e.target.closest('.menu-item');
      const itemName = menuItem.querySelector('h3').textContent;
      const itemPrice = parseFloat(menuItem.querySelector('.item-price').textContent);
      
      cart.push({ name: itemName, price: itemPrice });
      cartTotal += itemPrice;
      
      updateCartCounter();
      showToast(`${itemName} added to cart`);
    });
  });

  // Payment method selection
  document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected', 'border-primary');
        opt.querySelector('.checkmark').classList.add('hidden');
      });
      
      option.classList.add('selected', 'border-primary');
      option.querySelector('.checkmark').classList.remove('hidden');
    });
  });
});

function updateCartCounter() {
  const counter = document.getElementById('cart-counter');
  if (counter) {
    counter.textContent = cart.length;
    counter.classList.remove('hidden');
    if (cart.length === 0) counter.classList.add('hidden');
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}