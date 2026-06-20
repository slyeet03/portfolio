let currentImageIndex = 0;
let currentImages = [];

// DOM elements
const modalOverlay = document.querySelector(".modal-overlay");
const modalImg = document.querySelector(".modal-main-img");
const modalTitle = document.querySelector(".modal-title");
const modalDomain = document.querySelector(".modal-domain");
const modalDescription = document.querySelector(".modal-description");
const modalTech = document.querySelector(".modal-tech");
const carouselDots = document.querySelector(".carousel-dots");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const modalVideo = document.querySelector(".modal-main-video");

function isVideo(src) {
  return src.includes("/video/upload/");
}

function openModal(project) {
  currentImages = project.images;
  currentImageIndex = 0;

  modalTitle.textContent = project.title;
  modalDomain.textContent = project.domain;
  modalDescription.textContent = project.description;

  const githubLink = document.querySelector(".modal-github");
  githubLink.href = project.link;

  // tech pills
  modalTech.innerHTML = "";
  project.techStack.forEach((tech) => {
    const pill = document.createElement("span");
    pill.classList.add("tech-pill");
    pill.textContent = tech;
    modalTech.appendChild(pill);
  });

  // build dots
  buildDots(currentImages.length);

  // set first image
  showMedia(currentImages[0]);

  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalVideo.pause();
  currentImageIndex = 0;
  currentImages = [];
  carouselDots.innerHTML = "";
}

// ── CAROUSEL ──
function buildDots(count) {
  carouselDots.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => updateCarousel(i));
    carouselDots.appendChild(dot);
  }
}

function showMedia(src) {
  if (isVideo(src)) {
    modalImg.classList.add("hidden");
    modalVideo.classList.remove("hidden");
    modalVideo.src = src;
    modalVideo.play().catch(() => {});
  } else {
    modalVideo.pause();
    modalVideo.classList.add("hidden");
    modalImg.classList.remove("hidden");
    modalImg.src = src;
  }
}

function updateCarousel(index) {
  currentImageIndex = index;
  const src = currentImages[index];

  if (isVideo(src)) {
    modalImg.classList.add("hidden");
    modalVideo.classList.remove("hidden");
    modalVideo.src = src;
    modalVideo.play().catch(() => {});
  } else {
    modalVideo.pause();
    modalVideo.classList.add("hidden");
    modalImg.classList.add("fade");
    setTimeout(() => {
      modalImg.src = src;
      modalImg.classList.remove("hidden");
      modalImg.classList.remove("fade");
    }, 250);
  }

  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  const newIndex =
    currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1;
  updateCarousel(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex = (currentImageIndex + 1) % currentImages.length;
  updateCarousel(newIndex);
});

// ── CARD CLICKS ──
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = parseInt(card.dataset.id);
    const project = PROJECTS.find((p) => p.id === id);
    if (project) openModal(project);
  });
});

// ── CLOSE TRIGGERS ──
closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

modalImg.parentElement.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    const newIndex = (currentImageIndex + 1) % currentImages.length;
    updateCarousel(newIndex);
  } else {
    const newIndex =
      currentImageIndex === 0
        ? currentImages.length - 1
        : currentImageIndex - 1;
    updateCarousel(newIndex);
  }
});
