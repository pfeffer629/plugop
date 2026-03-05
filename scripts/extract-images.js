import { readFileSync } from 'fs';

const html = readFileSync('/vercel/share/v0-project/index.html', 'utf-8');

// Find all framerusercontent image URLs
const imageRegex = /https:\/\/framerusercontent\.com\/images\/[^\s"'&);]+/g;
const matches = [...new Set(html.match(imageRegex) || [])];

// Clean up URLs
const cleaned = matches.map(u => u.replace(/;$/, '')).filter(Boolean);
const unique = [...new Set(cleaned)];

console.log("Found image URLs:");
unique.forEach(u => console.log(u));
console.log(`\nTotal: ${unique.length} unique images`);

// Also find asset URLs  
const assetRegex = /https:\/\/framerusercontent\.com\/assets\/[^\s"')+]+/g;
const assetMatches = [...new Set(html.match(assetRegex) || [])];
const imageAssets = assetMatches.filter(u => u.match(/\.(png|jpg|jpeg|svg|webp)$/i));
console.log("\nImage asset URLs:");
imageAssets.forEach(u => console.log(u));
