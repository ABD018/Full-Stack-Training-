document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sign');

    if (!form) {
        console.error('Form not found!');
        return;
    }

    console.log('JavaScript Loaded'); // Debugging log

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        console.log('Form Submitted'); // Debugging log

        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '../gmail 2/php/signin.php', true);
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onload = function() {
            console.log('AJAX Load Event'); // Debugging log
            if (xhr.status === 200) {
                console.log('Response:', xhr.responseText);
                try {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data); // Debugging log

                    if (data.success) {
                        console.log('Sign-in successful!');
                        window.location.href = data.redirect; // Redirect to main.html
                    } else {
                        console.log('Sign-in failed: ' + data.message);
                        document.getElementById('error-message').innerText = data.message; // Display error message
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
