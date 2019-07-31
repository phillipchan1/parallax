import * as offset from 'document-offset'

import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { getPixelsOverflowing } from './lib/getPixelsOverflowing'
import { config } from './config'

import { Config } from './types/Config'

export const initAndGetConfig = (elements: NodeList): Config => {
  var elementSpecs = []
  var modeToMove = []

  elements.forEach((el: HTMLElement, i) => {
    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    const url = getBackgroundImageURLFromElement(el)
    const imageSize = getImageSize(url)
    const boundingClientRect = el.getBoundingClientRect()

    const pixelsOverflowing = getPixelsOverflowing(
      boundingClientRect,
      imageSize
    )
    const elementOffset = offset(el)

    elementSpecs[i] = {
      ...imageSize,
      pixelsOverflowing,
      offsetTop: elementOffset.top
    }

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
