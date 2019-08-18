import { RectangleSize } from '../types/RectangleSize'

export const getImageSize = (url: string): RectangleSize => {
  var image = new Image()
  image.src = url

  return {
    width: image.width,
    height: image.height
  }
}
