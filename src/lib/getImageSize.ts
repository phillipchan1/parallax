import { RectangleDimensions } from '../types/RectangleDimensions'

export const getImageSize = (url: string): RectangleDimensions => {
  var image = new Image()
  image.src = url

  return {
    width: image.width,
    height: image.height
  }
}
