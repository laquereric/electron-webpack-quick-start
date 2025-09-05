module.exports = {
  // Override webpack configuration to use a compatible hash function
  webpack: {
    output: {
      hashFunction: 'xxhash64'
    }
  }
};
