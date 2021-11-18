function validateForm(){
    var x = document.forms["form01"]["username"].value;
    var y = document.forms["form01"]["password"].value;    
    if ( x,y == "admin"){
        alert("Login success");
        return true;
    }
    else{
        alert("failed")
        return false;
    }
}
