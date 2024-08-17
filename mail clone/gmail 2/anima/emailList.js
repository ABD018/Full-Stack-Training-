$(document).ready(function() {
    var table = $('#emailTable').DataTable({
        "paging": true,
        "info": true,
        "searching": true,
        "columnDefs": [{ "orderable": true, "targets": 0 }],
        "ajax": {
            "url": "../gmail 2/php/fetch.php",
            "dataSrc": "",
            "error": function(xhr, error, thrown) {
                // Check if the error is related to user authentication
                if (xhr.responseJSON && xhr.responseJSON.error) {
                    console.log('Error from server:', xhr.responseJSON.error); // Log the server error
                    if (xhr.responseJSON.error === 'User not logged in') {
                        // Redirect to the sign-in page without alerting the user
                        window.location.href = 'signin.html';
                    }
                } else {
                    // Handle other errors (if needed)
                    console.log('AJAX error:', thrown); // Log the error
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
                    return <button class="btn btn-link">${data}</button>;
                }
            },
            { "data": "subject" }
        ],
        "createdRow": function(row, data, dataIndex) {
            $(row).attr('data-id', data.id);
        }
    });

    $('#emailTable tbody').on('click', 'tr', function(event) {
        var emailId = $(this).data('id');

        if ($(event.target).hasClass('email-checkbox')) {
            return;
        }

        console.log('Email ID:', emailId); // Debugging line

        $.ajax({
            url: '../gmail 2/php/display.php',
            type: 'POST',
            dataType: 'json',
            data: { id: emailId },
            success: function(response) {
                if (response.error) {
                    console.log('Error from server:', response.error); // Log the server error
                } else {
                    var email = response;
                    $(document).trigger('rowClicked', [email]);
                }
            },
            error: function(xhr, status, error) {
                console.log('AJAX error:', status, error); // Debugging line
            }
        });
    });

    // Load additional scripts as needed
    $.getScript('./delete.js');
    $.getScript('./display.js');
});