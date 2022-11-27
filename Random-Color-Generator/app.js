const input = document.getElementById('result');
const button = document.getElementById('button');
const copyBtn = document.getElementById('copy');
const color = document.getElementById('color');
let randomColor = '';
console.log(color)

button.addEventListener('click', e =>{
    randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    input.innerHTML =  randomColor.toLocaleUpperCase();
    console.log(randomColor)
    color.style.backgroundColor = randomColor;
})

copyBtn.addEventListener('click', e =>{
    navigator.clipboard.writeText(randomColor.toLocaleUpperCase()).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
      alert('Succesfuly copied that color!');
})


function myFunction() {
    
  }
