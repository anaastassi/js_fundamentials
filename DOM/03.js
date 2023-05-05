const body = document.body;
let main = document.createElement('main');
body.prepend(main);
main.classList.add('mainClass','check','item');
let myDiv = document.createElement('div');
myDiv.id = 'myDiv';
main.append(myDiv);
let p = document.createElement("p")
myDiv.append(p);
p.append('First paragraph');