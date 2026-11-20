var totalNode;
var hematNode;

function init(){
    totalNode = document.getElementById("totalBayar").firstChild;
    hematNode = document.getElementById("infoHemat").firstChild;
    hitungTotal();
}

function hitungTotal(){
    var harga = parseFloat(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);
    var warna = totalNode.parentNode.style;

    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        warna.color = "red";
        totalNode.data = "Diskon tidak valid";
        hematNode.data = "Anda hemat: Rp0";
    } else {
        var hemat = harga * (diskon / 100);
        var akhir = harga - hemat;

        warna.color = "green";
        totalNode.data = akhir;
        hematNode.data = "Anda hemat: Rp" + hemat;
    }
}