function viewbook(id) {
	 
    $.ajax({
    type: "GET",
    url: "db/getSingleBookInfo.php?id=" + id,
    success: function (res) {
		var results;
		var jsonData = JSON.parse(res);
			if(jsonData.length > 0) {
				$.each(jsonData, function(key,data) {
					results+='<tr><td>'+data.id+'</td>\
					<td>'+data.title+'</td>\
					<td>'+data.author+'</td>\
					<td>'+data.genre+'</td>\
					<td>'+data.status+'</td>\
					<td><button onclick="editFields('+data.id+')">Edit</button></td>\
					<td><button onclick="loadData()">Back</button></td></tr>\
					'	});0
				$("tbody").html(results);

			}
			else{
				results='No results Found'
				$("tbody").html(results);
			}
		}
});

}
    