import { getPixelsOverflowing } from './getPixelsOverflowing'
import { getBackgroundImageURLFromElement } from './getBackgroundImageURLfromElement'
import { getImageSize } from './getImageSize'

import { Config } from '../types/Config'

export const isImageOverflowSmallerThanAllowed = (
  el: HTMLElement,
  config: Config
): boolean => {
  const boundingClientRect = el.getBoundingClientRect()
  const url = getBackgroundImageURLFromElement(el)
  const imageSize = getImageSize(url)

  const pixelsOverflowing = getPixelsOverflowing(boundingClientRect, imageSize)

  if (pixelsOverflowing < config.pixelsOverflowing) {
    return true
  }

  return false
}
