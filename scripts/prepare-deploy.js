import fs from 'fs';

fs.writeFileSync('dist/.nojekyll', '');
fs.copyFileSync('public/404.html', 'dist/404.html');
console.log('✓ Prepared dist/.nojekyll and dist/404.html (SPA redirect)');
