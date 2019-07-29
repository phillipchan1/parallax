import * as _ from 'lodash'

import { init } from './init'
import { doParallaxEffect } from './lib/doParallaxEffect'

var parallaxElements = document.querySelectorAll('.parallax')

window.onload = function() {
  var elementSpecs = init(parallaxElements)

  window.addEventListener('scroll', () => {
    doParallaxEffect(parallaxElements)
  })

  window.addEventListener(
    'resize',
    _.debounce(() => {
      elementSpecs = init(parallaxElements)
    }, 500)
  )
}
