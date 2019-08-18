import * as offset from 'document-offset'

import { getScrollPercentage } from './lib/getScrollPercentage'
import { setStylesOnElement } from './lib/setStylesOnElement'
import { ElementSpecs } from './types/ElementSpecs'
import { resizeImage } from './lib/resizeImage'

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
    const elementOffset = offset(el)
    const initialPercentageInViewport = getScrollPercentage(el)
    const initialDimensions = {
      width: boundingClientRect.width,
      height: boundingClientRect.height
    }

    const resizedImageBasedOnOverflow = resizeImage(
      initialDimensions,
      config.pixelsOverflowing
    )
    console.log(`TCL: resizedImageBasedOnOverflow`, resizedImageBasedOnOverflow)

    // el.style.backgroundSize = `${boundingClientRect.width +
    //   config.pixelsOverflowing}px ${boundingClientRect.height +
    //   config.pixelsOverflowing}px`

    el.style.backgroundSize = `${resizedImageBasedOnOverflow.width}px ${
      resizedImageBasedOnOverflow.height
    }px`

    // set generic styles
    setStylesOnElement(el)

    el.style.backgroundPosition = `${config.defaultXPosition} 0px`

    elementSpecs[i] = {
      initialDimensions,
      offsetTop: elementOffset.top,
      initialPercentageInViewport,
      resizedDimensions: resizedImageBasedOnOverflow
    }
  })

  return {
    ...config,
    elementSpecs
  }
}
