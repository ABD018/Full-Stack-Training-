$(document).ready(function() {
    function checkLoginStatus() {
        $.ajax({
            url: '../gmail 2/php/check.php', // Endpoint to check session status
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                if (response.loggedIn) {
                    initializeDataTable(); // Initialize DataTables or any other functionality
                } else {
                    window.location.href = 'signin.html'; // Redirect to sign-in page
                }
            },
            error: function(xhr, status, error) {
                console.log('Error checking session:', status, error); // Handle errors if necessary
                window.location.href = 'signin.html'; // Redirect to sign-in page on error
            }
        });
    }

    checkLoginStatus();
});

function initializeDataTable() {
    $('#emailTable').DataTable({
        "paging": true,
        "info": true,
        "searching": true,
        "columnDefs": [{ "orderable": true, "targets": 0 }],
        "ajax": {
            "url": "../gmail 2/php/fetch.php",
            "dataSrc": "",
            "error": function(xhr, error, thrown) {
                console.log('DataTable error:', thrown); // Log the DataTable error
                if (xhr.responseJSON && xhr.responseJSON.error) {
                    console.log('Error from server:', xhr.responseJSON.error); // Log the server error
                    if (xhr.responseJSON.error === 'User not logged in') {
                        window.location.href = 'signin.html'; // Redirect to sign-in page
                    }
                }
            }
        },
        "columns": [
            {
                "data": "id",
                "render": function (data, type, row) {
                    return '<input type="checkbox" class="email-checkbox" value="' + row.id + '">';
                }
            },
            {
                "data": "sender",
                "render": function (data, type, row) {
                    return `<button class="btn btn-link">${data}</button>`;
                }
            },
            { "data": "subject" }
        ],
        "createdRow": function(row, data, dataIndex) {
            $(row).attr('data-id', data.id);
        }
    });
}
