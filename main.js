const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   navbar.classList.toggle("active");
});

// function hello() {
//    console.log("samir");
// }

// const hello1 = function () {
//    console.log("hello1");
// };

// const hello2 = () => console.log("hello2");
