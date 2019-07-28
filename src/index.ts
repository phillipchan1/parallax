import * as _ from 'lodash'

import { isInViewport } from './lib/isInViewport'
import { init } from './init'

var parallaxElements = document.querySelectorAll('.parallax')

window.onload = function() {
  var elementSpecs = init(parallaxElements)
  console.log('TCL: window.onload -> elementSpecs', elementSpecs)

  window.addEventListener('scroll', () => {
    parallaxElements.forEach((el: HTMLElement) => {
      if (!isInViewport(el)) {
        return
      }

      el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top /
        2}px `
    })
  })

  window.addEventListener(
    'resize',
    _.debounce(() => {
      elementSpecs = init(parallaxElements)
    }, 500)
  )
}
