const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceEnv = path.join(process.cwd(), '.env.local');
const destEnv = path.join(process.cwd(), '.next', '.env.local');
const destStandalone = path.join(process.cwd(), '.next/standalone', '.env.local');

// Check if .env.local exists
if (fs.existsSync(sourceEnv)) {
  try {
    // Copy to .next folder
    fs.copyFileSync(sourceEnv, destEnv);
    console.log('✅ .env.local copied to .next folder');
    
    // Also copy to standalone folder if it exists (for standalone builds)
    if (fs.existsSync(path.join(process.cwd(), '.next/standalone'))) {
      fs.copyFileSync(sourceEnv, destStandalone);
      console.log('✅ .env.local copied to .next/standalone folder');
    }
  } catch (error) {
    console.error('❌ Error copying .env.local:', error.message);
    process.exit(1);
  }
} else {
  console.warn('⚠️  .env.local file not found. Skipping copy.');
}
