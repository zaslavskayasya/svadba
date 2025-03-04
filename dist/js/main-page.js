const form = document.getElementById('application-form');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const agreement = document.getElementById('data-agreement');

  let isValid = true;

  // Очищуємо попередні помилки
  clearErrors();

  // Перевірка поля "Ім'я"
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Це поле має бути заповнене');
    isValid = false;
  }

  // Перевірка обов’язкового поля "Телефон"
  if (!validatePhone(phoneInput.value)) {
    showError(phoneInput, 'Введіть коректний номер телефону (мінімум 6 цифр)');
    isValid = false;
  }

  // Поле E-mail не обов'язкове, але якщо заповнене — перевіряємо формат
  if (emailInput.value.trim() !== '' && !validateEmail(emailInput.value)) {
    showError(emailInput, 'Введіть коректний e-mail');
    isValid = false;
  }

  // Перевірка чекбокса
  if (!agreement.checked) {
    showError(agreement, 'Це поле має бути заповнене');
    isValid = false;
  }

  if (isValid) {
    // Показуємо попап після успішної валідації
    popup.classList.remove('hidden');

    // Відправляємо форму
    const formData = new FormData(form);
    fetch('send.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log('Успішно відправлено', data);
      })
      .catch(error => console.error('Помилка при відправці форми', error));
  }
});

// Валідація під час введення
document.getElementById('name').addEventListener('input', function () {
  if (this.value.trim().length >= 2) {
    clearError(this);
  }
});

document.getElementById('phone').addEventListener('input', function () {
  if (validatePhone(this.value)) {
    clearError(this);
  }
});

document.getElementById('email').addEventListener('input', function () {
  if (this.value.trim() === '' || validateEmail(this.value)) {
    clearError(this);
  }
});

document.getElementById('data-agreement').addEventListener('change', function () {
  if (this.checked) {
    clearError(this);
  }
});

// Закриття попапу
closeBtn.addEventListener('click', function () {
  popup.classList.add('hidden');
});

// Функція для перевірки телефону (міжнародний формат)
function validatePhone(input) {
  const phoneRegex = /^\+?[0-9]{6,15}$/; // Дозволяє `+` і від 6 до 15 цифр
  return phoneRegex.test(input);
}

// Функція для перевірки e-mail
function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

// Функція для очищення помилки
function clearError(element) {
  const errorText = element.nextElementSibling;
  if (errorText && errorText.classList.contains('error')) {
    errorText.remove();
    element.style.borderBottom = '2px solid black';
  }
}

// Функція для очищення всіх помилок
function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.remove());
  document.querySelectorAll('input').forEach(el => el.style.borderBottom = '2px solid black');
}

// Функція для показу помилки
function showError(element, message) {
  let errorText = element.nextElementSibling;
  if (!errorText || !errorText.classList.contains('error')) {
    errorText = document.createElement('small');
    errorText.className = 'error';
    errorText.style.color = 'red';
    errorText.innerText = message;
    element.parentNode.insertBefore(errorText, element.nextSibling);
    element.style.borderBottom = '2px solid red';
  }
}

