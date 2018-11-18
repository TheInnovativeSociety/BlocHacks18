<?php
// Allow from any origin
   if (isset($_SERVER['HTTP_ORIGIN'])) {
       // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
       // you want to allow, and if so:
       header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
       header('Access-Control-Allow-Credentials: true');
       header('Access-Control-Max-Age: 86400');    // cache for 1 day
   }

   // Access-Control headers are received during OPTIONS requests
   if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

       if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
           // may also be using PUT, PATCH, HEAD etc
           header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

       if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
           header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

       exit(0);
   }

// My code
$servername = "0.0.0.0";
$username = "api";
$password = "api";
$dbname = "blocHacks18";


$postdata = file_get_contents("php://input");
$request = json_decode($postdata, true);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM cities";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $rows[] = array();
    while($res = $result->fetch_assoc()) {
	$rows = calculation($res, $request);
    }

    print json_encode($rows);

} else {
    echo "0 results";
}
$conn->close();


function calculation($r, $req){
	$rv = array();

	$m = 12;

	$rv['name'] = $r['name'];

	$children = $req['children'];
	$adult = $req['adult'];
	$person = $adult + $children;


	// Transportation
	if (strcasecmp($req['transportation'],"Car") == 0){
	$rv['carLease'] = $r['carLease'] / $m;
	$rv['gasoline'] = $r['gasoline'] * 50;
	$rv['parking'] = $r['parking'] * 10;
	$rv['insurance'] = $r['insurance'] / $m;
	$rv['registration'] = $r['registration'] / $m;
	$rv['maintenance'] = $r['maintenance'] / $m;
	$rv['tires'] = $r['tires'] / (2 * $m);
	$rv['publicTransport'] = $r['publicTransport'] * $children; 
	}else {
	$rv['publicTransport'] = $r['publicTransport'] * $person;
	}
	$rv['publicTransport'] -= $r['publicTransporReducedFee'] * $req['student'];

	// Living expenses
	if ($person == 1){
		$rv['groceries'] = $r['groceriesOne'];
	}else if ($person >= 2 && $person <= 4){
		$rv['groceries'] = $r['groceriesTwo'] * $person;
	}else {
		$rv['groceries'] = $r['groceriesFivePlus'] * $person;
	}

	$rv['eatOut'] = $r['eatOut'] * (3 * $person);
	$rv['entertainment'] = $r['entertainment'] * $person;
	$rv['clothing'] = $r['clothing'] * $person;
	$rv['personalCare'] = $r['personalCare'] * $person;
	$rv['dayCare'] = $r['dayCare'] * $children;
	$rv['tuition'] = $r['tuition'] * $children;
		
	// Housing
	if ($adult <= 2 && $children == 0){
		$rv['rent'] = $r['oneBedroom'];
	}else if(($adult <= 4) || ($adult <=2 && $children == 1)){
		$rv['rent'] = $r['twoBedroom'];
	}else{
		$rv['rent'] = $r['threeBedroom'];
	}
	$rv['utilities'] = $r['utilities'] * $person;
	$rv['internet'] = $r['internet'];

	return $rv;
}
?>
