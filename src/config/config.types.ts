export type Config = {
  /**
   * Puts out console statements in debug
   * mode
   */
  debugMode?: boolean

  /**
   * If parallax item is not given a height,
   * this is the fallback height
   */
  defaultHeight: string

  /**
   * Should only be a value between 1-10
   */
  speed: number

  /**
   * The wrapper around the parallax and normal items
   * Expects a DOM hierarchy of something like
   * <div class="wrapper">
   *  <div class="parallax"></div>
   * </div>
   */
  wrapperClassName: string

  /**
   * The class of the parallax examples
   */
  parallaxClassName: string
}
