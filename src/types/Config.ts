import { ElementSpecs } from './ElementSpecs'

export type Config = {
  debugMode?: boolean
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  pageOffsetToInitialize?: number
  pixelsOverflowing?: number
  selector: string
  speedRatio: number
}
