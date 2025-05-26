particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"  // color blanco para partículas serias
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
// JS para toggle con animación suave
document.querySelectorAll('.faq li .question').forEach(question => {
  question.addEventListener('click', () => {
    const li = question.parentElement;
    li.classList.toggle('open');
  });
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const slideWidth = slides[0].getBoundingClientRect().width + 20; // slide width + margin

let currentIndex = 0;

function moveToSlide(index) {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
  checkButtons();
}

function checkButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= slides.length - Math.floor(track.parentElement.offsetWidth / slideWidth);
}

prevButton.addEventListener('click', () => {
  if(currentIndex > 0) {
    moveToSlide(currentIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if(currentIndex < slides.length - 1) {
    moveToSlide(currentIndex + 1);
  }
});

// Inicialización
checkButtons();
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('active');
});
window.addEventListener("DOMContentLoaded", () => {
  const particleDiv = document.getElementById("particles-js");
  const elegirnos = document.querySelector(".porque-elegirnos");
  const altura = elegirnos.offsetTop + elegirnos.offsetHeight;

  particleDiv.style.height = `${altura}px`;
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".contador");
  const speed = 40;

  counters.forEach(counter => {
    const animate = () => {
      const value = +counter.getAttribute("data-target");
      const data = +counter.innerText;
      const time = value / speed;

      if (data < value) {
        counter.innerText = Math.ceil(data + 1);
        setTimeout(animate, 40);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
})
function mostrarInfo(elemento) {
  alert("Esta función puede abrir más detalles del servicio próximamente.");
}
document.getElementById('chatbot-toggle').addEventListener('click', () => {
  document.getElementById('chatbox').style.display = 'flex';
});

document.getElementById('chatbox-close').addEventListener('click', () => {
  document.getElementById('chatbox').style.display = 'none';
});
