document.addEventListener("DOMContentLoaded", function () {
    const articleName = document.querySelector(".article-name-fixed");
    let isFixed = false;
    let lastPosition = 0;

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (documentHeight - (scrollY + windowHeight) < 700) {
            if (!isFixed) {
                lastPosition = articleName.getBoundingClientRect().top + scrollY;
                articleName.style.position = "absolute";
                articleName.style.top = lastPosition + "px";
                articleName.style.display = "none"; // Ховаємо елемент
                isFixed = true;
            }
        } else {
            if (isFixed && scrollY < lastPosition) {
                articleName.style.position = "";
                articleName.style.top = "";
                articleName.style.display = "block"; // Повертаємо елемент
                isFixed = false;
            }
        }
    });
});
