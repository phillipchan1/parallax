import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { config } from './config'

export const initAndGetConfig = (elements: NodeList): any => {
  var elementSpecs = []
  var modeToMove = []

  elements.forEach((el: HTMLElement, i) => {
    el.style.backgroundPosition = '0px 0px'

    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)

    const boundingClientRect = el.getBoundingClientRect()
    const elementHeight = boundingClientRect.height
    const pixelsOverflowing = imageSize.height - elementHeight

    console.log(`TCL: pixelsOverflowing`, pixelsOverflowing)

    elementSpecs[i] = imageSize
    if (pixelsOverflowing < window.innerHeight) {
      modeToMove[i] = 'safety'
    } else {
      modeToMove[i] = 'normal'
    }
  })

  return {
    ...config,
    elementSpecs,
    modeToMove
  }
}
