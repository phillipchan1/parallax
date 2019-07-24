var parallax = (function() {
    var paralaxElements = document.querySelectorAll('.parallax')

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        console.log('TCL: parallax -> scrolled', scrolled)

        paralaxElements.forEach(el => {})
    })
})()
