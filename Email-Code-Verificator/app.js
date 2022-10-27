const codes = document.getElementsByClassName('code');

console.log(codes)

codes[0].focus();

for (let i = 0; i < codes.length; i++) {
    codes[i].addEventListener('keydown', (e) => {
        if (e.key >= 1 || e.key <= 9) {
            setTimeout(() =>{
                codes[i+1].focus();
            },10)
        }
        else if (e.key == 'Backspace') {
            setTimeout(() => {
                codes[i-1].focus();
                codes[i-1].value = '';
            },10)
        }{
        }
    })
    
}