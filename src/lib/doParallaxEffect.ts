import { isInViewport } from './isInViewport'

export const doParallaxEffect = (elements: NodeList): void => {
  elements.forEach((el: HTMLElement) => {
    if (!isInViewport(el)) {
      return
    }

    el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top / 4}px `
  })
}
