const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/`)
        .then((res) => res.json())
        .then((date) => {
            const rate = date.conversion_rates[currency_two]

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('change', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();
});

calculate();