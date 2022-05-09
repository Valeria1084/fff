//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let bead = ['вилупок','дідько','дурепа','йолоп','курва','лярва']
let beadDiv = document.createElement('div')
let inp = document.createElement('input')
let butt = document.createElement('button')
butt.innerText = 'Перевір'
document.body.append(beadDiv)
beadDiv.append(inp,butt)
beadDiv.style.marginTop = '40px'


butt.addEventListener('click',function () {
    let inpVel = inp.value
    for(let beAd of bead) {
        if (beAd === inpVel) {
            alert('ти шо, так не можно')
            inp.value = ' ';
            return;
        }
    }
    if (inpVel) {
        alert('Молодець');
        inp.value = ' ';

    }
})

//- Создайте меню, которое раскрывается/сворачивается при клике
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');
titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

document.getElementById('button').onclick = function () {
    document.getElementById('button').hidden = true;
}