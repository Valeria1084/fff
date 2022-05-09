
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone){
    this['id'] = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}
const user = [
    new User(10,'Lera','Ponomarenko','ponomqrenko1084@gmail.com','380668765877'),
    new User(2,'Vas','Kokos','ponomqrenko1084@gmail.com','380668765877'),
    new User(3,'Olga','Str','ponomqrenko1084@gmail.com','380668765877'),
    new User(4,'Ann','Dog','ponomqrenko1084@gmail.com','380668765877'),
    new User(5,'Tom','Cat','ponomqrenko1084@gmail.com','380668765877'),
    new User(6,'Joy','Lop','ponomqrenko1084@gmail.com','380668765877'),
    new User(8,'Valeriy','Pon','ponomqrenko1084@gmail.com','380668765877'),
    new User(9,'Kol','Orey','ponomqrenko1084@gmail.com','380668765877'),
    new User(7,'Miky','Goy','ponomqrenko1084@gmail.com','380668765877'),
    new User(1,'Lol','Pik','ponomqrenko1084@gmail.com','380668765877')
]
console.log(user)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = user.filter((userId) => {
    if(userId.id % 2 === 0){
        return userId
    }
})
console.log(filterUser)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
user.sort((a,b )=> a.id - b.id)
console.log(user)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let сlient = [
    new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
    new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
    new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
    new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
    new Client(5,'Lera','Ponomarenko','ponomqrenko1084@gmail.com',380668765877,['book', 'game', 'ps4']),
    new Client(6,'Vas','Kokos','ponomqrenko1084@gmail.com',380668765877,['magasine', 'shop', 'ps3']),
    new Client(7,'Olga','Str','ponomqrenko1084@gmail.com',380668765877,['football', 'ps5']),
    new Client(8,'Ann','Dog','ponomqrenko1084@gmail.com',380668765877,['hobbis','football', 'ps5']),
    new Client(10,'Ann','Dog','ponomqrenko1084@gmail.com',380668765877,['hobbis','football', 'ps5','shop', 'ps3'])
];
console.log(сlient);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
сlient.sort((a, b) => a.order.length - b.order.length)
console.log(сlient)
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, zavod, year, maxspeed, volume) {
    this.model = model;
    this.zavod = zavod;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function (){
 		console.log(`Їдемо із швидкістю ${this.maxSpeed} на годину`);
 	};
   this.info = function (){
        for (let inf1 in this){
            console.log(`${inf1} - ${this[inf1]}`)
        }
    }
   this.newMaxSpeed = function(newSpeed){
        this.maxspeed = this.maxspeed + newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function(driver) {
        this.driver = driver;
    }
}
let car1 = new Car('Peugeot', 'France', 2000, 270, 2.0);
car1.drive();
car1.info();
car1.newMaxSpeed(20);
car1.drive();
car1.changeYear(2010)
car1.info();
car1.addDriver('Vasil')
console.log(car1)

//--1 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- 2 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//--3 newMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//--4 changeYear (newValue) - змінює рік випуску на значення newValue
//--5 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars1 {
    constructor(model, zavod, year, maxspeed, volume) {
        this.model = model;
        this.zavod = zavod;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    info (){
        for (let inf in this){
            console.log(`${inf} - ${this[inf]}`)
        }
    }
    newMaxSpeed(newSpeed){
        this.maxspeed = this.maxspeed + newSpeed
    }
    changeYear (newValue) {
        this.year = newValue
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let car = new Cars1('Peugeot', 'France', 2000, 270, 2.0);
car.drive();
car.info();
car.newMaxSpeed(20);
car.drive();
car.changeYear(2010)
car.info();
car.addDriver('Vasil')
console.log(car)

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
let popelushka =[
    new Popelushka('Valeria',18,39),
    new Popelushka('Olga',45,37),
    new Popelushka('Ann',9,37),
    new Popelushka('Tom',24,38),
    new Popelushka('Alla',50,37),
    new Popelushka('Joy',19,49),
    new Popelushka('Lera',14,39),
    new Popelushka('Santa',3,26),
    new Popelushka('Mari',48,38),
    new Popelushka('Mike',38,43),
]
console.log(popelushka)

class Princ {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}
const prince = new Princ('Alex', 45, 49);

let princeAndPopelushka = (popelushka,prince) =>{
    for (let i of popelushka){
        if(i.findShose === prince.findShose){
            return `tvoya populushka: ${item.name}`
        }else {
            return 'tvoya populushki nema'
        }
    }
}

console.log(princeAndPopelushka(popelushka, prince))

//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
/*
{
    id: 1,
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
}
}
*/
class User2 {
    constructor(id, name, email,address,phone,website,company) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;


    }
}
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class Geo {
    constructor(lat, leng) {
        this.lat = lat;
        this.leng = leng;
    }
}
class Company {
    constructor( name, catchPhrase,  bs) {
        this.name = name;
        this.catchPhrase =catchPhrase;
        this.bs =bs;
    }
}
let company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
let geo = new Geo('-37.3159', '81.1496')
let address = new Address('Kulas Light', 'Apt. 556','Gwenborough','92998-3874',geo)
let user2 = new User2('Leanne Graham', 'Bret', 'Sincere@april.biz',address,'1-770-736-8031 x56442', 'hildegard.org',company)
console.log(user2)

//-  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
class Htmlbook {
    constructor(titleOfTag,action,attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
let htmlbook = [
    new Htmlbook('a','тег <a> устанавливает ссылку или якорь'),
    new Htmlbook('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого'),
    new Htmlbook('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.' ),
    new Htmlbook('span','Тег <span> предназначен для определения строчных элементов документа.')
]
console.log(htmlbook)

