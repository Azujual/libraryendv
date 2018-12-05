$(document).ready(function () {
        loadData();
    });

// #############################################
    function loadData() {
		var results;
        $.ajax({
        type: "GET",
        url: "db/getAllProducts.php",
        success: function (res) {
			var jsonData = JSON.parse(res);
				if(jsonData.length > 0) {
					$.each(jsonData, function(key,data) {
						results+='<tr><td>'+data.id+'</td>\
						<td><marktitle>'+data.title+'</marktitle></td>\
						<td><markauthor>'+data.author+'</markauthor></td>\
						<td>'+data.genre+'</td>\
						<td>'+data.status+'</td>\
						<td><button class="btn btn-red btn-fill-horz-o"	onclick="viewbook('+data.id+')">View</button></td>\
				';
					});
					$("tbody").html(results);
				}
				else{
						results='No results Found'
						$("tbody").html(results);
				}
			}
    });
    }
    