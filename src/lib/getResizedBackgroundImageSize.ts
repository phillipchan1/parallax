import { RectangleSize } from '../types/RectangleSize'
import { resizeImageByDimension, resizeImageByAddition } from './resizeImage'
import { Config } from '../types/Config'

export const getResizedBackgroundImageSize = (
  containerSize: RectangleSize,
  imageSize: RectangleSize,
  config: Config
) => {
  // 1) get dimension of image based on the width of the container
  const imageWidthIfWidthOfContainer = resizeImageByDimension(
    imageSize,
    containerSize.width,
    'width'
  )

  if (config.debugMode) {
    console.log(
      `TCL: imageWidthIfWidthOfContainer`,
      imageWidthIfWidthOfContainer
    )
  }

  // 2) see how far off height is from container + pixelsoverflowing
  const pixelsDeltaFromContainer =
    imageWidthIfWidthOfContainer.height -
    config.pixelsOverflowing -
    containerSize.height

  if (config.debugMode) {
    console.log(`TCL: pixelsDeltaFromContainer`, pixelsDeltaFromContainer)
  }

  // 2a) if its within threshold, just return resized to container imageSize
  if (pixelsDeltaFromContainer > config.pixelsOverflowing) {
    return imageWidthIfWidthOfContainer
  }

  const pixelsToMakeItWork =
    containerSize.height +
    config.pixelsOverflowing -
    imageWidthIfWidthOfContainer.height

  //  3) get resized image based on that difference
  return resizeImageByAddition(
    imageWidthIfWidthOfContainer,
    pixelsToMakeItWork,
    'height'
  )
}
