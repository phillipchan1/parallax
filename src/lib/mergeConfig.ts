import { Config } from '../types/Config'
import { getSpeedLimit } from './getSpeedLimit'

export const mergeConfig = (
  presetConfig: Config,
  userConfig: Config
): Config => {
  return {
    ...presetConfig,
    ...userConfig,
    speedRatio: getSpeedLimit(userConfig.speedRatio)
  }
}
