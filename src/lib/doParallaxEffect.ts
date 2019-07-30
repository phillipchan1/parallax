import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import { getBackgroundImageURLFromElement } from './getBackgroundImageURLfromElement'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }

    const percentageInViewport = getScrollPercentage(el)
    const boundingClientRect = el.getBoundingClientRect()
    const elementHeight = boundingClientRect.height
    const imageHeight = config.elementSpecs[i]['height']

    const pixelsOverflowing = imageHeight - elementHeight

    let pixelIncrementsToMove =
      (window.pageYOffset -
        config.elementSpecs[i]['offsetTop'] +
        window.innerHeight) *
      config.speedRatio

    // mode of operation if amount of image overflowing is less than
    // pixels left to scroll in the document
    if (config.modeToMove[i] === 'safety') {
      pixelIncrementsToMove =
        percentageInViewport * pixelsOverflowing * config.speedRatio * 1.5
    }

    el.style.backgroundPosition = `0 -${pixelIncrementsToMove}px`
  })
}
