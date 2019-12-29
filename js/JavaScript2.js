'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

let WIZARD_NAMES = ['Коля Шептун', 'Аркадий', 'Волдевов','МальчикПетя'];

// mock
// Список похожих персонажей
let wizards = [
    // name, coat color
    {
        name: WIZARD_NAMES[0],
        coatColor: 'rgb(241, 43, 107)'
    },
    {
        name: WIZARD_NAMES[1],
        coatColor: 'rgb(215, 210, 55'
    },
    {
        name: WIZARD_NAMES[2],
        coatColor: 'rgb(101, 67, 109'
    },
    {
        name: WIZARD_NAMES[3],
        coatColor: 'rgb(79, 167, 85)'
    }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector
    ('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for(let i = 0; i < 4; i++) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    similarListElement.appendChild(wizardElement);
}