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

        if (documentHeight - (scrollY + windowHeight) < 900) {
            if (!isFixed) {
                lastPosition = articleName.getBoundingClientRect().top + scrollY;
                articleName.style.position = "absolute";
                articleName.style.top = lastPosition + "px";
                articleName.style.height = "0"; // Приховуємо висоту
                articleName.style.overflow = "hidden"; // Ховаємо вміст
                articleName.style.opacity = "0"; // Плавне зникнення
                isFixed = true;
            }
        } else {
            if (isFixed && scrollY < lastPosition) {
                articleName.style.position = "";
                articleName.style.top = "";
                articleName.style.height = ""; // Відновлюємо висоту
                articleName.style.overflow = ""; // Відновлюємо вміст
                articleName.style.opacity = "1"; // Плавно з’являється
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