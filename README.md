# 📊 PERT Task Estimator

This is a simple browser-based tool to help you estimate task durations using **Three-Point Estimation (PERT)**. 

## 🚀 Features

- Add subtasks with:
  - **Optimistic time (O)**
  - **Most likely time (M)**
  - **Pessimistic time (P)**
- Calculates task estimate using the PERT formula:
  
  \[
  \text{Estimate} = \frac{O + 4M + P}{6}
  \]

- Sums up total project time
- Allows you to apply a custom buffer percentage (e.g. 20%)

## 🖥️ How to Use

1. Open `index.html` in your browser.
2. Enter each subtask and its O/M/P time estimates.
3. Click "Add Subtask" to calculate.
4. Adjust the buffer if needed.
5. View total and final estimated project time.

## 📄 License

AGPL-3.0
