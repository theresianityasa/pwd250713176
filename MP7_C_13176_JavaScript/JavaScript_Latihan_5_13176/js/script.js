 function fn_ValForm() {
    var sMsg = "";
    var sEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    //var sInput;

    //sInput = prompt("Pilih koleksi: (F)iksi, (N)on-Fiksi, (J)urnal Ilmiah", "F");

    if (document.getElementById("nama").value == "") {
            sMsg += "\n* Anda belum mengisikan nama";
        }

        if (document.getElementById("email").value == "") {
            sMsg += "\n* Anda belum mengisikan email";
        } else if (!sEmail.test(document.getElementById("email").value)) {
            sMsg += "\n* Format email tidak valid";
        }

        if (document.getElementById("umur").value == "") {
            sMsg += "\n* Anda belum mengisikan umur";
        }

        if (document.getElementById("koleksi").value == "") {
            sMsg += "\n* Anda belum mengisikan koleksi favorit";
        } //else if (sInput) {
            //switch (sInput) {
                //case "F":
                    //alert("Anda memilih koleksi Fiksi");
                    //break;

                //case "N":
                    //alert("Anda memilih koleksi Non-Fiksi");
                    //break;

                //case "J":
                    //alert("Anda memilih koleksi Jurnal Ilmiah");
                    //break;
            //}
        //}

        if (sMsg != "") {
            alert("Peringatan:\n" + sMsg);
            return false;
        } else {
            return true;
        }
 
 }