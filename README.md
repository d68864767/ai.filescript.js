# File System Traversal

## Description

This project implements a function `getTotalSize(directory)` that calculates the total size of all files contained within a given directory and its subdirectories in a file system. The file system is represented as a tree where each node is either a file or a directory, modeled by JavaScript objects.

## Installation

To run this project, make sure you have Node.js installed on your system. Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

## Usage

To use the `getTotalSize` function, import it into your Node.js script and pass a directory object to it:

```javascript
const { getTotalSize } = require('./fileSystemTraversal');

let directory = {
  // ... (directory structure)
};

console.log(getTotalSize(directory));
```

The function will return the total size of all files within the directory and its subdirectories.

## Input Format

The input is a JavaScript object representing the root directory. The directory object has a `name` and `contents` attribute, where `contents` is an array of files and/or directories within that directory. Files have a `name` attribute and a `size` attribute representing the file size in bytes.

## Output Format

The output is a single integer representing the total size of all files in the directory and its subdirectories.

## Example

```javascript
let directory = {
  name: 'root',
  contents: [
    {
      name: 'dir1',
      contents: [
        { name: 'file1.txt', size: 200 },
        { name: 'file2.txt', size: 500 }
      ],
    },
    {
      name: 'dir2',
      contents: [
        { name: 'file3.txt', size: 300 },
        { name: 'file4.txt', size: 400 }
      ],
    },
    { name: 'file5.txt', size: 1000 }
  ],
};

console.log(getTotalSize(directory));  // Output: 2400
```

## Constraints

- All file and directory names are unique and consist of alphanumeric characters.
- The size of each file is a positive integer and will not exceed 10^9.
- The depth of the directory tree will not exceed 100.
- The total number of files and directories in the tree will not exceed 10^5.

## Testing

To run the tests for the `getTotalSize` function, execute the following command:

```bash
npm test
```

## Files

- `package.json`: Contains npm configuration and project dependencies.
- `README.md`: This file, which provides an overview of the project.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `index.js`: Entry point of the application.
- `fileSystemTraversal.js`: Contains the implementation of the `getTotalSize` function.
- `utils.js`: Contains utility functions that may be used across the project.
- `example.json`: An example file system structure in JSON format.
- `test.js`: Contains tests for the `getTotalSize` function.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
