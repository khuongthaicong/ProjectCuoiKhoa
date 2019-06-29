function showDatepicker() {
    $("#roundtrip").datepicker('show');
}
function setDate(date) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    today = yyyy + '-' + mm + '-' + dd;

    $(date).val(today);
}

var nowDate = new Date();
var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
$("#datepicker").datepicker({
    startDate: nowDate
});

function getdata() {
    var depAirport = document.getElementById("departure-airport");
    depUser = depAirport.options[depAirport.selectedIndex].text;

    var arrAirport = document.getElementById("arrival-airport");
    arrUser = arrAirport.options[arrAirport.selectedIndex].text;

    var baby = document.getElementById("baby").value;
    var child = document.getElementById("child").value;
    var adult = document.getElementById("adult").value;

    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    // today = mm + '/' + dd + '/' + yyyy;

    var departureDate = $("#datepicker").datepicker({ dateFormat: 'dd,mm,yyyy' }).val();
    console.log(departureDate)
    if (document.getElementById("oneway").checked == true) {
        for (let i = 0; i < onewayticket.length; i++) {
            if (onewayticket[i]["d-place"] == depUser && onewayticket[i]["a-place"] == arrUser) {
                console.log(onewayticket[i])
                for (let k = 0; k < onewayticket[k]["d-time"]; k++) {
                    //show time frame here
                }
                var price_baby = baby * onewayticket[i]["price"]["baby"];
                var price_child = child * onewayticket[i]["price"]["child"];
                var price_adult = adult * onewayticket[i]["price"]["adult"];
                var total_price = price_child + price_baby + price_adult;
                console.log(total_price)
            }
        }
    }
    else if (document.getElementById("roundtrip").checked == true) {
        for (let i = 0; i < onewayticket.length; i++) {
            if (onewayticket[i]["d-place"] == depUser && onewayticket[i]["a-place"] == arrUser) {
                for (let k = 0; k < onewayticket[k]["d-time"]; k++) {
                    //show time frame here
                }
                var price_baby = 1.8 * baby * onewayticket[i]["price"]["baby"];
                var price_child = 1.8 * child * onewayticket[i]["price"]["child"];
                var price_adult = 1.8 * adult * onewayticket[i]["price"]["adult"];
                var total_price = price_child + price_baby + price_adult;
            }
        }
    }
    else {
        document.getElementById("ticket-check").innerHTML = "Bạn phải chọn loại vé";
    }
    var ticket_type = document.getElementsByName("ticket")
    for (let i = 0; i < ticket_type.length; i++) {
        if (ticket_type[i].checked) {
            parent.open("file:///E:/GitHub/ProjectCuoiKhoa/giaodien2.html")
        }
    }
}
