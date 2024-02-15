let id = document.getElementById("id");
let firstName = document.getElementById("firstName");
let maidenName = document.getElementById("maidenName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let username = document.getElementById("username");
let birthDate = document.getElementById("birthDate");
let img = document.getElementById("img");
let bloodGroup = document.getElementById("bloodGroup");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let ip = document.getElementById("ip");
let address = document.getElementById("address");
let city = document.getElementById("city");
let postalCode = document.getElementById("postalCode");
let state = document.getElementById("state");
let university = document.getElementById("university");
let cardExpire = document.getElementById("cardExpire");
let cardNumber = document.getElementById("cardNumber");
let cardType = document.getElementById("cardType");
let currency = document.getElementById("currency");
let iban = document.getElementById("iban");
let coin = document.getElementById("coin");
let wallet = document.getElementById("wallet");
let network = document.getElementById("network");
console.log(window.localStorage.token);
/* providing token in bearer */
fetch("https://dummyjson.com/auth/me", {
  method: "GET",
  headers: {
    Authorization: window.localStorage.token,
  },
})
  .then((res) => res.json())
  .then((data) => {
    id.value = data.id;
    firstName.value = data.firstName;
    maidenName.value = data.maidenName;
    lastName.value = data.lastName;
    age.value = data.age;
    gender.value = data.gender;
    email.value = data.email;
    phone.value = data.phone;
    username.value = data.username;
    birthDate.value = data.birthDate;
    img.value = data.img;
    bloodGroup.value = data.bloodGroup;
    height.value = data.height;
    weight.value = data.weight;
    ip.value = data.ip;
    address.value = data.address.address;
    city.value = data.address.city;
    postalCode.value = data.address.postalCode;
    state.value = data.address.state;
    university.value = data.university;
    cardExpire.value = data.cardExpire;
    cardNumber.value = data.cardNumber;
    cardType.value = data.cardType;
    currency.value = data.currency;
    iban.value = data.iban;
    coin.value = data.coin;
    wallet.value = data.wallet;
    network.value = data.network;
  });

///////////////////////////////////////////////////////////////////////////////////

let showBTn = document.getElementsByClassName("show");
let accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
  showBTn[i].addEventListener("click", function () {
    console.log(showBTn[i]);
    this.classList.toggle("hide");
  });

  console.log(accordions[i]);
  accordions[i].addEventListener("click", function () {
    console.log(accordions[i]);
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.height = "0";
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.height = "fit-content";
    }
  });
}
