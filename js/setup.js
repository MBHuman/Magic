'use strict';
document.querySelector('.setup').classList.remove('hidden');

let characters = [
    {
        name: 'Коля Уничтожитель',
        coatColor: 'rgb(200, 100, 150)',
        eyesColor: 'red'
    },
    {
        name: 'Патриарх Василий',
        coatColor: 'rgb(115, 55, 33)',
        eyesColor: 'yellow'
    },
    {
        name: 'Каратель',
        coatColor: 'rgb(97, 114, 10)',
        eyesColor: 'white'
    },
    {
        name: 'Савурон',
        coatColor: 'rgb(150, 80, 40)',
        eyesColor: 'blue'
    },
    {
        name: 'Ужасный Возник',
        coatColor: 'rgb(110, 66, 240)',
        eyesColor: 'black'
    },
    {
        name: 'Ничтожный Малый',
        coatColor: 'rgb(97, 154, 101)',
        eyesColor: 'red'
    }
]
let chr = characters.slice();
let rnd = function(chr) {
    let data = Math.random() * (chr.length);
    delete chr[data];

    return(chr[data]);
}

for(let i = 0; i < chr.length; i++) {
    console.log(rnd(chr));
}

