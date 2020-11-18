// Form validation code will come here.
function validate() {

    if(document.myForm.Name.value == "admin"&&document.myForm.Password.value == "admin"){
        location.href = "homePage.html";
        return true;
    }else{
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.Password.value == "") {
        alert("Please provide your Email!");
        document.myForm.Password.focus();
        return false;
    }
}
    return (true);
}
