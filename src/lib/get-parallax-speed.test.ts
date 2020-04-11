import { getParallaxSpeed } from './get-parallax-speed'

describe('getParallaxSpeed()', () => {
  it('should return the right speed', () => {
    const testSpeed = 4

    expect(getParallaxSpeed(testSpeed)).toEqual(8)
  })
})
