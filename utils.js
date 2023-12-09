// utils.js

/**
 * Utility functions to support file system traversal operations.
 */

/**
 * Checks if the provided object is a directory.
 * @param {Object} node - The object to check.
 * @returns {boolean} True if the object is a directory, false otherwise.
 */
function isDirectory(node) {
  return node.hasOwnProperty('contents');
}

/**
 * Checks if the provided object is a file.
 * @param {Object} node - The object to check.
 * @returns {boolean} True if the object is a file, false otherwise.
 */
function isFile(node) {
  return node.hasOwnProperty('size');
}

// Export utility functions to be used in other modules
module.exports = {
  isDirectory,
  isFile
};
