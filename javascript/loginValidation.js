// Form validation code will come here.
function validate() {

    
        if (document.myForm.Name.value == "") {
            alert("Please provide your name!");
            document.myForm.Name.focus();
            return false;
        }
        if (document.myForm.Password.value == "") {
            alert("Please provide your Password!");
            document.myForm.Password.focus();
            return false;
        }
        if (document.myForm.Name.value != "admin") {
            alert("Username is not correct");
            document.myForm.Name.focus();
            return false;
        }
        if (document.myForm.Password.value != "admin") {
            alert("Password is not correct");
            document.myForm.Password.focus();
            return false;
        }
}

function page_redirect() {
    window.location = "index.html";
}
