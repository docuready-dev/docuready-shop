import fs from 'fs';

fs.writeFileSync('dist/.nojekyll', '');
fs.copyFileSync('dist/index.html', 'dist/404.html');
console.log('✓ Prepared dist/.nojekyll and dist/404.html');
