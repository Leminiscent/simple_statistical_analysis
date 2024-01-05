function calculate_statistics() {
    // Get the values entered in three input fields with IDs 'number1', 'number2', and 'number3'
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const num3 = parseFloat(document.getElementById('number3').value);

    // Calculate the maximum value among the three numbers
    const max = Math.max(num1, num2, num3);

    // Calculate the minimum value among the three numbers
    const min = Math.min(num1, num2, num3);

    // Calculate the mean (average) value of the three numbers
    const mean = (num1 + num2 + num3) / 3;

    // Create an array of the three numbers and sort it in ascending order
    const sorted_values = [num1, num2, num3].sort((a, b) => a - b);

    // Calculate the median value, which is the middle value in the sorted array
    const median = sorted_values[1];

    // Calculate the range, which is the difference between the maximum and minimum values
    const range = max - min;

    // Update the content of HTML elements with specific IDs to display the calculated results
    document.getElementById('max-result').textContent = max;
    document.getElementById('min-result').textContent = min;
    document.getElementById('mean-result').textContent = mean.toFixed(1); // Display mean with one decimal place
    document.getElementById('median-result').textContent = median;
    document.getElementById('range-result').textContent = range;
}