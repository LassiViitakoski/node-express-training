function addEventListeners() {
    $(document).ready(function() {
        $('#search_term').keyup(function(event) {
            if(event.keyCode == 13) search_customers();
        });
    });
}
function search_customers() {
    clean_table();
    $(document).ready(function() {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8081/db_connection',
            cache: false,
            data: { 
                search_term: $('#search_term').val() 
            }
        }).done(function(data) {
            console.log("loading complete");
            do_html(data);
        }).fail(function(error) {
            console.log("Error" + error);
        }).always(function() {
            console.log("Complete");
        });
    });
}
function do_html(data) {
    let check = 0;

    $.each(data, (index, customer) => {
        let th = document.createElement('tr');
        let td = document.createElement('tr');
        for(let key in customer) {
            if(check == 0) $('<th></th>').append(key).appendTo(th);
            $("<td></td>").text(customer[key]).appendTo(td);
        }
        if(check == 0) $('#customertable').append(th);
        $('#customertable').append(td);
        check++;
    });
}
function clean_table() {
    $(document).ready(function() {
        $('#customertable').empty();
    });
}