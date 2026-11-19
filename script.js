// --- Built-in Royalty-Free Artwork Presets in Different Aspect Ratios ---
const PRESETS = [
    {
        name: "16:9 Cyberpunk City",
        ratioLabel: "16:9 Widescreen",
        width: 960,
        height: 540,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540">
            <defs>
                <linearGradient id="cyberSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#05051a"/>
                    <stop offset="50%" stop-color="#2a0845"/>
                    <stop offset="85%" stop-color="#ff007f"/>
                    <stop offset="100%" stop-color="#ffe600"/>
                </linearGradient>
                <linearGradient id="neonSun" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffe600"/>
                    <stop offset="100%" stop-color="#ff007f"/>
                </linearGradient>
            </defs>
            <rect width="960" height="540" fill="url(#cyberSky)"/>
            <!-- Retro Sun with horizontal stripes -->
            <mask id="sunMask">
                <rect width="960" height="540" fill="#fff"/>
                <line x1="280" y1="230" x2="680" y2="230" stroke="#000" stroke-width="5"/>
                <line x1="280" y1="250" x2="680" y2="250" stroke="#000" stroke-width="8"/>
                <line x1="280" y1="275" x2="680" y2="275" stroke="#000" stroke-width="12"/>
                <line x1="280" y1="305" x2="680" y2="305" stroke="#000" stroke-width="16"/>
            </mask>
            <circle cx="480" cy="250" r="130" fill="url(#neonSun)" mask="url(#sunMask)"/>
            <!-- Skyscrapers -->
            <rect x="50" y="260" width="90" height="150" fill="#080718"/>
            <rect x="120" y="200" width="110" height="210" fill="#120c2b"/>
            <rect x="250" y="170" width="100" height="240" fill="#0b081c"/>
            <rect x="380" y="150" width="140" height="260" fill="#190e38"/>
            <rect x="550" y="190" width="100" height="220" fill="#0b081c"/>
            <rect x="670" y="230" width="120" height="180" fill="#140b2e"/>
            <rect x="800" y="270" width="100" height="140" fill="#080718"/>
            <!-- Windows Glow -->
            <g fill="#00f3ff" opacity="0.8">
                <rect x="140" y="220" width="6" height="10"/>
                <rect x="170" y="250" width="6" height="10"/>
                <rect x="280" y="190" width="8" height="12"/>
                <rect x="410" y="180" width="10" height="14"/>
                <rect x="460" y="220" width="10" height="14"/>
                <rect x="580" y="210" width="8" height="12"/>
                <rect x="710" y="250" width="6" height="10"/>
            </g>
            <g fill="#ff007f" opacity="0.8">
                <rect x="180" y="280" width="6" height="10"/>
                <rect x="300" y="240" width="8" height="12"/>
                <rect x="430" y="240" width="10" height="14"/>
                <rect x="600" y="260" width="8" height="12"/>
            </g>
            <!-- 3D Grid Floor -->
            <rect y="400" width="960" height="140" fill="#05051a"/>
            <g stroke="#00f3ff" stroke-width="1.8" opacity="0.7">
                <line x1="480" y1="400" x2="-200" y2="540"/>
                <line x1="480" y1="400" x2="60" y2="540"/>
                <line x1="480" y1="400" x2="270" y2="540"/>
                <line x1="480" y1="400" x2="480" y2="540"/>
                <line x1="480" y1="400" x2="690" y2="540"/>
                <line x1="480" y1="400" x2="900" y2="540"/>
                <line x1="480" y1="400" x2="1160" y2="540"/>
                <!-- Horizontal grid lines -->
                <line x1="0" y1="412" x2="960" y2="412" stroke-width="1"/>
                <line x1="0" y1="430" x2="960" y2="430" stroke-width="1.5"/>
                <line x1="0" y1="458" x2="960" y2="458" stroke-width="2"/>
                <line x1="0" y1="495" x2="960" y2="495" stroke-width="2.5"/>
            </g>
        </svg>`
    },
    {
        name: "9:16 Galaxy Rocket",
        ratioLabel: "9:16 Portrait",
        width: 540,
        height: 960,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" width="540" height="960">
            <defs>
                <linearGradient id="deepSpace" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="35%" stop-color="#1e1b4b"/>
                    <stop offset="70%" stop-color="#431407"/>
                    <stop offset="100%" stop-color="#7c2d12"/>
                </linearGradient>
                <radialGradient id="nebulaGlow" cx="50%" cy="30%" r="50%">
                    <stop offset="0%" stop-color="#9333ea" stop-opacity="0.8"/>
                    <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="30%" stop-color="#facc15"/>
                    <stop offset="70%" stop-color="#f97316"/>
                    <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <rect width="540" height="960" fill="url(#deepSpace)"/>
            <circle cx="270" cy="280" r="260" fill="url(#nebulaGlow)"/>
            <!-- Distant Moon -->
            <circle cx="120" cy="180" r="45" fill="#f8fafc"/>
            <circle cx="130" cy="175" r="42" fill="#0f172a" opacity="0.45"/>
            <!-- Stars -->
            <g fill="#ffffff">
                <circle cx="80" cy="90" r="1.5"/><circle cx="210" cy="60" r="2.5"/><circle cx="340" cy="110" r="1"/>
                <circle cx="450" cy="70" r="2"/><circle cx="160" cy="280" r="1.5"/><circle cx="420" cy="240" r="2"/>
                <circle cx="90" cy="420" r="2"/><circle cx="470" cy="390" r="1.5"/><circle cx="140" cy="600" r="2.5"/>
                <circle cx="410" cy="620" r="2"/><circle cx="80" cy="750" r="1.5"/><circle cx="460" cy="770" r="2.5"/>
            </g>
            <!-- Rocket Exhaust Flame -->
            <polygon points="270,720 230,580 310,580" fill="url(#flameGrad)"/>
            <polygon points="270,820 245,580 295,580" fill="url(#flameGrad)" opacity="0.8"/>
            <!-- Rocket Body -->
            <path d="M270,330 C230,410 220,530 220,580 L320,580 C320,530 310,410 270,330 Z" fill="#f1f5f9"/>
            <!-- Rocket Fin Left -->
            <polygon points="220,530 160,590 220,580" fill="#dc2626"/>
            <!-- Rocket Fin Right -->
            <polygon points="320,530 380,590 320,580" fill="#dc2626"/>
            <!-- Rocket Tip -->
            <path d="M270,330 C250,370 240,410 240,430 L300,430 C300,410 290,370 270,330 Z" fill="#dc2626"/>
            <!-- Porthole Window -->
            <circle cx="270" cy="480" r="25" fill="#0284c7" stroke="#94a3b8" stroke-width="6"/>
            <circle cx="278" cy="472" r="8" fill="#bae6fd"/>
        </svg>`
    },
    {
        name: "4:3 Sunset Mountain",
        ratioLabel: "4:3 Landscape",
        width: 800,
        height: 600,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
            <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0f172a"/>
                    <stop offset="35%" stop-color="#b91c1c"/>
                    <stop offset="65%" stop-color="#f97316"/>
                    <stop offset="100%" stop-color="#fde047"/>
                </linearGradient>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="40%" stop-color="#fef08a" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3b0764"/>
                    <stop offset="100%" stop-color="#1e1b4b"/>
                </linearGradient>
                <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1e1b4b"/>
                    <stop offset="100%" stop-color="#09090b"/>
                </linearGradient>
                <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f97316" stop-opacity="0.8"/>
                    <stop offset="25%" stop-color="#b91c1c" stop-opacity="0.7"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#sky)"/>
            <circle cx="400" cy="350" r="110" fill="url(#sunGlow)"/>
            <circle cx="400" cy="350" r="70" fill="#ffffff"/>
            <!-- Mountains -->
            <polygon points="-50,460 180,240 420,460" fill="url(#m1)"/>
            <polygon points="250,460 520,200 750,460" fill="url(#m1)"/>
            <polygon points="550,460 680,280 850,460" fill="url(#m1)"/>
            <polygon points="80,460 310,270 580,460" fill="url(#m2)"/>
            <polygon points="-80,460 120,310 340,460" fill="url(#m2)"/>
            <polygon points="450,460 640,300 890,460" fill="url(#m2)"/>
            <!-- Lake -->
            <rect y="440" width="800" height="160" fill="url(#water)"/>
            <ellipse cx="400" cy="490" rx="140" ry="20" fill="#fef08a" opacity="0.4"/>
            <ellipse cx="400" cy="530" rx="80" ry="10" fill="#fef08a" opacity="0.3"/>
            <!-- Pines -->
            <path d="M60,460 L80,410 L100,460 Z" fill="#020617"/>
            <path d="M120,465 L145,405 L170,465 Z" fill="#020617"/>
            <path d="M680,460 L705,405 L730,460 Z" fill="#020617"/>
            <path d="M720,470 L740,415 L760,470 Z" fill="#020617"/>
        </svg>`
    },
    {
        name: "1:1 Geometric Tiger",
        ratioLabel: "1:1 Square",
        width: 800,
        height: 800,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
            <defs>
                <linearGradient id="polyBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#0f172a"/>
                    <stop offset="100%" stop-color="#1e1b4b"/>
                </linearGradient>
            </defs>
            <rect width="800" height="800" fill="url(#polyBg)"/>
            <polygon points="400,160 300,240 400,280" fill="#ea580c"/>
            <polygon points="400,160 500,240 400,280" fill="#f97316"/>
            <polygon points="300,240 220,210 260,320" fill="#c2410c"/>
            <polygon points="500,240 580,210 540,320" fill="#fb923c"/>
            <polygon points="260,320 300,240 370,320" fill="#fdba74"/>
            <polygon points="540,320 500,240 430,320" fill="#fed7aa"/>
            <polygon points="400,280 370,320 430,320" fill="#ffedd5"/>
            <!-- Eyes -->
            <polygon points="330,340 370,320 380,360" fill="#0284c7"/>
            <polygon points="470,340 430,320 420,360" fill="#38bdf8"/>
            <polygon points="345,340 370,330 365,350" fill="#38bdf8"/>
            <polygon points="455,340 430,330 435,350" fill="#7dd3fc"/>
            <!-- Snout -->
            <polygon points="400,280 380,360 400,420" fill="#f97316"/>
            <polygon points="400,280 420,360 400,420" fill="#ea580c"/>
            <polygon points="380,360 330,420 400,420" fill="#fed7aa"/>
            <polygon points="420,360 470,420 400,420" fill="#fdba74"/>
            <polygon points="400,420 375,470 425,470" fill="#18181b"/>
            <polygon points="375,470 330,520 400,530" fill="#f1f5f9"/>
            <polygon points="425,470 470,520 400,530" fill="#e2e8f0"/>
            <polygon points="400,530 360,590 400,640" fill="#ea580c"/>
            <polygon points="400,530 440,590 400,640" fill="#c2410c"/>
            <!-- Mane -->
            <polygon points="260,320 180,390 290,430" fill="#b45309"/>
            <polygon points="540,320 620,390 510,430" fill="#d97706"/>
            <polygon points="180,390 230,520 290,430" fill="#78350f"/>
            <polygon points="620,390 570,520 510,430" fill="#92400e"/>
            <polygon points="230,520 330,590 330,520" fill="#b45309"/>
            <polygon points="570,520 470,590 470,520" fill="#d97706"/>
        </svg>`
    }
];

// Helper to convert SVG text to Data URL
function svgToDataUrl(svgString) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

// --- Synthesized Sound Effects (Pure Web Audio API - Zero External Dependencies) ---
class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playSelect() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(720, now + 0.06);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
    }

    playSwap() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.1);
    }

    playCorrect() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        [523.25, 659.25].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.04);

            gain.gain.setValueAtTime(0.12, now + i * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + i * 0.04);
            osc.stop(now + i * 0.04 + 0.2);
        });
    }

    playWin() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const notes = [392, 523.25, 659.25, 783.99, 1046.50];
        const now = this.ctx.currentTime;
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.1);

            gain.gain.setValueAtTime(0.2, now + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.1);
            osc.stop(now + idx * 0.1 + 0.4);
        });
    }
}

// --- Confetti Animation Canvas ---
class ConfettiCannon {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.animId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire() {
        this.particles = [];
        const colors = ['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#ffffff'];
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
                y: this.canvas.height / 2 + 50,
                vx: (Math.random() - 0.5) * 16,
                vy: -(Math.random() * 15 + 10),
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                vRot: (Math.random() - 0.5) * 10,
                gravity: 0.45,
                opacity: 1
            });
        }
        if (this.animId) cancelAnimationFrame(this.animId);
        this.loop();
    }

    loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let active = 0;

        for (let p of this.particles) {
            p.x += p.vx;
            p.vy += p.gravity;
            p.y += p.vy;
            p.rotation += p.vRot;
            p.opacity -= 0.005;

            if (p.opacity > 0 && p.y < this.canvas.height + 50) {
                active++;
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate((p.rotation * Math.PI) / 180);
                this.ctx.globalAlpha = Math.max(0, p.opacity);
                this.ctx.fillStyle = p.color;
                this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
                this.ctx.restore();
            }
        }

        if (active > 0) {
            this.animId = requestAnimationFrame(() => this.loop());
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

// --- Main Puzzle Game Controller ---
class PuzzleGame {
    constructor() {
        this.gridSize = 3; // Default 3x3
        this.imageNaturalWidth = PRESETS[0].width;
        this.imageNaturalHeight = PRESETS[0].height;
        this.imageAspectRatio = PRESETS[0].width / PRESETS[0].height;
        this.currentImageUrl = svgToDataUrl(PRESETS[0].svg);

        this.tiles = [];
        this.selectedTileIndex = null;
        this.moves = 0;
        this.seconds = 0;
        this.timerInterval = null;
        this.timerStarted = false;
        this.isWon = false;

        this.sound = new SoundManager();
        this.confetti = new ConfettiCannon(document.getElementById('confetti-canvas'));

        this.initDOM();
        this.initPresets();
        this.bindEvents();
        this.updateBoardDimensions();
        this.loadNewGame();
    }

    initDOM() {
        this.board = document.getElementById('puzzle-board');
        this.boardWrapper = document.getElementById('puzzle-board-wrapper');
        this.previewImg = document.getElementById('preview-image');
        this.ratioBadge = document.getElementById('ratio-badge');
        this.timeDisplay = document.getElementById('time-display');
        this.movesDisplay = document.getElementById('moves-display');
        this.placedDisplay = document.getElementById('placed-display');
        this.progressFill = document.getElementById('progress-fill');
        this.fileInput = document.getElementById('file-upload');
        this.uploadZone = document.getElementById('upload-zone');
        this.urlInput = document.getElementById('image-url-input');
        this.btnLoadUrl = document.getElementById('btn-load-url');
        this.urlFeedback = document.getElementById('url-feedback');
        this.winBanner = document.getElementById('win-banner');
        this.numbersToggle = document.getElementById('toggle-numbers');
        this.soundToggle = document.getElementById('sound-toggle');
        this.previewCard = document.getElementById('preview-card');
        this.togglePreviewCheck = document.getElementById('toggle-preview');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.resetGameBtn = document.getElementById('reset-game-btn');

        // Win banner elements (placed below the board)
        this.winTime = document.getElementById('win-time');
        this.winMoves = document.getElementById('win-moves');
        this.winGrid = document.getElementById('win-grid');
        this.btnNextGame = document.getElementById('btn-next-game');
        this.btnNextLevel = document.getElementById('btn-next-level');
        this.btnUploadWin = document.getElementById('btn-upload-win');
    }

    initPresets() {
        const container = document.getElementById('preset-thumbs');
        container.innerHTML = '';
        PRESETS.forEach((preset, index) => {
            const btn = document.createElement('button');
            btn.className = `preset-btn ${index === 0 ? 'active' : ''}`;
            btn.type = 'button';
            btn.title = `${preset.name} (${preset.ratioLabel})`;
            const img = document.createElement('img');
            img.src = svgToDataUrl(preset.svg);
            img.alt = preset.name;
            btn.appendChild(img);
            btn.addEventListener('click', () => {
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.setImage(img.src, preset.width, preset.height);
            });
            container.appendChild(btn);
        });

        // Set initial preview
        this.previewImg.src = this.currentImageUrl;
        if (this.ratioBadge) {
            this.ratioBadge.textContent = this.getRatioLabel(this.imageNaturalWidth, this.imageNaturalHeight);
        }
    }

    bindEvents() {
        // Grid buttons
        document.querySelectorAll('.grid-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.grid-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.gridSize = parseInt(btn.dataset.size, 10);
                this.loadNewGame();
            });
        });

        // Window resize keeps board proportions responsive
        window.addEventListener('resize', () => {
            this.updateBoardDimensions();
        });

        // File upload
        this.fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this.handleLocalImage(file);
        });

        // Drag & Drop image file onto upload zone
        ['dragenter', 'dragover'].forEach(name => {
            this.uploadZone.addEventListener(name, (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.uploadZone.classList.add('drag-active');
            });
        });

        ['dragleave', 'drop'].forEach(name => {
            this.uploadZone.addEventListener(name, (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.uploadZone.classList.remove('drag-active');
            });
        });

        this.uploadZone.addEventListener('drop', (e) => {
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.handleLocalImage(file);
            }
        });

        // Tab switching (File Upload vs Web Link URL)
        document.querySelectorAll('.source-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.source-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.source-panel').forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const targetPanel = document.getElementById(`panel-${tab.dataset.tab}`);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });

        // URL Load Button & Enter key handler
        if (this.btnLoadUrl) {
            this.btnLoadUrl.addEventListener('click', () => {
                this.handleUrlLoad(this.urlInput.value.trim());
            });
        }

        if (this.urlInput) {
            this.urlInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.handleUrlLoad(this.urlInput.value.trim());
                }
            });
        }

        // Quick sample pills handler
        document.querySelectorAll('.sample-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                if (this.urlInput) {
                    this.urlInput.value = pill.dataset.url;
                }
                this.handleUrlLoad(pill.dataset.url);
            });
        });

        // Action buttons
        this.shuffleBtn.addEventListener('click', () => {
            this.sound.playSelect();
            this.loadNewGame();
        });

        this.resetGameBtn.addEventListener('click', () => {
            this.sound.playSelect();
            this.loadNewGame();
        });

        // Toggle numbers
        this.numbersToggle.addEventListener('change', () => {
            if (this.numbersToggle.checked) {
                document.body.classList.add('show-numbers');
            } else {
                document.body.classList.remove('show-numbers');
            }
        });

        // Toggle sound
        this.soundToggle.addEventListener('click', () => {
            this.sound.enabled = !this.sound.enabled;
            this.soundToggle.textContent = this.sound.enabled ? '🔊' : '🔇';
            this.soundToggle.title = this.sound.enabled ? 'Mute Sound' : 'Enable Sound';
        });

        // Toggle Preview
        this.togglePreviewCheck.addEventListener('change', () => {
            this.previewCard.style.display = this.togglePreviewCheck.checked ? 'block' : 'none';
        });

        // Win banner buttons
        this.btnNextGame.addEventListener('click', () => {
            this.loadNewGame();
        });

        this.btnNextLevel.addEventListener('click', () => {
            const levels = [3, 4, 6, 8];
            const currentIdx = levels.indexOf(this.gridSize);
            const nextSize = currentIdx < levels.length - 1 ? levels[currentIdx + 1] : 3;
            document.querySelectorAll('.grid-btn').forEach(b => {
                b.classList.toggle('active', parseInt(b.dataset.size, 10) === nextSize);
            });
            this.gridSize = nextSize;
            this.loadNewGame();
        });

        this.btnUploadWin.addEventListener('click', () => {
            this.fileInput.click();
        });
    }

    // Ratio label detector
    getRatioLabel(width, height) {
        const ratio = width / height;
        if (Math.abs(ratio - 16 / 9) < 0.08) return "16:9 Widescreen";
        if (Math.abs(ratio - 9 / 16) < 0.08) return "9:16 Portrait";
        if (Math.abs(ratio - 4 / 3) < 0.08) return "4:3 Landscape";
        if (Math.abs(ratio - 3 / 4) < 0.08) return "3:4 Portrait";
        if (Math.abs(ratio - 1) < 0.08) return "1:1 Square";
        if (Math.abs(ratio - 21 / 9) < 0.1) return "21:9 Ultrawide";
        return `${width}:${height} (${ratio > 1 ? 'Landscape' : 'Portrait'})`;
    }

    // Handle External Image URL Loading
    handleUrlLoad(url) {
        if (!url) {
            this.showUrlFeedback("Please enter or paste an image link.", "error");
            return;
        }

        if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:')) {
            this.showUrlFeedback("Please enter a valid link starting with http:// or https://", "error");
            return;
        }

        this.showUrlFeedback("Loading image from link...", "loading");
        if (this.btnLoadUrl) this.btnLoadUrl.disabled = true;

        const img = new Image();
        img.onload = () => {
            if (this.btnLoadUrl) this.btnLoadUrl.disabled = false;
            this.showUrlFeedback("Image loaded successfully!", "success");
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            this.setImage(url, img.naturalWidth, img.naturalHeight);
            setTimeout(() => {
                if (this.urlFeedback && this.urlFeedback.classList.contains('success')) {
                    this.urlFeedback.style.display = 'none';
                }
            }, 3000);
        };

        img.onerror = () => {
            if (this.btnLoadUrl) this.btnLoadUrl.disabled = false;
            this.showUrlFeedback("Could not load image. Make sure the link is a direct image URL (jpg, png, webp) and publicly accessible.", "error");
        };

        img.src = url;
    }

    showUrlFeedback(text, type) {
        if (!this.urlFeedback) return;
        this.urlFeedback.textContent = text;
        this.urlFeedback.className = `url-feedback ${type}`;
        this.urlFeedback.style.display = 'block';
    }

    handleLocalImage(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const rawUrl = event.target.result;
            const img = new Image();
            img.onload = () => {
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                this.setImage(rawUrl, img.naturalWidth, img.naturalHeight);
            };
            img.src = rawUrl;
        };
        reader.readAsDataURL(file);
    }

    setImage(dataUrl, naturalWidth, naturalHeight) {
        this.currentImageUrl = dataUrl;
        this.imageNaturalWidth = naturalWidth;
        this.imageNaturalHeight = naturalHeight;
        this.imageAspectRatio = naturalWidth / naturalHeight;

        this.previewImg.src = dataUrl;
        if (this.ratioBadge) {
            this.ratioBadge.textContent = this.getRatioLabel(naturalWidth, naturalHeight);
        }

        this.updateBoardDimensions();
        this.loadNewGame();
    }

    // Dynamic Board & Box Sizing according to image aspect ratio (Optimized for Large PC screens & Mobile)
    updateBoardDimensions() {
        const ratio = this.imageAspectRatio || 1;
        const arena = document.querySelector('.puzzle-arena');
        const arenaWidth = arena ? arena.clientWidth : window.innerWidth;
        const isDesktop = window.innerWidth >= 900;

        // Viewport boundaries: Generously large on PC (up to 850px wide, 750px tall), responsive on mobile
        const maxAllowedW = isDesktop
            ? Math.min(arenaWidth - 32, 850)
            : Math.min(arenaWidth - 20, 560);

        const maxAllowedH = isDesktop
            ? Math.min(window.innerHeight * 0.76, 750)
            : Math.min(window.innerHeight * 0.65, 540);

        let boardW, boardH;
        if (ratio >= 1) {
            // Landscape or square: width is dominant
            boardW = maxAllowedW;
            boardH = Math.round(maxAllowedW / ratio);
            if (boardH > maxAllowedH) {
                boardH = maxAllowedH;
                boardW = Math.round(maxAllowedH * ratio);
            }
        } else {
            // Portrait (e.g. 9:16, 3:4): height is dominant
            boardH = maxAllowedH;
            boardW = Math.round(maxAllowedH * ratio);
            if (boardW > maxAllowedW) {
                boardW = maxAllowedW;
                boardH = Math.round(maxAllowedW / ratio);
            }
        }

        // Apply dynamic width and height to board wrapper
        this.boardWrapper.style.width = `${boardW}px`;
        this.boardWrapper.style.height = `${boardH}px`;

        // Update CSS variable so stats bar, actions, and win banner scale to match
        const controlWidth = Math.max(320, boardW);
        document.documentElement.style.setProperty('--board-max-width', `${controlWidth}px`);
    }

    startTimer() {
        if (this.timerStarted) return;
        this.timerStarted = true;
        this.timerInterval = setInterval(() => {
            this.seconds++;
            const mins = String(Math.floor(this.seconds / 60)).padStart(2, '0');
            const secs = String(this.seconds % 60).padStart(2, '0');
            this.timeDisplay.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.timerStarted = false;
    }

    resetTimer() {
        this.stopTimer();
        this.seconds = 0;
        this.timeDisplay.textContent = "00:00";
    }

    loadNewGame() {
        this.resetTimer();
        this.moves = 0;
        this.movesDisplay.textContent = "0";
        this.selectedTileIndex = null;
        this.isWon = false;

        // Hide win banner and restore normal board styling
        this.winBanner.classList.add('hidden');
        this.board.classList.remove('puzzle-solved');
        this.boardWrapper.classList.remove('puzzle-solved');

        const size = this.gridSize;
        const total = size * size;

        // Configure CSS Grid
        this.board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        this.board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        // Create tile pieces: { origIndex, origRow, origCol }
        const pieceData = [];
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const idx = r * size + c;
                pieceData.push({
                    origIndex: idx,
                    origRow: r,
                    origCol: c
                });
            }
        }

        // Shuffle with Fisher-Yates, ensuring it is not already solved
        let shuffled = [...pieceData];
        let attempts = 0;
        do {
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            attempts++;
        } while (this.countCorrect(shuffled) > Math.min(2, Math.floor(total * 0.2)) && attempts < 20);

        this.tiles = shuffled;
        this.renderBoard();
        this.updateStats();
    }

    countCorrect(tilesArr) {
        return tilesArr.reduce((acc, tile, currentIndex) => {
            return acc + (tile.origIndex === currentIndex ? 1 : 0);
        }, 0);
    }

    renderBoard() {
        this.board.innerHTML = '';
        this.tileElements = [];
        const size = this.gridSize;

        for (let i = 0; i < this.tiles.length; i++) {
            const tileEl = document.createElement('div');
            tileEl.className = 'puzzle-tile';
            tileEl.dataset.index = i;
            tileEl.setAttribute('draggable', 'true');

            // Apply master background image & size ONCE
            tileEl.style.backgroundImage = `url("${this.currentImageUrl}")`;
            tileEl.style.backgroundSize = `${size * 100}% ${size * 100}%`;

            // Number badge for hint
            const numBadge = document.createElement('span');
            numBadge.className = 'tile-number';
            tileEl.appendChild(numBadge);

            // Bind click to slot i
            tileEl.addEventListener('click', () => this.handleTileClick(i));

            // Bind drag-and-drop to slot i
            this.bindTileDragAndDrop(tileEl, i);

            this.board.appendChild(tileEl);
            this.tileElements.push(tileEl);
        }

        // Apply background slice positions to all tiles
        this.updateAllTilePositions();
    }

    updateAllTilePositions() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.updateTileElement(i);
        }
    }

    // Instant update of a single tile's slice position - 0ms DOM overhead!
    updateTileElement(index) {
        const tileEl = this.tileElements[index];
        if (!tileEl) return;
        const tile = this.tiles[index];
        const size = this.gridSize;

        const xPercent = size > 1 ? (tile.origCol / (size - 1)) * 100 : 0;
        const yPercent = size > 1 ? (tile.origRow / (size - 1)) * 100 : 0;
        tileEl.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

        // Update number badge
        const numBadge = tileEl.querySelector('.tile-number');
        if (numBadge) {
            numBadge.textContent = tile.origIndex + 1;
        }
    }

    bindTileDragAndDrop(tileEl, slotIndex) {
        tileEl.addEventListener('dragstart', (e) => {
            if (this.isWon) {
                e.preventDefault();
                return;
            }
            this.sound.playSelect();
            this.startTimer();
            e.dataTransfer.setData('text/plain', slotIndex);
            e.dataTransfer.effectAllowed = 'move';
            tileEl.classList.add('dragging');
        });

        tileEl.addEventListener('dragend', () => {
            tileEl.classList.remove('dragging');
            document.querySelectorAll('.puzzle-tile').forEach(t => t.classList.remove('drag-hover'));
        });

        tileEl.addEventListener('dragover', (e) => {
            if (this.isWon) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            tileEl.classList.add('drag-hover');
        });

        tileEl.addEventListener('dragleave', () => {
            tileEl.classList.remove('drag-hover');
        });

        tileEl.addEventListener('drop', (e) => {
            if (this.isWon) return;
            e.preventDefault();
            tileEl.classList.remove('drag-hover');
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            const toIndex = slotIndex;
            if (!isNaN(fromIndex) && fromIndex !== toIndex) {
                this.swapTiles(fromIndex, toIndex);
            }
        });
    }

    handleTileClick(clickedIndex) {
        if (this.isWon) return;
        this.startTimer();

        if (this.selectedTileIndex === null) {
            // First piece selected
            this.selectedTileIndex = clickedIndex;
            this.sound.playSelect();
            this.highlightSelected();
        } else if (this.selectedTileIndex === clickedIndex) {
            // Deselect on re-click
            this.selectedTileIndex = null;
            this.sound.playSelect();
            this.highlightSelected();
        } else {
            // Second piece selected: perform INSTANT swap!
            const firstIndex = this.selectedTileIndex;
            this.selectedTileIndex = null;
            this.highlightSelected();
            this.swapTiles(firstIndex, clickedIndex);
        }
    }

    highlightSelected() {
        if (!this.tileElements) return;
        this.tileElements.forEach((el, idx) => {
            el.classList.toggle('selected', idx === this.selectedTileIndex);
        });
    }

    // Instant swap: updates ONLY the two affected tile elements in the DOM (Zero delay!)
    swapTiles(indexA, indexB) {
        // Swap pieces in data array
        const temp = this.tiles[indexA];
        this.tiles[indexA] = this.tiles[indexB];
        this.tiles[indexB] = temp;

        this.moves++;
        this.movesDisplay.textContent = this.moves;

        // Instant DOM update of JUST the 2 swapped elements (No DOM destruction/recreation!)
        this.updateTileElement(indexA);
        this.updateTileElement(indexB);

        // Sound effect
        this.sound.playSwap();

        // Update progress & check win condition
        this.updateStats();
        this.checkWin();
    }

    updateStats() {
        const total = this.gridSize * this.gridSize;
        const correctCount = this.countCorrect(this.tiles);
        this.placedDisplay.textContent = `${correctCount} / ${total}`;

        const percent = Math.round((correctCount / total) * 100);
        this.progressFill.style.width = `${percent}%`;
    }

    checkWin() {
        const total = this.gridSize * this.gridSize;
        const correctCount = this.countCorrect(this.tiles);

        if (correctCount === total && !this.isWon) {
            this.isWon = true;
            this.stopTimer();
            this.sound.playWin();
            this.confetti.fire();

            // Seamless picture presentation:
            // 1. Board gaps and borders disappear smoothly so the player sees their 100% complete artwork
            this.board.classList.add('puzzle-solved');
            this.boardWrapper.classList.add('puzzle-solved');

            // 2. Reveal the celebratory card BELOW the board (never obscuring the solved picture)
            this.winTime.textContent = this.timeDisplay.textContent;
            this.winMoves.textContent = this.moves;
            this.winGrid.textContent = `${this.gridSize}×${this.gridSize}`;
            this.winBanner.classList.remove('hidden');

            setTimeout(() => {
                this.winBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
    }
}

// Start game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.game = new PuzzleGame();
});
