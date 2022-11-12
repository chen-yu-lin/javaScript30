const video = document.querySelector('video')
const toggle = document.querySelector('.toggle')
const input = document.querySelectorAll('input')
const button = document.querySelectorAll('[data-skip]')
const progress = document.querySelector('.progress')
const progressFilled = document.querySelector('.progress__filled')

//播放或暂停
function togglePlay() {
    video.paused ? video.play() : video.pause()
}
toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)

//图标转换
function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

//音量控制和播放速率
function rangeUpdate() {
    video[this.name] = this.value
    console.log(video[this.name])
}
input.forEach(range => range.addEventListener('input', rangeUpdate))

//前进或后退
function skip() {
    video.currentTime += Number(this.dataset.skip)
    console.log(video.currentTime)
}
button.forEach(item => item.addEventListener('click', skip))

//进度条更新
function percent() {
    const percent = (video.currentTime / video.duration) * 100
    progressFilled.style.flexBasis = `${percent}%`
}
video.addEventListener('timeupdate', percent)

//点击调节进度条
function scrub(e) {
    const scrub = (e.offsetX/progress.clientWidth) * video.duration
    video.currentTime = scrub
}
progress.addEventListener('click',scrub)

//拖动进度条
let mousedown = false
progress.addEventListener('mousemove',(e) => {
    if (mousedown) {
        scrub(e)
    }
})
progress.addEventListener('mousedown',() => mousedown=true)
progress.addEventListener('mouseup',() => mousedown=false)









