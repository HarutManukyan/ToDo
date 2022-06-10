let input1 = document.getElementById('num1')
let input2 = document.getElementById('num2')
let binnar = document.getElementById('binar')
let btn = document.getElementById('calc')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
let divResult = document.createElement('div')

btn.addEventListener('click', calculator)

function calculator(){
    
    
    switch(binnar.value){
        case '+':
            divResult.append( +input1.value + +input2.value)
            result.append(divResult)
            break;
        case '-':
            divResult.append( +input1.value - +input2.value)
            result.append(divResult)            
            break;
        case '*':
            divResult.append( +input1.value * +input2.value)
            result.append(divResult)            
            break;
        case '/':
            divResult.append( +input1.value / +input2.value)
            result.append(divResult)            
            break;
    }
}
console.log(divResult.value)
reset.addEventListener('click', resetCalc)

function resetCalc(){
    divResult.remove()
}