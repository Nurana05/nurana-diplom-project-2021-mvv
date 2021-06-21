"use strict";
//-----------------------------------------------------------------HEADER------------------------------------------------------------------------

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//-----------------------------------------------------------------SECTION-3------------------------------------------------------------------------

$(document).ready(function () {
    $(".box2").slice(0, 0).show();
    $(".loadMore").on("click", function (e) {
        e.preventDefault();
        $(".box2:hidden").slice(0, 6).slideDown(innerWidth);
        if ($(".box2:hidden").length == 0) {
            $(".loadMore").text("The End").addClass("noContent");
        }
    });

})