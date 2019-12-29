'use strict';

let consts = {
    CLOUD_WITH: 500,
    CLOUD_HEIGHT: 200,
    DIAGRAM_HEIGTH: 30,
    DIAGRAM_WIDTH: 380,
    NAME_LOCATION_WIDTH: 115
}

let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, consts.CLOUD_WITH, consts.CLOUD_HEIGHT);
}

let graph = function(ctx, data) {
    let names = ['Вы','Коля', 'Петя', 'Валя'];
    ctx.fillStyle = '#000';
    for(let i = 1; i <= 4; i++) {
        ctx.fillText(names[i - 1], consts.NAME_LOCATION_WIDTH,67 + 38 * i);
        ctx.fillRect(200, 50 + 36 * i, consts.DIAGRAM_WIDTH, consts.DIAGRAM_HEIGTH);
    }
}



window.renderStatistics = function(ctx) {
    renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, 100, 50, '#fff');    

    graph(ctx);
    // ctx.fillStyle = '#000';
    // ctx.fillText('Вы', 115, 75);
    // ctx.fillRect(150, 56, DIAGRAM_WIDTH, DIAGRAM_HEIGTH);
};