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


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsive: {
      0:{
          items:1
      },
      600:{
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

document.addEventListener("DOMContentLoaded", function () {
  let footer = document.querySelector(".footer");
  let bgImage = footer.getAttribute("data-bg");

  if (bgImage) {
      footer.style.setProperty("--footer-bg", `url('${bgImage}')`);
  }
});


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


