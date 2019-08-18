import { resizeImage } from './resizeImage'

describe('resizeImage', () => {
  it('should give me the same image size if 0 pixels are given to it', () => {
    // arrange
    const testImageSize = {
      width: 200,
      height: 200
    }

    const expected = {
      width: 200,
      height: 200
    }

    // act
    const actual = resizeImage(testImageSize)

    // asert
    expect(expected).toEqual(actual)
  })

  it('should give me new image size that are in proportion provided with pixels increase', () => {
    // arrange
    const testImageSize = {
      width: 200,
      height: 400
    }

    const pixelsToChange = 200

    const expected = {
      width: 300,
      height: 600
    }

    // act
    const actual = resizeImage(testImageSize, pixelsToChange)

    // asert
    expect(expected).toEqual(actual)
  })

  it('should be able to specify which side to change', () => {
    // arrange
    const testImageSize = {
      width: 200,
      height: 400
    }

    const pixelsToChange = 200
    const side = 'width'

    const expected = {
      width: 400,
      height: 800
    }

    // act
    const actual = resizeImage(testImageSize, pixelsToChange, side)

    // asert
    expect(expected).toEqual(actual)
  })
})
