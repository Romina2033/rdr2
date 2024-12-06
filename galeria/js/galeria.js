const galleryCarousel = document.getElementById('galleryCarousel');
const galleryImage = document.getElementById('galleryImage');
let currentImageIndex = 0;
const images = [
    './img-galeria/img1.jpg',
    './img-galeria/img2.jpg',
    './img-galeria/img3.jpg',
    './img-galeria/img4.jpg',
    './img-galeria/img5.jpg',
    './img-galeria/img6.jpg',
    './img-galeria/img7.jpg',
    './img-galeria/img8.jpg',
    './img-galeria/img9.jpg',
    './img-galeria/img10.jpg',
    './img-galeria/img11.jpg',
    './img-galeria/img12.jpg',
    './img-galeria/img13.jpg',
    './img-galeria/img14.jpg',
    './img-galeria/img15.jpg',
    './img-galeria/img16.jpg',
    './img-galeria/img17.jpg',
    './img-galeria/img18.jpg',
    './img-galeria/img19.jpg',
    './img-galeria/img20.jpg',
    './img-galeria/img21.jpg',
    './img-galeria/img22.jpg',
    './img-galeria/img23.jpg',
    './img-galeria/img24.jpg',
    './img-galeria/img25.jpg',
    './img-galeria/img26.jpg',
    './img-galeria/img27.jpg',
    './img-galeria/img28.jpg',
    './img-galeria/img29.jpg',
    './img-galeria/img30.jpg',
    './img-galeria/img31.jpg',
    './img-galeria/img32.jpg',
    './img-galeria/img33.jpg',
    './img-galeria/img34.jpg',
    './img-galeria/img35.jpg',
    './img-galeria/img36.jpg',
    './img-galeria/img37.jpg',
    './img-galeria/img38.jpg',
    './img-galeria/img39.jpg',
    './img-galeria/img40.jpg',
    './img-galeria/img41.jpg',
    './img-galeria/img42.jpg'
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
