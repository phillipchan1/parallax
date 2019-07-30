import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { config } from './config'

export const initAndGetConfig = (elements: NodeList): any => {
  var elementSpecs = []

  elements.forEach((el: HTMLElement, i) => {
    el.style.backgroundPosition = '0px 0px'

    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)

    elementSpecs[i] = imageSize
  })

  return {
    ...config,
    elementSpecs
  }
}
