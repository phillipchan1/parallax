import { Config } from './config.types'

/**
 * Only allow speed to be within a range
 * @param speed
 */
export const getSpeedWithinLimits = (speed: Config['speed']) => {
  if (speed > 10) {
    return 10
  }

  if (speed < 1) {
    return 1
  }

  return speed
}
