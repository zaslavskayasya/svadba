$(window).on('load', function () {

$('.slider-wrapper').each(function () {
    const $wrapper = $(this);
    const $carousel = $wrapper.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 3, autoWidth: true },
            1000: { items: 3, autoWidth: true }
        }
    });

    $wrapper.find('.next-btn').click(() => {
        $carousel.trigger('next.owl.carousel');
    });

    $wrapper.find('.prev-btn').click(() => {
        $carousel.trigger('prev.owl.carousel');
    });

    $wrapper.find('.prev-btn').addClass('disabled');

    $carousel.on('translated.owl.carousel', () => {
        const isFirst = $carousel.find('.owl-item.active').first().is(':first-child');
        const isLast = $carousel.find('.owl-item.active').last().is(':last-child');

        $wrapper.find('.prev-btn').toggleClass('disabled', isFirst);
        $wrapper.find('.next-btn').toggleClass('disabled', isLast);
    });
});
});