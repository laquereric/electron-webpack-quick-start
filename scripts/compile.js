#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Create a custom environment that sets NODE_OPTIONS for webpack
const env = {
  ...process.env,
  NODE_OPTIONS: '--openssl-legacy-provider'
};

// Spawn electron-webpack
const electronWebpackPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron-webpack');
const child = spawn('node', [electronWebpackPath], {
  stdio: 'inherit',
  env: env
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to start electron-webpack:', err);
  process.exit(1);
});
