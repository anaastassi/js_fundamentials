//1
let newWin = window.open("about:blank", "hello", "width=200,height=200");

function changeSize() {
  newWin.resizeTo(500, 500);
}

function changePosition() {
  newWin.moveTo(200, 200);
}
function closeWindow() {
  newWin.close();
}
setTimeout(changeSize, 2000);
setTimeout(changePosition, 4000);
setTimeout(closeWindow, 6000);

//2
const p = document.querySelector("#text");
function changeCSS() {
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Comic Sans MS";
}

//3
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const a = document.querySelector("a");
btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "rgb(124,185,232)";
});
btn2.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});
btn3.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "rgb(205,133,63)";
});
btn3.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});
a.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "rgb(251,236,93";
});
a.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});

//4
const select = document.querySelector("#select");
const options = document.querySelectorAll("option");
function chooseDelete() {
  select.remove(select.selectedIndex);
}

//5
const liveBtn = document.querySelector("#live");
let liveText = document.querySelector("#liveText");
liveText.style.display = "flex";
liveText.style.flexDirection = "column";

liveBtn.addEventListener("click", () => {
  let span = document.createElement("span");
  span.innerText = "I was pressed!";
  liveText.append(span);
});
liveBtn.addEventListener("mouseover", () => {
  let span = document.createElement("span");
  span.innerText = "Mouse on me!";
  liveText.append(span);
});
liveBtn.addEventListener("mouseout", () => {
  let span = document.createElement("span");
  span.innerText = "Mouse is not on me!";
  liveText.append(span);
});

//6
let width = document.querySelector("#width");
let height = document.querySelector("#height");
window.addEventListener("resize", () => {
  width.innerText = "Width: " + window.innerWidth + ",";
  height.innerText = " Height: " + window.innerHeight;
});

//7
let dictionary = {
  USA: ["California", "Boston", "San-Francisco"],
  Germany: ["Berlin", "Frankfurt", "Mainz"],
  Ukraine: ["Kyiv", "Lviv", "Dnipro"],
};
let cities = document.querySelector("#cities");
let countries = document.querySelector("#country");
let countryText = document.querySelector("#countryText");
function createOptions(list) {
  document
    .querySelectorAll("#cities option")
    .forEach((element) => element.remove());
  list.forEach((element) => {
    let option = document.createElement("option");
    option.innerText = element;
    cities.append(option);
  });
  countryText.innerText = `${country[country.selectedIndex].text},${
    cities[cities.selectedIndex].text
  }`;
}
cities.addEventListener(
  "change",
  () =>
    (countryText.innerText = `${country[country.selectedIndex].text},${
      cities[cities.selectedIndex].text
    }`)
);
createOptions(dictionary[country[country.selectedIndex].text]);
country.addEventListener("change", () => {
  createOptions(dictionary[country[country.selectedIndex].text]);
});
countryText.innerText = `${country[country.selectedIndex].text}, ${
  cities[cities.selectedIndex].text
}`;