document.querySelectorAll('.secondary-screen').forEach(function (element) {
    const bgImage = element.getAttribute('data-bg');
    console.log(bgImage);
    if (bgImage) {
      element.style.backgroundImage = "url("+ bgImage +")";
    } 
  });