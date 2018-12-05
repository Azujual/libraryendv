<?php

$title = $_POST['title'];
$author = $_POST['author'];
$genre = $_POST['genre'];
$status = $_POST['status'];


$dbc = mysqli_connect('localhost', 'root', '', 'library_project');

$query = "INSERT INTO books (title, author, genre, status) VALUES ('$title','$author','$genre','$status')";

    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>


