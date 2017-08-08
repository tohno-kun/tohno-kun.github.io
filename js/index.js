var url = "https://raw.githubusercontent.com/tohno-kun/bilibili-playlist/master/lists/";

$('#download-json').on("click", "button", function() {
    var name = $(this).text();
    var data_url = url + name + ".json";
    $.get(data_url).done(function(data) {
        var h = new Blob([data], { type: "text/plain;charset=utf-8" });
        saveAs(h, name + ".json");
    });

});

$.get('https://github.com/tohno-kun/bilibili-playlist/tree/master/lists', function(data) {
	console.log(data);
	var a = $(data).html();
	console.log(data);
});