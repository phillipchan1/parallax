import * as offset from 'document-offset'

import { isImageOverflowSmallerThanAllowed } from './lib/isImageOverflowSmallerThanAllowed'
import { getScrollPercentage } from './lib/getScrollPercentage'
import { setStylesOnElement } from './lib/setStylesOnElement'

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

export const initAndGetConfig = (
  elements: NodeList,
  config: Config
): Config => {
  // create new config object with user defined config

  var elementSpecs = []

  elements.forEach((el: HTMLElement, i) => {
    const boundingClientRect = el.getBoundingClientRect()
    const elementOffset = offset(el)
    const initialPercentageInViewport = getScrollPercentage(el)
    let imageIsOverflowingSmallerThanAllowed = false

    if (isImageOverflowSmallerThanAllowed(el, config)) {
      el.style.backgroundSize = `${boundingClientRect.width +
        config.pixelsOverflowing}px ${boundingClientRect.height +
        config.pixelsOverflowing}px`

      imageIsOverflowingSmallerThanAllowed = true
    }

    // set generic styles
    setStylesOnElement(el)

    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    elementSpecs[i] = {
      offsetTop: elementOffset.top,
      initialPercentageInViewport,
      imageIsOverflowingSmallerThanAllowed
    }
  })

  return {
    ...config,
    elementSpecs
  }
}
