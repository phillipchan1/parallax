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

    // based on scroll left, how much of picture is left

    console.log(`TCL: top ${i}`, boundingClientRect.top)

    const pixelsLeftToScroll = boundingClientRect.top + elementHeight
    console.log(`TCL: pixelsLeft ${i}`, pixelsLeftToScroll)
    const pixelsOverflowing = imageHeight - elementHeight
    console.log(`TCL: pixelsOverflowing ${i}`, pixelsOverflowing)

    let pixelIncrementsToMove =
      el.getBoundingClientRect().top * config.speedRatio

    if (pixelsOverflowing > pixelsLeftToScroll) {
      console.log(`${i} mode safety`)
      percentageInViewport * imageHeight
    }

    el.style.backgroundPosition = `0 ${pixelIncrementsToMove}px`
  })
}
