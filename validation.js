function validation(){
    if(document.getElementById("username").value == "echo" && document.getElementById("password").value  == "abcd"){
        return true ;
    }
    else{
       
        document.getElementById("username").style.border = "2px solid red "
        document.getElementById("password").style.border = "2px solid red "
        return false

    }
}