// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  return width * height
}
console.log(calculateArea(4, 5));
// TODO: Calculate and return the area of a rectangle


const isEven = (number) => {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
  // TODO: Return true if the 
  // number is even, false if odd
};
console.log(isEven(4));

const convertToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
};
console.log(100)

// String & Variable Functions
const createGreeting = (name) => {
  return `Hello, ${name}!`// TODO: Return a greeting string like "Hello, [name]!"
};
console.log(createGreeting("Alice"))

const getInitials = (firstName, lastName) => {
  return `${firstName[0]}${lastName[0]}`// TODO: Return initials by taking first letter of each name
};
console.log(getInitials("Jandir", "Gregorio"))

const formatPrice = (price) => {
  return `$${price}.00` // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
};
console.log(formatPrice(6));

// Function Logic Functions
const getLarger = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
  // TODO: Return the larger of the two numbers
};
console.log(getLarger(8, 3));

const isValidAge = (age) => {
  if (age >= 0 && age <= 120) {
    return true
  } else {
    return false
  }
  // TODO: Return true if age is between 0 and 120, false otherwise
};
console.log(isValidAge(55));

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
