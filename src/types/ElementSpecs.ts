import { ImageSize } from './ImageSize'

export type ElementSpecs = ImageSize & {
  pixelsOverflowing: number
  offsetTop: number
  initialPercentageInViewport: number
}
