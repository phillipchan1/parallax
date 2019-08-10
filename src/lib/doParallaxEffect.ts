import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import { config } from '../config'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    let percentageInViewport = getScrollPercentage(el)

    if (config.debugMode) {
      console.log(`${i}: percentageInViewport`, percentageInViewport)
    }

    const pixelsToMoveBasedOnPercentageInViewPort =
      percentageInViewport * config.pixelsOverflowing * config.speedRatio

    el.style.backgroundPosition = `0 -${pixelsToMoveBasedOnPercentageInViewPort}px`
  })
}
