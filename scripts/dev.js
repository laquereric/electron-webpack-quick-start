#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Use cross-env to set NODE_OPTIONS for webpack but not for Electron
const crossEnvPath = path.join(__dirname, '..', 'node_modules', '.bin', 'cross-env');
const electronWebpackPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron-webpack');

// Spawn cross-env with electron-webpack dev
const child = spawn('node', [
  crossEnvPath,
  'NODE_OPTIONS=--openssl-legacy-provider',
  electronWebpackPath,
  'dev'
], {
  stdio: 'inherit'
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error('Failed to start electron-webpack:', err);
  process.exit(1);
});
