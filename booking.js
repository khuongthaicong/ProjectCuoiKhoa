$('input[type=radio][name=ticket]').change(function showDatepicker() {
    if (this.value == 'oneway') {
        $("#roundtrip").datepicker("disable");
    }
    else if (this.value == 'roundtrip') {
        $("#roundtrip").datepicker('show');
    }
});

today = new Date();
$(function () {
    $('#datepicker').datepicker({
        startDate: today,
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        autoclose: true,
        changeMonth: true,
        changeYear: true,
        orientation: "button"
    });
});

function getdata() {
    var depAirport = document.getElementById("departure-airport");
    depUser = depAirport.options[depAirport.selectedIndex].text;

    var arrAirport = document.getElementById("arrival-airport");
    arrUser = arrAirport.options[arrAirport.selectedIndex].text;

    var baby = document.getElementById("baby").value;
    var child = document.getElementById("child").value;
    var adult = document.getElementById("adult").value;

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
    var ticket_type = document.getElementsByName("ticket")
    for (let i = 0; i < ticket_type.length; i++) {
        if (ticket_type[i].checked) {
            parent.open("file:///E:/GitHub/ProjectCuoiKhoa/giaodien2.html")
        }
    }
}
