import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { config } from './config'

export const initAndGetConfig = (elements: NodeList): any => {
  elements.forEach((el: HTMLElement) => {
    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)
    console.log('TCL: imageSize', imageSize)
    console.log(el.getBoundingClientRect())
  })

  return config
}
