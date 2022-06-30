<?php 
$servername = "localhost";
$database = "";
$username = "";
$password = "";
// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

?>
	<html>

		<head>
			<meta charset="UTF-8">
			<title>Radioip</title>
			<script src="./scripts/ipRadio.js"></script>
		</head>
		<body>
	<?php	  
	$select= mysqli_query($conn, "SELECT id, ip FROM `radiosab`.`ipRadio`;");
	while ($r= mysqli_fetch_array($select)) {
	    ?>
	    <p id='ip'>
	        <script> ipn= '<?php echo $r['ip']; ?>' </script>
	    <?php
        echo $r['ip'] ."<br />";
}?>
    </p>
	
<?php mysqli_close($conn);?>

		</body>
		</html>