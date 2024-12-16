const api = "https://api.exchangerate-api.com/v4/latest/USD";

// Selecting controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");

var resultFrom;
var resultTo;
var searchValue;

// Event when 'from' currency is changed
fromCurrency.addEventListener('change', (event) => {
    resultFrom = event.target.value;
});

// Event when 'to' currency is changed
toCurrency.addEventListener('change', (event) => {
    resultTo = event.target.value;
});

// Event when user types in the search box
search.addEventListener('input', updateValue);

// Update the value when user types
function updateValue(e) {
    searchValue = parseFloat(e.target.value);  // Make sure the value is a number
}

// When user clicks 'Convert', call getResults function
convert.addEventListener("click", getResults);

// Function to fetch currency exchange rates and convert values
function getResults() {
    fetch(`${api}`)
        .then(currency => currency.json())
        .then(displayResults);
}

// Display the conversion results
function displayResults(currency) {
    // Ensure searchValue is a valid number
    if (isNaN(searchValue) || searchValue <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    // Ensure from and to currencies are selected
    if (!resultFrom || !resultTo) {
        alert("Please select both currencies.");
        return;
    }

    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];

    // Perform the conversion and display the result
    finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

// When user clicks reset button, clear values
function clearVal() {
    window.location.reload();
    document.querySelector(".finalValue").innerHTML = "";
    finalAmount.style.display = "none";
}
