const fs = require('fs');
const { getTotalSize } = require('./fileSystemTraversal');

// Load the example directory structure from a JSON file
const exampleDirectory = JSON.parse(fs.readFileSync('example.json', 'utf8'));

// Calculate the total size of all files in the directory and its subdirectories
const totalSize = getTotalSize(exampleDirectory);

// Output the result to the console
console.log(`Total size of all files: ${totalSize} bytes`);

// Export the getTotalSize function for use in other modules or for testing
module.exports = { getTotalSize };
