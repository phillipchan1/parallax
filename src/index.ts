import * as _ from 'lodash'

import { initAndGetConfig } from './initAndGetConfig'
import { doParallaxEffect } from './lib/doParallaxEffect'

var parallaxElements = document.querySelectorAll('.parallax')

class Parallax {
  constructor(userSetConfig) {
    window.onload = function() {
      var config = initAndGetConfig(parallaxElements, userSetConfig)

      // first set it
      doParallaxEffect(parallaxElements, config)

      window.addEventListener('scroll', () => {
        doParallaxEffect(parallaxElements, config)
      })

      window.addEventListener(
        'resize',
        _.debounce(() => {
          config = initAndGetConfig(parallaxElements, userSetConfig)
          doParallaxEffect(parallaxElements, config)
        }, 500)
      )
    }
  }
}

module.exports = Parallax
