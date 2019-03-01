// function creatSq(size, color1, color2){
//     let block = document.createElement('div');
//     block.style.cssText= `width: ${size}px; height: ${size}px; background-color: ${color1}`;
//     document.body.appendChild(block);
//
//     let block1 = document.createElement('div');
//     block1.style.cssText= `width: ${size}px; height: ${size}px; background-color: ${color2}`;
//     document.body.appendChild(block1);
//     // block.style.width = size + 'px';
//     // block.style.height = size + 'px';
//     // block.style.backgroundColor = 'grey';
//
//
//
// }
//
// creatSq(prompt('size?','50'),prompt('color1?','yellow'), prompt('color1?','grey'));


function creatSq(color1, color2, number) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('square-wrapper');
    document.body.appendChild(wrapper);
    const documentFragment = document.createDocumentFragment();

    number = 8 * 8;
    i = 0;
    for (i; i < number; i++) {
        if (i % 2 === 0) {
            let block = document.createElement('div');
            block.classList.add('square');
            block.style.backgroundColor = color1;
            documentFragment.appendChild(block);
        } else {
            let block = document.createElement('div');
            block.classList.add('square');
            block.style.backgroundColor = color2;
            documentFragment.appendChild(block);

        }
    }
    wrapper.appendChild(documentFragment);
}

creatSq(prompt('color1?', 'yellow'), prompt('color2?', 'grey'));