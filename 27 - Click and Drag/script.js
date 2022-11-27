const slider = document.querySelector(".items")
let isMouseDown = false //记录鼠标是否按下
let startX //按下时位置的x坐标
let scrollLeft //记录视口相对于items最左侧已经滚过的距离

slider.addEventListener('mousedown',(e) => {
    isMouseDown = true

    //计算初始位置指标
    startX = e.pageX - slider.offsetLeft

    //计算slider的水平滑动距离
    scrollLeft = slider.scrollLeft

    console.log(e.pageX,slider.offsetLeft,slider.scrollLeft)

    slider.classList.add('active')
})

slider.addEventListener('mouseup',() => {
    isMouseDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove',(e) => {
    if (!isMouseDown) return
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 3
    slider.scrollLeft = scrollLeft - walk
})