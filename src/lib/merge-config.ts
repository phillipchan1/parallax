import { Config } from '../types/Config'

export const mergeConfig = (
  presetConfig: Config,
  userConfig: Config
): Config => {
  const safeGuardedUserConfig = {
    ...userConfig
  }

  return {
    ...presetConfig,
    ...safeGuardedUserConfig
  }
}
