const boxes = $('.box').toArray();
let colors = boxes.map(box => $(box).css('background-color'));
let interval;

function startAnimation() {
    if (!interval) {
        interval = setInterval(() => {
            const lastColor = colors.pop();
            colors.unshift(lastColor);
        
            boxes.forEach((box, index) => {
                $(box).css('background-color', colors[index]);
            });   
        }, 500);
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