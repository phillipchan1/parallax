import * as offset from 'document-offset'

import { getScrollPercentage } from './lib/getScrollPercentage'
import { ElementSpecs } from './types/ElementSpecs'
import { getResizedBackgroundImageSize } from './lib/getResizedBackgroundImageSize'
import { getImageSize } from './lib/getImageSize'
import { getBackgroundImageURLFromElement } from './lib/getBackgroundImageURLFromElement'

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
  var elementSpecs: ElementSpecs[] = []

  elements.forEach((el: HTMLElement, i) => {
    const boundingClientRect = el.getBoundingClientRect()

    const containerDimensions = {
      width: boundingClientRect.width,
      height: boundingClientRect.height
    }

    // get and set background image Size
    const backgroundImageURL = getBackgroundImageURLFromElement(el)
    if (config.debugMode) {
      console.log(`TCL: backgroundImageURL`, backgroundImageURL)
    }

    const backgroundImageSize = getImageSize(backgroundImageURL)

    if (config.debugMode) {
      console.log(`TCL: backgroundImageSize`, backgroundImageSize)
    }

    const resizedImageSize = getResizedBackgroundImageSize(
      containerDimensions,
      backgroundImageSize,
      config
    )

    el.style.backgroundSize = `${resizedImageSize.width}px ${
      resizedImageSize.height
    }px`

    // set initial background Position
    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    // add additional information
    const elementOffset = offset(el)
    const initialPercentageInViewport = getScrollPercentage(el)

    elementSpecs[i] = {
      containerDimensions,
      offsetTop: elementOffset.top,
      initialPercentageInViewport,
      initialImageSize: backgroundImageSize,
      resizedImageSize
    }
  })

  return {
    ...config,
    elementSpecs
  }
}
