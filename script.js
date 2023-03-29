var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');


input1.addEventListener('input',function(){
    var val1 = input1.value;
    if(val1>100 || val1 < 0){
        input1.classList.add('red');
    }
})

input2.addEventListener('input',function(){
    var val2 = input2.value;
    if(val2>100 || val2 < 0){
        input2.style.backgroundColor ="green";
        alert('The number will be 0 between 100')
    }
})

