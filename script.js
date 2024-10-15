const display=document.getElementById("display");
function appendToDisplay(value){
display. value += value;
}
function cleardisplay(){
    display.value = '';
}
function deletelast(){
    display.value= display.value.slice(0,-1);
}
function calculateResult(){
    try{
    display.value = eval(display.value);
}catch (error){
        display.value=('error')
        }
}

