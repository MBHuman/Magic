'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

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
    },
    {
        name: 'Арсений Бутылкин',
        coatColor: 'rgb(245, 7, 45)',
        eyesColor: 'blue'
    },
    {
        name: 'Антонин Оградкин',
        coatColor: 'rgb(99, 134, 98)',
        eyesColor: 'cyan'
    },
    {
        name: 'Вор в законе',
        coatColor: 'rgb(66, 176, 231)',
        eyesColor: 'purple'
    },
    {
        name: 'Мафиозник',
        coatColor: 'rgb(255, 0, 00)',
        eyesColor: 'red'
    },
    {
        name: 'Школьный вор',
        coatColor: 'rgb(90, 254, 11)',
        eyesColor: 'black'
    },
    {
        name: 'Обжорник',
        coatColor: 'rgb(21, 89, 193)',
        eyesColor: 'red'
    },
    {
        name: 'Любитель вилок',
        coatColor: 'rgb(73, 124, 181)',
        eyesColor: 'yellow'
    }
]

let isHave = function(prop, num) {
    let flag = false;
    for(let i = 0; i < prop.nums.length; i++) {
        if(num == prop.nums[i]) {
            flag = true;
            break;
        }
    }
    if(!flag)
        prop.nums.push(num);
    return flag;
}

let chr = characters.slice();
let rnd = function(chr) {
    let prop = {
        arr: [],
        nums: []
    }
    while(prop.arr.length != 4) {
        let random = Math.floor(Math.random() * chr.length);
        if(!isHave(prop, random)) {
            prop.arr.push(chr[random]);
        }
    }
    return(prop.arr);
}

let SimilarListElement = document.querySelector('.setup-similar-list');
let SimilarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

let arr = rnd(chr);
for(let i = 0; i < 4; i++) {
    let wizardElement = SimilarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    SimilarListElement.appendChild(wizardElement);
}

