import * as offset from 'document-offset'

import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { config } from './config'
import { getPixelsOverflowing } from './lib/getPixelsOverflowing'

import { Config } from './types/Config'

/*
 * initAndGetConfig
 * This module is broken up into 3 phases–
 * before looping elements, looping elements,
 * and finally post processing after looping.
 *
 * It will return a config file with information
 * about the elements.
 *
 */

export const initAndGetConfig = (elements: NodeList): Config => {
  var elementSpecs = []
  var elementsPixelsOverflowing = []

  elements.forEach((el: HTMLElement, i) => {
    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    const url = getBackgroundImageURLFromElement(el)

    const imageSize = getImageSize(url)
    const boundingClientRect = el.getBoundingClientRect()
    const pixelsOverflowing = getPixelsOverflowing(
      boundingClientRect,
      imageSize
    )

    if (pixelsOverflowing < config.pixelsOverflowing) {
      el.style.backgroundSize = `100% ${boundingClientRect.height +
        config.pixelsOverflowing}px`
    }

    elementsPixelsOverflowing.push(pixelsOverflowing)
    const elementOffset = offset(el)

    elementSpecs[i] = {
      ...imageSize,
      pixelsOverflowing,
      offsetTop: elementOffset.top
    }
  })

  return {
    ...config,
    elementSpecs
  }
}
