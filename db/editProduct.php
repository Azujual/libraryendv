<?php
$id = $_POST['id'];
$title = $_POST['title'];
$author = $_POST['author'];
$genre = $_POST['genre'];
$status = $_POST['status'];

    $dbc = mysqli_connect('localhost', 'root', '', 'library_project');
    $query = "UPDATE books SET title='$title', author='$author', genre='$genre', status='$status' where books.id=$id";
    $data = mysqli_query($dbc, $query);
   mysqli_close($dbc);
?>