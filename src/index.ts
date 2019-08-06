import * as _ from 'lodash'

import { initAndGetConfig } from './initAndGetConfig'
import { doParallaxEffect } from './lib/doParallaxEffect'

var parallaxElements = document.querySelectorAll('.parallax')

window.onload = function() {
  var config = initAndGetConfig(parallaxElements)
  console.log(`TCL: window.onload -> config`, config)

  // first set it
  doParallaxEffect(parallaxElements, config)

  window.addEventListener('scroll', () => {
    doParallaxEffect(parallaxElements, config)
  })

  window.addEventListener(
    'resize',
    _.debounce(() => {
      config = initAndGetConfig(parallaxElements)
      doParallaxEffect(parallaxElements, config)
    }, 500)
  )
}
