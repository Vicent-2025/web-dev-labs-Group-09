# Week 05 – DOM Manipulation Practical Assignment

# Student Grade Calculator Web Application

# Group 09


# Project Overview

This project was developed as part of the Week 05 practical activity on Document Object Model (DOM) Manipulation using HTML, CSS, and JavaScript.

The application enables lecturers and students to calculate academic grades instantly based on marks entered by the user. The system performs real-time input validation, grade computation, and dynamic webpage updates without requiring page reloads.

The project demonstrates the practical use of:

* HTML for page structure
* CSS for styling and layout
* JavaScript for event handling
* DOM Manipulation for dynamic content updates
* Input validation techniques
* Conditional statements (if-else)


# Objective

To develop a dynamic Student Grade Calculator Web Application that:

1. Captures user input.
2. Validates entered data.
3. Calculates grades automatically.
4. Updates results dynamically using DOM manipulation.
5. Provides immediate feedback without refreshing the page.


# Features Implemented

# User Interface

* Page title: Student Grade Calculator
* Score input field
* Calculate Grade button
* Results display section
* Responsive and user-friendly layout

# Input Validation

The system validates that:

* Input is not empty
* Input is numeric
* Score is between 0 and 100

Invalid entries generate an error message and prevent grade calculation.

# Grade Calculation

Grades are assigned according to the following criteria:

| Score Range | Grade |
| ----------- | ----- |
| 70 – 100    | A     |
| 60 – 69     | B     |
| 50 – 59     | C     |
| 40 – 49     | D     |
| Below 40    | F     |

# Dynamic DOM Manipulation

The application updates the webpage instantly by:

* Displaying entered score
* Displaying calculated grade
* Displaying performance remark
* Showing validation messages

No page reload is required.

# Reset Functionality

After processing:

* Input field is cleared automatically
* Cursor focus returns to input field
* User can immediately enter another score

# Additional Enhancements

* Grade-specific result colors
* Keyboard support (Enter key)
* Performance descriptions


# Technologies Used

| Technology       | Purpose                    |
| ---------------- | -------------------------- |
| HTML5            | Structure                  |
| CSS3             | Styling                    |
| JavaScript (ES6) | Logic and DOM Manipulation |


# Project Structure

```text
Week05-StudentGradeCalculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

# Functional Workflow

# Step 1

User enters a score.

# Step 2

User clicks the **Calculate Grade** button.

# Step 3

JavaScript captures the input value.

# Step 4

The system validates the input.

# Step 5

The grade is computed using if-else statements.

# Step 6

Results are displayed dynamically inside the webpage.

# Step 7

Input field is reset and ready for another entry.


# Sample Output

# Example 1

Input:

```text
85
```

Output:

```text
Entered Score: 85
Grade: A
Remark: Excellent
```

# Example 2

Input:

```text
45
```

Output:

```text
Entered Score: 45
Grade: D
Remark: Pass
```

# Example 3

Input:

```text
120
```

Output:

```text
Error: Please enter a valid score between 0 and 100.
```

# Learning Outcomes

Upon completing this activity, Group 09 gained practical experience in:

* DOM Selection Methods
* Event Listeners
* Form Input Handling
* Conditional Logic
* Dynamic Content Rendering
* User Input Validation
* Front-End Web Development Best Practices


# Expected Functional Behaviour Verification

| Requirement                | Status    |
| -------------------------- | --------- |
| Capture user input         | Completed |
| Validate score             | Completed |
| Calculate grade            | Completed |
| Display result dynamically | Completed |
| Prevent invalid entries    | Completed |
| Clear input field          | Completed |
| No page reload             | Completed |
| Enter key support          | Completed |


# Conclusion

The Student Grade Calculator successfully fulfills all Week 05 DOM Manipulation practical requirements. The application demonstrates effective use of JavaScript DOM methods, event-driven programming, and dynamic user interaction. The project provides a simple but practical solution for grade computation while reinforcing core web development concepts.


Group Information

1. VICENT DAUDI CHACHA 34216/T.2024
2. LUMWA MATHEW RAYMOND 33393/T.2024
3. DAVID ELIZEUS ANATORY 31726/T.2023
4. SOLOMON FRANK MWANGA 32633/T.2024
5. JUSTUS LUCAS NGIMBWA 33469/T.2024
