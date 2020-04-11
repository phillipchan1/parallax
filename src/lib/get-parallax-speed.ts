import { Config } from '../config/config.types'

export const getParallaxSpeed = (speed: Config['speed']) => {
  return 12 - speed
}
