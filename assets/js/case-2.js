const boxes = $('.box').toArray();
let colors = boxes.map(box => $(box).css('background-color'));
    
setInterval(() => {
    const lastColor = colors.pop();
    colors.unshift(lastColor);

    boxes.forEach((box, index) => {
        $(box).css('background-color', colors[index]);
    });   
}, 500);