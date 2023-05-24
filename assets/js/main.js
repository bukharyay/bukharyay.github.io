$(document).ready(function() {
    $('.thumbnail').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});





// Jika tidak memakai bootstrap bundle
// 

// $('.dropdown-toggle').click(function() {

//     $('.dropdown-menu').toggleClass('show');

// });

// $('.navbar-toggler').click(function() {

//     $('.navbar-collapse').toggleClass('show');

// });