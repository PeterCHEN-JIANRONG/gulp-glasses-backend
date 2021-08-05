"use strict";

console.log('Hello!'); // DOM

var navbarList = document.querySelector(".navbar-nav");
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $(".pagination").click(function (e) {
    e.preventDefault(); // $(".page-item").toggleClass("active");

    $(".page-item").removeClass('active');
    e.target.parentNode.classList.add('active');
    console.log(e.target.nodeName);
  });
  $(".reply_btn").click(function (e) {
    e.preventDefault(); // // $(".page-item").toggleClass("active");
    // $(".page-item").removeClass('active');
    // e.target.parentNode.classList.add('active')

    $(".own_message").toggleClass("d-none");
    $("#control_menu").toggleClass("d-none");
    $(".card-edit").toggleClass("d-none");
    $("#reply_text").focus();
  });
  $(".cancel_btn").click(function (e) {
    e.preventDefault();
    $(".own_message").toggleClass("d-none");
    $("#control_menu").toggleClass("d-none");
    $(".card-edit").toggleClass("d-none");
  });
  $(".expand-icon").click(function (e) {
    e.preventDefault();
    $(".expand-btn").toggleClass("d-none");
  });
}); // from表單驗證提示訊息
// Fetch all the forms we want to apply custom Bootstrap validation styles to

var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
});
//# sourceMappingURL=all.js.map
