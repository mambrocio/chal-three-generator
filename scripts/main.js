let charLength = 0;
let charMaxLength = 128;
let charMinLength = 8;

let charLowCases=[];
let charNum = [];
let charCaseRandom = ['!','@','#','$','%','^','&','*','[',']','{','}',';','<','>','/','?']

let charEnter = document.getElementById('charLimit').value;
let specialPhrase = document.getElementById('optPhrase').value;

console.log(charEnter);
console.log(specialPhrase);

function charLimit(){
    charCount = charLength + charEnter;
    if(charCount < charMinLength)
        alert("Please enter a password set value of at least 8")
    else if (charCount > charMaxLength)
        alert("Password exceeds the character count of 128")
    else{
        return charLimit;
    }
}

function count(){
    for(var i = 0; i <= 10; i++){
    console.log(i)
    }
}
count();



function numberArray(){
    
}


function choices(){

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

function reloadPage(){
    location.reload();
    return false;
}