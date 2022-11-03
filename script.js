//////////////////////////////////////////////////////////////////////////////

const button = document.querySelector("button");
const body = document.querySelector("body");
const text = document.querySelector(".color-name");
const hidden = document.querySelector(".request");
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
//let x = 0;

/////////////////////////////////////////////////////////////////////////////

const randomColor = function () {
  let color = "#";
  for (i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * arr.length);
    color += arr[index];
  }

  body.style.backgroundColor = color;
  button.style.color = color;
  text.textContent = `Hex code: ${color}`;
};

///////////////////////////////////////////////////////////////////////
//loading "animation"

const interval = window.setInterval(function () {
  //randomColor();

  // percent counter
  //x += 10;
  // hidden.textContent = `Loading ${x}%`;*

  hidden.innerHTML += `<span>....</span>`;
}, 1000);

// button visible
const buttonVisible = window.setInterval(function () {
  clearInterval(interval);
  hidden.style.display = "none";
  button.style.display = "inline";
}, 8000);

// change background color on click
button.addEventListener("click", randomColor);



