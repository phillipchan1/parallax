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
      percentageInViewport * config.pixelsOverflowing * config.speedRatio

    el.style.backgroundPosition = `0 -${pixelsToMoveBasedOnLeastPixelsOverflowing}px`
  })
}
