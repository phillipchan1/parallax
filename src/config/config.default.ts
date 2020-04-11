import { Config } from './config.types'

export const defaultConfig: Config = {
  /**
   * Puts out console statements in debug
   * mode
   */
  debugMode: false,

  /**
   * Should only be a value between 1-10
   */
  speedRatio: 1,

  /**
   * The wrapper around the parallax and normal items
   * Expects a DOM hierarchy of something like
   * <div class="wrapper">
   *  <div class="parallax"></div>
   * </div>
   */
  wrapperClassName: 'wrapper',

  /**
   * The class of the parallax examples
   */
  parallaxClassName: 'parallax',

  /**
   * If parallax item is not given a height,
   * this is the fallback height
   */
  defaultHeight: '70vh'
}
