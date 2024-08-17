$(document).ready(function() {
    $('#deleteButton').on('click', function() {
        console.log('Delete button clicked'); // Debugging statement

        var selectedIds = [];
        $('input[type="checkbox"]:checked').each(function() {
            var id = $(this).val();
            if (id) {
                selectedIds.push(id);
            }
        });

        if (selectedIds.length === 0) {
            console.log('No emails selected for deletion.');
            return;
        }

        console.log('Selected IDs:', selectedIds); // Debugging statement

        $.ajax({
            url: '../gmail 2/php/delete.php',
            type: 'POST',
            dataType: 'json',
            data: { ids: selectedIds },
            success: function(response) {
                console.log('Response:', response); // Debugging statement
                if (response.success) {
                    $('input[type="checkbox"]:checked').closest('tr').remove();
                    console.log('Selected emails deleted successfully.');
                } else {
                    console.log('An error occurred while deleting the emails.');
                }
            },
            error: function() {
                console.log('An error occurred while making the request.');
            }
        });
    });
});
