document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sentButton').addEventListener('click', function() {
        console.log("inside sent.js");

        // Make AJAX call to fetch sent emails
        $.ajax({
            url: '../gmail 2/php/sent.php',
            type: 'POST',
            dataType: 'json',
            success: function(response) {
                if (response.error) {
                    console.log(response.error);
                } else {
                    // Update the HTML inside the container
                    var container = document.querySelector('.sent-table-container');
                    var html = `
                        <table id="emailTable" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th style="display:none;">ID</th> <!-- Hidden ID column -->
                                    <th>Receiver</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    response.forEach(function(email) {
                        html += `
                            <tr data-id="${email.id}">
                                <td style="display:none;">${email.id}</td> <!-- Hidden ID cell -->
                                <td><button class="btn btn-link receiver-btn" data-id="${email.id}">${email.receiver}</button></td>
                                <td>${email.subject}</td>
                            </tr>
                        `;
                    });

                    html += `
                            </tbody>
                        </table>
                    `;

                    container.innerHTML = html;

                    // Reinitialize DataTables (if needed)
                    $('#emailTable').DataTable({
                        "scrollX": true, // Enable horizontal scrolling
                        "paging": true,
                        "info": true,
                        "searching": true,
                        "columnDefs": [{ "orderable": true, "targets": 1 }]
                    });

                    // Handle row clicks
                    $('#emailTable tbody').on('click', 'tr', function(event) {
                        var emailId = $(this).data('id');
                        console.log('Email ID:', emailId); // Debugging line

                        // Trigger custom event to handle displaying email details
                        $(document).trigger('rowClicked', [emailId]);
                    });

                    // Include delete.js
                    $.getScript('../gmail 2/anima/delete.js');
                }
            },
            error: function() {
                console.log('An error occurred while fetching the sent emails.');
            }
        });
    });
});
