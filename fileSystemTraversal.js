// fileSystemTraversal.js

/**
 * Recursively calculates the total size of all files within a directory and its subdirectories.
 * @param {Object} directory - The directory object.
 * @returns {number} The total size of all files in bytes.
 */
function getTotalSize(directory) {
  // Initialize total size to 0
  let totalSize = 0;

  // Check if the current node is a file
  if (directory.hasOwnProperty('size')) {
    // If it's a file, add its size to the total
    totalSize += directory.size;
  } else if (directory.hasOwnProperty('contents')) {
    // If it's a directory, iterate over its contents
    for (const item of directory.contents) {
      // Recursively calculate the size of each item (file or directory)
      totalSize += getTotalSize(item);
    }
  }

  // Return the total size of files
  return totalSize;
}

// Export the getTotalSize function to be used in other modules
module.exports = { getTotalSize };
