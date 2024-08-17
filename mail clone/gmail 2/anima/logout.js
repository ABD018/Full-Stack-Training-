function logout() {
    $.ajax({
        url: '../gmail 2/php/logout.php', // Ensure this path is correct
        type: 'POST',
        success: function() {
            // Redirect to sign-in page after successful logout
            console.log("Session deleted");
            window.location.href = 'signin.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error during logout:', textStatus, errorThrown);
            console.log('An error occurred during logout. Please try again.');
        }
    });
}
