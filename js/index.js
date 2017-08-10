var url = "https://raw.githubusercontent.com/tohno-kun/tohno-kun.github.io/master/lists/";

$('#download-json').on("click", "button", function() {
    var name = $(this).text();
    var data_url = url + name + ".json";
    $.get(data_url).done(function(data) {
        var h = new Blob([data], { type: "text/plain;charset=utf-8" });
        saveAs(h, name + ".json");
    });

});

$.ajax({
    type: "get",
	url: "https://api.github.com/repos/tohno-kun/tohno-kun.github.io/contents/lists",
	success: function(data){
		var lists = eval(data);
		for (var i = 0; i < lists.length; i++) {
			var item = $('<button></button>').text(lists[i]['name'].split('.')[0]);
			$('#download-json').append(item);
		}

	}
});

$.ajax({
	url: 'https://github.com/tohno-kun/tohno-kun.github.io/tree/master/lists',
	success: function(data){
		// eval(data);
		// var re_data = /.*<time-ago.*>(.*)<\/time-ago>.*/g.exec(data);	
		console.log(data);
	}
});