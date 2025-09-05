#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Use the webpack configuration with xxhash64 instead of NODE_OPTIONS
const electronWebpackPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron-webpack');

// Spawn electron-webpack
const child = spawn('node', [electronWebpackPath], {
  stdio: 'inherit'
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to start electron-webpack:', err);
  process.exit(1);
});
