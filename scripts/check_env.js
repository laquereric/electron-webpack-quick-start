#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Check Node.js version compatibility
function checkNodeVersion() {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  console.log(`Checking Node.js version: ${nodeVersion}`);
  
  // This project requires Node.js v18 for compatibility with webpack 4 and electron-webpack
  if (majorVersion < 18) {
    console.error('❌ Error: Node.js v18 or higher is required.');
    console.error(`   Current version: ${nodeVersion}`);
    console.error('   Please upgrade Node.js or use nvm to switch to Node.js v18:');
    console.error('   nvm install 18 && nvm use 18');
    return false;
  }
  
  if (majorVersion >= 20) {
    console.warn('⚠️  Warning: Node.js v20+ may have compatibility issues with webpack 4.');
    console.warn(`   Current version: ${nodeVersion}`);
    console.warn('   Consider using Node.js v18 for best compatibility:');
    console.warn('   nvm install 18 && nvm use 18');
  }
  
  console.log('✅ Node.js version is compatible');
  return true;
}

// Check if yarn is available
function checkYarn() {
  return new Promise((resolve) => {
    const child = spawn('yarn', ['--version'], {
      stdio: 'pipe'
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Yarn is available');
        resolve(true);
      } else {
        console.error('❌ Error: Yarn is not available.');
        console.error('   Please install yarn: npm install -g yarn');
        resolve(false);
      }
    });
    
    child.on('error', () => {
      console.error('❌ Error: Yarn is not available.');
      console.error('   Please install yarn: npm install -g yarn');
      resolve(false);
    });
  });
}

// Main check function
async function checkEnvironment() {
  console.log('🔍 Checking development environment...\n');
  
  const nodeOk = checkNodeVersion();
  if (!nodeOk) {
    process.exit(1);
  }
  
  const yarnOk = await checkYarn();
  if (!yarnOk) {
    process.exit(1);
  }
  
  console.log('\n✅ Environment check passed! Ready to start development.');
  return true;
}

// Run the check if this script is executed directly
if (require.main === module) {
  checkEnvironment().catch((error) => {
    console.error('❌ Environment check failed:', error.message);
    process.exit(1);
  });
}

module.exports = { checkEnvironment, checkNodeVersion, checkYarn };
