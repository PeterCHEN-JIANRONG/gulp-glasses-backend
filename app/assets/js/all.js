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


  // navbarList.addEventListener('click', (e) => {
  // e.preventDefault();

  // let link = null;
  // if (e.target.nodeName === 'A') {
  //   link = e.target;
  // }
  // else if (e.target.nodeName === 'I') {
  //   link = e.target.parentNode;
  // }
  // link.classList.add('active');

})