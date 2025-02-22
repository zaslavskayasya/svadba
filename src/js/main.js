let triggerMenu = document.querySelector('.burger-trigger');
let header = document.querySelector('#header');
let box = document.querySelector('.box');

if (triggerMenu && header) {
    triggerMenu.addEventListener('click', () => {
        header.classList.toggle('active');
        box.classList.toggle('active');
    });
} else {
    console.error('Елемент .burger-trigger або header не знайдено в DOM.');
}

console.log('test');


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

  
// let MenuContent = document.querySelector('.box');
// let replacedContent = MenuContent.innerHTML;


// if(window.innerWidth > 760){
//   header.insertAdjacentHTML('afterend', replacedContent);
// }

// window.addEventListener('resize', () => {
//   if(window.innerWidth > 760){
//     if(MenuContent){
//       header.insertAdjacentHTML('afterend', replacedContent);

//     }
//   } else {
//     if(!MenuContent){
//       let newBox = document.createElement("div");
//       header.insertAdjacentHTML('afterend', newBox );
  
//       let content1 = document.querySelector('menu');
//       let content2 = document.querySelector('.contacts-box');
  
//       let ClonedConten1 = content1;
//       let ClonedConten2 = content2;
  
//       content1.remove();
//       content2.remove();
      
//       newBox.insertAdjacentElement('afterbegin', ClonedConten2);
//       newBox.insertAdjacentElement('afterbegin', ClonedConten1);
//     }

//   }
// });