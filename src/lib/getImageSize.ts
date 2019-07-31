import { ImageSize } from '../types/ImageSize'

export const getImageSize = (url: string): ImageSize => {
  var image = new Image()
  image.src = url

  return {
    width: image.width,
    height: image.height
  }
}
