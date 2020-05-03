let newDiv = document.createElement('div');

newDiv.className = ('hello');

let newDivText = document.createTextNode('Hello World!!!')

let both = newDiv.appendChild(newDivText);

let container = document.querySelector('container');
let header = document.querySelector('h1');

// newDiv.appendChild(newDivText);

container.insertBefore(both, h1);


console.log(both);