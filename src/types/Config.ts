import { ElementSpecs } from './ElementSpecs'

export type Config = {
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  smallestPixelsOverFlowing?: number
  speedRatio: number
}
