//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btn = document.getElementById('btn')
let key = 'key'

let add = (userName,userAge) => {
    let user = {
        name: userName,
        age: userAge
    }
    localStorage.setItem(key,JSON.stringify(user))
}
btn.onclick = () => {
    add(name.value,age.value)
}
//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const {model,type,volume} = document.forms.carForm
let btnCar = document.getElementById('btnCar');
let item = 'kayCar'

let add2 = (model,type,volume) => {
    let arr = JSON.parse(localStorage.getItem(item)) || [];
    arr.push({model,type,volume})
    localStorage.setItem(item,JSON.stringify(arr))
}
    btnCar.onclick = () => {
        add2(model.value,type.value,volume.value)
    }

