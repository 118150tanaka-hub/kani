const images = {
  illustrationSample1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fff3e7"/>
  <circle cx="220" cy="220" r="110" fill="#f7c87c"/>
  <circle cx="410" cy="160" r="80" fill="#f2a8cf"/>
  <path d="M180 350 C210 310 300 300 340 350" stroke="#bf7d62" stroke-width="18" fill="none" stroke-linecap="round"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#7d4f45" font-family="sans-serif">Illust 1</text>
</svg>`,
  illustrationSample2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#ffe7f1"/>
  <ellipse cx="260" cy="240" rx="120" ry="90" fill="#ffd58f"/>
  <path d="M480 180 C520 100 620 120 640 200" stroke="#bb7d90" stroke-width="16" fill="none" stroke-linecap="round"/>
  <circle cx="540" cy="360" r="66" fill="#aedc9c"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#8a534c" font-family="sans-serif">Illust 2</text>
</svg>`,
  illustrationSample3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fff7de"/>
  <path d="M170 180 C240 120 320 120 380 180" stroke="#f08ca3" stroke-width="20" fill="none" stroke-linecap="round"/>
  <path d="M210 340 C260 280 340 280 390 340" stroke="#d79f73" stroke-width="20" fill="none" stroke-linecap="round"/>
  <circle cx="520" cy="260" r="84" fill="#e3c1f0"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#7d4e4f" font-family="sans-serif">Illust 3</text>
</svg>`,
  cgModelingSample1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#f6f2e9"/>
  <path d="M170 320 C230 220 350 220 410 320" stroke="#d9a659" stroke-width="22" fill="none" stroke-linecap="round"/>
  <rect x="320" y="170" width="160" height="160" rx="28" fill="#c7d8a1"/>
  <circle cx="510" cy="310" r="60" fill="#f5c28a"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#6c4f3d" font-family="sans-serif">CG 1</text>
</svg>`,
  cgModelingSample2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#f3f2f3"/>
  <path d="M180 220 L280 180 L360 220 L460 180 L520 220" stroke="#a47f5d" stroke-width="20" fill="none" stroke-linecap="round"/>
  <rect x="180" y="290" width="160" height="140" rx="28" fill="#c5d4f2"/>
  <circle cx="560" cy="320" r="72" fill="#d8c084"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#684f40" font-family="sans-serif">CG 2</text>
</svg>`,
  cgModelingSample3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fff0e4"/>
  <path d="M210 200 C260 140 340 140 390 200" stroke="#ca8b4d" stroke-width="22" fill="none" stroke-linecap="round"/>
  <path d="M250 320 C310 260 360 260 420 320" stroke="#9ebf8d" stroke-width="20" fill="none" stroke-linecap="round"/>
  <circle cx="530" cy="240" r="70" fill="#f5b8d8"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#6b4a45" font-family="sans-serif">CG 3</text>
</svg>`,
  characterDesignSample1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fff2f8"/>
  <circle cx="260" cy="210" r="90" fill="#f4b3c8"/>
  <path d="M290 340 C340 260 430 260 470 340" stroke="#c17a4f" stroke-width="18" fill="none" stroke-linecap="round"/>
  <circle cx="530" cy="320" r="70" fill="#a7d9a0"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#7b4f51" font-family="sans-serif">Char 1</text>
</svg>`,
  characterDesignSample2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fff3dc"/>
  <path d="M190 210 C240 170 330 170 380 210" stroke="#e48d9a" stroke-width="20" fill="none" stroke-linecap="round"/>
  <circle cx="480" cy="220" r="75" fill="#d7e499"/>
  <path d="M250 330 C300 270 360 280 410 330" stroke="#b1735f" stroke-width="18" fill="none" stroke-linecap="round"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#5f3f40" font-family="sans-serif">Char 2</text>
</svg>`,
  characterDesignSample3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
  <rect width="800" height="520" rx="40" ry="40" fill="#fef4e8"/>
  <ellipse cx="280" cy="240" rx="90" ry="120" fill="#f3b2cc"/>
  <path d="M470 220 C520 150 620 150 660 210" stroke="#c88e6e" stroke-width="18" fill="none" stroke-linecap="round"/>
  <circle cx="460" cy="350" r="65" fill="#c9d8a3"/>
  <text x="50%" y="92%" font-size="42" text-anchor="middle" fill="#754745" font-family="sans-serif">Char 3</text>
</svg>`
};

export default images;