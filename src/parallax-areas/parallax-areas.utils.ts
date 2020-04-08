import { ParallaxArea } from './parallax-areas.types'
import { Config } from '../config/config.types'

export const getParallaxAreas = (config): ParallaxArea[] => {
  const divsWithParallax = document.querySelectorAll(
    `.${config.parallaxClassName}`
  )

  const parallaxAreas = []

  divsWithParallax.forEach((div, index) => {
    parallaxAreas.push({
      backgroundUrl: 'https://source.unsplash.com/random',
      className: `${config.parallaxClassName}-${index}`
    })
  })

  return parallaxAreas
}

/**
 * Will assign each parallax area with a class with
 * an index appaended to its name
 * @param config
 */
export const initParallaxAreas = (config: Config): void => {
  const divsWithParallax = document.querySelectorAll(
    `.${config.parallaxClassName}`
  )

  divsWithParallax.forEach((div, index) => {
    div.classList.add(`${config.parallaxClassName}-${index}`)
  })
}
