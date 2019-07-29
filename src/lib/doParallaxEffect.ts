import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import * as offset from 'document-offset'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    const elementDimensions = el.getBoundingClientRect()
    const elementOffset = offset(el)

    const percentageInViewport =
      (pageYOffset + window.innerHeight) /
      (elementOffset.top + window.innerHeight + elementDimensions.height)

    console.log(`percentageInViewport of ${i}`, percentageInViewport)

    el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top *
      config.speedRatio}px `
  })
}
