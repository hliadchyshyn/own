
let drawButton = $('#draw-circle');
drawButton.click(addInputForCircle);



function addInputForCircle() {
    $('body').html('');
    let fragment = $(document.createDocumentFragment());
    let diameter = $(`<input type="text" id="diameter" placeholder="enter diameter">`);
    diameter.css({ display: "block" });
    $(fragment).append(diameter);

    let color = $(`<input type="text" id="color" placeholder="enter color">`);
    color.css({ display: "block" });
    $(fragment).append(color);

    let confirmButton = $(`<button id="confirm-button">Нарисовать</button>`);
    confirmButton.css({ display: "block" });
    $(fragment).append(confirmButton);
    $('body').append(fragment);
    $(confirmButton).click(drawCircle);
}

function drawCircle() {
    let circleDiameter = Number(document.getElementById('diameter').value);
    let circleColor = `${document.getElementById('color').value}`;
    let canvas = $(`<canvas id="circle" width="${circleDiameter*3}" height="${circleDiameter*3}"></canvas>`);
    let context = $(canvas)[0].getContext('2d');
    let centerX = context.canvas.width / 2;
    let centerY = context.canvas.height / 2;
    let radius = circleDiameter;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = circleColor;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = circleColor;
    context.stroke();
    $('body').append(canvas);
}
