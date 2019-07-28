import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'

type ElementSpec = {
  height: number
  width: number
}

export const init = (elements: NodeList): ElementSpec[] => {
  const specs = []

  elements.forEach((el: HTMLElement) => {
    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)

    specs.push(imageSize)
    return imageSize

    el.style.backgroundPosition = '0px 0'
  })

  return specs
}
