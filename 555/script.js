function username_event(){
    document.getElementById('user-icon').style.marginLeft = ('72px');
    document.getElementById('username-box').style.transition = ('0.5s');
    document.getElementById('username-box').style.paddingLeft = ('10px');
}
function password_event(){
    document.getElementById('key-icon').style.marginLeft = ('72px');
    document.getElementById('password-box').style.transition = ('0.5s');
    document.getElementById('password-box').style.paddingLeft = ('10px');
}
function show_hide_event() {
    var x = document.getElementById("password-box");
    if (x.type === "password") {
      x.type = "text"
    } else {
      x.type = "password";
    }
    if(x.type == "text"){
        document.getElementById('open-eye').style.opacity = ('1');
        document.getElementById('eye-slash-icon').style.opacity = ('0');
    }
    else{
        document.getElementById('open-eye').style.opacity = ('0');
        document.getElementById('eye-slash-icon').style.opacity = ('1');
    }
  }
