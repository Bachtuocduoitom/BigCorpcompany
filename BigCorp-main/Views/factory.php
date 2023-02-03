<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Factory</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/dashboardstyle.css">
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container-fluid">
            <!-- offcanvas trigger -->
            <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
            </button>
            <!-- offcanvas trigger -->
            <a class="navbar-brand fw-bold me-auto fs-4" href="#">BigCorp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
                <form class="d-flex ms-auto" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ul class="navbar-nav mb-2 mb-lg-0">
                
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-fill"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="Login.php">Đăng xuất</a></li>
                    </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar -->
    <!-- offcanvas --> 
    <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-body p-0">
            <nav class="navbar-dark">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a href="#" class="nav-link" id="thongke">
                            <i class="icon bi bi-clipboard2-data"></i>
                            <span class="text">Thống kê</span>
                        </a>
                    </li>
                    <li class="nav-item" >
                        <a href="#" class="nav-link" id="import">
                            <i class="icon bi bi-arrow-down-square"></i>
                            <span class="text">Nhập sản phẩm</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" id="export">
                            <i class="icon bi bi-arrow-up-square"></i>
                            <span class="text">Xuất sản phẩm</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" id="maintenance">
                            <i class="icon bi bi-trash3"></i>
                            <span class="text">Huỷ sản phẩm lỗi</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- offcanvas -->
    <!-- main -->
    <main>
            <div id="thongke_tab" class="tabcontent">
                <?php include "assests/thongke_factory.php";?>
            </div>
            <div id="import_tab" class="tabcontent text-black">
                <?php include "assests/import_factory.php";?>
            </div>
            <div id="export_tab" class="tabcontent text-black">
                <?php include "assests/export_factory.php";?>
            </div>
            <div id="maintenance_tab" class="tabcontent text-black">
                <?php include "assests/warranty_factory.php";?>
            </div>
    </main>
    <!-- main -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="js/factory.js"></script>
  </body>
</html>