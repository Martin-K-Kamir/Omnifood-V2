const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnHamburger = document.querySelector('.btn-hamburger');
const navListEl = document.querySelector('.navbar__list');

btnHamburger.addEventListener('click', () => {
	navListEl.classList.toggle('navbar__list--open');
});

const anvLinks = document.querySelectorAll('.navbar__link');
anvLinks.forEach(link => {
	link.addEventListener('click', () => {
		navListEl.classList.remove('navbar__list--open');
	});
});

const heroEl = document.querySelector('.hero');
const navEl = document.querySelector('.navbar');

const observer = new IntersectionObserver(function (entries) {
	const ent = entries[0];

	if (ent.isIntersecting === false) {
		navEl.classList.add('navbar--fixed');
	}

	if (ent.isIntersecting === true) {
		navEl.classList.remove('navbar--fixed');
	}
}, {
	root: null,
	rootMargin: "-80px",
	threshold: 0,
});
observer.observe(heroEl)