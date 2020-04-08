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

  let parallaxElementsStyles = ``

  parallaxAreas.forEach((parallaxArea: ParallaxArea) => {
    parallaxElementsStyles =
      parallaxElementsStyles +
      `
        .${parallaxArea.className} {
          opacity: 0.7    
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
