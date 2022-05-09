//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.getElementById('bytton01').onclick = function (){
    document.getElementById('text').style.display = 'none'
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('button1').onclick = function (){
    let age =   document.getElementById('age').value
    if (age < 18) {
        alert('Вибачте вам мало рочків');
    }else if(age > 18 ){
        alert('Вітаємо на нашому сайті.')
    }

}
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let butt = document.getElementById('button3')
butt.addEventListener('click',function (){
    console.log(document.forms.formOne.input1.value);
    console.log(document.forms.formOne.input2.value);
    console.log(document.forms.formOne.input3.value);
    console.log(document.forms.formOne.input4.value);

})



//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let button = document.createElement('button');
 button.innerText = 'Створи таблицю'
document.body.append(inputOne, inputTwo, inputThree, button)
inputOne, inputTwo, inputThree, button.style.marginTop = '50px'
button.addEventListener("click", function (){
    let tr = inputOne.value
    let td = inputTwo.value
    let tex = inputThree.value
    function makeTab(tr,rd,inner){
        let table = document.createElement('table')
        let divTable = document.createElement('div')
        table.style.border = '1px solid red';
        divTable.appendChild(table);
        document.body.appendChild(divTable);

        for(let i = 0 ; i < tr;i++){
            let tr = document.createElement('tr')
            tr.style.border = '1px soli blue'
            for(let a = 0;a < td;a++){
                let td = document.createElement('td')
                td.style.border = '1px solid green';
                td.innerText = `${inner}`
                table.appendChild(tr);
                tr.appendChild(td);

            }
        }

    }

    makeTab(tr,td,tex)
})


