//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {return response.json()})
.then(users => {
let wraper = document.createElement('div')
    wraper.classList.add('wraper')
    for(const usre of users){
        let divCard = document.createElement('div')
        divCard.classList.add('card')
        divCard.innerHTML =`
        <h3>ID: ${usre.id}</h3>
        <h4>Name: ${usre.name}</h4>
        `
        let button = document.createElement('button')
        button.innerText = 'Click me'
        button.onclick = () => {
            window.location = 'user-details.html'

        }

        divCard.appendChild(button);
        wraper.appendChild(divCard);
        document.body.appendChild(wraper);

    }

})
/*
  let button = document.createElement('div')
            button.innerText ='post of current user'
            button.onclick = (id) =>{
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts =>{
                        for (const post of posts){
                            if (user.id === post.usreId){
                                let divCardPost = document.createElement('div')
                                divCardPost.classList.add('cardpost')
                                divCardPosts.innerHTML =`<h4>Title: ${post.title}</h4>`
                                userDiv.appendChild(divCardPost)
                            }
                            button.disabled = true
                        }
                    })
 */

