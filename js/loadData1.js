$(document).ready(function () {
        loadData1();
    });

// #############################################
    function loadData1() {
		var results;
        $.ajax({
        type: "GET",
        url: "db/getAllProducts.php",
        success: function (res) {
			var jsonData = JSON.parse(res);
				if(jsonData.length > 0) {
					$.each(jsonData, function(key,data) {
						results+='<tr><td>'+data.title+'</td>\
						<td><button class="btn btn-red btn-fill-horz-o" onclick="window.location.href='http://localhost/endava-library/addbook.html'">View</button></td>'
						;
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
    