

$(document).ready(function(){
    var token = getCookie('token');


    $('#btnLogin').click(function(){
        var id = $('#inputID').val();
        var pass = $('#inputPass').val();
        var staffType = 3;
        var url = AllConstant.baseURL + "/loginServerAttempt";
        if(id==='kiran' && pass==='kiran123'){
            swal("Login Successful!", "Kiran, You are logged in", "success").done();
            self.location="side_menu.html";
        }else if(id==='roche.pakistan' && pass==='roche'){
                         swal("Login Successful!", "Roche Pakistan, You are logged in", "success").done();
                         self.location="side_menu.html";
        }else

        {
            swal("Error!", "Invalid username or password!", "error").done();
        }
    });
});