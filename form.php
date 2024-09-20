<?php


// Get the submitted form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Database connection
    $conn = new mysqli('localhost','root','','form');

    // Check for database connection errors
    if ($conn->connect_error) {
        die('Connection Failed : ' .$conn->connect_error);
    } else {
        // Prepare and bind the statement
        $stmt = $conn->prepare("Insert into message(name, email, message) 
        values (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);

        // Execute the statement
        $stmt->execute();
        echo "Message Sent Successfully!";

        // Close the statement and connection
        $stmt->close();
        $conn->close();
    }
?>
