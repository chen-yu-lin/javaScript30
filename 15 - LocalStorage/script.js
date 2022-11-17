const form = document.querySelector('.add-items')
const itemList = document.querySelector('.plates')

let items = JSON.parse(localStorage.getItem('items')) || []

function additems(e) {
    e.preventDefault()
    const text = this.querySelector('[name=item]').value

    const item = {
        text,
        done: false
    }

    items.push(item)
    this.reset()
    populateList(items, itemList)
    localStorage.setItem('items', JSON.stringify(items))
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, index) => {
        return `
            <li>
                <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? 'checked' : ''}>
                <label for="item${index}">${plate.text}</label>
            </li>
        `
    }).join('')
}

function toggleDone(e) {
    if (!e.target.matches('input')) return
    const ele = e.target
    const index = ele.dataset.index
    items[index].done = !items[index].done
    populateList(items,itemList)
    localStorage.setItem('items',JSON.stringify(items))
}

form.addEventListener('submit',additems)
itemList.addEventListener('click',toggleDone)
populateList(items,itemList)