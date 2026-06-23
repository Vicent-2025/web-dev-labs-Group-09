// Step 1: Select DOM elements
const scoreInput = document.getElementById('scoreInput');
const calcBtn = document.getElementById('calcBtn');
const resultsDiv = document.getElementById('results');

// Step 2: Define event handlers
function handleCalculation() {
    // Part B: Retrieve value and convert to a number
    const inputValue = scoreInput.value.trim();
    const score = Number(inputValue);

    // Ensure results container is visible
    resultsDiv.classList.remove('hidden');
    // Clear out any previous dynamic styling classes
    resultsDiv.className = 'results-box'; 

    // Part C: Input Validation
    if (inputValue === "" || isNaN(score) || score < 0 || score > 100) {
        resultsDiv.innerHTML = "❌ Error: Please enter a valid number between 0 and 100.";
        resultsDiv.classList.add('error-msg');
        return; // Halt execution so calculations don't run
    }

    // Part D: Grade Calculation
    let grade = '';
    let description = '';
    let gradeClass = '';

    if (score >= 70 && score <= 100) {
        grade = 'A';
        description = 'Excellent';
        gradeClass = 'grade-A';
    } else if (score >= 60 && score <= 69) {
        grade = 'B';
        description = 'Very Good';
        gradeClass = 'grade-B';
    } else if (score >= 50 && score <= 59) {
        grade = 'C';
        description = 'Good';
        gradeClass = 'grade-C';
    } else if (score >= 40 && score <= 49) {
        grade = 'D';
        description = 'Pass';
        gradeClass = 'grade-D';
    } else {
        grade = 'F';
        description = 'Fail';
        gradeClass = 'grade-F';
    }

    // Part D: DOM Manipulation to display results
    resultsDiv.innerHTML = `
        <div>Score Entered: <strong>${score}</strong></div>
        <div>Calculated Grade: <strong>${grade} (${description})</strong></div>
    `;
    
    // Extension: Add dynamic feedback class
    resultsDiv.classList.add(gradeClass);

    // Part E: Reset Functionality
    scoreInput.value = '';
    scoreInput.focus(); // Places the typing cursor back into the input immediately
}

// Step 3: Attach Event Listeners
calcBtn.addEventListener('click', handleCalculation);

// Extension: Keyboard support (Trigger calculation on "Enter" key)
scoreInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCalculation();
    }
});