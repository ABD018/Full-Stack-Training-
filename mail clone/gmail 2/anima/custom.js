document.addEventListener('hidden.bs.modal', function (event) {
    var modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.remove();
    }
});



