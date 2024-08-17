$(document).ready(function() {
    // Handle row clicks
    $('table tbody').on('click', 'tr', function(event) {
        var emailId = $(this).data('id');

        // Prevent modal from opening if checkbox is clicked
        if ($(event.target).hasClass('email-checkbox')) {
            return;
        }

        // Send AJAX request to fetch email details
        $.ajax({
            url: '../gmail 2/php/display.php',
            type: 'POST',
            dataType: 'json',
            data: { id: emailId },
            success: function(response) {
                if (response.error) {
                    console.log(response.error);
                } else {
                    var email = response; // Directly use the response since it's a single email

                    if (email) {
                        // Create the modal HTML dynamically
                        var modalHTML = `
                            <div class="modal fade" id="inboxEmailDetailsModal" tabindex="-1" aria-labelledby="inboxEmailDetailsModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="inboxEmailDetailsModalLabel">Inbox Email Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p><strong>Sender:</strong> ${email.sender || "No sender info"}</p>
                                            <p><strong>Subject:</strong> ${email.subject || "No subject"}</p>
                                            <p><strong>Message:</strong></p>
                                            <p>${email.message || "No message content available."}</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;

                        // Remove any existing modal and append the new one
                        $('.displaymails').html(modalHTML);

                        // Initialize and show the modal using Bootstrap
                        var modalElement = document.querySelector('#inboxEmailDetailsModal');
                        var modal = new bootstrap.Modal(modalElement);
                        modal.show();
                    } else {
                        console.log('No email details found.');
                    }
                }
            },
            error: function() {
                console.log('An error occurred while fetching the email details.');
            }
        });
    });
});