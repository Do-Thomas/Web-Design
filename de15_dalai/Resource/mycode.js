function checkForm(){
    var name = document.getElementsByTagName('input')[0].value;
    var pass = document.getElementsByTagName('input')[1].value;
    var email = document.getElementsByTagName('input')[2].value;
    if(name === ''){
        alert('username is invalid');
        return;
    }
    if(pass === ''){
        alert('password is invalid');
        return;
    }
    alert('Welcome '+name+',\n'+'We will respond to you as soon as possible');
}