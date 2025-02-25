let triggerMenu = document.querySelector('.burger-trigger');
let header = document.querySelector('#header');
let box = document.querySelector('.box');
let body = document.body; // Отримуємо body

if (triggerMenu && header && box) {
    triggerMenu.addEventListener('click', () => {
        let isActive = header.classList.toggle('active');
        box.classList.toggle('active');

        if (isActive) {
            body.classList.add('no-scroll'); // Блокуємо прокрутку сторінки
        } else {
            body.classList.remove('no-scroll'); // Відновлюємо прокрутку
        }
    });
} else {
    console.error('Елемент .burger-trigger, #header або .box не знайдено в DOM.');
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


let menuContent = document.querySelector('.box');
let contactsBox = document.querySelector('.contacts-box');
let menu = document.querySelector('menu');
let menuParent = menuContent.parentElement; // Початковий батьківський елемент .box
let contactsParent = contactsBox.parentElement; // Початковий батьківський елемент .contacts-box
let menuOriginalParent = menu.parentElement; // Початковий батьківський елемент menu
let isMoved = false; // Флаг для перевірки перенесення

let LangBox = document.querySelector('.dropdown');
let TopNav = document.querySelector('.top-nav');


function handleResize() {
  if (window.innerWidth > 768) {
    if (!isMoved) {
      header.insertAdjacentElement('afterend', menuContent);
      header.insertAdjacentElement('afterend', contactsBox);
      header.insertAdjacentElement('afterend', menu);
      // TopNav.insertAdjacentElement('beforeend', LangBox);
      isMoved = true;
    }
  } else {
    if (isMoved) {
      menuParent.appendChild(menuContent);
      menuOriginalParent.appendChild(menu);
      contactsParent.appendChild(contactsBox);
      isMoved = false;
    }
  }
}

// Виклик функції при завантаженні сторінки
handleResize();

// Додаємо слухач події на зміну розміру вікна
window.addEventListener('resize', handleResize);


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsive: {
      0:{
          items:1
      },
      790:{
          items:3
      },
      1000:{
          items:1,
          center:true
          // margin:50,
      }
  }
})

let owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});
	$(".prev-btn").addClass("disabled");
	$(owl).on("translated.owl.carousel", function (event) {
		if ($(".owl-prev").hasClass("disabled")) {
			$(".prev-btn").addClass("disabled");
		} else {
			$(".prev-btn").removeClass("disabled");
		}
		if ($(".owl-next").hasClass("disabled")) {
			$(".next-btn").addClass("disabled");
		} else {
			$(".next-btn").removeClass("disabled");
		}
	});



// document.addEventListener("DOMContentLoaded", function() {
//   const footer = document.querySelector(".footer");
//   const bgImage = footer.getAttribute("data-bg");
//   footer.style.background = `url(${bgImage}) center/cover no-repeat`;
// });

window.onload = function () {
  let footer = document.querySelector(".footer");
  let bgImage = footer.getAttribute("data-bg");

  if (bgImage) {
      let style = document.createElement("style");
      style.innerHTML = `
          .footer::before {
              background-image: url('${bgImage}');
          }
      `;
      document.head.appendChild(style);
  }
};

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




// let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.height === "auto") {
//       panel.style.height = "0px";
//     } else {
//       panel.style.height = "auto";
//     }
//   });
// }
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








let lastScrollTop = 0;

let debounceTimeout;
let scrollThreshold = 5; // Поріг прокрутки, щоб не реагувати на невеликі зміни

window.addEventListener('scroll', function() {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
            // Ігноруємо невеликі зміни прокрутки
            return;
        }

        lastScrollTop = scrollTop;
    }, 100); // Збільшена затримка для більш плавного ефекту
});


// filteredMenuItems.forEach(item => {
//   item.classList.add('sanimate', 'fadeInLeft');
// })



let blocks = document.querySelectorAll('.scroll.sanimate');
// let clientsSlides = document.querySelectorAll('.clients-slider > .slide.sanimate');

let observerCallback = (entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
          observer.unobserve(entry.target);
      }
  });
};

blocks.forEach(block => {
  new IntersectionObserver(observerCallback, {
      threshold: 0.3
  }).observe(block);
});

let allTexts = document.querySelectorAll('p, h2');
allTexts?.forEach(item => {
    if (!item.closest('.main-slider'))
        item.classList.add('sanimate', 'fadeInUp');
});


let animations = document.querySelectorAll('.sanimate');
animations.forEach(el => {
    let {
        delay,
        duration,
        timing
    } = el.dataset;

    if (delay)
        el.style.animationDelay = delay;

    if (duration)
        el.style.animationDuration = duration;

    if (timing)
        el.style.animationTimingFunction = timing;
});

