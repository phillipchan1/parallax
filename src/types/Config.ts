import { ElementSpecs } from './ElementSpecs'

export type Config = {
  speedRatio: number
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  smallestPixelsOverFlowing?: number
}
