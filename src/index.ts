// import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { config } from './config'
import { mergeConfig } from './lib/mergeConfig'
import { initAndGetConfig } from './initAndGetConfig'
import { doParallaxEffect } from './lib/doParallaxEffect'

class Parallax {
  constructor(userSetConfig) {
    const setConfig = mergeConfig(config, userSetConfig)

    const parallaxElements = document.querySelectorAll(setConfig.selector)

    // set parallax config before image loads to avoid jumping
    var specs = initAndGetConfig(parallaxElements, setConfig)
    doParallaxEffect(parallaxElements, config)

    window.onload = function() {
      specs = initAndGetConfig(parallaxElements, setConfig)

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
          specs = initAndGetConfig(parallaxElements, setConfig)
          doParallaxEffect(parallaxElements, config)
        }, 500)
      )
    }
  }
}

module.exports = Parallax
