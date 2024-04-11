// I targeted all elements with a tag of "button".
const buttonElements = document.querySelectorAll("button")
const inputField = document.getElementById("res")
//I created a for loop that iterates over the buttonElements until the specified condition becomes false.
for(let x =0;x<buttonElements.length; x++){
//I added an Eventlistener, "click" to each button.
    buttonElements[x].addEventListener("click" ,()=>{
       const val = buttonElements[x].textContent;
       if(val ==="CLEAR"){
         deleteResults()
       }else if(val === "="){
          finalAnswer()
       }else{
          addVal(val);
       }
    });
}
function deleteResults(){

}
function finalAnswer(){
   inputField.value= eval( inputField.value)
}
function addVal(val){
    inputField.value += val;

}
