console.log('Hello!');
// DOM
const navbarList = document.querySelector(".navbar-nav");


$(document).ready(() => {
  console.log('HesSchool Hello!');

  $(".pagination").click(function (e) {
    e.preventDefault();
    // $(".page-item").toggleClass("active");
    $(".page-item").removeClass('active');
    e.target.parentNode.classList.add('active')
    console.log(e.target.nodeName);
  });


  $(".reply_btn").click(function (e) {
    e.preventDefault();
    // // $(".page-item").toggleClass("active");
    // $(".page-item").removeClass('active');
    // e.target.parentNode.classList.add('active')
    $(".own_message").toggleClass("d-none");
    $("#control_menu").toggleClass("d-none");
    $(".card-edit").toggleClass("d-none");
  });

  $(".cancel_btn").click(function (e) {
    e.preventDefault();
    $(".own_message").toggleClass("d-none");
    $("#control_menu").toggleClass("d-none");
    $(".card-edit").toggleClass("d-none");
  });
})