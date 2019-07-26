var parallax = (function() {
    var paralaxElements = document.querySelectorAll('.parallax')

    // determines if an element is in the viewport
    var isInViewport = function(el) {
        var r, html
        if (!el || 1 !== el.nodeType) {
            return false
        }
        html = document.documentElement
        r = el.getBoundingClientRect()

        return (
            !!r &&
            r.bottom >= 0 &&
            r.right >= 0 &&
            r.top <= html.clientHeight &&
            r.left <= html.clientWidth
        )
    }

    window.addEventListener('scroll', () => {
        paralaxElements.forEach((el, i) => {
            if (!isInViewport(el)) {
                return
            }

            console.log()

            el.style.backgroundPosition = `0 -${el.getBoundingClientRect().top /
                2}px `

            console.log(`picture ${i + 1} in viewport!`)
        })
    })
})()
