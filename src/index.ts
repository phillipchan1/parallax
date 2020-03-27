// import * as _ from 'lodash'
import * as debounce from 'lodash/debounce'

import { config } from './config'
import { mergeConfig } from './lib/mergeConfig'
import { initAndGetConfig } from './initAndGetConfig'

class Parallax {
  constructor(userSetConfig) {
    const setConfig = mergeConfig(config, userSetConfig)
  }
}

module.exports = Parallax
