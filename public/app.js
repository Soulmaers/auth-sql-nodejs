

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

        // Отправим ответ в формате JSON (с правильным типом содержимого)
        .then((res) => res.json())
        .then((res) => {
            // работа с результатом запроса (ответом сервера)
            let user = res;
            console.log(user);
            // можно сохранить в localStorage, преобразовав в JSON...
            localStorage.setItem("user", JSON.stringify(user));
            // ... и извлечь, спарсив из JSON
            user = localStorage.getItem("user");
            console.log("user", JSON.parse(user));
        }); // искомый ответ
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

        // Отправим ответ в формате JSON (с правильным типом содержимого)
        .then((res) => res.json())
        .then((res) => {
            // работа с результатом запроса (ответом сервера)
            let user = res;
            console.log(user);
            // можно сохранить в localStorage, преобразовав в JSON...
            localStorage.setItem("user", JSON.stringify(user));
            // ... и извлечь, спарсив из JSON
            user = localStorage.getItem("user");
            console.log("user", JSON.parse(user));
        }); // искомый ответ
});