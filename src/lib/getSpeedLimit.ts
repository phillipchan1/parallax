export const getSpeedLimit = (speed: number): number => {
  if (speed < 0.1) {
    return 0.1
  }

  if (speed > 0.5) {
    return 0.5
  }

  return speed
}
