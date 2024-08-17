document.addEventListener('DOMContentLoaded', function() {
    function validateUsername() {
        var username = document.getElementById('username').value;
        var usernameError = document.querySelector('#username + .invalid-feedback');
        var usernameInput = document.getElementById('username');
        if (username.trim() === "") {
            usernameInput.classList.add('is-invalid');
            usernameError.style.display = 'block';
            return false;
        } else {
            usernameInput.classList.remove('is-invalid');
            usernameError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        var email = document.getElementById('email').value;
        var emailError = document.querySelector('#email + .invalid-feedback');
        var emailInput = document.getElementById('email');
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailInput.classList.add('is-invalid');
            emailError.style.display = 'block';
            return false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        var password = document.getElementById('password').value;
        var passwordError = document.querySelector('#password + .invalid-feedback');
        var passwordInput = document.getElementById('password');
        if (password.length < 8) {
            passwordInput.classList.add('is-invalid');
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordError.style.display = 'none';
            return true;
        }
    }

    function validateSecurityQuestion() {
        var securityQuestion = document.getElementById('securityQuestion').value;
        var questionError = document.querySelector('#securityQuestion + .invalid-feedback');
        var securityQuestionInput = document.getElementById('securityQuestion');
        if (securityQuestion.trim() === "") {
            securityQuestionInput.classList.add('is-invalid');
            questionError.style.display = 'block';
            return false;
        } else {
            securityQuestionInput.classList.remove('is-invalid');
            questionError.style.display = 'none';
            return true;
        }
    }

    function validateSecurityAnswer() {
        var securityAnswer = document.getElementById('securityAnswer').value;
        var answerError = document.querySelector('#securityAnswer + .invalid-feedback');
        var securityAnswerInput = document.getElementById('securityAnswer');
        if (securityAnswer.trim() === "") {
            securityAnswerInput.classList.add('is-invalid');
            answerError.style.display = 'block';
            return false;
        } else {
            securityAnswerInput.classList.remove('is-invalid');
            answerError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        var isValid = true;
        isValid &= validateUsername();
        isValid &= validateEmail();
        isValid &= validatePassword();
        isValid &= validateSecurityQuestion();
        isValid &= validateSecurityAnswer();
        return isValid;
    }

    // Attach event listeners for real-time validation
    document.getElementById('username').addEventListener('input', validateUsername);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('securityQuestion').addEventListener('input', validateSecurityQuestion);
    document.getElementById('securityAnswer').addEventListener('input', validateSecurityAnswer);

    var form = document.getElementById('createAccountForm');
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent default form submission
            event.stopPropagation();
        }

        form.classList.add('was-validated');

        if (validateForm()) {
            var formData = new FormData(form);
            var xhr = new XMLHttpRequest();

            xhr.open('POST', '../gmail 2/php/create.php', true);
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('Response:', xhr.responseText);
                    try {
                        var data = JSON.parse(xhr.responseText);
                        console.log(data);

                        if (data.success) {
                            console.log('Account created successfully!');
                            window.location.href = 'signin.html'; // Redirect to sign in page
                        } else {
                            console.log('Account creation failed: ' + data.message);
                        }
                    } catch (e) {
                        console.log('Error parsing JSON:', e);
                    }
                } else {
                    console.log('AJAX call failed: ' + xhr.statusText);
                }
            };

            xhr.onerror = function() {
                console.log('AJAX call failed: ' + xhr.statusText);
            };

            xhr.send(formData);
        }
    });
});
