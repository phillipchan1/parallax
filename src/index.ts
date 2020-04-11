// import * as _ from 'lodash'
import { defaultConfig } from './config/config.default'
import { mergeConfig } from './lib/merge-config'
import { configureParallax } from './lib/configure-parallax'
import { Config } from './config/config.types'
import {
  initParallaxAreas,
  getParallaxAreas
} from './parallax-areas/parallax-areas.utils'
import { ParallaxArea } from './parallax-areas/parallax-areas.types'

class Parallax {
  constructor(userSetConfig) {
    const config: Config = mergeConfig(defaultConfig, userSetConfig)

    initParallaxAreas(config)
    const parallaxAreas: ParallaxArea[] = getParallaxAreas(config)

    configureParallax(config, parallaxAreas)
  }
}

module.exports = Parallax
