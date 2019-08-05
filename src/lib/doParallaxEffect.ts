import { isInViewport } from './isInViewport'
import { getScrollPercentage } from './getScrollPercentage'
import { config } from '../config'

export const doParallaxEffect = (elements: NodeList, config: any): void => {
  elements.forEach((el: HTMLElement, i: number) => {
    if (!isInViewport(el)) {
      return
    }
    const percentageInViewport = getScrollPercentage(el)

    const pixelsToMoveBasedOnLeastPixelsOverflowing =
      percentageInViewport *
      config.smallestPixelsOverFlowing *
      config.speedRatio *
      1.5

    el.style.backgroundPosition = `0 -${pixelsToMoveBasedOnLeastPixelsOverflowing}px`
  })
}
