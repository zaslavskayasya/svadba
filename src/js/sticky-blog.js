document.addEventListener("DOMContentLoaded", function () {
    const articleName = document.querySelector(".article-name-fixed");
    let isFixed = false;
    let lastPosition = 0;

    function handleScroll() {
        if (window.innerWidth < 1024) {
            articleName.style.display = "none"; // Приховуємо на малих екранах
            return;
        } else {
            articleName.style.display = ""; // Відновлюємо стиль при збільшенні екрану
        }

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
    }

    if (articleName) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // Оновлення при зміні розміру екрану
        handleScroll(); // Викликаємо для перевірки одразу після завантаження
    } else {
        console.error('Елемент .article-name-fixed не знайдено в DOM.');
    }
});