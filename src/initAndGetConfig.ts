import * as offset from 'document-offset'

import { config } from './config'
import { mergeConfig } from './lib/mergeConfig'
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

export const initAndGetConfig = (
  elements: NodeList,
  userSetConfig: Config
): Config => {
  // create new config object with user defined config
  const setConfig = mergeConfig(config, userSetConfig)

  var elementSpecs = []

  elements.forEach((el: HTMLElement, i) => {
    const boundingClientRect = el.getBoundingClientRect()
    const elementOffset = offset(el)

    if (isImageOverflowSmallerThanAllowed(el, setConfig)) {
      el.style.backgroundSize = `100% ${boundingClientRect.height +
        setConfig.pixelsOverflowing}px`
    }

    el.style.backgroundPosition = `${setConfig.defaultXPosition} 0px`

    elementSpecs[i] = {
      offsetTop: elementOffset.top
    }
  })

  return {
    ...setConfig,
    elementSpecs
  }
}
