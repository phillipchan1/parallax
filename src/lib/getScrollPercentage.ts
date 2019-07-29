export const getScrollPercentage = domElement => {
  console.log(document.body.clientHeight)
  return (
    domElement.scrollTop / (domElement.scrollHeight - domElement.clientHeight)
  )
}
