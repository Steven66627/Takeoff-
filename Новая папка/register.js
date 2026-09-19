 document.getElementById('registerForm').addEventListener('submit', function(e) {
        const fullname = document.getElementById('fullname').value.trim();
        const passport = document.getElementById('passport').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        const passportRegex = /^\d{10}$/;
        if (!passportRegex.test(passport)) {
            alert('Серия и номер паспорта должны состоять из 10 цифр.');
            e.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            alert('Пароли не совпадают.');
            e.preventDefault();
            return;
        }

    });
    // Обработка кнопки "Войти"
    document.getElementById('loginButton').addEventListener('click', function() {
        window.location.href = 'avtoriziter.html'; 
    });