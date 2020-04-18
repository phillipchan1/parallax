import { ParallaxArea } from './parallax-areas.types'
import { Config } from '../config/config.types'

export const getParallaxAreas = (config): ParallaxArea[] => {
  const divsWithParallax = document.querySelectorAll(
    `.${config.parallaxClassName}`
  )

  const parallaxAreas = []

  divsWithParallax.forEach((div, index) => {
    const backgroundUrl = div.getAttribute(`data-parallax-background`)
    const height =
      div.getAttribute(`data-parallax-height`) || config.defaultHeight
    const overrideClassName = div.getAttribute(
      `data-parallax-override-container-class`
    )

    parallaxAreas.push({
      backgroundUrl,
      height,
      className: overrideClassName
        ? overrideClassName
        : `${config.parallaxClassName}-${index}`
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
