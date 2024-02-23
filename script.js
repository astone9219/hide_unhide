const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
let div = document.getElementById('shapes');

function hide() {
    div.hidden = true;
}

function unhide() {
    div.hidden = false;
}

showBtn.addEventListener('click', unhide);
hideBtn.addEventListener('click', hide);