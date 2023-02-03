<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="login/Loginstyle.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Login</title>

  </head>
  <body>
    <div class="login">
        <h1 class="text-center"> Đăng nhập</h1>
        <form>
            <div class="form-group">
                <label class="form-label" for="username">Tài khoản</label>
                <input class="form-control" type="text" id="username">
                
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Mật khẩu</label>
                <input class="form-control" type="password" id="password">
            </div>
            <input class="btn btn-success w-100" type="button" value="Đăng nhập" onclick="handle()">
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script >
      function handle() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if (username == 'factory' && password == '123456') {
            location.assign('factory.php');
        } else if (username == 'agency' && password == '123456') {
            location.assign('agency.php');
        } else if (username == 'warrantycenter' && password == '123456') {
            location.assign('warrantycenter.php');
        } else if (username == 'board' && password == '123456') {
            location.assign('executiveboard.php');
        } else {
            alert('fail')
        }
      }
    </script>
  </body>
</html>