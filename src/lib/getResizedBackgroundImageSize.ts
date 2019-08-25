import { RectangleSize } from '../types/RectangleSize'
import { resizeImageByDimension, resizeImageByAddition } from './resizeImage'
import { Config } from '../types/Config'

export const getResizedBackgroundImageSize = (
  containerSize: RectangleSize,
  imageSize: RectangleSize,
  config: Config
) => {
  // 1) get dimension of image based on the width of the container
  const imageSizeIfWidthOfContainer = resizeImageByDimension(
    imageSize,
    containerSize.width,
    'width'
  )

  if (config.debugMode) {
    console.log(
      `TCL: imageSizeIfWidthOfContainer`,
      imageSizeIfWidthOfContainer
    )
  }

  // 2) see how far off height is from container + pixelsoverflowing
  const pixelsDeltaFromContainer =
    imageSizeIfWidthOfContainer.height -
    config.pixelsOverflowing -
    containerSize.height

  if (config.debugMode) {
    console.log(`TCL: pixelsDeltaFromContainer`, pixelsDeltaFromContainer)
  }

  // 2a) if its within threshold, just return resized to container imageSize
  if (pixelsDeltaFromContainer > config.pixelsOverflowing) {
    return imageSizeIfWidthOfContainer
  }

  const pixelsToMakeItWork =
    containerSize.height +
    config.pixelsOverflowing -
    imageSizeIfWidthOfContainer.height

  //  3) get resized image based on that difference
  return resizeImageByAddition(
    imageSizeIfWidthOfContainer,
    pixelsToMakeItWork,
    'height'
  )
}
