// ====================================================================
// SpendWise - JavaScript Foundation
// ====================================================================

// 1. Store Initial Application Data (Variables & Data Types)
let monthlyIncome = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Default Category Spending Data
let categoryFood = 0;
let categoryTransport = 0;
let categoryUtilities = 0;

// 2. Reusable Functions

/**
 * Converts input strings into valid numbers, defaulting to 0 if invalid or empty.
 * @param {string} input - Raw user input from prompt
 * @returns {number} Parsed numerical value
 */
function parseInputValue(input) {
  const parsed = parseFloat(input);
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

/**
 * Calculates total expenses from category totals.
 * @param {number} food 
 * @param {number} transport 
 * @param {number} utilities 
 * @returns {number} Sum of all expenses
 */
function calculateTotalExpenses(food, transport, utilities) {
  return food + transport + utilities;
}

/**
 * Calculates remaining balance after subtracting expenses from income.
 * @param {number} income 
 * @param {number} expenses 
 * @returns {number} Net balance
 */
function calculateRemainingBalance(income, expenses) {
  return income - expenses;
}

/**
 * Formats numbers into clean currency strings ($XX.XX).
 * @param {number} value 
 * @returns {string} Formatted currency text
 */
function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

/**
 * Main application runner function to handle prompts, calculations, and logging.
 */
function runSpendWiseTracker() {
  console.log("=== SpendWise Budget Calculator Initialized ===");

  // 3. Collect User Input
  const rawIncome = prompt("Enter your total monthly income ($):", "3000");
  const rawFood = prompt("Enter monthly spending for Food & Dining ($):", "450");
  const rawTransport = prompt("Enter monthly spending for Transport ($):", "120.50");
  const rawUtilities = prompt("Enter monthly spending for Utilities ($):", "210.30");

  // Parse raw inputs into numerical data
  monthlyIncome = parseInputValue(rawIncome);
  categoryFood = parseInputValue(rawFood);
  categoryTransport = parseInputValue(rawTransport);
  categoryUtilities = parseInputValue(rawUtilities);

  // 4. Perform Budget Calculations via Functions
  totalExpenses = calculateTotalExpenses(categoryFood, categoryTransport, categoryUtilities);
  remainingBalance = calculateRemainingBalance(monthlyIncome, totalExpenses);

  // 5. Display Labeled Results in Browser Console
  console.log("\n--- Financial Summary ---");
  console.log(`Monthly Income:        ${formatCurrency(monthlyIncome)}`);
  console.log(`Food Spending:         ${formatCurrency(categoryFood)}`);
  console.log(`Transport Spending:    ${formatCurrency(categoryTransport)}`);
  console.log(`Utilities Spending:    ${formatCurrency(categoryUtilities)}`);
  console.log("----------------------------");
  console.log(`Total Expenses:        ${formatCurrency(totalExpenses)}`);
  console.log(`Remaining Balance:     ${formatCurrency(remainingBalance)}`);

  // Simple Budget Advisory Logic
  if (remainingBalance < 0) {
    console.warn(" Warning: You are over budget! Consider reducing expenses.");
  } else {
    console.log(" Budget Status: You are within your budget limits.");
  }
}

// Automatically start the tracker when script loads
runSpendWiseTracker();
