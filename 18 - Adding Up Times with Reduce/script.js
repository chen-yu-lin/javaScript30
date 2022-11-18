const list = document.getElementsByTagName('li')

let times = Array.from(list).map(li => {
    const timeStr = li.dataset.time.split(':')
    const total = parseInt(timeStr[0], 10) * 60 + parseInt(timeStr[1], 10)
    return total
})

console.log(times)

//累加
const seconds = times.reduce((a, b) => {
    return a + b
}, 0)

console.log(seconds)

//展示
show(seconds)

function show(totalTimes) {
    //秒
    const second = totalTimes % 60
    //小时
    const hour = Math.floor(totalTimes / 3600)
    //分钟
    const minute = (totalTimes - 3600 * hour - second) / 60

    document.getElementById('totaltime').innerText = `${hour}:${minute}:${second}`
}