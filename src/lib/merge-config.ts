import { Config } from '../config/config.types'
import { getSpeedWithinLimits } from '../config/get-speed-within-limits'

export const mergeConfig = (
  presetConfig: Config,
  userConfig: Partial<Config>
): Config => {
  const safeGuardedUserConfig = {
    ...userConfig,
    speed: getSpeedWithinLimits(userConfig.speed)
  }

  return {
    ...presetConfig,
    ...safeGuardedUserConfig
  }
}
