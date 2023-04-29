let charLength = 0;

function charLimit(){
    let char = 
}



//Copy Clipboard Function from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("printedPass");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }