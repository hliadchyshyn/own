let n = Number(prompt('Enter number of list items','2'));
while (isNaN(Number (n))|| n === undefined || n === null){
    n = Number(prompt('Enter correct number of list items', n));
}
let list = [];
let i = 0;
for (i;i<n;i++){
    list[i] = '';
}

let ul = document.createElement('ul');
list.map((index)=>{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode( prompt(`Enter list item ${index}`,"")));
    ul.appendChild(li);
});
document.body.appendChild(ul);
let timer = document.createElement('div');
timer.setAttribute('id', 'timer');
insertAfter(ul,timer );

let seconds = 10;
let x = setInterval(()=> {
        document.getElementById("timer").innerHTML = seconds + "s ";
        seconds--;
        if (seconds < 0) {
            pageClear();
            clearInterval(x);
        }
}, 1000);


// setTimeout(pageClear,10000);

function pageClear () {
    document.body.innerHTML = '';
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


