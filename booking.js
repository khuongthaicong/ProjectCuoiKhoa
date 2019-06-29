function getdata() {
    var depAirport = document.getElementById("departure-airport");
    depUser = depAirport.options[depAirport.selectedIndex].text;

    var arrAirport = document.getElementById("arrival-airport");
    arrUser = arrAirport.options[arrAirport.selectedIndex].text;

    var baby = document.getElementById("baby").value;
    var child = document.getElementById("child").value;
    var adult = document.getElementById("adult").value;

    var today = new Date();
    console.log(today)
    // if ($("#datepicker").datepicker().val() ="") {
    //     // check xem user đã chọn ngày chưa
    //     document.getElementById("date-check").innerHTML = "Bạn chưa chọn ngày!";
    // }
    // else if ($("#datepicker").datepicker("getDate") - today < 0) { 
    //     //check xem user có chọn mấy ngày trong quá khứ không
    //     document.getElementById("date-check").innerHTML = "Bạn phải chọn ngày "
    // }
    // else if (){
    //     //dành cho vé khứ hồi: check xem hiệu ngày đi - ngày về có lớn hơn 0 không
    //     document.getElementById("date-check").innerHTML = 
    // }
    // else {
    //     var departureDate = $("#datepicker").datepicker({ dateFormat: 'dd,mm,yyyy' }).val();
    // }


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
        document.getElementById("ticket-check").innerHTML = "You have to choose the ticket type";
    }
}
