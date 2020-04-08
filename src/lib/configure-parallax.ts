export const configureParallax = (config) => {
  const head = document.querySelector('head')

  const baseStyles = `
        <style>
            ${config.wrapperClass} {
                height: 100vh;
                overflow-x: hidden;
                overflow-y: auto;
                perspective: 2px;
            }
        </style>
    `
  head.insertAdjacentHTML('beforeend', baseStyles)
}
