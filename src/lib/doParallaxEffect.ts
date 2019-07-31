import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import { config } from '../config'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    const percentageInViewport = getScrollPercentage(el)
    const pixelsOverflowing = config.elementSpecs[i]['pixelsOverflowing']

    let pixelIncrementsToMove =
      (window.pageYOffset -
        config.elementSpecs[i]['offsetTop'] +
        window.innerHeight) *
      config.speedRatio

    // mode of operation if amount of image overflowing is less than
    // pixels left to scroll in the document
    if (config.modeToMove[i] === 'safety') {
      pixelIncrementsToMove =
        percentageInViewport * pixelsOverflowing * config.speedRatio
    }

    el.style.backgroundPosition = `${
      config.defaultXPosition
    } -${pixelIncrementsToMove}px`
  })
}
