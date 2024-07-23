document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var emailField = document.getElementById('email');
    var message = document.getElementById('message');
  
    if (validateEmail(emailField.value)) {
        message.style.color = 'green';
        message.textContent = 'Thank you for subscribing!';
        emailField.value = '';
    } else {
        message.style.color = 'red';
        message.textContent = 'Please enter a valid email address.';
    }
  });
  
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }