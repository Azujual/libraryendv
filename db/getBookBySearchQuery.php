<?php
$idFromGet = $_GET['searchRequest'];

    class Product{
        public $id;
        public $title;
		public $author;
		public $genre;
		public $status;
    }

    $products = array();
    $dbc = mysqli_connect('localhost', 'root', '', 'library_project');
    $query = "SELECT books.ID as id_prod, 
				books.title as title_prod, 
				books.author as author_prod, 
				genres.genre_name as genre_prod, 
				status.status_name as status_prod 
			  FROM books 
				JOIN genres ON books.genre=genres.ID 
				JOIN status ON books.status=status.ID $idFromGet";
    $data = mysqli_query($dbc, $query);
	while($row = mysqli_fetch_assoc($data)){
        $product = new Product();
        $product->id = $row['id_prod'];
        $product->title = $row['title_prod'];
		$product->author = $row['author_prod'];
		$product->genre = $row['genre_prod'];
		$product->status = $row['status_prod'];
        array_push($products, $product);  
	}
   mysqli_close($dbc);
   echo json_encode($products);
?>