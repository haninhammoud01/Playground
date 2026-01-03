const fs = require('fs');
const readmePath = './README.md';
let readme = fs.readFileSync(readmePath, 'utf8');

// Random commit streak (placeholder) — bisa pakai GitHub API untuk real data
const streak = Math.floor(Math.random() * 30) + 1;
readme = readme.replace(/!\[Commit Streak\]\(.+?\)/,
  `![Commit Streak](https://img.shields.io/badge/Commit-Streak-${streak}-brightgreen?style=for-the-badge)`);

// Update project badges status (contoh WIP → Alive)
readme = readme.replace(/!\[Project Alive\]\(.+?\)/,
  `![Project Alive](https://img.shields.io/badge/Project-Alive-brightgreen?style=for-the-badge)`);

fs.writeFileSync(readmePath, readme);
console.log('README badges updated!');
