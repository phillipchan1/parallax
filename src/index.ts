// import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { defaultConfig } from './config/config.default'
import { mergeConfig } from './lib/merge-config'
import { configureParallax } from './lib/configure-parallax'
import { Config } from './config/config.types'
import { getParallaxAreas } from './lib/get-parallax-areas'

class Parallax {
  constructor(userSetConfig) {
    const config: Config = mergeConfig(defaultConfig, userSetConfig)
    const parallaxAreas = getParallaxAreas(config)

    configureParallax(config)
  }
}

module.exports = Parallax
