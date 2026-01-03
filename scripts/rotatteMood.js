const fs = require('fs');
const moods = ["Happy Coding Beats", "Chill Vibes", "Focus Mode", "Debug Energy"];
const mood = moods[Math.floor(Math.random() * moods.length)];

let readme = fs.readFileSync('./README.md', 'utf8');
readme = readme.replace(/Currently vibing to: \*\*_.+?_?\*\*/, `Currently vibing to: **_${mood}_**`);
fs.writeFileSync('./README.md', readme);

console.log('Mood updated:', mood);
