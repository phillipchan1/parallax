import { ImageSize } from '../types/ImageSize'
import { Side } from '../types/Side'

export const resizeImage = (
  image: ImageSize,
  pixelsToChange: number = 0,
  side: Side = 'height'
): ImageSize => {
  const percentageToChange = pixelsToChange / image[side]

  if (side === 'height') {
    return {
      height: image.height + pixelsToChange,
      width: image.width * (1 + percentageToChange)
    }
  } else {
    return {
      width: image.width + pixelsToChange,
      height: image.height * (1 + percentageToChange)
    }
  }
}
