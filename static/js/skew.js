let image = document.querySelector('.skew-img')
let image2 = document.querySelector('.skew-img-2')
let currentPos = window.pageYOffset

const callDistort = function () {
    const newPos = window.pageYOffset
    const diff = newPos - currentPos
    const speed = diff * 0.35

    image.style.transform = 'skewY(' + speed + 'deg)'
    image2.style.transform = 'skewY(' + speed + 'deg)'
    currentPos = newPos
    requestAnimationFrame(callDistort)
}

callDistort()