import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'

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
      percentageInViewport * config.pixelsOverflowing * 0.1 * config.speedRatio

    el.style.backgroundPosition = `${
      config.defaultXPosition
    } -${pixelsToMoveBasedOnPercentageInViewPort}px`
  })
}
