import { RectangleDimensions } from './RectangleDimensions'

export type ElementSpecs = {
  offsetTop: number
  initialPercentageInViewport: number
  containerDimensions: RectangleDimensions
  initialImageSize: RectangleDimensions
  resizedImageSize: RectangleDimensions
}
