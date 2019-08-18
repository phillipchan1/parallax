import { RectangleSize } from '../types/RectangleSize'
import { resizeImageByDimension } from './resizeImage'

export const getResizedBackgroundImageSize = (
  containerSize: RectangleSize,
  imageSize: RectangleSize
) => {
  // 1) get dimension of image based on the width of the container
  const imageWidthIfWidthOfContainer = resizeImageByDimension(
    imageSize,
    containerSize.width,
    'width'
  )
  console.log(`TCL: imageWidthIfWidthOfContainer`, imageWidthIfWidthOfContainer)

  // 2) see how far off height is from container + pixelsoverflowing

  //  3) get resized image based on that difference
  // const resizedImageBasedOnOverflow = resizeImageByAddition(
  //   initialDimensions,
  //   config.pixelsOverflowing
  // )

  return {
    width: 200,
    height: 200
  }
}
