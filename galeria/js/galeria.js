const galleryCarousel = document.getElementById('galleryCarousel');
const galleryImage = document.getElementById('galleryImage');
let currentImageIndex = 0;
const images = [
    './img-galeria/img1.png',
    './img-galeria/img2.png',
    './img-galeria/img3.png',
    './img-galeria/img4.png',
    './img-galeria/img5.png',
    './img-galeria/img6.png',
    './img-galeria/img7.png',
    './img-galeria/img8.png',
    './img-galeria/img9.png',
    './img-galeria/img10.png',
    './img-galeria/img11.png',
    './img-galeria/img12.png',
    './img-galeria/img13.png',
    './img-galeria/img14.png',
    './img-galeria/img15.png',
    './img-galeria/img16.png',
    './img-galeria/img17.png',
    './img-galeria/img18.png',
    './img-galeria/img19.png',
    './img-galeria/img20.png',
    './img-galeria/img21.png',
    './img-galeria/img22.png',
    './img-galeria/img23.png',
    './img-galeria/img24.png',
    './img-galeria/img25.png',
    './img-galeria/img26.png',
    './img-galeria/img27.png',
    './img-galeria/img28.png',
    './img-galeria/img29.png',
    './img-galeria/img30.png',
    './img-galeria/img31.png',
    './img-galeria/img32.png',
    './img-galeria/img33.png',
    './img-galeria/img34.png',
    './img-galeria/img35.png',
    './img-galeria/img36.png',
    './img-galeria/img37.png',
    './img-galeria/img38.png',
    './img-galeria/img39.png',
    './img-galeria/img40.png',
    './img-galeria/img41.png',
    './img-galeria/img42.png'
];

function openGallery(index) {
    galleryImage.src = images[index];
    galleryCarousel.style.display = 'flex';
    currentImageIndex = index;
}

function closeGallery() {
    galleryCarousel.style.display = 'none';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}




const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});
