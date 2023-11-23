const passwordGenerator = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = passwordGenerator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log(password);
}

// Call the function to generate and log a random password
generateRandomPassword();
