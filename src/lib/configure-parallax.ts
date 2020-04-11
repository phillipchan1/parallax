import { ParallaxArea } from '../parallax-areas/parallax-areas.types'
import { Config } from '../config/config.types'
import { getParallaxSpeed } from './get-parallax-speed'

export const configureParallax = (
  config: Config,
  parallaxAreas: ParallaxArea[]
) => {
  const head = document.querySelector('head')
  const parallaxSpeed = getParallaxSpeed(config.speed)

  const opening = `<style>`

  /**
   * Perceived parallax speed is controlled
   * by the perspective attribute
   */
  const baseStyles = `
    .${config.wrapperClassName} {
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      perspective: ${parallaxSpeed}px;
    }
  `

  let parallaxElementsStyles = `

    .${config.parallaxClassName} {
      position: relative;
    }

    .${config.parallaxClassName}::after {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateZ(-1px) scale(1.5);
      background-size: cover;
      z-index: -1;
    }
  `

  parallaxAreas.forEach((parallaxArea: ParallaxArea) => {
    parallaxElementsStyles =
      parallaxElementsStyles +
      `
        .${parallaxArea.className} {
          height: ${parallaxArea.height}
        }

        .${parallaxArea.className}::after {
          background-image: url(${parallaxArea.backgroundUrl})
        }
      `
  })

  const closing = `</style>`

  const finalStyles = opening + baseStyles + parallaxElementsStyles + closing
  head.insertAdjacentHTML('beforeend', finalStyles)
}
