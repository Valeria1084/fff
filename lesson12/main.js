//1
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

/*fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => {return value.json()})
.then(posts => {
    let wraper = document.createElement('div')
    wraper.classList.add('wraper')
    for (const post of posts){
        let divPast = document.createElement('div')
        divPast.classList.add('post')
        divPast.innerHTML =`<h4>id:${post.id}</h4>
<h4>title:${post.title}</h4>
<h4>body:${post.body}</h4>`
        wraper.appendChild(divPast)
        document.body.appendChild(wraper)
    }
})
*/

//2
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
.then(v => v.json())
.then(comment =>{
    let wraper = document.createElement('div')
    wraper.classList.add('wraper')
    for (const comments of comment){
        let divComments = document.createElement('div');
        divComments.classList.add('comment');
        divComments.innerHTML =` <h3>ID: ${comments.id}</h3>
                        <h3>Name: ${comments.name}</h3>
                        <h3>Email: ${comments.email}</h3>
                        <h3>Body: ${comments.body}</h3>`
        wraper.appendChild(divComments);
        document.body.appendChild(wraper);
    }

})