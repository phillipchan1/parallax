import { RectangleDimensions } from '../types/RectangleDimensions'
import { Side } from '../types/Side'

export const resizeImageByAddition = (
  imageSize: RectangleDimensions,
  pixelsToChange: number = 0,
  side: Side = 'height'
): RectangleDimensions => {
  const percentageToChange = pixelsToChange / imageSize[side]

  if (side === 'height') {
    return {
      height: imageSize.height + pixelsToChange,
      width: imageSize.width * (1 + percentageToChange)
    }
  } else {
    return {
      width: imageSize.width + pixelsToChange,
      height: imageSize.height * (1 + percentageToChange)
    }
  }
}

export const resizeImageByDimension = (
  imageSize: RectangleDimensions,
  newSize: number,
  side: Side
): RectangleDimensions => {
  const percentageToChange = newSize / imageSize[side]

  if (side === 'height') {
    return {
      height: newSize,
      width: imageSize.width * percentageToChange
    }
  } else {
    return {
      width: newSize,
      height: imageSize.height * percentageToChange
    }
  }
}
