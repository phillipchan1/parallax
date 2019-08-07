import { ElementSpecs } from './ElementSpecs'

export type Config = {
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  pageOffsetToInitialize?: number
  pixelsOverflowing?: number
  speedRatio: number
}
