let charLength = 0;
let charMaxLength = 128;
let charMinLength = 8;

let numbers = '0123456789';
let charUpCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charLowCases='abcdefghijklmnopqrstuvwxyz';
let charCaseRandom = ['!','@','#','$','%','^','&','*','[',']','{','}',';','<','>','/','?'];

let charEnter = document.getElementById('charLimit').value;

// function charLimit(){
//     charCount = charLength + charEnter;
//     if(charCount < charMinLength)
//         alert("Please enter a password set value of at least 8")
//     else if (charCount > charMaxLength)
//         alert("Password exceeds the character count of 128")
//     else{
//         return charLimit;
//     }
// }
// charLimit()

function numberGen(){
    checkboxNumb = document.getElementById("randNumb");
    checkboxNumb.addEventListener('change', function(e) {
    checkboxCases.checked, numbers
});
}
numberGen()
    

function upperGen(){
    checkboxUp = document.getElementById("randUpCase");
    checkboxUp.addEventListener('change', function(e) {
    checkboxCases.checked, charUpCases
});
}
upperGen()

function lowerGen(){
    checkboxLow = document.getElementById("randLowCase");
    checkboxLow.addEventListener('change', function(e){
    checkboxCases.checked, charLowCases
});
}
lowerGen()
    
function caseGen(){
    checkboxCases = document.getElementById("randCases");
    checkboxCases.addEventListener('change', function(e) {
    console.log (charCaseRandom)
});
}
caseGen();




// function generatePW(){
//     let password = '';
//     let charEnter;
//     do{
//         if(numberGen == true && upperGen == true && lowerGen == true && caseGen == true){
//             combineFactors = numberGen + upperGen + lowerGen + caseGen

//         }

//     } while (charEnter > charMinLength && charEnter < charMaxLength)

//     if(charEnter < charMinLength)
//         alert("Please enter a password set value of at least 8")
//         else if (charEnter > charMaxLength)
//         alert("Password exceeds the character count of 128")
// }



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
