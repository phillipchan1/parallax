import * as offset from 'document-offset'

import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLfromElement'
import { getImageSize } from './lib/getImageSize'
import { config } from './config'
import { getPixelsOverflowing } from './lib/getPixelsOverflowing'
import { isImageOverflowSmallerThanAllowed } from './lib/isImageOverflowSmallerThanAllowed'

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

  elements.forEach((el: HTMLElement, i) => {
    const boundingClientRect = el.getBoundingClientRect()
    const elementOffset = offset(el)

    if (isImageOverflowSmallerThanAllowed(el, config)) {
      el.style.backgroundSize = `100% ${boundingClientRect.height +
        config.pixelsOverflowing}px`
    }

    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    elementSpecs[i] = {
      offsetTop: elementOffset.top
    }
  })

  return {
    ...config,
    elementSpecs
  }
}
