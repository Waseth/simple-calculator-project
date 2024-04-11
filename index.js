// I targeted and selected all elements with a tag of "button".
const buttonElements = document.querySelectorAll("button")
//I targeted and selected the input field.
const inputField = document.getElementById("res")
//I created a for loop that iterates over the buttonElements until the specified condition becomes false.
for(let x =0;x<buttonElements.length; x++){
//I added an Eventlistener, "click" to each button.
    buttonElements[x].addEventListener("click" ,()=>{
       const val = buttonElements[x].textContent;
//If val is "CLEAR",pass it to the callback function of deleteResults.
       if(val ==="CLEAR"){
         deleteResults()
//Else if val is "=",pass it to the callback function of finalAnswer.
       }else if(val === "="){
          finalAnswer()
//Else pass to the addVal(val) callback function.
       }else {
          addVal(val);
       }


    });
}
//equate the inputfield to an empty string to delete anything in the input field whenever clear button is clicked.
function deleteResults(){
    inputField.value ="";
}

function finalAnswer(){
   inputField.value= eval( inputField.value)
}
function addVal(val){
    inputField.value += val;

}



