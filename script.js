function predict() {
    const glucose = parseFloat(document.getElementById('glucose').value);
    const bloodPressure = parseFloat(document.getElementById('blood-pressure').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const age = parseFloat(document.getElementById('age').value);

    // Simple prediction model (for demonstration purposes)
    // This model is not accurate and should be replaced with a real machine learning model
    const prediction = glucose * 0.1 + bloodPressure * 0.2 + bmi * 0.3 + age * 0.4;

    let result;
    if (prediction >= 150) {
        result = 'High likelihood of diabetes';
    } else {
        result = 'Low likelihood of diabetes';
    }

    document.getElementById('result').innerText = result;

    // Chart.js configuration
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Diabetes Risk'],
            datasets: [{
                label: 'Predicted Risk Level',
                data: [prediction],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
