
//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
    .then(users => {
        let content = document.createElement('div')
        content.classList.add('wraper')

        for (const user of users) {
            let userDiv = document.createElement('div')
            userDiv.style.marginTop = '20px'
            userDiv.classList.add('card')

            for (const userkey in user) {
                let innerDiv = document.createElement('div')
                innerDiv.style.marginTop = '10px'

                if (typeof user[userkey] !== 'object') {
                    innerDiv.innerText = `${userkey}:${user[userkey]}`;
                } else {
                    innerDiv.innerText = `${userkey}:`
                    for (const item in user[userkey]) {
                        const itemDiv = document.createElement('div')

                        if (typeof user[userkey][item] !== 'object') {
                            itemDiv.innerText = `${userkey}:${user[userkey][item]}`;
                        } else {

                            itemDiv.innerText = `${item}:`

                            for (const itemDivElement in user[userkey][item]) {
                                const itemElement = document.createElement('div')
                                itemElement.innerText = `${itemDivElement}:${user[userkey][item][itemDivElement]}`
                                itemDiv.appendChild(itemElement)
                            }
                        }
                        innerDiv.appendChild(itemDiv)
                    }
                }
                userDiv.appendChild(innerDiv)
            }



            let button = document.createElement('button')
            button.innerText ='post of current user'
            button.onclick = (id) =>{
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts =>{
                        for (const post of posts){
                                let divCardPost = document.createElement('div')
                                divCardPost.classList.add('cardpost')
                            divCardPost.innerHTML = `<h4>Title: ${post.title}</h4>`
                                userDiv.appendChild(divCardPost)
                            button.disabled = true
                            let button2 = document.createElement('button');
                            button2.innerText = 'Click post-detail';
                            button2.onclick = () => {
                                window.location = ' post-details.html'

                            }
                            divCardPost.appendChild(button2)


                        }
                    })

            }
            userDiv.appendChild(button)
            content.appendChild(userDiv)
            document.body.appendChild(content)

        }


    })