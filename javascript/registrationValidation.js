function validate() {
      
    if( document.myForm.Name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.Password.value == "" ||
       document.myForm.Password.value.length < 8 ) {
       
       alert( "Please provide a Password with at least 8 characters." );
       document.myForm.Password.focus() ;
       return false;
    }
    return( true );
 }