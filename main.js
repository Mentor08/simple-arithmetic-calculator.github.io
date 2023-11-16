let num = (val) => {
  document.getElementById("screen").value += val;
};
let eql = () => {
  let input = document.getElementById("screen").value;
  let output = eval(input);
  document.getElementById("screen").value = output;
};
let clr = () => {
  document.getElementById("screen").value = "";
};
let modeSwitch = document.querySelector(".mode");
modeSwitch.addEventListener("click", () => {
  if (modeSwitch.classList.toggle("left")) {
    document.querySelector("body").classList.add("dark");
    modeSwitch.style.backgroundColor = "white";
    document.querySelector(".mode span").classList.add("left");
  } else {
    document.querySelector("body").classList.remove("dark");
    modeSwitch.style.backgroundColor = "black";
    document.querySelector(".mode span").classList.remove("left");
  }
});
