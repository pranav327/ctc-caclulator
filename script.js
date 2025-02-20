document.getElementById('ctcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
    const hra = parseFloat(document.getElementById('hra').value) || 0;
    const specialAllowances = parseFloat(document.getElementById('specialAllowances').value) || 0;
    const otherAllowances = parseFloat(document.getElementById('otherAllowances').value) || 0;

    // Calculate CTC
    const ctc = basicSalary + hra + specialAllowances + otherAllowances;

    // Display the result
    document.getElementById('ctcValue').textContent = `₹${ctc.toLocaleString()}`;
});