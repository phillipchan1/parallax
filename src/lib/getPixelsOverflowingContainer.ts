import { RectangleSize } from '../types/RectangleSize'

export const getPixelsOverflowingContainer = (
  containerSize: RectangleSize,
  backgroundImageSize: RectangleSize,
  buffer: number
): number => {
  const backgroundImageWidth = backgroundImageSize.width

  const ratio = containerSize.width / backgroundImageWidth

  return ratio * backgroundImageSize.height - containerSize.height
}
