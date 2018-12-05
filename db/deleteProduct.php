<?php
$idFromGet = $_GET['id'];

    $dbc = mysqli_connect('localhost', 'root', '', 'library_project');
    $query = "DELETE FROM books WHERE books.id=$idFromGet";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>