<?php
$servername = "142.93.146.100";
$username = "root";
$password = "disc2018";
$database = "Montreal";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT * FROM Transportation";
$result = mysqli_query($conn,$sql) or die("Unable to select: ".mysql_error());
print "<table>\n";
while($row = mysqli_fetch_row($result)) {
  print "<tr>\n";
  foreach($row as $field) {
      print "<td>$field</td>\n";
  }
  print "</tr>\n";
}
print "</table>\n";
mysqli_close($conn);
?>