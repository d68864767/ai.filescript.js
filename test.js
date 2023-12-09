const assert = require('assert');
const { getTotalSize } = require('./fileSystemTraversal');

// Test cases for the getTotalSize function
describe('File System Traversal Tests', () => {
  it('should return the total size of all files in a single directory', () => {
    const singleDir = {
      name: 'singleDir',
      contents: [
        { name: 'file1.txt', size: 100 },
        { name: 'file2.txt', size: 200 },
      ],
    };
    assert.strictEqual(getTotalSize(singleDir), 300);
  });

  it('should return the total size of all files in nested directories', () => {
    const nestedDir = {
      name: 'nestedDir',
      contents: [
        {
          name: 'dir1',
          contents: [
            { name: 'file1.txt', size: 100 },
            { name: 'file2.txt', size: 200 },
          ],
        },
        {
          name: 'dir2',
          contents: [
            { name: 'file3.txt', size: 300 },
            {
              name: 'subdir1',
              contents: [
                { name: 'file4.txt', size: 400 },
              ],
            },
          ],
        },
      ],
    };
    assert.strictEqual(getTotalSize(nestedDir), 1000);
  });

  it('should handle an empty directory', () => {
    const emptyDir = {
      name: 'emptyDir',
      contents: [],
    };
    assert.strictEqual(getTotalSize(emptyDir), 0);
  });

  it('should handle directories with a mix of files and directories', () => {
    const mixedDir = {
      name: 'mixedDir',
      contents: [
        { name: 'file1.txt', size: 150 },
        {
          name: 'dir1',
          contents: [
            { name: 'file2.txt', size: 250 },
            { name: 'file3.txt', size: 350 },
          ],
        },
        { name: 'file4.txt', size: 450 },
      ],
    };
    assert.strictEqual(getTotalSize(mixedDir), 1200);
  });

  it('should handle complex directory structures', () => {
    const complexDir = {
      name: 'complexDir',
      contents: [
        {
          name: 'dir1',
          contents: [
            { name: 'file1.txt', size: 100 },
            {
              name: 'subdir1',
              contents: [
                { name: 'file2.txt', size: 200 },
                { name: 'file3.txt', size: 300 },
              ],
            },
          ],
        },
        {
          name: 'dir2',
          contents: [
            {
              name: 'subdir2',
              contents: [
                { name: 'file4.txt', size: 400 },
                {
                  name: 'subsubdir1',
                  contents: [
                    { name: 'file5.txt', size: 500 },
                  ],
                },
              ],
            },
            { name: 'file6.txt', size: 600 },
          ],
        },
        { name: 'file7.txt', size: 700 },
      ],
    };
    assert.strictEqual(getTotalSize(complexDir), 2800);
  });
});

// Run the tests
describe('Run File System Traversal Tests', () => {
  it('Running all test cases', () => {
    run();
  });
});

function run() {
  describe('File System Traversal Tests', () => {
    it('should pass all test cases', () => {
      // The tests will automatically run and assert will throw an error if any test fails.
    });
  });
}
