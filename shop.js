const buyButton = document.querySelector(".buy-button");
const form = document.forms["order-form"];
const requiredInputs = document.querySelectorAll(".required");
const errorMessages = document.querySelectorAll(".error-message");

buyButton.addEventListener("click", () => {
  form.style.display = "block";
});

const confirmButton = document.getElementById("orderConfirm");
const confirmed = document.getElementById("orderConfirmation");

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();
  let hasError = false;
  for (let i = 0; i < requiredInputs.length; i++) {
    const requiredInput = requiredInputs[i];
    let errorMessage = errorMessages[i];

    if (requiredInput.value === "") {
      errorMessage.textContent = 'Це поле не може бути пустим!'
      errorMessage.style.display = "block";
      requiredInput.style.background = '#9a0000';
      hasError = true;
    } else {
      errorMessage.style.display = "none";
    }
  }

  if (!hasError) {
    const customerName = document.querySelector("#name");
    const customerCity = document.querySelector("#city");
    const customerPostOffice = document.querySelector("#post-office");
    const customerPaymentType = document.querySelector("#postPay");
    const productQuantity = document.querySelector("#quantity");
    const customerComment = document.querySelector("#comment");

    const orderConfirmation = document.createElement("div");
    orderConfirmation.innerHTML = `
      <h2>Інформація про замовлення</h2>
      <p>ТОВАР</p>
      <p>ПІБ покупця: ${customerName.value}</p>
      <p>Місто: ${customerCity.value}</p>
      <p>Відділення Нової пошти: ${customerPostOffice.value}</p>
      <p>Спосіб оплати: ${customerPaymentType.value}</p>
      <p>Кількість товару: ${productQuantity.value}</p>
      <p>Коментар до замовлення: ${customerComment.value}</p>`;

    confirmed.innerHTML = "";
    confirmed.appendChild(orderConfirmation);
    confirmed.style.display = "block";
  }
});
