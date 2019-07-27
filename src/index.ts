import { isInViewport } from './lib/isInViewport'
import { init } from './init'

var parallaxElements = document.querySelectorAll('.parallax')

window.onload = function() {
  init(parallaxElements)

  window.addEventListener('scroll', () => {
    parallaxElements.forEach((el: HTMLElement) => {
      if (!isInViewport(el)) {
        return
      }

      el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top /
        2}px `
    })
  })
}
