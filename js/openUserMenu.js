// 'use strict';

// let setupOpen = document.querySelector('.setup-open');
// let setupClose = document.querySelector('.setup-close');
// let setup = document.querySelector('.setup');

// let onPopupEscPress = function(evt) {
//     if(evt.keyCode === 27) {
//         closePopup();
//     }
// };

// let openPopup = function() {
//     setup.classList.remove('hidden'); 
//     document.addEventListener('keydown', onPopupEscPress);
// }

// let closePopup = function() {
//     setup.classList.add('hidden');
//     document.addEventListener('keydown', onPopupEscPress);
// }

// setupOpen.addEventListener('click', function() {
//     openPopup();
// })

// setupOpen.addEventListener('keydown', function(evt) {
//     if(evt.keyCode === 13) {
//         openPopup();
//     }
// });

// closeClose.addEventListener('click', function() {
//     closePopup();
// });

// closeClose.addEventListener('keydown', function(evt) {
//     if(evt.keyCode === 13) {
//         closePopup();
//     }
// });


// let userNameInput = document.querySelector('.setup-user-name');


// // Код для валидации (Можно вынести в отдельный файл)
// userNameInput.addEventListener('invalid', function(evt) {
//     if(userNameInput.validity.tooShort) {
//         userNameInput.setCustomValidity('Имя должно состоять минимум из 3 симовлов');
//     } else if(userNameInput.validity.tooLong) {
//         userNameInput.setCustomValidity('Имя должно быть меньше 25 симоволов');
//     } else if(userNameInput.validity.valueMissing) {
//         userNameInput.setCustomValidity('Обязательное поле для того, чтобы играть');
//     }
// });

