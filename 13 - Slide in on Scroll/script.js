const image = document.querySelectorAll('img')

image.forEach(img => {
    const windowHeight = window.innerHeight/2

    window.addEventListener('scroll',() => {
        const height = img.getBoundingClientRect().top

        if (height < windowHeight) {
            img.classList.add('scroll')
        } else {
            img.classList.remove('scroll')
        }
    })
})