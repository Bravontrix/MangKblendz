// JavaScript functionality for the Order Page
window.addEventListener('DOMContentLoaded', function() {
  var orderForm = document.getElementById('orderForm');
  var orderBtn = document.getElementById('orderBtn');

  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form validation and submit the order
    var products = document.getElementsByName('product');
    var selectedProducts = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].checked) {
        selectedProducts.push(products[i].value);
      }
    }
    var quantity = document.getElementById('quantity').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;

    if (selectedProducts.length > 0 && quantity && name && email && num) {
      // Calculate the total amount
      var totalPrice = 0;
      for (var i = 0; i < selectedProducts.length; i++) {
        totalPrice += getProductPrice(selectedProducts[i]);
      }
      var totalAmount = totalPrice * quantity;

      // Display the order summary
      var summary = "Order Summary:\n\n";
      summary += "Products: " + selectedProducts.join(", ") + "\n";
      summary += "Quantity: " + quantity + "\n";
      summary += "Total Amount: $" + totalAmount.toFixed(2) + "\n";

      // Confirm the submission
      var confirmation = confirm(summary + "\nAre you sure you want to place this order?");

      if (confirmation) {
        // Perform the order submission (AJAX request or form submission)
        alert('Order placed successfully!\n\n' + summary);
        orderForm.reset();
      }
    } else {
      alert('Please fill in all the required fields and select at least one product.');
    }
  });

  function getProductPrice(product) {
    switch (product) {
      case 'Okinawa':
        return 49;
      case 'Cheesecake':
        return 49;
      case 'Wintermelon':
        return 49;
      case 'Taro':
        return 49;
      case 'Green Apple':
        return 39;
      case 'Honey Peach':
        return 39;
      case 'Lychee':
        return 39;
      case 'Vanilla':
        return 49;
      case 'Mocha':
        return 49;
      case 'Matcha':
        return 49;
      default:
        return 0;
    }
  }
});
