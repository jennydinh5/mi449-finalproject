import React from "react";

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

let signForm = document.getElementById("signForm");

signForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let naming = document.getElementById("naming");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  if (naming.value == "" || email.value == "" || phone.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
   
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${naming.value} and email of ${email.value} and phone number of ${phone.value} `
    );

    naming.value = "";
    email.value = "";
    phone.value = "";
  }
});

