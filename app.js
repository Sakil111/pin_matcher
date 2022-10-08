function getPin(){
    const pin= Math.round(Math.random()*10000);
    const pinString=pin + "";
    if (pinString.length==4){
        return pin;
    }
    else{
        // console.log("call getPinnk Again");
        return getPin();
    }
}
// function to get pin in the input 
function generatePin(){
    const p =getPin();
    document.getElementById("display-pin").value=p;

}
// example of bubble 
document.getElementById("keypad").addEventListener("click",function(event){
    const number=event.target.innerText;
    const calInput= document.getElementById("type-number");
    if (isNaN(number)){
        if (number=="C"){
            calInput.value='';
        }
    }
    else{ 
        const prevousNumber=calInput.value;
        const newNumber=prevousNumber+number;
        calInput.value=newNumber;
    }
})
//  matching pin with input pin and random pin 
function verifyPin(){
    const pin= document.getElementById("display-pin").value;
    const typeNumber= document.getElementById("type-number").value;
    const notifySuccess= document.getElementById("notify-success");
    const failError= document.getElementById("notify-failure");
    if (pin==typeNumber){
        
        notifySuccess.style.display="block";
        failureError.style.display="none";
    }
    else{
        notifySuccess.style.display="none";
        failError.style.display="block";
    }
}