import * as offset from 'document-offset'

export const getScrollPercentage = (el: HTMLElement): number => {
  const elementDimensions = el.getBoundingClientRect()
  const elementOffset = offset(el)

  const percentage =
    (pageYOffset + window.innerHeight - elementOffset.top) /
    (window.innerHeight + elementDimensions.height)

  // round to nearest hundered
  return Math.round(percentage * 100) / 100
}
