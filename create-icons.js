// Simple script to create placeholder icons for PWA
// This creates basic colored squares as placeholder icons

const fs = require('fs');
const path = require('path');

// SVG template for icons
const createIconSVG = (size, color = '#2563eb') => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${color}" rx="20"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="system-ui" font-size="${size/6}" font-weight="bold">AF</text>
</svg>
`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create 192x192 icon
fs.writeFileSync(
  path.join(publicDir, 'icon-192.svg'),
  createIconSVG(192)
);

// Create 512x512 icon
fs.writeFileSync(
  path.join(publicDir, 'icon-512.svg'),
  createIconSVG(512)
);

console.log('Icon placeholders created successfully!');
console.log('For production, convert SVGs to PNG or use proper icon design.');