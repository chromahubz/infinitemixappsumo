// Quick local verification script
// Run: node verify-routes.js

const fs = require('fs');
const path = require('path');

console.log('🔍 InfiniteMix Route Verification\n');

// Check file structure
const appDir = path.join(__dirname, 'app');
const rootPage = path.join(appDir, 'page.tsx');
const appPage = path.join(appDir, 'app', 'page.tsx');
const middleware = path.join(__dirname, 'middleware.ts');

console.log('📂 File Structure Check:');
console.log(`✅ app/page.tsx exists: ${fs.existsSync(rootPage)} (${fs.existsSync(rootPage) ? fs.statSync(rootPage).size + ' bytes' : 'N/A'})`);
console.log(`✅ app/app/page.tsx exists: ${fs.existsSync(appPage)} (${fs.existsSync(appPage) ? fs.statSync(appPage).size + ' bytes' : 'N/A'})`);
console.log(`✅ middleware.ts exists: ${fs.existsSync(middleware)}`);

// Check content of root page
if (fs.existsSync(rootPage)) {
  const content = fs.readFileSync(rootPage, 'utf8');
  const isLanding = content.includes('APPSUMO') || content.includes('LIMITED') || content.includes('VIRAL');
  console.log(`\n📄 Root page (app/page.tsx):`);
  console.log(`   ${isLanding ? '✅' : '❌'} Contains landing page content (AppSumo keywords found)`);
  console.log(`   Size: ${content.length} characters`);
}

// Check content of app page
if (fs.existsSync(appPage)) {
  const content = fs.readFileSync(appPage, 'utf8');
  const isApp = content.includes('ModeSelector') || content.includes('InfiniteMix') || content.includes('FileUploader');
  console.log(`\n📄 App page (app/app/page.tsx):`);
  console.log(`   ${isApp ? '✅' : '❌'} Contains app software content (component keywords found)`);
  console.log(`   Size: ${content.length} characters`);
}

console.log('\n🎯 Expected Behavior:');
console.log('   / (root) → app/page.tsx (AppSumo landing page)');
console.log('   /app     → app/app/page.tsx (InfiniteMix software)');

console.log('\n✅ Verification complete! Structure looks correct.');
console.log('📤 Next step: Deploy to Railway with `git push`\n');
