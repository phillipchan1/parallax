import { ImageSize } from '../types/ImageSize'

export const getPixelsOverflowing = (
  elementBoundingClientRect: ClientRect,
  backgroundImageSize: ImageSize
): number => {
  const elementWidth = elementBoundingClientRect.width
  const backgroundImageWidth = backgroundImageSize.width

  const ratio = elementWidth / backgroundImageWidth

  return ratio * backgroundImageSize.height - elementBoundingClientRect.height
}
