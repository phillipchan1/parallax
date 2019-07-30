import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    const percentageInViewport = getScrollPercentage(el)

    el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top *
      config.speedRatio}px `
  })
}
