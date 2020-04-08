import { Config } from '../config/config.types'

export const mergeConfig = (
  presetConfig: Config,
  userConfig: Partial<Config>
): Config => {
  const safeGuardedUserConfig = {
    ...userConfig
  }

  return {
    ...presetConfig,
    ...safeGuardedUserConfig
  }
}
