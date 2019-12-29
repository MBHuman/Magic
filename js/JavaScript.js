'use strict';

let consts = {
    CLOUD_WITH: 520,
    CLOUD_HEIGHT: 220,
    DIAGRAM_HEIGTH: 30,
    DIAGRAM_WIDTH: 380,
    NAME_LOCATION_WIDTH: 115,
    HIGHEST_NUMBER: 255
}

let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, consts.CLOUD_WITH, consts.CLOUD_HEIGHT);
}

let maximum = function(data) {
    let max = 0;
    for(let i = 0; i < data.length; i++)
    {
        if(data[i] > max)
            max = data[i];
    }

    return max;
}

let graph = function(ctx, players, times) {
    let max = maximum(times);
    ctx.fillStyle = '#000';
    ctx.font = 'Bold';
    ctx.fillText('Поздравляем вы победили ужастного Гезбо', consts.NAME_LOCATION_WIDTH, 60);
    ctx.font = 'Sans';
    for(let i = players.length; i >= 1; i--) {
        ctx.fillText(players[i -1], consts.NAME_LOCATION_WIDTH,282 - 48 * i);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(200 + 5, consts.HIGHEST_NUMBER - 46 * i + 5, (consts.DIAGRAM_WIDTH * times[i - 1] / max), consts.DIAGRAM_HEIGTH);
        ctx.fillStyle = '#000';
        ctx.fillRect(200, consts.HIGHEST_NUMBER - 46 * i, (consts.DIAGRAM_WIDTH * times[i - 1] / max), consts.DIAGRAM_HEIGTH);
    }
}

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, 110, 40, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, 100, 30, '#fff');    

    graph(ctx, players, times);

};