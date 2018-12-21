// Simple parallax effect
$('#portfoliolist .portfolio').hover(
    function() {
        $(this).find('.caption').stop().animate({
            bottom: 0
        }, 200, 'easeOutQuad');
        $(this).find('img').stop().animate({
            top: -20
        }, 300, 'easeOutQuad');
    },
    function() {
        $(this).find('.caption').stop().animate({
            bottom: -75
        }, 200, 'easeInQuad');
        $(this).find('img').stop().animate({
            top: 0
        }, 300, 'easeOutQuad');
    }
);