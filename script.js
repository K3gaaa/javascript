var arr2 = [];
for ( i = 0; i < 5; i++ ) {
    arr2.push( Math.round( Math.random() * 100 ));
}
/*document.write(arr2);*/

let body = document.body;
let newElemDiv;

for (elem of arr2) {
    newEl = document.createElement('div');
    newEl.innerHTML = elem;
    newEl.className = 'active';
    body.append(newEl);
}