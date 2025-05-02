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

        // Якщо менше 300px — ховаємо
        if (scrollY < 300) {
            articleName.style.opacity = "0";
            articleName.style.pointerEvents = "none"; // Щоб не блокував елементи під собою
            return;
        } else {
            articleName.style.opacity = "1";
            articleName.style.pointerEvents = "";
        }

        // Якщо внизу сторінки — ховаємо
        if (documentHeight - (scrollY + windowHeight) < 900) {
            if (!isFixed) {
                lastPosition = articleName.getBoundingClientRect().top + scrollY;
                articleName.style.position = "absolute";
                articleName.style.top = lastPosition + "px";
                articleName.style.height = "0";
                articleName.style.overflow = "hidden";
                articleName.style.opacity = "0";
                isFixed = true;
            }
        } else {
            if (isFixed && scrollY < lastPosition) {
                articleName.style.position = "";
                articleName.style.top = "";
                articleName.style.height = "";
                articleName.style.overflow = "";
                articleName.style.opacity = "1";
                isFixed = false;
            }
        }
    }

    if (articleName) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();
    } else {
        console.error('Елемент .article-name-fixed не знайдено в DOM.');
    }
});