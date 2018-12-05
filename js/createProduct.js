// ################################################################
    function create(){
                    var title = $.trim($('#title').val());
                    var author = $.trim($('#author').val());
                    var genre = $.trim($('#genre').val());
                    var status = $.trim($('#status').val());
                    if(title.length == 0 || author.length == 0 || genre.length == 0 || status.length == 0) {
                    // $('#title').css('border', '4px solid red');
                    alert("All fields are mandatory");
    }  
    else {
        let obj = {
                    title : $('#title').val(),
                    author: $('#author').val(),
                    genre: $('#genre').val(),
                    status: $('#status').val()
        };
        $.ajax({
                type: "POST",
                url: "db/addProduct.php",
                data: obj,
                success: function (res) {
                                        loadData();
                                        $('#title').val("");
                                        $('#author').val("");
                                        $('#genre').val("");
                                        $('#status').val("");
                                        }
    });
    }
        }