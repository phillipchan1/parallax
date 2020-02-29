const maxSpeed = 2
const minSpeed = 0.01

/**
 * This method functions as a speed gate to keep
 * from user error specifying speeds that are
 * astronomically fast or slow
 * @param speed
 */
export const getSpeedLimit = (speed: number): number => {
  if (speed < minSpeed) {
    return minSpeed
  }

  if (speed > maxSpeed) {
    return maxSpeed
  }

  return speed
}
