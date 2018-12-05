function saveData(id) {
    let obj = {
        id: id,
        title: $('#newTitle').val(),
		author: $('#newAuthor').val(),
		genre: $('#newGenre').val(),
		status: $('#newStatus').val()
    }
    $.ajax({
        type: "GET",
        url: "db/editProduct.php",
        data: obj,
        success: function (res) {
            loadData();
        }
    });
}