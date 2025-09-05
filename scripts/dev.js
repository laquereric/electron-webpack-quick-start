#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const { checkEnvironment } = require('./check_env');

// Check environment compatibility before starting
async function startDev() {
  try {
    await checkEnvironment();
    
    // Use the webpack configuration with xxhash64 instead of NODE_OPTIONS
    const electronWebpackPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron-webpack');

    console.log('\n🚀 Starting electron-webpack development server...\n');

    // Spawn electron-webpack dev directly
    const child = spawn('node', [electronWebpackPath, 'dev'], {
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      process.exit(code);
    });

    child.on('error', (err) => {
      console.error('Failed to start electron-webpack:', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('❌ Failed to start development server:', error.message);
    process.exit(1);
  }
}

// Start the development server
startDev();
