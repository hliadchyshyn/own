/*ЗАДАНИЕ-1:
* По клику по кнопке "Click me" вывести пользователю содальное окно с сообщением "This is click!"*/


// document.getElementById('button').onclick=()=>{
//     alert('This is click!');
// }


/*ЗАДАНИЕ-2
* По наведению мышки на кнопку "Click me" вывести пользвоателю окно с сообщением "This is mouseover"*/


// document.getElementById('button').onmouseover=()=>{
//     alert('This is mouseover');
// }

/*ЗАДАНИЕ-3
* По клику на блок размером 100рх на 100рх менять его цвет на любой, кроме прозрачного.*/


// function getRandomArbitrary() {
//     return Math.random() * (255 - 1) + 1;
// }
// const block = document.getElementById('changeBg');
// block.addEventListener('click', (event)=>{
//     event.target.style.backgroundColor = `rgb(${getRandomArbitrary()},${getRandomArbitrary()},${getRandomArbitrary()})`
// });


/*ЗАДАНИЕ-4
* Рядом с блоком размером 100рх на 100рх располагается кнопка "изменить цвет" и функция замены цвета блока происходит по нажатию на кнопку
*/


// function getRandomArbitrary() {
//     return Math.random() * (255 - 1) + 1;
// }
// const button = document.getElementById('button');
// const block = button.previousElementSibling;
// button.addEventListener('click', ()=>{
//         block.style.backgroundColor = `rgb(${getRandomArbitrary()},${getRandomArbitrary()},${getRandomArbitrary()})`
// });

/*ЗАДАНИЕ-5
* Рядом с блоком размером 100рх на 100рх располагается поле для ввода цвета. ДОГОВОРЕННОСТЬ - пользователь умеет вводить ТОЛЬКО HEX код цвета. Радом с полем для ввода находится кнопка "Ок".
При нажатии на кнопку "Ок" - цвет, введенный пользователем в поле для ввода применяется для блока размером 100рх на 100рх.*/

//
// let input = document.getElementById('input');
// const button = document.getElementById('button');
// let block = document.getElementById('changeBg');
//     button.addEventListener('click', (event)=>{
//         let color = input.value
//         block.style.backgroundColor = `#${color}`;
// });
//
//
// /**************************Task 6**********************/

let steps = [
    {
        val: 25,
        isActive: false
    },
    {
        val: 50,
        isActive: true
    },
    {
        val: 100,
        isActive: false
    },
];
const move = (event) => {
    let PosTop = packman.style.top;
    let curretTop = Number(PosTop.slice(0, PosTop.indexOf("px")));
    let Posleft = packman.style.left;
    let curretleft = Number(Posleft.slice(0, Posleft.indexOf("px")));
    let step = steps.find((el) => el.isActive).val;

    switch (event.keyCode) {

        case 37:
            packman.style.transform = 'rotate(180deg)';
            if (packman.offsetLeft > 50) {
                curretleft += -step;
                packman.style.left = `${curretleft}px`;
            }

            break;
        case 38:

            packman.style.transform = 'rotate(-90deg)';
            if (packman.offsetTop > 50) {
                curretTop = curretTop - step;
                packman.style.top = `${curretTop}px`;
            }
            break;
        case 39:
            packman.style.transform = 'rotate(0deg)';
            if (document.documentElement.children[1].clientWidth > packman.offsetLeft + packman.clientWidth * 1.3) {
                curretleft = curretleft + step;
                packman.style.left = `${curretleft}px`;
            }

            break;
        case 40:
            packman.style.transform = 'rotate(90deg)';
            if (+document.documentElement.clientHeight > packman.offsetTop + packman.clientHeight * 1.4) {
                curretTop += +step;
                packman.style.top = `${curretTop}px`;
            }
            break;
    }
};

const stepMode = (event) => {
    if (event.shiftKey){
        switch (event.keyCode) {
            case 49:
                steps = steps.map((el, index) => {
                    el.isActive = index === 0;
                    return el;
                });

                break;
            case 50:
                steps = steps.map((el, index) => {
                    el.isActive = index === 1;
                    return el;
                });
                break;
            case 51:
                steps = steps.map((el, index) => {
                    el.isActive = index === 2;
                    return el;
                });
                break;
        }
    }
    return steps;
};

const packman = document.getElementById('packman-wrapper');

document.onkeyup = stepMode;
document.addEventListener('keydown', move);

