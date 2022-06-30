<?php

//max recent tracks to keep in the recently played tracks history
$max_recent = 5;

//secret key to access the script
$key = '';

//check access
if ($_REQUEST['key'] !== $key) {
    ReturnError(400, 'Invalid key');
}

//retrieve title info
$title = htmlspecialchars($_REQUEST['casttitle']);

//save current track title and update history
$file = 'nowplaying_title.txt';
$recent = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$recent = array_slice($recent, 0, $max_recent);

$r = fopen($file, 'wb');
if ($r !== false) {
    //current track
    fwrite($r, $title . "\n");
    fclose($r);
} else {
    ReturnError(500, 'Failed to save track title');
}


function ReturnError($code, $text) {
    $protocol = isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';
    header($protocol . ' ' . $code . ' ' . $text);
    exit();
}