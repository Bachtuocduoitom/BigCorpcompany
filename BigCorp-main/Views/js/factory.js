function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//thong ke
document.getElementById("thongke").onclick = function(event) {
    openTab(event, 'thongke_tab');
    $('#table_thongke_factory tbody').empty();
    $.ajax({
        url: 'https://localhost:7071/api/Products',
        method: "GET",
        
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if(data[i].storage == "Factory") {
                    let tr = document.createElement("tr");
                        let c1 = document.createElement("td");
                        let c2 = document.createElement("td");
                        let c3 = document.createElement("td");
                        let c4 = document.createElement("td");
                        c1.innerHTML = data[i].id;
                        c2.innerHTML = data[i].productLine.name + " " + data[i].productLine.version;
                        c3.innerHTML = data[i].status;
                        c4.innerHTML = data[i].mfg;
                        tr.appendChild(c1);
                        tr.appendChild(c2);
                        tr.appendChild(c3);
                        tr.appendChild(c4);
                        document.querySelector('#table_thongke_factory tbody').appendChild(tr);
                }
                
            }
        }
    });
}

document.getElementById("import").onclick = function(event) {
    openTab(event, 'import_tab');
}

document.getElementById("export").onclick = function(event) {
    openTab(event, 'export_tab');
}

document.getElementById("maintenance").onclick = function(event) {
    openTab(event, 'maintenance_tab');
}
// nhap san pham
document.getElementById("submit_import_factory").onclick = function(event) {
    if($('#ID_import_factory').val() == "" || $('#date_import_factory').val() == ""){
        alert("Chưa điền đầy đủ");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products?productLineId=" + $('#ID_import_factory').val() + "&Storage=Factory",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "accept": "text/plain"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
           document.getElementById("form_import_factory").reset();
            alert("Thêm sản phẩm thành công");
          });
    }
}
//xuat san pham
document.getElementById("submit_export_factory").onclick = function(event) {
    if($('#ID_export_factory').val() == "" || $('#daily_export_factory').val() == ""){
        alert("Chưa điền đầy đủ");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/MoveProduct/" + $('#ID_export_factory').val() +"&" + $('#daily_export_factory').val(),
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            document.getElementById("form_export_factory").reset();
            alert("Đưa sản phẩm về đại lý thành công");
          });
    }
    
}

//Huy san pham
document.getElementById("submit_delete_factory").onclick = function(event) {
    if($('#ID_delete_factory').val() == ""){
        alert("Chưa điền thông tin");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/" + $('#ID_delete_factory').val(),
            "method": "DELETE",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            document.getElementById("form_delete_factory").reset();
            alert("Đã huỷ sản phẩm");
          });
    }
}
    
document.getElementById("thongke").click();
