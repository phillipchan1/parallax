import { ParallaxArea } from '../parallax-areas/parallax-areas.types'
import { Config } from '../config/config.types'

export const configureParallax = (
  config: Config,
  parallaxAreas: ParallaxArea[]
) => {
  const head = document.querySelector('head')

  const opening = `<style>`

  const baseStyles = `
    .${config.wrapperClassName} {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
    }
  `

  let parallaxElementsStyles = `
    .${config.parallaxClassName}::after {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateZ(-1px) scale(1.5);
      background-size: 100%;
      z-index: -1;
      background-repeat: no-repeat;
    }
  `

  parallaxAreas.forEach((parallaxArea: ParallaxArea) => {
    parallaxElementsStyles =
      parallaxElementsStyles +
      `
        .${parallaxArea.className}::after {
          background-image: url(${parallaxArea.backgroundUrl})
        }
      `
  })

  const closing = `</style>`

  const finalStyles = opening + baseStyles + parallaxElementsStyles + closing
  head.insertAdjacentHTML('beforeend', finalStyles)
}
