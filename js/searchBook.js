function searchBook() {
	var searchInput = $.trim($('#searchInput').val());
	var filtrInput = [];
	//all checkboxes for class .theCheckGen
	filtrInput = $('.theCheckGen:checkbox:checked');
	var searchInputResult = '';
	var filterInputResult = "(";
	var finalResultExtended = "WHERE";
	var filterIds = [];
	var i = 0;
	for (i = 0; i < filtrInput.length; i++) {
		filterIds.push(filtrInput[i].id);
		if ( i < (filtrInput.length - 1) ) {
			filterInputResult += "'"+filtrInput[i].id+"',";
		} else if ( i === (filtrInput.length - 1) ) {
			filterInputResult += "'"+filtrInput[i].id+"')";
		}
	};
	console.log(filterIds);
	console.log(filterInputResult);
	if (searchInput.length === 0 && filtrInput.length === 0) {
	    loadData();
	}
	else {
		if ( searchInput.length > 0 && filtrInput.length === 0 ) {
			searchInputResult = " books.author like '%"+searchInput+"%' OR books.title like '%"+searchInput+"%'";
		} else if ( searchInput.length > 0 && filtrInput.length === 1 ) {
			searchInputResult = " genres.genre_name IN ('"+filtrInput[0].id+"') AND books.author like '%"+searchInput+"%' OR books.title like '%"+searchInput+"%'";
		} else if ( searchInput.length > 0 && filtrInput.length > 1 ) {
			searchInputResult = searchInputResult = " genres.genre_name IN "+filterInputResult+" AND books.author like '%"+searchInput+"%' OR books.title like '%"+searchInput+"%'";
		} else if ( searchInput.length === 0 && filtrInput.length === 1 ) {
			searchInputResult = " genres.genre_name IN ('"+filtrInput[0].id+"')"
		} else if (searchInput.length === 0 && filtrInput.length > 1 ) {
			searchInputResult = searchInputResult = " genres.genre_name IN "+filterInputResult;
		}
	finalResultExtended += searchInputResult;
	let obj = {
        searchRequest: finalResultExtended
    }
    $.ajax({
    type: "GET",
    url: "db/getBookBySearchQuery.php",
	data: obj,
    success: function (res) {
		var results;
		var jsonData = JSON.parse(res);
			if(jsonData.length > 0) {
				$.each(jsonData, function(key,data) {
					results+='\
					<tr>\
					<td>'+data.id+'</td>\
					<td>'+data.title+'</td>\
					<td>'+data.author+'</td>\
					<td>'+data.genre+'</td>\
					<td>'+data.status+'</td>\
					<td>-</th>\
					</tr>';
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
}