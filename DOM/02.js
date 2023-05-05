const bigHeader = document.querySelector("h1");
const boldP = document.querySelector("#myDiv > p:nth-child(1)");
const redP = document.querySelector("#myDiv > p:nth-child(2)");
const underlinedP = document.querySelector("#myDiv > p:nth-child(3)");
const cursiveP = document.querySelector("#myDiv > p:nth-child(4)");
const horisontalUl = document.querySelector("#myList");
const invisible = document.querySelector("span");

bigHeader.style.backgroundColor = '#A6EC99';
boldP.style.fontWeight = 'bold';
redP.style.color = 'red';
underlinedP.style.textDecoration = 'underline';
cursiveP.style.fontStyle = 'italic';
horisontalUl.style.display = 'flex';
horisontalUl.style.listStyle = 'none';
invisible.style.display = 'none';
