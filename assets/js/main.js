/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};



function updateCartUI() {
  // Update the UI elements to reflect the changes in the shopping cart
  // Example: Update the cart icon or display a success message
  console.log('Product added to cart!');
}


showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
  navMenu = document.getElementById('nav-menu');

function linkAction() {
  navMenu.classList.remove('show');
}

navLink.forEach((item) => item.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[#href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[#href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/

window.onscroll = () => {
  const nav = document.getElementById('header');
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
  
 };

  // Ensure the DOM is ready

  // Ensure the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    // Array of random colors
    var colors = [
      '#ff6600',
      '#00ff00',
      '#0000ff',
      '#ff00ff',
      '#00ffff',
      '#ff0000',
    ];

    // Get a random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Get the typing-text element
    var typingText = document.querySelector('.typing-text');

    // Create the Typed.js effect
    var typed = new Typed('.typing-text', {
      strings: [
        'Still in Development',
        'Aliens Invaded',
        'Welcome to the sneak peek of our website',
        "This website is like a treasure hunt. Unfortunately, we haven't buried any treasures yet. Stay tuned",
        "Don't worry, our developers are professionals. They're just 'procrastinating' to create a masterpiece. Thanks for stopping by!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
      loop: false, // Loop is set to false to type the text only once
      showCursor: false, // Hide the blinking cursor
      onComplete: function (self) {
        self.elements[0].style.color = '#00ff00'; // Change text color to green
        self.elements[0].style.fontSize = '5rem'; // Increase text size
      },
    });
  });




