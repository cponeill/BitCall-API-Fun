$(document).ready(function () {
    var url = "http://btc.blockr.io/api/v1/block/info/last,2000";

    $.getJSON(url, function (json) {
        var sumOne = json.data[0].vout_sum;
        var sizeOne = json.data[0].size;

        var sumTwo = json.data[1].vout_sum;
        var sizeTwo = json.data[1].size;


        $('#sumOne').text(sumOne);
        $('#sizeOne').text(sizeOne);
        $('#sumTwo').text(sumTwo);
        $('#sizeTwo').text(sizeTwo);
    });
});
