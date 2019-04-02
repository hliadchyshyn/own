let changeColorBtn = $('#changeColorBtn');
let isColored = false;
function getRandomArbitrary() {
    return Math.random() * (255 - 1) + 1;
}

function getBckgColor() {
    if (localStorage.getItem('isColored')){
        $('.content-wraper').css('background-color', localStorage.getItem('color'));
    }
}

$(changeColorBtn).click(()=>{
    if (localStorage.getItem('isColored')=== 'false'){
        let bckgColor = `rgb(${getRandomArbitrary()},${getRandomArbitrary()},${getRandomArbitrary()})`;
        $('.content-wraper').css('background-color', bckgColor);

        localStorage.setItem('color', bckgColor);
        isColored = true;
        localStorage.setItem('isColored', true);
    } else {
        let bckgColor = '';
        $('.content-wraper').css('background-color', bckgColor);
        localStorage.setItem('color', bckgColor);
        isColored = false;
        localStorage.setItem('isColored', false);

    }
});

getBckgColor();