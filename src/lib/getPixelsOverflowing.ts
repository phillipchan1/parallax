import { RectangleSize } from '../types/RectangleSize'

export const getPixelsOverflowing = (
  elementBoundingClientRect: ClientRect,
  backgroundImageSize: RectangleSize
): number => {
  const elementWidth = elementBoundingClientRect.width
  const backgroundImageWidth = backgroundImageSize.width

  const ratio = elementWidth / backgroundImageWidth

  return ratio * backgroundImageSize.height - elementBoundingClientRect.height
}
