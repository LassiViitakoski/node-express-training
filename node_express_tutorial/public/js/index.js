function addEvent() {
    console.log("Toimiiko");
    $(function() {
        /*let testi = $('#testi').val();
        console.log(testi);*/
        $('#getDBInformation').click(function() {
            console.log("huhuu");
            $.ajax({
                method: 'POST',
                url: 'http://127.0.0.1/db_connection',
                cache: false
            }).done(function(data) {
                console.log("Ajaxi request works properly!");
            }).fail(function() {
                console.log("Error while loading...");
            }).always(function() {
                console.log("Ajax request completed!");
            });
        });

    });
}