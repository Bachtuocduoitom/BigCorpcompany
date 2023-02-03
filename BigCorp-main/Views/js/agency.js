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

//Thong ke
document.getElementById("thongke").onclick = function(event) {
    openTab(event, 'thongke_tab');
    $('#table_thongke_agency tbody').empty();
    $.ajax({
        url: 'https://localhost:7071/api/Products',
        method: "GET",
        
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if(data[i].storage == "Agency") {
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
                        document.querySelector('#table_thongke_agency tbody').appendChild(tr);
                }
                
            }
        }
    });
}

document.getElementById("sale").onclick = function(event) {
    openTab(event, 'sale_tab');
}

document.getElementById("resale").onclick = function(event) {
    openTab(event, 'resale_tab');
}

document.getElementById("warranty").onclick = function(event) {
    openTab(event, 'warranty_tab');
}

//Ban san pham
document.getElementById("submit_sale_agency").onclick = function(event) {
    if($('#ID_sale_agency').val() == "" || $('#name_customer_agency').val() == ""||$('#date_sale_agency').val()== ""){
        alert("Chưa điền đầy đủ");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/Sell/" + $('#ID_sale_agency').val(),
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          $.ajax(settings).done(function (response) {
            document.getElementById("form_sale_agency").reset();
            console.log(response);
            alert("Đã bán sản phẩm");
          });
    }
    
}

//Tra san pham sau bao hanh
document.getElementById("submit_resale_agency").onclick = function(event) {
    if($('#ID_resale_agency').val() == ""){
        alert("Chưa điền thông tin");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/ChangeStatus/" + $('#ID_resale_agency').val() + "&Da%20hoan%20tra",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          $.ajax(settings).done(function (response) {
            document.getElementById("form_resale_agency").reset();
            console.log(response);
            alert("Đã trả sản phẩm");
          });
    }
    
}

//Dua san pham ve co so bao hanh
document.getElementById("submit_warranty_agency").onclick = function(event) {
    if($('#ID_warranty_agency').val() == ""){
        alert("Chưa điền thông tin");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/Change/" + $('#ID_warranty_agency').val() +"&Dang%20bao%20hanh&Warranty%20Center",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            document.getElementById("form_warranty_agency").reset();
            alert("Đã đưa đi bảo hành");
          });
    }
    
}


document.getElementById("thongke").click();