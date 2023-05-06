/*Established values for the Passwords */

const charMaxLength = 128; // Max Number of Characters Allowed
const charMinLength = 8; // Min Number of Characters allowed
let numbers = '0123456789';
let charUpCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charLowCases='abcdefghijklmnopqrstuvwxyz';
let charCaseRandom = ['!','@','#','$','%','^','&','*','[',']','{','}',';','<','>','/','?'];

let charLimit = document.getElementById("charLimit");


function numberGen(){
    checkboxNumb = document.getElementById("randNumb");
    checkboxNumb.addEventListener('change', function(e){
    num = checkboxNumb
    //console.log(checkboxNumb.checked)
    return num;
});
}

function upperGen(){
    checkboxUp = document.getElementById("randUpCase");
    checkboxUp.addEventListener('change', function(e) {
    up = checkboxUp
    //console.log(checkboxUp.checked)
    return up
});
}

function lowerGen(){
    checkboxLow = document.getElementById("randLowCase");
    checkboxLow.addEventListener('change', function(e){
    low = checkboxLow
    //console.log(checkboxLow.checked);
    return low;

});
}

function caseGen(){
    checkboxCases = document.getElementById("randCases");
    checkboxCases.addEventListener('change', function(e){
    cases = checkboxCases
    //console.log(checkboxCases.checked)
    return cases;
});
}

numberGen()
upperGen()
lowerGen()
caseGen()

function generatePW(){


    if(charLimit.value > charMaxLength)
    alert("Password exceeds the character count of 128")
        else if (charLimit.value < charMinLength)
    alert("Please enter a password set value of at least 8")
    else{
        let charLength = charLimit.value
        console.log(charLength) 
    }


    let digits = num.checked;
    let tall = up.checked;
    let short = low.checked;
    let addCases = cases.checked;

    try {
        let digits = num.checked;
        console.log(digits)

        let tall = up.checked;
        console.log(tall)

        let short = low.checked;
        console.log(short)

        let addCases = cases.checked;
        console.log(addCases)
    } catch (e){
        console.log(e)
    }


    do{
        if(digits === true && tall === true && short === true && addCases === true)
            document.getElementById("printedPass").innerHTML = numbers + charUpCases + charLowCases + charCaseRandom;  
            console.log("printedPass")


    } while (charLimit > charMinLength && charLimit < charMaxLength)

}



//Copy Clipboard Function from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyFunction() {
    // Get the text field
    let copyText = document.getElementById("printedPass");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}



