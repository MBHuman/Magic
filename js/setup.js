'use strict';
document.querySelector('.setup-similar').classList.remove('hidden');

let ENTER = 13;
let ESC = 27;

let FIREBALL__COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

let COAT__COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(147, 100, 161',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55',
    'rgb(0, 0, 0)'
];

let EYES__COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];


let CHARACTERS = [
    {
        name: 'Коля Уничтожитель',
        coatColor: 'rgb(200, 100, 150)',
        eyesColor: 'red'
    },
    {
        name: 'Охранник пятёрочки',
        coatColor: 'rgb(0, 0, 0)',
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
];//Данные для вывода при показе похожих игроков
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

let chr = CHARACTERS.slice();
let arr = rnd(chr);


let SimilarListElement = document.querySelector('.setup-similar-list');
let SimilarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for(let i = 0; i < 4; i++) {
    let wizardElement = SimilarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    SimilarListElement.appendChild(wizardElement);
}

/**
 * Open close window of character
 */
let setup = document.querySelector('.setup');
let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');
let onPopupEscPress = function() {
    document.addEventListener('keydown', function(evt) {
        if(evt.keyCode === ESC) {
            setup.classList.add('hidden');
        }
    });
}
let open = function() {
    setup.classList.remove('hidden');
}
let close = function() {
    setup.classList.add('hidden');
}
setupOpen.addEventListener('click', function() {
    open();
});
setupOpen.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENTER) {
        open();
        onPopupEscPress();
    }
});
setupClose.addEventListener('click', function() {
    close();
});
setupClose.addEventListener('keydown', function(evt) {
    if(evt.keyCode === ENTER) {
        close();
    }
});
/**
 * 
 * @param {*} arr
 * return random element 
 */
let random = function(arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

/**
 * Code for change Coat color by click
 */
let clickCharacterCoat = document.querySelector('.wizard-coat');
clickCharacterCoat.addEventListener('click', function() {
    clickCharacterCoat.style = 'fill: ' + random(COAT__COLORS);
});
/**
 * Code for change eye color by click
 */
let clickCharacterEye = document.querySelector('.wizard-eyes')
clickCharacterEye.addEventListener('click', function() {
    clickCharacterEye.style = 'fill: ' + random(EYES__COLORS);
})
/**
 * Code for change background for fireball
 */
let clickCharacterFireball = document.querySelector('.setup-fireball-wrap');
clickCharacterFireball.addEventListener('click', function() {
    clickCharacterFireball.style = 'background: ' + random(FIREBALL__COLORS);
});
/**
 * Validation code
 */
let userNameInput = document.querySelector('.setup-user-name')

userNameInput.addEventListener('invalid', function(evt) {
    if(userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя надо хотя бы из 2 симоволов');
    } else if(userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя должно содержаь хотя бы 2 символа');
    }else if(userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Поле обязательно');
    }else {
        userNameInput.setCustomValidity('');
    }
});
