const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        let number = btn[i].getAttribute('data-num');
        screen.value += number 
    })
}

equalBtn.addEventListener('click', function(){
    if (screen.value === ''){
        alert('Input is empty')
    } 
    else {
        let value = eval(screen.value)
        screen.value = value
    }
})

clearBtn.addEventListener('click', function (){
    screen.value = '';
})

