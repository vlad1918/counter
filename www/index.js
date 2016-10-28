// alert(document.getElementById('button'))
document.getElementById('button').onclick = function () {
  counterValue = parseInt(document.getElementById('counter').innerHTML);
  counterValue = counterValue + 1;
  document.getElementById('counter').innerHTML = counterValue;
}
