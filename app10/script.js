cument.getElementById('savingsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    if (!isNaN(goalAmount) && goalAmount > 0 && goalAmount <= 10000) {
        const progressPercentage = (goalAmount / 10000) * 100;
        document.getElementById('progress').innerHTML = `<div id="progress-bar" style="width: ${progressPercentage}%"></div>`;
    } else {
        alert('Please enter a valid savings goal amount (between $0 and $10,000).');
    }
});
