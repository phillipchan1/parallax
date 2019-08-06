import { ElementSpecs } from './ElementSpecs'

export type Config = {
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  pixelsOverflowing?: number
  speedRatio: number
}
