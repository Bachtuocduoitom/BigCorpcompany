document.getElementById('submit_login').onclick = function(){
    let username = document.getElementById('username_login').value;
    let password = document.getElementById('password_login').value;
    if (username == 'factory' && password == '123456') {
        location.assign('http://localhost/ProductionMove/factory.php');
    } else if (username == 'agency' && password == '123456') {
        location.assign('../agency.php');
    } else if (username == 'warrantycenter' && password == '123456') {
        location.assign('../warrantycenter.php');
        location.assign('../')
    } else {
        alert("Tài khoản không tồn tại");
    }
}