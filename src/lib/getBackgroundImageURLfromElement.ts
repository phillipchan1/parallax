export const getBackgroundImageURLFromElement = (el: HTMLElement) => {
  if (!el.style.backgroundImage) {
    return
  }

  const backgroundImageStyle = el.style.backgroundImage

  return backgroundImageStyle
    .replace('url(', '')
    .replace(')', '')
    .replace(/\"/gi, '')
}
