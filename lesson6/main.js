//
let a ='hello world'
let b ='lorem ipsum'
let c ='javascript is cool'

//1 - Знайти та вивести довижину настипних стрінгових значень
console.log(a.length)
console.log(b.length)
console.log(c.length)
//2 - Перевести до великого регістру наступні стрінгові значення
let a1 = a.toUpperCase()
let b1 = b.toUpperCase()
let c1 = c.toUpperCase()
console.log(a1)
console.log(b1)
console.log(c1)
//3 - Перевести до нижнього регістру настипні стрінгові значення
console.log(a1.toLowerCase())
console.log(b1.toLowerCase())
console.log(c1.toLowerCase())
//4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = 'dirty string  '
let strNew = str.trim(' ')
console.log(strNew)
//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let stringToarray = (str) => str.split(' ')
console.log(stringToarray('Ревуть воли як ясла повні'));
//6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0]
console.log(nums.map(value => value.toString()));

// -створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr,direction) =>{
    if (direction === 'ascending'){
        arr.sort((a,b) => a -b)
    }
    else if (direction === 'descending'){
        arr.sort((a,b) => b - a)
    }
    return arr
}
console.log(sortNums([11,21,3],'ascending'));

//7  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
{title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];
let sortArr = (arr) => arr.sort((a,b)=> b.monthDuration - a.monthDuration )
console.log(sortArr(coursesAndDurationArray));
let filterArry = (arr) => arr.filter(value => value.monthDuration > 5)
console.log(filterArry(coursesAndDurationArray));
//8 описати колоду карт
let cards =[
    {cardSuit:'spade',value:'6', color:'black'},
    {cardSuit:'clubs',value:'6', color:'black'},
    {cardSuit:'hearts',value:'6', color:'red'},
    {cardSuit:'diamond',value:'6', color:'red'},

    {cardSuit:'spade',value:'7', color:'black'},
    {cardSuit:'clubs',value:'7', color:'black'},
    {cardSuit:'hearts',value:'7', color:'red'},
    {cardSuit:'diamond',value:'7', color:'red'},


    {cardSuit:'spade',value:'8', color:'black'},
    {cardSuit:'clubs',value:'8', color:'black'},
    {cardSuit:'diamond',value:'8', color:'red'},
    {cardSuit:'hearts',value:'8', color:'red'},

    {cardSuit:'spade',value:'9', color:'black'},
    {cardSuit:'clubs',value:'9', color:'black'},
    {cardSuit:'diamond',value:'9', color:'red'},
    {cardSuit:'hearts',value:'9', color:'red'},

    {cardSuit:'spade',value:'10', color:'black'},
    {cardSuit:'clubs',value:'10', color:'black'},
    {cardSuit:'diamond',value:'10', color:'red'},
    {cardSuit:'hearts',value:'10', color:'red'},

    {cardSuit:'spade',value:'jack', color:'black'},
    {cardSuit:'clubs',value:'jack', color:'black'},
    {cardSuit:'diamond',value:'jack', color:'red'},
    {cardSuit:'hearts',value:'jack', color:'red'},

    {cardSuit:'spade',value:'queen', color:'black'},
    {cardSuit:'clubs',value:'queen', color:'black'},
    {cardSuit:'diamond',value:'queen', color:'red'},
    {cardSuit:'hearts',value:'queen', color:'red'},

    {cardSuit:'spade',value:'king', color:'black'},
    {cardSuit:'clubs',value:'king', color:'black'},
    {cardSuit:'diamond',value:'king', color:'red'},
    {cardSuit:'hearts',value:'king', color:'red'},

    {cardSuit:'spade',value:'асе', color:'black'},
    {cardSuit:'clubs',value:'асе', color:'black'},
    {cardSuit:'diamond',value:'асе', color:'red'},
    {cardSuit:'hearts',value:'асе', color:'red'}

]
//  - знайти піковий туз
let spadeFiltrs = (arr) => arr.filter(value => value.cardSuit === 'clubs' && value.value === 'асе')
console.log(spadeFiltrs(cards));
//  - всі шістки
console.log(cards.filter(value => value.value === '6'));
//  - всі червоні карти
let redFiltrs = (arr) => arr.filter(value => value.color === 'red')
console.log(redFiltrs(cards));
//  - всі буби
let cardSuitFiltrs = (arr) => arr.filter(value => value.cardSuit === 'diamond')
console.log(cardSuitFiltrs(cards));
//  - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value >'8' || value.value ==='10'&& value.cardSuit === 'clubs' ));



// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let newArr = []
    for(let i = 0 ; i < str.length; i += n){
        newArr.push(str.substr(i,n))
    }
    return newArr
}
console.log(cutString('наслаждение', 3));

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
  //  let str = 'Каждый охотник желает знать';

let delete_characters = (str, length) => {
    return str.substr(0,length)
}
console.log(delete_characters('Каждый охотник желает знать', 10));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";

 let insert_dash = (str) => {
     let newUp = str.split(' ').join('-').toUpperCase()
 return newUp
 }
console.log(insert_dash("HTML JavaScript PHP"));

 //- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upString = (up) => {
    return up[0].toUpperCase() + up.slice(1)
}
console.log(upString('hi'));

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'
 let harry = (str) => {
    return str.replaceAll('.',' ')
        .replaceAll('-',' ')
        .replaceAll('_',' ')
 }
console.log(harry(n1));

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let random = (length,nam) => {
    let array = []
    for (i = 0; i < length;i++){
        array.push(Math.floor(Math.random()*nam))
    }
    return array.sort((a, b) => a-b)
}
let result = random(10,100)
console.log(result)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let filtr = (length1,nam1) => {
    let array1 = []
    for (i = 0; i < length1;i++){
        array1.push(Math.floor(Math.random()*nam1))
    }
    return array1.filter( value => value % 2 == 0 )
}
let result_2 = filtr( 10,100)
console.log(result_2)

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

/*let capitalize = (str) => {
for (let i = 0 ; i < str.length ; i++){
    let strUpNew = str[i][0].toUpperCase() + str[i].slice(1)
}
return strUpNew
}
console.log(capitalize(' яка повертає рядок'));*/



//
let email = (emailStr) => {
    if (emailStr.includes('@' && 'com')){
        console.log('email вірний')
    }
    for (i = 0 ; i < emailStr.length;i++)
        if (emailStr[i].includes('.') <= 2) {
            console.log('email вірний')
        }

        else {
            console.log('невірний email')
        }
}
email('Some.email@gmailcom')


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let newArrS = coursesArray.sort((a,b) => a.modules - b.modules )
console.log(newArrS)

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
  //  let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5
let count = (str,stringsearch) =>{
    let countNew = 0
    for(let i of  str.toLowerCase()){
        if(stringsearch.includes(i)){
            countNew += 1
        }

    }
    return countNew
}
console.log(count("Астрономия это наука о небесных объектах", "о"));


//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
 //   let str = "Сила тяжести приложена к центру масс тела";
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutString = (str,n) => {
    return  str.split(" ").splice(0,n).join(" ")
}
console.log(cutString1("Сила тяжести приложена к центру масс тела",3))