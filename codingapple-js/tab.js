let cTabButton = document.querySelectorAll('.tab-button');
let cTabContent = document.querySelectorAll('.tab-content');
let cList = document.querySelector('.list');

cList.addEventListener('click', function (e) {
    for (let i = 0; i < cList.children.length; i++) {
        cTabButton[i].classList.remove('orange');
        cTabContent[i].classList.remove('show');
    }
    cTabButton[Number(e.target.dataset.id)].classList.add('orange');
    cTabContent[Number(e.target.dataset.id)].classList.add('show');
});

// 저기 값이 셔츠이면, .size 클래스의 hide 클래스 삭제

let cSelectedItem = document.querySelector('.selected-item');
let cSize = document.querySelector('.size');

let pants = [28, 30, 32, 34];
let shirts = [95, 100, 105];

cSelectedItem.addEventListener('change', function () {
    if (this.value == 'shirts') {
        cSize.classList.remove('hide');
        cSize.innerHTML = '';
        shirts.forEach(function (item) {
            cSize.innerHTML += `<option>${item}</option>`;
        });
    } else if (this.value == 'pants') {
        cSize.classList.remove('hide');
        cSize.innerHTML = '';
        pants.forEach((item) => {
            cSize.innerHTML += `<option>${item}</option>`;
        });
    } else {
        cSize.classList.add('hide');
    }
});
