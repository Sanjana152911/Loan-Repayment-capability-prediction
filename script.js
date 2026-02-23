/* LCTRY.html JavaScript Functions */

function calculateTotalEMI() {
    var loanAmount = document.getElementById("loanAmount").value;

    var resultHTML = "<h2>Best EMI option</h2>";
    resultHTML += "<table>";
    resultHTML += "<tr><th>EMI (per month)</th><th>Tenure (Years)</th><th>Interest Rate (%)</th><th>Total Amount to be Paid (Rupees)</th></tr>";

    // Example ranges for tenure and interest rate
    var tenureRange = [10, 15, 20, 25, 30];
    var interestRateRange = [7.50, 8.00, 8.5, 9.0, 9.5];

    for (var i = 0; i < tenureRange.length; i++) {
        for (var j = 0; j < interestRateRange.length; j++) {
            var tenure = tenureRange[i];
            var interestRate = interestRateRange[j];
            var emi = calculateEMIForLoanAmount(loanAmount, interestRate, tenure);
            var totalAmount = emi * (tenure * 12);
            resultHTML += "<tr><td>" + emi.toFixed(2) + "</td><td>" + tenure + "</td><td>" + interestRate + "</td><td>" + totalAmount.toFixed(2) + "</td></tr>";
        }
    }

    resultHTML += "</table>";

    document.getElementById("result").innerHTML = resultHTML;
}

function calculateEMI() {
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);

    var monthlyInterestRate = (interestRate / 100) / 12;
    var numberOfPayments = loanTerm * 12;

    var emiAmount = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    document.getElementById('emiAmount').value = emiAmount.toFixed(2);
}

function calculateEMIForLoanAmount(principal, rate, time) {
    rate = rate / (12 * 100);  // Monthly interest rate
    time = time * 12;  // Convert years to months
    var emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    return emi;
}

/* LoanPredict.html JavaScript Functions */

function calculateRepayment() {
    var income = parseFloat(document.getElementById("income").value);
    var age = parseFloat(document.getElementById("age").value);
    var houseOwned = document.getElementById("houseOwned").value === "Owned" ? 10 : 7;
    var carOwned = document.getElementById("carOwned").value === "Yes" ? 10 : 7;
    var experience = parseFloat(document.getElementById("experience").value);
    var position = parseFloat(document.getElementById("position").value);
    var dependents = parseFloat(document.getElementById("dependents").value);

    var avg = (income + age + houseOwned + carOwned + experience + position + dependents) / 7;
    var repaymentPercentage = avg * 10;

    document.getElementById("output").innerText = "Average: " + avg.toFixed(2) + "\nRepayment Percentage: " + repaymentPercentage.toFixed(2) + "%";

    // Display message based on repayment percentage
    var messageElement = document.getElementById("message");
    if (repaymentPercentage >= 75) {
        messageElement.innerHTML = "Congratulations! Your Loan Repayment capability is high.Your loan eligibility can be above 50L";
        messageElement.className = "message high";
    } else if (repaymentPercentage >= 60) {
        messageElement.innerHTML = "No worries!, Your Loan Repayment capability is average.Your loan eligibility can be upto 50L";
        messageElement.className = "message average";
    } else {
        messageElement.innerHTML = "Apologies!, Your Loan Repayment capability is low. Your loan eligibility can be upto 20L";
        messageElement.className = "message low";
    }
}

/* Homepage.html JavaScript Functions */

function showLoading() {
    // Function to show loading animation (if needed)
}
