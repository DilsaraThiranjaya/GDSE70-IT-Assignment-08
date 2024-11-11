let interval;

function startAnimation() {
    if (!interval) {
        interval = setInterval(() => {
            const lastElement = $('.walking-man-container div:last-child');
            $('.walking-man-container').prepend(lastElement);
        }, 2500);
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}

$('#start').click(() => {
    startAnimation();
});

$('#stop').click(() => {
    stopAnimation();
});