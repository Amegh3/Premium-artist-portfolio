document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Slideshow
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[index]) slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current); // Show the first slide initially
    setInterval(nextSlide, 3000); // Auto-slide every 3s
  }

  // WhatsApp Form Submission
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const frame = document.getElementById("frame").value.trim();
      const drawingType = document.getElementById("drawingType").value;
      const message = document.getElementById("message").value.trim();

      const whatsappMessage = `Hello, I would like to order a custom sketch! 🎨\n\nName: ${name}\nEmail: ${email}\nFrame Size: ${frame}\nDrawing Type: ${drawingType}\nMessage: ${message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const phoneNumber = "7012464761";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Slideshow
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[index]) slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current); // Show the first slide initially
    setInterval(nextSlide, 3000); // Auto-slide every 3s
  }

  // WhatsApp Form Submission
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const frame = document.getElementById("frame").value.trim();
      const drawingType = document.getElementById("drawingType").value;
      const message = document.getElementById("message").value.trim();

      const whatsappMessage = `Hello, I would like to order a custom sketch! 🎨\n\nName: ${name}\nEmail: ${email}\nFrame Size: ${frame}\nDrawing Type: ${drawingType}\nMessage: ${message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const phoneNumber = "XXXXXXXXXX";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  }
});
