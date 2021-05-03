export // Color switch
// Have an array of colors in hex-format and buttons  Start и Stop.
// Write script which after click on button "Start" will , each second wil change body's hue.
// on random value from array ,use inline style .During click on button "Stop",
// switcher has to stop.
// ⚠️ Important, on button "Start" we could click countless times.Do exactly like that,change
//  them has been starting , button must be not active.
// For generation random number write function with name "randomIntegerFromInterval".
const colors = [
  'rgb(122, 206, 245)',
  'rgb(11, 168, 241)',
  'rgb(69, 115, 206)',
  'rgb(14, 54, 134)',
  'rgb(40, 109, 248)',
  'rgb(40, 182, 248)',
];
let timerId = null;
let activeChangeThem = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startButton = document.getElementsByClassName('button_start')[0];
const changeHueForBody = document.querySelector('body');
changeHueForBody.style.backgroundColor = `rgb(22, 193, 236)`;
const handleWrapperForButton = document.querySelector('.wrapper');
handleWrapperForButton.addEventListener('click', even => {
  if (even.target === even.currentTarget.children[0]) {
    if (activeChangeThem === null || activeChangeThem === false) {
      startButton.setAttribute('disabled', true);
      startButton.style.backgroundColor = 'rgb(235, 229, 229)';
      startButton.style.cursor = 'not-allowed';
      activeChangeThem = true;
      return (timerId = setInterval(() => {
        const indexColor =
          colors[randomIntegerFromInterval(0, colors.length - 1)];
        changeHueForBody.style.backgroundColor = indexColor;
      }, 1000));
    }
  }
  if (even.target === even.currentTarget.children[1]) {
    if (activeChangeThem === true) {
      startButton.disabled = false;
      startButton.style.backgroundColor = 'rgb(22, 89, 214)';
      startButton.style.cursor = 'pointer';
      activeChangeThem = false;
      return clearInterval(timerId);
    }
  }
});
