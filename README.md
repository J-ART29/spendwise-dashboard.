# SpendWise Financial Dashboard & Budget Foundation

SpendWise is a financial tracking application designed to help users budget, track spending across multiple categories, and calculate remaining net balances.

## JavaScript Concepts Implemented

### 1. Variables and Data Types
Variables store dynamic financial data throughout the program:
- `let` is used for values that update during execution (e.g., `monthlyIncome`, `totalExpenses`, `remainingBalance`).
- Primitive data types used include **Numbers** (for currency metrics) and **Strings** (for raw prompt values and console labeling).

### 2. User Input Collection
User data is retrieved dynamically via window `prompt()` dialogue boxes, allowing users to enter custom numerical figures for income and category expenditures.

### 3. Calculations
Mathematical expressions process budget information:
- **Summation:** Combines individual spending metrics (`food + transport + utilities`) into `totalExpenses`.
- **Subtraction:** Calculates financial health (`monthlyIncome - totalExpenses`) to determine the net `remainingBalance`.
- **Data Validation:** Checks using `parseFloat()` and `isNaN()` guarantee numeric precision before arithmetic processing.

### 4. Reusable Functions
Code logic is broken down into clean, single-responsibility functions:
- `parseInputValue()`: Validates and converts user input strings into valid numbers.
- `calculateTotalExpenses()`: Computes total category expenditures.
- `calculateRemainingBalance()`: Computes net balance remaining.
- `formatCurrency()`: Formats floating-point numbers into uniform currency strings (`$XX.XX`).
- `runSpendWiseTracker()`: Encapsulates the core workflow execution.

---

## How to Test
1. Open `index.html` in your web browser.
2. Enter values into the browser prompt popups when prompted.
3. Open your browser's Developer Tools (`F12` or `Right Click -> Inspect -> Console`).
4. View your categorized financial breakdown and balance log in the console outputs.