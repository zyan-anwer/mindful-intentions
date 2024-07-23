const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
  });
  
  // why container
  ScrollReveal().reveal(".why__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".why__container p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".why__container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
  });
  
  ScrollReveal().reveal(".why__container img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  // hero container
  ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // classes container
  ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
  });
  
  // membership container
  ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // stories container
  ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // posts container
  ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // photos container
  ScrollReveal().reveal(".photos__card", {
    duration: 1000,
    interval: 500,
  });
  
  // -------------footer----------------
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
  
  