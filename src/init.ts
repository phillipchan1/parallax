import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'

export const init = (elements: NodeList) => {
  elements.forEach((el: HTMLElement) => {
    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)

    el.style.backgroundPosition = '0px 0'
  })
}
