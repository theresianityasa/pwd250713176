<?php
     require 'koneksi.php';

     if(isset($_GET['id'])) {
         $id = $_GET['id'];

         $stmt = mysqli_prepare($conn, 'DELETE FROM menu WHERE id = ?');
         mysqli_stmt_bind_param($stmt, 'i', $id);
         mysqli_stmt_execute($stmt);

         echo '<p>Data berhasil dihapus.</p>';
     } else {
         echo '<p>Data tidak ditemukan.</p>';
     }

     echo '<a href="index.php">Kembali</a>';
?>