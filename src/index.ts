import { isInViewport } from './lib/isInViewport';

var parallaxElements = document.querySelectorAll('.parallax');

// init
parallaxElements.forEach(el => {});

// determines if an element is in the viewport

window.addEventListener('scroll', () => {
	parallaxElements.forEach((el: HTMLElement) => {
		if (!isInViewport(el)) {
			return;
		}

		el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top /
			2}px `;
	});
});
