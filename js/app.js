let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let calendar = document.querySelector("#calendar");
let address = document.querySelector("#address");
let phoneNumber = document.querySelector("#phoneNumber");
let password = document.querySelector("#password");
let imagePath = document.querySelector("#image-file");
let getNewUser = document.querySelector("#btn");

// let desc = document.getElementById("desc");

imagePath.addEventListener("mouseenter", function () {
  getNewUser.style.display = "block";
})

document.addEventListener("DOMContentLoaded", getRandomUser);
getNewUser.addEventListener("click", getRandomUser);

function getUserDetails(elem, paragraph) {
  if (typeof elem.id === "number") {

    let result = document.getElementById(paragraph);
    result.style.display = "block";
    console.log(result)
  }
}

function resetUserDetails(elem, paragraph) {

  let result = document.querySelector(`#${paragraph}`);

  result.style.display = "none";
}

function resetUserdetails(element, paragraph) {

}

function getRandomUser() {
  const URL = "https://randomuser.me/api/";

  fetch(URL)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function (data) {
      fullName.innerHTML = ` ${data.results[0].name.first} ${data.results[0].name.last}`;
      email.innerHTML = ` ${data.results[0].email}`;
      calendar.innerHTML = `${data.results[0].dob.date}`;
      address.innerHTML = ` ${data.results[0].location.street.number} ${data.results[0].location.street.name}`;
      phoneNumber.innerHTML = ` ${data.results[0].phone}`;
      password.innerHTML = ` ${data.results[0].login.password}`;
      imagePath.src = `${data.results[0].picture.medium}`;

    })
    .catch(function (error) {
      console.log(error);
      notify.innerHTML = `Ooops!! Something went wrong.`
    })
}
