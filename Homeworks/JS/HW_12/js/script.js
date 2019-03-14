
let drawButton = document.getElementById('draw-circle');
drawButton.addEventListener('click', addInputForCircle);



function addInputForCircle() {
    document.body.innerHTML = '';
    let fragment = document.createDocumentFragment();
    let diameter = document.createElement('input');
    diameter.setAttribute('id', 'diameter');
    diameter.setAttribute('placeholder', 'enter diameter');
    diameter.style.display = 'block';
    fragment.appendChild(diameter);
    let color = document.createElement('input');
    color.setAttribute('id', 'color');
    color.setAttribute('placeholder', 'enter color');
    color.style.display = 'block';
    fragment.appendChild(color);
    let confirmButton = document.createElement('button');
    confirmButton.setAttribute('id', 'confirm-button');
    confirmButton.innerText = 'Нарисовать';
    confirmButton.style.display = 'block';
    fragment.appendChild(confirmButton);
    document.body.appendChild(fragment);
    confirmButton.addEventListener('click',drawCircle);
}
function drawCircle() {
    let circleDiameter = Number(document.getElementById('diameter').value);
    let circleColor = `${document.getElementById('color').value}`;
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id','circle');
    canvas.style.width = circleDiameter*2;
    canvas.style.height = circleDiameter*2;
    let context = canvas.getContext('2d');
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = circleDiameter;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = circleColor;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = circleColor;
    context.stroke();
    document.body.appendChild(canvas);
}
