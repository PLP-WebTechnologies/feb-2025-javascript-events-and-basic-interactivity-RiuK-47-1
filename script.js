// 1. Event Handling

// Button Click Event
const clickMeButton = document.getElementById('click-me');
clickMeButton.addEventListener('click', () => {
  clickMeButton.textContent = 'Clicked!';
  clickMeButton.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

// Hover Effects
const hoverBox = document.getElementById('hover-box');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.textContent = 'Mouse is inside!';
  hoverBox.classList.add('hover-active');
});

hoverBox.addEventListener('mouseleave', () => {
  hoverBox.textContent = 'Hover over me!';
  hoverBox.classList.remove('hover-active');
});

// Keypress Detection
document.addEventListener('keydown', (e) => {
  const keyDisplay = document.getElementById('key-display');
  keyDisplay.textContent = `You pressed: ${e.key} (Code: ${e.code})`;
});

// Secret Action (Double Click)
const secretBox = document.getElementById('secret-box');
secretBox.addEventListener('dblclick', () => {
  secretBox.innerHTML = '🎉 Secret revealed! 🎉';
  document.body.style.backgroundColor = '#ffeb3b';
});

// Long Press Detection
const longPressButton = document.getElementById('long-press');
let pressTimer;

longPressButton.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    longPressButton.textContent = 'Long press detected!';
  }, 1000);
});

longPressButton.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

longPressButton.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer);
});

// 2. Interactive Elements

// Color Changing Button
const colorChanger = document.getElementById('color-changer');
colorChanger.addEventListener('click', () => {
  colorChanger.style.backgroundColor = getRandomColor();
});

// Image Gallery
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Accordion Component
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    header.classList.toggle('active');
  });
});

// 3. Form Validation
const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  
  let isValid = true;
  
  // Required field check
  if (!username.value.trim()) {
    showError(username, 'Username is required');
    isValid = false;
  }
  
  // Email validation
  if (!validateEmail(email.value)) {
    showError(email, 'Please enter a valid email');
    isValid = false;
  }
  
  // Password validation
  if (password.value.length < 8) {
    showError(password, 'Password must be at least 8 characters');
    isValid = false;
  }
  
  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  input.classList.add('error');
}

// Real-time Feedback
document.getElementById('password').addEventListener('input', (e) => {
  const password = e.target.value;
  const strengthIndicator = document.getElementById('password-strength');
  
  if (password.length === 0) {
    strengthIndicator.textContent = '';
  } else if (password.length < 4) {
    strengthIndicator.textContent = 'Weak';
    strengthIndicator.style.color = 'red';
  } else if (password.length < 8) {
    strengthIndicator.textContent = 'Medium';
    strengthIndicator.style.color = 'orange';
  } else {
    strengthIndicator.textContent = 'Strong';
    strengthIndicator.style.color = 'green';
  }
});