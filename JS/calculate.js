let flag=true;
let isPressed=false;
let isFirst=true;
let result=0;
// common function
function displayValue(num){
    let monitor = document.getElementById('display');
    isPressed=true;
    if(flag == true){
        if(num>0 || num == '.'){
            monitor.innerText = num;
            flag=false;
        }
    }
    else{
        monitor.innerText = monitor.innerText + num;
    }
}
// calculation
function calculation(operator){
    let val = document.getElementById('display');
    if(isPressed == true)
    {
        if(isFirst == true)
        {
            result = parseFloat(val.innerText);
            isFirst = false;
            flag = true;
    
        }
        else
        {
            if(operator == '+')
            {
                result += parseFloat(val.innerText);
                val.innerText = result;
                flag = true;
            }
            else if(operator == '-')
            {
                result -= parseFloat(val.innerText);
                val.innerText = result;
                flag = true;
            }
            else if(operator == '*')
            {
                result *= parseFloat(val.innerText);
                val.innerText = result;
                flag = true;
            }
            else if(operator == '/')
            {
                result /= parseFloat(val.innerText);
                val.innerText = result;
                flag = true;
            }
        }
    }
    isPressed=false;
}
// reset function
function resetAll(){
    flag=true;
    isFirst=true;
    document.getElementById('display').innerText='0';
}
// dot
document.getElementById('dot').addEventListener('click', function(){
    displayValue('.');
});
// zero
document.getElementById('zero').addEventListener('click', function(){
    displayValue(0);
});
// one
document.getElementById('one').addEventListener('click', function(){
    displayValue(1);
});
// two
document.getElementById('two').addEventListener('click', function(){
    displayValue(2);
});
// three
document.getElementById('three').addEventListener('click', function(){
    displayValue(3);
});
// four
document.getElementById('four').addEventListener('click', function(){
    displayValue(4);
});
// five
document.getElementById('five').addEventListener('click', function(){
    displayValue(5);
});
// six
document.getElementById('six').addEventListener('click', function(){
    displayValue(6);
});
// seven
document.getElementById('seven').addEventListener('click', function(){
    displayValue(7);
});
// eight
document.getElementById('eight').addEventListener('click', function(){
    displayValue(8);
});
// nine
document.getElementById('nine').addEventListener('click', function(){
    displayValue(9);
});
// addition
document.getElementById('add').addEventListener('click', function(){
    calculation('+');
});
// substraction
document.getElementById('min').addEventListener('click', function(){
    calculation('-');
});
// multipication
document.getElementById('mul').addEventListener('click', function(){
    calculation('*');
});
// division
document.getElementById('div').addEventListener('click', function(){
    calculation('/');
});
// reset
document.getElementById('reset').addEventListener('click', function(){
    resetAll();
});