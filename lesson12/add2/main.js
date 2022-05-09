//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const user of users) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `
                         <h3>ID: ${user.id}</h3>
                        <h3>Name: ${user.name}</h3>
                        <h3>Username: ${user.username}</h3>
                        <h3>Email: ${user.email}</h3>
                        <h3>Street: ${user.address.street}</h3>
                        <h3>Suite: ${user.address.suite}</h3>
                         <h3>Zipcode: ${user.address.zipcode}</h3>

                        `;
            let button = document.createElement('button');
            button.innerText = 'Click posts';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divCardPosts = document.createElement('div');
                                divCardPosts.classList.add('cardpost');
                                divCardPosts.innerHTML = `
                                 <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>`;
                                divCard.appendChild(divCardPosts)

                                let button2 = document.createElement('button');
                                button2.innerText = 'Click Comments';
                                button2.onclick = (id) => {
                                    fetch('https://jsonplaceholder.typicode.com/users/' + post.id + '/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if ( post.id === comment.postId) {
                                                    let divCardComments = document.createElement('div');
                                                    divCardComments.classList.add('cardComments');
                                                    divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `
                                                    divCardPosts.appendChild(divCardComments)

                                                }
                                                button2.disabled = true;


                                            }
                                        })

                                }
                                divCardPosts.appendChild(button2)

                            }
                            button.disabled = true;
                        }
                    })
            }
            divCard.appendChild(button);
            wraper.appendChild(divCard);
            document.body.appendChild(wraper);
        }
    });

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
