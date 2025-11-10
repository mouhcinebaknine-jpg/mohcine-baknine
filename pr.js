const dogImage = document.getElementById("dogImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");

const dogs = [
    "https://images.dog.ceo/breeds/labrador/n02099712_5305.jpg",
    "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
    "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
    "https://images.dog.ceo/breeds/poodle/n02113799_625.jpg",
    "https://images.dog.ceo/breeds/dalmatian/n02099849_396.jpg"
];

let currentIndex = 0;
let slideshowInterval = null;

// Affiche l'image à l'index courant
function showImage(index) {
    dogImage.src = dogs[index];
}

// Bouton "Suivant"
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % dogs.length;
    showImage(currentIndex);
});

// Bouton "Précédent"
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + dogs.length) % dogs.length;
    showImage(currentIndex);
});

// Bouton "Diaporama"
autoBtn.addEventListener("click", () => {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        autoBtn.textContent = "Démarrer diaporama";
    } else {
        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % dogs.length;
            showImage(currentIndex);
        }, 2000);
        autoBtn.textContent = "Arrêter diaporama";
    }
});
