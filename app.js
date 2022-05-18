// traversing the DOM
//const questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
