function testi() {
    $(document).ready(function() {
        console.log("huhuuuu");
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8081/db_connection'
        }).done(function(data) {
            console.log("loading complete");
            console.log(data);
            do_html(data);
        }).fail(function(error) {
            console.log("Error" + error);
        }).always(function() {
            console.log("Complete");
        });
    });
}
function do_html_table(customer) {
    for(let key in customer) {
        console.log(customer[key]);
    }
}
function do_html(data) {
    let tr = document.createElement('tr');
    for(let key in data[0]) {
        let th = document.createElement('th');
        $(th).append(key);
        $(th).appendTo(tr);
    }
    $('#customertable').append(tr);

    $.each(data, (index, customer) => {
        do_html_table(customer);
    });
    /*let html = "";
    let h = "<h1 style='background-color:red;color:whitesmoke;margin:20px;border:20px solid red;'>AsiakasTaulukko</h1>";
    let table = "";
    table += "<table style='margin-left:20px;'>";
    table += "<tr>";
    for(let key in data[0]) {
        table += "<th>" + key + "</th>";
    }
    table += "</tr>";
    
    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        for(let key in obj) {


            //console.log(obj[key]);
        }
    }
    
    table += "</table>";
    html += h;
    html += table;*/

}