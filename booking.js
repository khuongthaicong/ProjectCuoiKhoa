// console.log("K")
var departureAirport = document.getElementById("departure-airport")
console.log(departureAirport)
function getdata(departureAirport, arrivalAirport){
    for(let i=0 ; i< vemotchieu.length;i++) {
        if (vemotchieu[i]["d-place"] == departureAirport && vemotchieu[i]["a-place"] == arrivalAirport){
            console.log(vemotchieu[i])
        }
    }
}
