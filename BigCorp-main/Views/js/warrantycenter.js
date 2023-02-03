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
//Thongke
document.getElementById("thongke").onclick = function(event) {
    openTab(event, 'thongke_tab');
    $('#table_thongke_warrantycenter tbody').empty();
    $.ajax({
        url: 'https://localhost:7071/api/Products',
        method: "GET",
        
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if(data[i].storage == "Warranty Center") {
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
                        document.querySelector('#table_thongke_warrantycenter tbody').appendChild(tr);
                }
                
            }
        }
    });
}


document.getElementById("return_product").onclick = function(event) {
    openTab(event, 'return_product_tab');
}

document.getElementById("broken_product").onclick = function(event) {
    openTab(event, 'broken_product_tab');
}

//Tra san pham ve dai ly
document.getElementById("submit_return_warrantycenter").onclick = function(event) {
    if($('#ID_return_warrantycenter').val() == ""){
        alert("Chưa điền thông tin");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/Change/" + $('#ID_return_warrantycenter').val() +"&Bao%20hanh%20xong&Agency",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            document.getElementById("form_return_warrantycenter").reset();
            alert("Đã trả về đại lý");
          });
    }
    
}

//Tra san pham ve co so san xuat
document.getElementById("submit_broken_warrantycenter").onclick = function(event) {
    if($('#ID_broken_warrantycenter').val() == ""){
        alert("Chưa điền thông tin");
    } else {
        var settings = {
            "url": "https://localhost:7071/api/Products/Change/" + $('#ID_broken_warrantycenter').val() +"&Hong&Factory",
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "accept": "*/*"
            },
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            document.getElementById("form_broken_warrantycenter").reset();
            alert("Đã trả về cơ sở sản xuất");
          });
    }
    
}

document.getElementById("thongke").click();