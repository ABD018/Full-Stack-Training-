<?php
require '../php/include/database.php';

function createUser($username, $email, $password, $securityQuestion, $securityAnswer) {
    global $conn;

    // Check if the email already exists
    if (emailExists($email)) {
        return false; // Email already exists
    }

    // If email does not exist, proceed to insert the new user
    $stmt = $conn->prepare('INSERT INTO users (username, email, password, ques, ans) VALUES (?, ?, ?, ?, ?)');
    $stmt->bind_param('sssss', $username, $email, $password, $securityQuestion, $securityAnswer);

    if ($stmt->execute()) {
        $stmt->close();
        return true;
    } else {
        error_log("Error: " . $stmt->error);
        return false;
    }
}


function validateUser($email, $password) {
    global $conn;
    $stmt = $conn->prepare('SELECT password FROM users WHERE email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();

   
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($storedPassword);
        $stmt->fetch();

       
        if ($password === $storedPassword) {
            return true;
        } else {
            return 'Invalid password.';
        }
    } else {
        return 'Email does not exist.';
    }
}


function composeMail($to, $sender, $subject, $message) {
    global $conn;

    // Prepared statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO mail (sender, receiver, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $sender, $to, $subject, $message);

    return $stmt->execute();
}



function checkHintAnswer($userId, $answer) {
    global $conn;

    $stmt = $conn->prepare('SELECT ans, password FROM users WHERE id = ?');
    $stmt->bind_param('i', $userId);
    $stmt->execute();
    $stmt->bind_result($storedAnswer, $password);
    $stmt->fetch();
    $stmt->close();

    // Check if the provided answer matches the stored answer
    if ($answer === $storedAnswer) {
        return array('success' => true, 'password' => $password);
    } else {
        return array('success' => false, 'message' => 'Incorrect answer.');
    }
}

// Function to handle forgot password process
function forgotPassword($userId, $answer) {
    return checkHintAnswer($userId, $answer);
}



function inbox($user) {
    global $conn; // Ensure you have access to the $conn variable from database.php

    // Prepare the SQL query to fetch emails where the receiver is the current user
    $sql = "SELECT id, sender, receiver, subject, message FROM mail WHERE receiver = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $user);
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch the results into an array
    $emails = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $emails[] = $row;
        }
    }

    // Close the database connection
    $stmt->close();
    $conn->close();

    return $emails;
}

function fetchEmailDataById($emailId) {
    // Assume you have a database connection established
    global $conn;

    $query = "SELECT * FROM mail WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $emailId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return false;
    }
}




function sentdata($user) {
    global $conn; // Make sure $conn is available here

    // Prepare the SQL query to fetch emails where the sender is the current user
    $sql = "SELECT id, receiver, subject FROM mail WHERE sender = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $user);
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch the results into an array
    $emails = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $emails[] = $row;
        }
    }

    return $emails;
}

function sentdisplayemail($emailId) {
    global $conn;

    // Prepare and execute the query to fetch email details
    $sql = "SELECT sender, receiver, subject, message FROM mail WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $emailId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return [];
    }
}




function deletemail($ids) {
    global $conn; // Ensure you have access to the $conn variable from database.php

    // Prepare the SQL query to delete emails with the provided IDs
    $ids = array_map('intval', $ids); // Sanitize IDs
    $ids_placeholder = implode(',', array_fill(0, count($ids), '?'));

    $sql = "DELETE FROM mail WHERE id IN ($ids_placeholder)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        return false; // Preparation failed
    }

    // Bind parameters
    $stmt->bind_param(str_repeat('i', count($ids)), ...$ids);
    $result = $stmt->execute();

    // Close the statement and connection
    $stmt->close();
    $conn->close();

    return $result;
}





?>














