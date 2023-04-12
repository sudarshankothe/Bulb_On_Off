//Turn On Function
function bulbOn() {
  let bulbObj = document.querySelector(".bulboff");
  bulbObj.setAttribute("src", "pic_bulbon.gif");
}

function bulbOff() {
  let bulbObj = document.querySelector(".bulboff");
  bulbObj.setAttribute("src", "pic_bulboff.gif");
}
