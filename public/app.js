

// асинхронная функция
async function SendForm(e) {
    // останавливает действие по умолчанию
    e.preventDefault();

    // отправляем POST запрос на сервер
    response = await fetch('api/auth/singup', {
        method: 'POST',          // метод POST
        body: new FormData(form) // в класс FormData передаем ссылку на форму
    });

    // получаем JSON
    let result = await response.json();

    console.log(result);
};

// при щелчке на кнопку отправки формы
// отправляем форму на сервер
form.onsubmit = SendForm;
