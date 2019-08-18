import { resizeImageByAddition, resizeImageByDimension } from './resizeImage'

describe('resizeImage module', () => {
  describe('resizeImageByAddition()', () => {
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
      const actual = resizeImageByAddition(testImageSize)

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
      const actual = resizeImageByAddition(testImageSize, pixelsToChange)

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
      const actual = resizeImageByAddition(testImageSize, pixelsToChange, side)

      // asert
      expect(expected).toEqual(actual)
    })
  })

  describe('resizeImageByDimension()', () => {
    it('should give me a new dimension if i pass it a new side dimension', () => {
      // arrange
      const testImageSize = {
        width: 200,
        height: 400
      }
      const newSideWidth = 400
      const side = 'width'

      const expected = {
        width: 400,
        height: 800
      }

      // act
      const actual = resizeImageByDimension(testImageSize, newSideWidth, side)

      // assert
      expect(actual).toEqual(expected)
    })

    it('should be able to shrink image', () => {
      // arrange
      const testImageSize = {
        width: 200,
        height: 400
      }
      const newSideWidth = 100
      const side = 'width'

      const expected = {
        width: 100,
        height: 200
      }

      // act
      const actual = resizeImageByDimension(testImageSize, newSideWidth, side)

      // assert
      expect(actual).toEqual(expected)
    })

    it('should give me a new dimension if i pass it a new side dimension', () => {
      // arrange
      const testImageSize = {
        width: 200,
        height: 400
      }
      const newSideWidth = 1000
      const side = 'height'

      const expected = {
        width: 500,
        height: 1000
      }

      // act
      const actual = resizeImageByDimension(testImageSize, newSideWidth, side)

      // assert
      expect(actual).toEqual(expected)
    })
  })
})
