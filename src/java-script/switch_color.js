export 
// Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
//  на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop,
//   изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, 
// чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
{/* <button class="button_start" type="button" data-action="start">Start</button>
     <button class="button_end" type="button" data-action="stop">Stop</button> */}
let timerId = null;
let activeChangeThem = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeHueForBody = document.querySelector('body');
changeHueForBody.style.backgroundColor = `#FF00FF`
const handlWraperForButton = document.querySelector('.wrapper');
handlWraperForButton.addEventListener('click', even => {
  if(even.target === even.currentTarget.children[0]){
    if(activeChangeThem === null || activeChangeThem === false){
      activeChangeThem = true;
      timerId = setInterval(() => {
          const indexColor = colors[randomIntegerFromInterval(0,colors.length-1)];
          changeHueForBody.style.backgroundColor = indexColor;
          console.log(`color from array`,indexColor)
      }, 1000);
    } else return;
  } 
  if(even.target === even.currentTarget.children[1]){
    if(activeChangeThem === true){
    activeChangeThem = false;
    clearInterval(timerId)
    console.log(`we are did choice about color from list`);
    }
  }
})