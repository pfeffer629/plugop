import { readFileSync } from 'fs';

const html = readFileSync('/vercel/share/v0-project/index.html', 'utf-8');

// Find all framerusercontent image URLs
const imageRegex = /https:\/\/framerusercontent\.com\/images\/[^\s"'&)]+/g;
const matches = [...new Set(html.match(imageRegex) || [])];

// Clean up URLs (remove trailing HTML attributes)
const cleaned = matches.map(u => u.replace(/\?.*/, '').replace(/;$/, '')).filter(Boolean);
const unique = [...new Set(cleaned)];

console.log("Found image URLs:");
unique.forEach(u => console.log(u));
console.log(`\nTotal: ${unique.length} unique images`);

// Also find the OG image
const ogRegex = /https:\/\/framerusercontent\.com\/assets\/[^\s"']+\.(png|jpg|svg)/g;
const ogMatches = [...new Set(html.match(ogRegex) || [])];
console.log("\nAsset URLs:");
ogMatches.forEach(u => console.log(u));
