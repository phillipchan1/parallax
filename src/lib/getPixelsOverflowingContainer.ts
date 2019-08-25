import { RectangleDimensions } from '../types/RectangleDimensions'

export const getPixelsOverflowingContainer = (
  containerSize: RectangleDimensions,
  backgroundImageSize: RectangleDimensions,
  buffer: number
): number => {
  const backgroundImageWidth = backgroundImageSize.width

  const ratio = containerSize.width / backgroundImageWidth

  return ratio * backgroundImageSize.height - containerSize.height
}
