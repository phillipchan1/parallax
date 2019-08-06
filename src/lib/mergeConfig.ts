import { Config } from '../types/Config'
import { getSpeedLimit } from './getSpeedLimit'

export const mergeConfig = (
  presetConfig: Config,
  userConfig: Config
): Config => {
  const safeGuardedUserConfig = {
    ...userConfig,
    speedRatio: getSpeedLimit(userConfig.speedRatio || presetConfig.speedRatio)
  }

  return {
    ...presetConfig,
    ...safeGuardedUserConfig
  }
}
