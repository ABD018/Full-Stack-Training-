document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript loaded");

    const composeForm = document.getElementById('composeForm');
    if (!composeForm) {
        console.error('Compose form not found');
        return;
    }

    const composeModal = new bootstrap.Modal(document.getElementById('composeModal'));
    if (!composeModal) {
        console.error('Compose modal not found');
        return;
    }

    composeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(composeForm);
        console.log("Form data before sending:", ...formData.entries()); // Debugging output

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../gmail 2/php/compose.php', true);
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log("Response text:", xhr.responseText); // Debugging output
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log("Response data:", data); // Debugging output
                    if (data.success) {
                        console.log('Message sent successfully!');
                        composeModal.hide(); // Hide the modal
                        composeForm.reset(); // Reset the form
                        window.location.reload(); // Refresh the page
                    } else {
                        console.log('Failed to send message: ' + data.message);
                    }
                } catch (e) {
                    console.error('Error parsing JSON:', e);
                }
            } else {
                console.error('AJAX call failed: ' + xhr.statusText);
            }
        };

        xhr.onerror = function() {
            console.error('AJAX call failed: ' + xhr.statusText);
        };

        xhr.send(formData);
    });
});
