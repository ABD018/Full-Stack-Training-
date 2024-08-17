<?php

require_once "vendor/autoload.php";
use Twilio\Rest\Client;

try {
    $sid = "ACf95645d6d8fdda3863ab6a342a6c8b83";
    $token = "9ef2a6cfc2aa887e8fed39784021ab20";
    $twilio = new Client($sid, $token);

    $call = $twilio->calls->create(
        "+917037535354", // to
        "+12563914826", // from
        ["twiml" => "<Response><Say>mai bol rha hu amitabh bacchan kon banega crore pati se</Say></Response>"]
    );

    echo "Call initiated successfully. Call SID: " . $call->sid;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
