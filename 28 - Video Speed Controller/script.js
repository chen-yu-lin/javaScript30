const video = document.querySelector('video')
const speed = document.querySelector('.speed')
const speedBar = document.querySelector('.speed-bar')

let isClick = false

speed.addEventListener('mousedown', (e) => {
    isClick = true
    changeSpeed(e)
})

speed.addEventListener('mouseup',() => isClick = false)

speed.addEventListener('mousemove', changeSpeed)

function changeSpeed(e) {
    if (!isClick) return

    let percentage = e.offsetY / speed.offsetHeight

    let max = 5
    let min = 0.5

    let playbackRate = percentage * (max - min) + min

    speedBar.style.height = Math.round(percentage * 100) + '%'
    speedBar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate
}