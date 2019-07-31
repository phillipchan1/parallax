import { ElementSpecs } from './ElementSpecs'

type MoveType = 'safety' | 'normal'

export type Config = {
  speedRatio: number
  defaultXPosition: string
  elementSpecs?: ElementSpecs[]
  modeToMove?: MoveType[]
}
