// ----------------------------------------------------
// TYPING ANIMATION
// ----------------------------------------------------
const typedTextSpan = document.querySelector(".typing");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Electronics and Communication Engineer", "Programmer", "Designer", "Creator"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ----------------------------------------------------
// STICKY NAVBAR
// ----------------------------------------------------
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ----------------------------------------------------
// MOBILE MENU
// ----------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// ----------------------------------------------------
// SCROLL PROGRESS BAR
// ----------------------------------------------------
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
}

// ----------------------------------------------------
// SCROLL REVEAL ANIMATION
// ----------------------------------------------------
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// ----------------------------------------------------
// ACTIVE LINK ON SCROLL
// ----------------------------------------------------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});



// ----------------------------------------------------
// SCROLL BUTTONS (Product Grid)
// ----------------------------------------------------
const productGrid = document.querySelector(".product-grid");
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

leftBtn.addEventListener("click", () => {
  productGrid.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  productGrid.scrollBy({ left: 300, behavior: "smooth" });
});

// ----------------------------------------------------
// LIGHTBOX
// ----------------------------------------------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});

// ----------------------------------------------------
// COPY EMAIL
// ----------------------------------------------------
const copyIcon = document.querySelector(".copy-icon");
const emailText = "abhinav.n.a86@gmail.com";

if (copyIcon) {
  copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText).then(() => {
      alert("Email copied to clipboard!");
    });
  });
}

// ----------------------------------------------------
// CONTACT FORM REDIRECT
// ----------------------------------------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    // Construct Gmail Compose URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abhinav.n.a86@gmail.com&su=${subject}&body=${body}`;

    // Open in new tab
    window.open(gmailLink, "_blank");
  });
}
