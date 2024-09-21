var fnameInput = document.getElementById('fname');
var lnameInput = document.getElementById('lname');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

function sendMessage(){
    var fname = fnameInput.value;
    var lname = lnameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;
    var details = "";
    var reply = "";

    if(fname.length > 0 && lname.length > 0 && email.length > 0 && message.length > 0){
        details += "Message from: " + fname + " " + lname;
        details += "\nEmail address: " + email;
        details += "\nMessage: " + message;
        details += "\n\nAre you sure you would like to send this message?";
        if(confirm(details)){
            reply += "Hi, " +  fname + " " + lname + "!";
            reply += "\nThank you for reaching out to me!";
            reply += "\n\n";
            reply += "Best regards, ";
            reply += "\n\nMarc Bien Go";
            alert(reply);
        }
    }        
}