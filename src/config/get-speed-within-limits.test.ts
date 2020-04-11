import { getSpeedWithinLimits } from './get-speed-within-limits'

describe('getSpeedWithinLimits()', () => {
  it('should return the value if between 1 and 10', () => {
    const testSpeed = 4
    expect(getSpeedWithinLimits(testSpeed)).toEqual(testSpeed)
  })

  it('should return 10 if speed is greater than 10', () => {
    const testSpeed = 20
    expect(getSpeedWithinLimits(testSpeed)).toEqual(10)
  })

  it('should return 10 if speed is less than 1', () => {
    const testSpeed = 0.2
    expect(getSpeedWithinLimits(testSpeed)).toEqual(1)
  })
})
