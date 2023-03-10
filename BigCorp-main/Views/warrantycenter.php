<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Warranty Center</title>
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
                        <li><a class="dropdown-item" href="Login.php">????ng xu???t</a></li>
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
                            <span class="text">Th???ng k??</span>
                        </a>
                    </li>
                    <li class="nav-item" >
                        <a href="#" class="nav-link" id="return_product">
                            <i class="icon bi bi-wrench-adjustable-circle-fill"></i>
                            <span class="text">Tr??? v??? ?????i l??</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" id="broken_product">
                            <i class="icon bi bi-x-octagon-fill"></i>
                            <span class="text">Tr??? v??? c?? s??? s???n xu???t</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- offcanvas -->
    <!-- main -->
    <main>
            <div id="thongke_tab" class="tabcontent text-black">
                <?php include "assests/thongke_warrantycenter.php";?>
            </div>
            <div id="return_product_tab" class="tabcontent text-black">
                <?php include "assests/return_product_warrantycenter.php";?>
            </div>
            <div id="broken_product_tab" class="tabcontent text-black">
                <?php include "assests/broken_product_warrantycenter.php";?>
            </div>
    </main>
    <!-- main -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="js/warrantycenter.js"></script>
  </body>
</html>