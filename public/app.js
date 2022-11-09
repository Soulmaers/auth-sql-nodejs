

//const input = document.querySelectorAll('.input')
/*
const update = {
    name: 'Alexis-2',
    second_name: 'Uss2',
    email: 'yyy111@ya.ru',
    password: '12345'
}


fetch('/api/auth/signup', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
})*/


/*
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(new FormData(form)),
};*/

// Отправка данных формы

let form = document.querySelector('.form')
let formin = document.querySelector('.formin')
// Заменим обработчик submit формы
form.addEventListener("submit", function (e) {
    // отключим поведение по умолчанию
    e.preventDefault();
    let formAuth = new FormData(form);
    formAuth = JSON.stringify(Object.fromEntries(formAuth));
    console.log(formAuth)
    fetch('api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: formAuth,
    })
        .then((res) => res.json())
        .then((res) => {
            let user = res;
            console.log(user.values.message);
            // localStorage.setItem("user", JSON.stringify(user));
            // user = localStorage.getItem("user");
            // console.log("user", JSON.parse(user));
        });
});

formin.addEventListener("submit", function (e) {
    // отключим поведение по умолчанию
    e.preventDefault();
    let formAuth = new FormData(formin);
    formAuth = JSON.stringify(Object.fromEntries(formAuth));
    console.log(formAuth)
    fetch('api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: formAuth,
    })
        .then((res) => res.json())
        .then((res) => {
            let user = res;
            console.log(user);
            // localStorage.setItem("user", JSON.stringify(user));
            // user = localStorage.getItem("user");
            console.log(user.values.message);
            console.log(user.values.token);
            views(user)
            //console.log("user", JSON.parse(user));
        })

});


function views(token) {
    console.log(token)
    fetch('api/users', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token.values.token}`
        }
    })
        .then((res) => res.json())
        .then((res) => {
            let user = res;
            console.log(user);
            modals(user.values)
        })
}


function modals(list) {
    document.createElement('div')
    console.log(list)
    list.map(elem => {
        let element = document.createElement('ul')
        element.className = 'users'
        document.body.append(element)
        let arLi = Object.entries(elem)

        let ul = document.querySelectorAll('.users')

        console.log(arLi)
        // element.innerHTML = el
        console.log(element)
    })

}


/*
let element = document.createElement('div')
element.className = 'usersLis'
element.innerHTML = 'Новый эелемент'
document.body.append(element);

let parent = document.querySelector('.div')
let element2 = document.createElement('div')
element2.innerHTML = 'Новый эелемент2'
parent.appendChild(element2);*/