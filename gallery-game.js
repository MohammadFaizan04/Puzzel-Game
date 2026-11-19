// --- Synthesized Sound Effects (Pure Web Audio API) ---
class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
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
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
    }

    playSwap() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
    }

    playWin() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
            const now = this.ctx.currentTime + (i * 0.12);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        });
    }
}

// --- Confetti Cannon Particles ---
class ConfettiCannon {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.particles = [];
        this.animId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire() {
        if (!this.canvas || !this.ctx) return;
        this.resize();
        this.particles = [];
        const colors = ['#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#f43f5e', '#ffffff'];
        for (let i = 0; i < 110; i++) {
            this.particles.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: (Math.random() - 0.5) * 16,
                vy: (Math.random() - 0.8) * 16,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                vr: (Math.random() - 0.5) * 12,
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
            p.y += p.vy;
            p.vy += 0.35;
            p.rotation += p.vr;
            p.opacity -= 0.012;
            if (p.opacity > 0 && p.y < this.canvas.height) {
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

// --- Custom Gallery Puzzle Controller (Exclusive to image-links.js, ZERO Anime) ---
class GalleryPuzzleGame {
    constructor() {
        this.gridSize = 3;
        this.allImages = [];
        this.currentImageUrl = '';
        this.imageAspectRatio = 1;
        this.userHasPickedAnImage = false;

        this.tiles = [];
        this.tileElements = [];
        this.selectedTileIndex = null;
        this.moves = 0;
        this.seconds = 0;
        this.timerInterval = null;
        this.timerStarted = false;
        this.isWon = false;

        this.sound = new SoundManager();
        this.confetti = new ConfettiCannon(document.getElementById('confetti-canvas'));

        this.initDOM();
        this.bindEvents();

        // Load links directly from image-links.js
        this.syncWithImageLinks(true);
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
        this.winBanner = document.getElementById('win-banner');
        this.numbersToggle = document.getElementById('toggle-numbers');
        this.soundToggle = document.getElementById('sound-toggle');
        this.previewCard = document.getElementById('preview-card');
        this.togglePreviewCheck = document.getElementById('toggle-preview');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.resetGameBtn = document.getElementById('reset-game-btn');

        this.galleryHeading = document.getElementById('gallery-heading');
        this.btnRefreshLinks = document.getElementById('btn-refresh-links');
        this.syncToast = document.getElementById('sync-toast');
        this.galleryGrid = document.getElementById('gallery-grid');
        this.gallerySearchInput = document.getElementById('gallery-search-input');
        this.galleryFilters = document.getElementById('gallery-filters');

        this.winTime = document.getElementById('win-time');
        this.winMoves = document.getElementById('win-moves');
        this.winGrid = document.getElementById('win-grid');
        this.btnNextGame = document.getElementById('btn-next-game');
        this.btnNextLevel = document.getElementById('btn-next-level');
    }

    parseImageLinks(text) {
        const lines = text.split(/\r?\n/);
        const items = [];
        let currentCategory = 'My Photos';

        function formatCategory(raw) {
            return raw
                .trim()
                .replace(/\s+/g, ' ')
                .split(' ')
                .map(w => {
                    if (/^3d$/i.test(w)) return '3D';
                    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
                })
                .join(' ');
        }

        for (let rawLine of lines) {
            const line = rawLine.trim();
            if (!line) continue;

            // Section comment / category header
            if (/^[\/#*]/.test(line)) {
                const stripped = line.replace(/^[\/#*\-_=]+/, '').trim();
                if (stripped.length > 0) {
                    currentCategory = formatCategory(stripped);
                }
                continue;
            }

            // Image URL line
            const urlMatch = line.match(/(https?:\/\/[^\s"'<>]+)/i);
            if (urlMatch) {
                items.push({
                    src: urlMatch[1],
                    title: currentCategory,
                    category: currentCategory
                });
            }
        }
        return items;
    }

    async syncWithImageLinks(silent = false) {
        let items = [];
        try {
            const res = await fetch('image-links.js?t=' + Date.now());
            if (res.ok) {
                const text = await res.text();
                items = this.parseImageLinks(text);
            }
        } catch (err) {
            console.warn('Could not auto-fetch image-links.js:', err);
        }

        this.allImages = items;

        if (this.galleryHeading) {
            this.galleryHeading.textContent = `Collection (${this.allImages.length})`;
        }

        if (!silent && this.syncToast) {
            this.syncToast.textContent = `✅ Synced ${this.allImages.length} images from image-links.js!`;
            setTimeout(() => { if (this.syncToast) this.syncToast.textContent = ''; }, 3500);
        }

        this.buildCategoryFilters();
        this.renderThumbnails('all', this.gallerySearchInput ? this.gallerySearchInput.value.trim() : '');

        if (!this.userHasPickedAnImage && this.allImages.length > 0) {
            this.loadImage(this.allImages[0].src);
        }
    }

    buildCategoryFilters() {
        if (!this.galleryFilters) return;
        const categories = [];
        const seen = new Set();

        this.allImages.forEach(img => {
            const cat = img.category;
            if (cat && !seen.has(cat.toLowerCase())) {
                seen.add(cat.toLowerCase());
                categories.push(cat);
            }
        });

        this.galleryFilters.innerHTML = '';

        // "All" chip
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.className = 'gallery-chip active';
        allBtn.dataset.filter = 'all';
        allBtn.textContent = `All (${this.allImages.length})`;
        this.galleryFilters.appendChild(allBtn);

        // Individual category chips (3D Couples, Cute, Cute Animals, etc.)
        categories.forEach(cat => {
            const count = this.allImages.filter(img => img.category.toLowerCase() === cat.toLowerCase()).length;
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'gallery-chip';
            chip.dataset.filter = cat;
            chip.textContent = `${cat} (${count})`;
            this.galleryFilters.appendChild(chip);
        });
    }

    renderThumbnails(filter, search) {
        if (!this.galleryGrid) return;
        this.galleryGrid.innerHTML = '';
        const list = this.allImages || [];

        const filtered = list.filter(item => {
            const catLower = (item.category || '').toLowerCase();
            const matchesFilter = filter === 'all' || catLower === filter.toLowerCase();
            const matchesSearch = !search || catLower.includes(search.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            this.galleryGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 1.5rem;">No photos found. Add links to image-links.js!</div>`;
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = `gallery-card ${item.src === this.currentImageUrl ? 'active' : ''}`;
            card.title = item.category;

            card.innerHTML = `
                <img src="${item.src}" alt="${item.category}" loading="lazy" onerror="this.onerror=null;this.parentElement.style.opacity='0.4';">
                <div class="gallery-card-title">${item.category}</div>
            `;

            card.addEventListener('click', () => {
                this.userHasPickedAnImage = true;
                this.galleryGrid.querySelectorAll('.gallery-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                this.loadImage(item.src);
            });

            this.galleryGrid.appendChild(card);
        });
    }

    loadImage(url) {
        const img = new Image();
        img.onload = () => {
            this.currentImageUrl = url;
            this.imageAspectRatio = img.naturalWidth / img.naturalHeight;
            this.previewImg.src = url;

            if (this.ratioBadge) {
                const ratio = this.imageAspectRatio;
                this.ratioBadge.textContent = ratio > 1 ? `${Math.round(ratio * 100) / 100}:1 Landscape` : `${Math.round(ratio * 100) / 100}:1 Portrait`;
            }

            this.updateBoardDimensions();
            this.loadNewGame();
        };
        img.src = url;
    }

    bindEvents() {
        if (this.btnRefreshLinks) {
            this.btnRefreshLinks.addEventListener('click', () => {
                this.sound.playSelect();
                this.syncWithImageLinks(false);
            });
        }

        if (this.gallerySearchInput) {
            this.gallerySearchInput.addEventListener('input', (e) => {
                const activeChip = this.galleryFilters.querySelector('.gallery-chip.active');
                const filter = activeChip ? activeChip.dataset.filter : 'all';
                this.renderThumbnails(filter, e.target.value.trim());
            });
        }

        if (this.galleryFilters) {
            this.galleryFilters.addEventListener('click', (e) => {
                if (e.target.classList.contains('gallery-chip')) {
                    this.galleryFilters.querySelectorAll('.gallery-chip').forEach(c => c.classList.remove('active'));
                    e.target.classList.add('active');
                    this.renderThumbnails(e.target.dataset.filter, this.gallerySearchInput ? this.gallerySearchInput.value.trim() : '');
                }
            });
        }

        document.querySelectorAll('.grid-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.grid-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.gridSize = parseInt(btn.dataset.size, 10);
                this.loadNewGame();
            });
        });

        window.addEventListener('resize', () => this.updateBoardDimensions());

        this.shuffleBtn.addEventListener('click', () => {
            this.sound.playSelect();
            this.loadNewGame();
        });

        this.resetGameBtn.addEventListener('click', () => {
            this.sound.playSelect();
            this.loadNewGame();
        });

        this.numbersToggle.addEventListener('change', () => {
            document.body.classList.toggle('show-numbers', this.numbersToggle.checked);
        });

        this.soundToggle.addEventListener('click', () => {
            this.sound.enabled = !this.sound.enabled;
            this.soundToggle.textContent = this.sound.enabled ? '🔊' : '🔇';
        });

        this.togglePreviewCheck.addEventListener('change', () => {
            this.previewCard.style.display = this.togglePreviewCheck.checked ? 'block' : 'none';
        });

        this.btnNextGame.addEventListener('click', () => this.loadNewGame());

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
    }

    updateBoardDimensions() {
        const ratio = this.imageAspectRatio || 1;
        const arena = document.querySelector('.puzzle-arena');
        const arenaWidth = arena ? arena.clientWidth : window.innerWidth;
        const isDesktop = window.innerWidth >= 900;

        const maxAllowedW = isDesktop ? Math.min(arenaWidth - 32, 850) : Math.min(arenaWidth - 20, 560);
        const maxAllowedH = isDesktop ? Math.min(window.innerHeight * 0.76, 750) : Math.min(window.innerHeight * 0.65, 540);

        let boardW, boardH;
        if (ratio >= 1) {
            boardW = maxAllowedW;
            boardH = Math.round(maxAllowedW / ratio);
            if (boardH > maxAllowedH) {
                boardH = maxAllowedH;
                boardW = Math.round(maxAllowedH * ratio);
            }
        } else {
            boardH = maxAllowedH;
            boardW = Math.round(maxAllowedH * ratio);
            if (boardW > maxAllowedW) {
                boardW = maxAllowedW;
                boardH = Math.round(maxAllowedW / ratio);
            }
        }

        this.boardWrapper.style.width = `${boardW}px`;
        this.boardWrapper.style.height = `${boardH}px`;
    }

    loadNewGame() {
        this.stopTimer();
        this.seconds = 0;
        this.moves = 0;
        this.isWon = false;
        this.selectedTileIndex = null;
        this.timerStarted = false;

        this.timeDisplay.textContent = '00:00';
        this.movesDisplay.textContent = '0';
        this.winBanner.classList.add('hidden');
        this.board.classList.remove('puzzle-solved');
        this.boardWrapper.classList.remove('puzzle-solved');

        const total = this.gridSize * this.gridSize;
        const solved = Array.from({ length: total }, (_, i) => i);
        this.tiles = this.shuffleTiles([...solved]);

        this.renderBoard();
        this.updateStats();
    }

    shuffleTiles(arr) {
        let shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        if (this.countCorrect(shuffled) === arr.length && arr.length > 1) {
            [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
        }
        return shuffled;
    }

    countCorrect(arr) {
        return arr.reduce((acc, val, idx) => acc + (val === idx ? 1 : 0), 0);
    }

    startTimer() {
        if (this.timerStarted) return;
        this.timerStarted = true;
        this.timerInterval = setInterval(() => {
            this.seconds++;
            const m = String(Math.floor(this.seconds / 60)).padStart(2, '0');
            const s = String(this.seconds % 60).padStart(2, '0');
            this.timeDisplay.textContent = `${m}:${s}`;
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.timerStarted = false;
    }

    renderBoard() {
        this.board.innerHTML = '';
        this.tileElements = [];
        this.board.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
        this.board.style.gridTemplateRows = `repeat(${this.gridSize}, 1fr)`;

        const total = this.gridSize * this.gridSize;

        for (let slot = 0; slot < total; slot++) {
            const pieceOriginalIndex = this.tiles[slot];
            const tileEl = document.createElement('div');
            tileEl.className = 'puzzle-tile';
            tileEl.dataset.slot = slot;
            tileEl.dataset.piece = pieceOriginalIndex;
            tileEl.setAttribute('draggable', 'true');

            tileEl.style.backgroundImage = `url("${this.currentImageUrl}")`;
            tileEl.style.backgroundSize = `${this.gridSize * 100}% ${this.gridSize * 100}%`;

            const origRow = Math.floor(pieceOriginalIndex / this.gridSize);
            const origCol = pieceOriginalIndex % this.gridSize;
            const xPercent = (origCol / (this.gridSize - 1)) * 100;
            const yPercent = (origRow / (this.gridSize - 1)) * 100;
            tileEl.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

            const numSpan = document.createElement('span');
            numSpan.className = 'tile-number';
            numSpan.textContent = pieceOriginalIndex + 1;
            tileEl.appendChild(numSpan);

            // Click swap
            tileEl.addEventListener('click', () => this.handleTileClick(slot));

            // Drag and drop
            tileEl.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', slot);
                tileEl.classList.add('dragging');
            });
            tileEl.addEventListener('dragend', () => tileEl.classList.remove('dragging'));
            tileEl.addEventListener('dragover', (e) => e.preventDefault());
            tileEl.addEventListener('drop', (e) => {
                e.preventDefault();
                const fromSlot = parseInt(e.dataTransfer.getData('text/plain'), 10);
                if (!isNaN(fromSlot) && fromSlot !== slot) {
                    this.swapTiles(fromSlot, slot);
                }
            });

            this.tileElements.push(tileEl);
            this.board.appendChild(tileEl);
        }
    }

    updateTileElement(slot) {
        const pieceOriginalIndex = this.tiles[slot];
        const tileEl = this.tileElements[slot];
        if (!tileEl) return;

        tileEl.dataset.piece = pieceOriginalIndex;
        const origRow = Math.floor(pieceOriginalIndex / this.gridSize);
        const origCol = pieceOriginalIndex % this.gridSize;
        const xPercent = (origCol / (this.gridSize - 1)) * 100;
        const yPercent = (origRow / (this.gridSize - 1)) * 100;
        tileEl.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

        const numSpan = tileEl.querySelector('.tile-number');
        if (numSpan) numSpan.textContent = pieceOriginalIndex + 1;
    }

    handleTileClick(slot) {
        if (this.isWon) return;
        this.startTimer();

        if (this.selectedTileIndex === null) {
            this.selectedTileIndex = slot;
            this.tileElements[slot].classList.add('selected');
            this.sound.playSelect();
        } else if (this.selectedTileIndex === slot) {
            this.tileElements[slot].classList.remove('selected');
            this.selectedTileIndex = null;
        } else {
            const firstSlot = this.selectedTileIndex;
            this.tileElements[firstSlot].classList.remove('selected');
            this.selectedTileIndex = null;
            this.swapTiles(firstSlot, slot);
        }
    }

    swapTiles(indexA, indexB) {
        [this.tiles[indexA], this.tiles[indexB]] = [this.tiles[indexB], this.tiles[indexA]];
        this.moves++;
        this.movesDisplay.textContent = this.moves;

        this.updateTileElement(indexA);
        this.updateTileElement(indexB);

        this.sound.playSwap();
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

            this.board.classList.add('puzzle-solved');
            this.boardWrapper.classList.add('puzzle-solved');

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
    window.game = new GalleryPuzzleGame();
});
