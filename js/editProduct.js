function saveData(id){ 
                        var title = $.trim($('#newTitle').val());
                        var author = $.trim($('#newAuthor').val());
                        var genre = $.trim($('#newGenre').val());
                        var status = $.trim($('#newStatus').val());
                        if(title.length == 0 || author.length == 0 || genre.length == 0 || status.length == 0) {
                        // $('#title').css('border', '4px yellow');
                        alert("All fields are mandatory");
                        }
                            else {
                                    let obj = {
                                                id: id,
                                                title: $('#newTitle').val(),
                                        		author: $('#newAuthor').val(),
                                        		genre: $('#newGenre').val(),
                                        		status: $('#newStatus').val(),
                                                // status: $('#newDescription').val(),
                                                };
                                    $.ajax({
                                        type: "POST",
                                        url: "db/editProduct.php",
                                        data: obj,
                                        success: function (res) {
                                            loadData();
        }
    });
}
}