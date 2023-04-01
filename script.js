var answers = document.getElementsByClassName("answer");

console.log(answers);

function ifAnswerIsRight(event) {
  var answer_element = event.target;
  console.log(answer_element.value == "on");

  var li_of_answer_element = answer_element.parentElement;
  console.log(li_of_answer_element.classList);

  var class_list_array = Array.from(li_of_answer_element.classList);

  console.log(class_list_array);

  if (class_list_array.includes("correct")) {
    // alert("answer");
    li_of_answer_element.style.backgroundColor = "green";
  } else {
    li_of_answer_element.style.backgroundColor = "red";
  }
}

for (let answer of answers) {
  answer.addEventListener("change", ifAnswerIsRight);
}
