const hero = document.querySelector('.hero')
const h1 = document.querySelector('h1')

const factor = 0.4

function shadowMove(e) {
    const { offsetWidth: width, offsetHeight: height } = hero
    let { offsetX: x, offsetY: y } = e

    if (this !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xWalk = parseInt((x - width / 2) * factor)
    const yWalk = parseInt((y - height / 2) * factor)

    h1.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `
}

hero.addEventListener('mousemove', shadowMove);


