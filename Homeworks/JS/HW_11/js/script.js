let n = Number(prompt('Enter number of list items','2'));
while (isNaN(Number (n))|| n === undefined || n === null){
    n = Number(prompt('Enter correct number of list items', n));
}
let list = [];
let i = 0;
for (i;i<n;i++){
    list[i] = '';
}
let wrapper = document.createElement('div');
let timer = document.createElement('div');
let ul = document.createElement('ul');

list.map((index)=>{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode( prompt(`Enter list item ${index}`,"")));
    ul.appendChild(li);
});
wrapper.appendChild(ul);
let seconds = 10;
timer.innerHTML = seconds + "s ";
insertAfter(ul,timer );

document.body.appendChild(wrapper);
let x = setTimeout(function tick(){
    timer.innerHTML = --seconds + "s ";
    if (--seconds < 0) {
        pageClear();
        clearInterval(x);
    }
    x = setTimeout(tick, 1000);
}, 1000);


// setTimeout(pageClear,10000);

function pageClear () {
    document.body.innerHTML = '';
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


