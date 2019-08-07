// import * as _ from 'lodash'
import debounce from 'lodash/debounce'

import { initAndGetConfig } from './initAndGetConfig'
import { doParallaxEffect } from './lib/doParallaxEffect'

var parallaxElements = document.querySelectorAll('.parallax')

class Parallax {
  constructor(userSetConfig = {}) {
    window.onload = function() {
      var config = initAndGetConfig(parallaxElements, userSetConfig)

      // initially do it if already scrolled
      if (window.pageYOffset > config.pageOffsetToInitialize) {
        doParallaxEffect(parallaxElements, config)
      }

      window.addEventListener('scroll', () => {
        doParallaxEffect(parallaxElements, config)
      })

      window.addEventListener(
        'resize',
        debounce(() => {
          config = initAndGetConfig(parallaxElements, userSetConfig)
          doParallaxEffect(parallaxElements, config)
        }, 500)
      )
    }
  }
}

module.exports = Parallax
