<?php
    echo"<h1>Data Pendaftaran Konsultasi</h1>";
    echo'<form method="POST" action="">
            <p>Nama        : <br /><input type="text" name="nama" /></p>
            <p>Penyakit    : <br /><input type="text" name="penyakit" /></p>
            <p>Sesi        : <br /><select name="sesi">
                <option value="1">Sesi 1</option>
                <option value="2">Sesi 2</option>
            </select></p>
            <button type="submit">Kirim</button>
        </form>';

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $nama = $_POST['nama'];
        $penyakit = $_POST['penyakit'];
        $sesi = $_POST['sesi'];
        echo "Pasien " . htmlspecialchars($nama) . " dengan penyakit " . htmlspecialchars($penyakit) . " telah terdaftar untuk sesi " . htmlspecialchars($sesi) . ".";
    } else {
        echo "Silahkan lengkapi formulir di atas.";
    }

    $nama = $_POST['nama'] ?? '';
    $penyakit = $_POST['penyakit'] ?? '';
    $sesi = $_POST['sesi'] ?? '';

    if(!preg_match("/^[a-zA-Z ]*$/", $nama)){
        echo "<p style='color:red;'>Nama hanya boleh mengandung huruf dan spasi.</p>";
    }