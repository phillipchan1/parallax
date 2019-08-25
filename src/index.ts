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

      if (specs.debugMode) {
        console.log(`TCL: window.onload -> config`, specs)
      }

      doParallaxEffect(parallaxElements, specs)

      window.addEventListener('scroll', () => {
        doParallaxEffect(parallaxElements, specs)
      })

      window.addEventListener(
        'resize',
        debounce(() => {
          specs = initAndGetConfig(parallaxElements, setConfig)
          doParallaxEffect(parallaxElements, specs)

          if (specs.debugMode) {
            console.log(`TCL: window.onload -> config`, specs)
          }
        }, 300)
      )
    }
  }
}

module.exports = Parallax
