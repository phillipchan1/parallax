// import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { defaultConfig } from './config'
import { mergeConfig } from './lib/merge-config'
import { configureParallax } from './lib/configure-parallax'
import { Config } from './types/Config'

class Parallax {
  constructor(userSetConfig) {
    const config: Config = mergeConfig(defaultConfig, userSetConfig)

    configureParallax(config)
  }
}

module.exports = Parallax
