let view = document.getElementById('view');
let close = document.getElementById('close')
let codey = document.getElementById('codey')

let open = function() {
    codey.style.display = 'block'
    close.style.display = 'block'
}

let hide = function() {
    codey.style.display = 'none'
    close.style.display = 'none'
}

view.addEventListener('click', open)
close.addEventListener('click', hide)

let textChange = () => {
    view.innerHTML = 'Wazzuppp'
}

let textReturn = () => {
    view.innerHTML = 'View'
}

view.onclick = textChange;
close.onclick = textReturn;