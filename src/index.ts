// import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { initAndGetConfig } from './initAndGetConfig'
import { doParallaxEffect } from './lib/doParallaxEffect'

const parallaxElements = document.querySelectorAll('.parallax')

class Parallax {
  constructor(userSetConfig) {
    // set parallax config before image loads to avoid jumping
    var config = initAndGetConfig(parallaxElements, userSetConfig)
    doParallaxEffect(parallaxElements, config)

    window.onload = function() {
      config = initAndGetConfig(parallaxElements, userSetConfig)

      if (config.debugMode) {
        console.log(`TCL: window.onload -> config`, config)
      }

      doParallaxEffect(parallaxElements, config)

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
