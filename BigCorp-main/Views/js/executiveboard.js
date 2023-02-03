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

document.getElementById("thongke").onclick = function(event) {
    openTab(event, 'thongke_tab');
    $('#table_thongke_executiveboard tbody').empty();
    $.ajax({
        url: 'https://localhost:7071/api/Products',
        method: "GET",
        
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                        let c1 = document.createElement("td");
                        let c2 = document.createElement("td");
                        let c3 = document.createElement("td");
                        let c4 = document.createElement("td");
                        c1.innerHTML = data[i].id;
                        c2.innerHTML = data[i].productLine.name + " " + data[i].productLine.version;
                        c3.innerHTML = data[i].status;
                        c4.innerHTML = data[i].storage;
                        tr.appendChild(c1);
                        tr.appendChild(c2);
                        tr.appendChild(c3);
                        tr.appendChild(c4);
                        document.querySelector('#table_thongke_executiveboard tbody').appendChild(tr);
            }
        }
    });
}

document.getElementById("createaccount").onclick = function(event) {
    openTab(event, 'createaccount_tab');
}

document.getElementById("manage").onclick = function(event) {
    openTab(event, 'manage_tab');
    $('#table_manage_executiveboard tbody').empty();
    $.ajax({
        url: 'https://localhost:7071/api/ProductLines',
        method: "GET",
        
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                let tr = document.createElement("tr");
                        let c1 = document.createElement("td");
                        let c2 = document.createElement("td");
                        let c3 = document.createElement("td");
                        let c4 = document.createElement("td");
                        c1.innerHTML = data[i].id;
                        c2.innerHTML = data[i].name;
                        c3.innerHTML = data[i].version;
                        tr.appendChild(c1);
                        tr.appendChild(c2);
                        tr.appendChild(c3);
                        document.querySelector('#table_manage_executiveboard tbody').appendChild(tr);
            }
        }
    });
}

document.getElementById("thongke").click();
