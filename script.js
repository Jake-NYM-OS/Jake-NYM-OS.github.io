const correctPassword = "BIRTHDAY{26h_08a_2002ppy}"; // Замените на ваш пароль

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("message").textContent = "Успешный вход!";
        // Перенаправление на другую страницу
        window.location.href = "happybirthday_katya.html"; // Замените на нужный URL
    } else {
        document.getElementById("message").textContent = "Неверный пароль. Попробуйте снова.";
    }
});

