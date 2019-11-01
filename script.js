document.querySelector("#calculator").addEventListener("click", e => {
  e.preventDefault();

  let amount = document.querySelector("#amount").value;
  let tipPercentage = document.querySelector("#tip-percentage").value / 100;
  let people = document.querySelector("#people").value;

  let totalAmount = (amount * tipPercentage + Number(amount)).toFixed(2);
  document.querySelector(".tip-amount").textContent =
    "D" + (amount * tipPercentage).toFixed(2);

  document.querySelector(".tip-per-person").textContent =
    "D" + ((amount * tipPercentage) / people).toFixed(2);

  document.querySelector(".total-amount").textContent = "D" + totalAmount;

  document.querySelector(".per-person").textContent =
    "D" + (Number(totalAmount) / Number(people)).toFixed(2);
  {
    if (tipPercentage == "" || tipPercentage == 0 || tipPercentage < 0) {
      document.querySelector(".error-percent").classList.add("error-active");
      document.querySelector(".alert").classList.remove("alert-success");
    } else {
      document.querySelector(".error-percent").classList.remove("error-active");
    }
  }

  {
    if (amount == "" || amount == 0 || amount < 0) {
      document.querySelector(".error-amount").classList.add("error-active");
      document.querySelector(".alert").classList.remove("alert-success");
    } else {
      document.querySelector(".error-amount").classList.remove("error-active");
    }
  }

  if (people == "" || people == 0 || people < 0) {
    document.querySelector(".error-people").classList.add("error-active");
    document.querySelector(".alert").classList.remove("alert-success");
    alert(s);
  } else if (people != "") {
    document.querySelector(".error-people").classList.remove("error-active");
  }
  if (tipPercentage != "" && people != "" && amount != "") {
    document.querySelector(".error-amount").classList.remove("error-active");
    document.querySelector(".error-percent").classList.remove("error-active");
    document.querySelector(".error-people").classList.remove("error-active");
    document.querySelector(".alert").classList.add("alert-success");
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector(".alert").classList.remove("alert-success");
  document.querySelector(".error-percent").classList.remove("error-active");
  document.querySelector(".error-amount").classList.remove("error-active");
  document.querySelector(".error-people").classList.remove("error-active");
  document.querySelector(".tip-per-person").textContent = "D" + (0).toFixed(2);
  document.querySelector(".total-amount").textContent = "D" + (0).toFixed(2);
  document.querySelector(".per-person").textContent = "D" + (0).toFixed(2);
  document.querySelector(".tip-amount").textContent = "D" + (0).toFixed(2);
});

document.querySelector("#amount").addEventListener("keypress", () => {
  document.querySelector(".error-amount").classList.remove("error-active");
});

document.querySelector("#tip-percentage").addEventListener("keypress", () => {
  document.querySelector(".error-percent").classList.remove("error-active");
});

document.querySelector("#people").addEventListener("keypress", () => {
  document.querySelector(".error-people").classList.remove("error-active");
});
