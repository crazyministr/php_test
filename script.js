function send() {
    type_request = $('input[name="type_request"]:checked').val();;
    data_request = $('#form_id').serialize();
    console.log("type_request: " + type_request);
    console.log("data_request: " + data_request);
    $.ajax({
        type: type_request,
        url: "server.php",
        data: data_request,
        success: function(text) {
            console.log(text);
            $('#text_under_form').empty();
            $('#text_under_form').append(text);
        }
    });
}
