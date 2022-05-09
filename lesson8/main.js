//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
let contentId = document.getElementById('content').innerText
    console.log(contentId)
//     -- отримує текст з блоку з id "rules"
let rulesId = document.getElementById('rules').innerText
console.log(rulesId)

//    -- замініть текст параграфа з id 'content' на будь-який інший
let contentIdTex = document.getElementById('content')
contentIdTex.innerText = 'lera'
//     -- замініть текст параграфа з id 'rules' на будь-який інший
let rulesIdTex = document.getElementById('rules')
rulesIdTex.innerText = 'Valeria'
//     -- змініть кожному елементу колір фону на червоний
let background = document.body.children
for (let b of background){
    b.style.background = 'red'
}

//     -- змініть кожному елементу колір тексту на синій
let color = document.body.children
for (let i of color){
    i.style.color = 'blue'
}
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesId.classList)

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let backgroundFc = document.getElementsByClassName('fc_rules')
for (let b of backgroundFc){
    b.style.backgroundFc = 'red'
}