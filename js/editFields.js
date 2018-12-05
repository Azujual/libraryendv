function editFields(id) {
	var genre = new Map();
	$.ajax({
    type: "GET",
    url: "db/getSingleBookInfo.php?id=" + id,  
    // need new php url from genres table
    success: function (res) {
    	//maping 
    var results;
    var jsonData = JSON.parse(res);
    if(jsonData.length > 0) {
    	$.each(jsonData, function(key,data) {
					genre.set(data.id, data.genre_name);
					
				});
    }
}
    });	
    $.ajax({
    type: "GET",
    url: "db/getSingleBookInfo.php?id=" + id,
    success: function (res) {
		var results;
		var jsonData = JSON.parse(res);
			if(jsonData.length > 0) {
				$.each(jsonData, function(key,data) {
					results+='<tr><td>'+data.id+'</td>\
					<td><input placeholder="Enter book title" id="newTitle" value="'+data.title+'"></input></td>\
					<td><input placeholder="Enter book author" id="newAuthor" value="'+data.author+'"></input></td>\
					<td><input placeholder="Enter book genre" id="newGenre" value="'+data.genre+'"></input></td>\
					<td><input placeholder="Enter book status" id="newStatus" value="'+data.status+'"></input></td>\
					<td><button onclick="saveData('+data.id+')">Save</button></td>\
					<td><button onclick="loadData()">Cancel</button></td>\
					<td><button onclick="viewbook('+data.id+')">Back</button></td>\
					<td><button onclick="del('+data.id+')">Delete</button></td></tr>';
				});
				$("tbody").html(results); 
				// try opening new html from here
			}
			else{
				results='No results Found'
				$("tbody").html(results);
			}
		}
});
}

//$.each(mapped, function() values+=  '<option value="data.key">'+data.value+'</option>';
    // results+='<tr><td>'+data.id+'</td>\
				// 	<td><input id="newTitle" value="'+data.title+'"></input></td>\
				// 	<td><input id="newAuthor" value="'+data.author+'"></input></td>\
				// 	<td><input id="newGenre" value="'+data.genre+'"></input></td>\
				// 	<td><input id="newStatus" value="'+data.status+'"></input></td>\
				// 	<td><button onclick="saveData('+data.id+')">Save</button></td>\
				// 	<td><button onclick="loadData()">Cancel</button></td>\
				// 	<td><button onclick="viewbook('+data.id+')">Back</button></td>\
				// 	<td><button onclick="del('+data.id+')">Delete</button></td></tr>';