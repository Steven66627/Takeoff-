document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = '';

    const surname = document.getElementById('surname').value.trim();
    const name = document.getElementById('name').value.trim();
    const patronymic = document.getElementById('patronymic').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dateStr = document.getElementById('date').value;
    const country = document.getElementById('country').value;

    if (!surname || !name || !phone || !dateStr || !country) {
        errorMsg.textContent = 'Пожалуйста, заполните все обязательные поля.';
        return;
    }

    const nameRegex = /^[А-Яа-яЁёA-Za-z]+$/; 
    const digitsRegex = /\d/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (digitsRegex.test(surname) || !nameRegex.test(surname)) {
        errorMsg.textContent = 'Фамилия должна содержать только буквы.';
        return;
    }

    if (digitsRegex.test(name) || !nameRegex.test(name)) {
        errorMsg.textContent = 'Имя должно содержать только буквы.';
        return;
    }

    if (patronymic && (digitsRegex.test(patronymic) || !nameRegex.test(patronymic))) {
        errorMsg.textContent = 'Отчество должно содержать только буквы.';
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMsg.textContent = 'Некорректный номер телефона.';
        return;
    }

    const today = new Date();
    const ticketDate = new Date(dateStr);
    today.setHours(0,0,0,0);
    ticketDate.setHours(0,0,0,0);

    if (ticketDate < today) {
        errorMsg.textContent = 'Дата билета не может быть в прошлом.';
        return;
    }

    alert('Билет успешно приобретён!');
});