import { isInViewport } from './lib/isInViewport';

var paralaxElements = document.querySelectorAll('.parallax');

// init
paralaxElements.forEach(el => {});

// determines if an element is in the viewport

window.addEventListener('scroll', () => {
	paralaxElements.forEach((el: HTMLElement) => {
		if (!isInViewport(el)) {
			return;
		}

		el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top /
			2}px `;
	});
});
