let charMaxLength = 128;
let charMinLength = 8;
let charLength;
let defaultBox = '';


let selectChar = [];
let numbers = '0123456789';
let charUpCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charLowCases='abcdefghijklmnopqrstuvwxyz';
let charCaseRandom = ['!','@','#','$','%','^','&','*','[',']','{','}',';','<','>','/','?'];

let charLimit = document.getElementById("charLimit");


function numberGen(){
    checkboxNumb = document.getElementById("randNumb");
    checkboxNumb.addEventListener('change', function(e) {
    checkboxNumb.checked
    console.log(checkboxNumb.checked)
});
}

function upperGen(){
    checkboxUp = document.getElementById("randUpCase");
    checkboxUp.addEventListener('change', function(e) {
    checkboxUp.checked
    console.log(checkboxUp.checked)
});
}

function lowerGen(){
    checkboxLow = document.getElementById("randLowCase");
    checkboxLow.addEventListener('change', function(e){
    checkboxLow.checked
    console.log(checkboxLow.checked);
});
}

function caseGen(){
    checkboxCases = document.getElementById("randCases");
    checkboxCases.addEventListener('change', function(e){
    cases = checkboxCases.checked
    //console.log(checkboxCases.checked)
    return cases;
})
}

// numberGen()
// upperGen()
// lowerGen()
caseGen()

function generatePW(){

    addCases = cases
    console.log(addCases)

    if(charLimit.value > charMaxLength)
    alert("Password exceeds the character count of 128")
        else if (charLimit.value < charMinLength)
    alert("Please enter a password set value of at least 8")
    else{
        console.log(charLimit.value)
        charLimit.value 
    }


    // let password = '';
    // let charEnter;
    // do{
    //     if(checkboxCases.checked == true && upperGen == true && lowerGen == true && caseGen == true){


    // }

    // } while (charLimit> charMinLength && charLimit < charMaxLength)

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



