import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import { config } from '../config'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    let percentageInViewport = getScrollPercentage(el)

    // to avoid initial jump on load, let the first element's percentage
    // be calibrated
    if (i === 0 && window.pageYOffset < config.pageOffsetToInitialize) {
      percentageInViewport =
        getScrollPercentage(el) -
        config.elementSpecs[i].initialPercentageInViewport
    }

    const pixelsToMoveBasedOnPercentageInViewPort =
      percentageInViewport * config.pixelsOverflowing * config.speedRatio

    el.style.backgroundPosition = `0 -${pixelsToMoveBasedOnPercentageInViewPort}px`
  })
}
