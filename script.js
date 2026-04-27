const images = [
  { title: "Nostalgia", category: "Mood", src: "imgs/mood1.jpg" },
  { title: "Minimal Desk", category: "Mood", src: "imgs/mood2.jpg" },
  { title: "UI Dashboard", category: "UI", src: "imgs/ui1.jpg" },
  { title: "Poster Vibes", category: "Posters", src: "imgs/poster1.jpg" },
  {
    title: "Thumbnail Setup",
    category: "Thumbnails",
    src: "imgs/thumbnail1.jpg"
  }
];

const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

function enableCardSelection() {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("selected");
    });
  });
}

function renderImages(items) {
  gallery.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
    gallery.appendChild(card);
  });

  enableCardSelection();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const filtered = category === "All"
      ? images
      : images.filter(item => item.category === category);

    renderImages(filtered);
  });
});

renderImages(images);