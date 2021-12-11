console.log("session 6 is alive")
// https://completejavascript.com/su-dung-es6-template-string-co-gi-hay/

// https://www.w3schools.com/js/js_array_methods.asp
var x = document.getElementsById(username).value;
var y = document.getElementsById(password).value;  
function validateLogin(){
      var x = document.getElementsById(username).value;
    var y = document.getElementsById(password).value;  
    if ( x,y == "admin"){
        alert("Login success");
        return true;
    }
    else{
        alert("failed")
        return false;
    }
}
{/* <button id="1" onClick="reply_click(this.id)">B1</button>
<button id="2" onClick="reply_click(this.id)">B2</button>
<button id="3" onClick="reply_click(this.id)">B3</button>
    
<script type="text/javascript">
  function reply_click(clicked_id)
  {
      alert(clicked_id);
  }
</script> */}