export const topicai8 = {
  id: 8,
  title: "Oyun/Məntiq Alqoritmləri",
  duration: "120 dəq",
  isFree: false,
  
  content: `
    <h4>🎮 Proqramlaşdırma ilə Oyun Dünyası</h4>
    <p>Oyunlar proqramlaşdırmanın ən əyləncəli tətbiq sahələrindən biridir. Oyun yazmaq sadəcə əyləncə deyil, həm də alqoritmik düşüncəni, məntiq qurmağı və problemləri həll etməyi öyrədir. Bu dərsdə klassik oyunları Python ilə yazmağı öyrənəcəyik.</p>

    <h4>🧠 Oyun Alqoritmlərinin Əsasları</h4>
    <p>Hər oyunun 3 əsas komponenti var:</p>
    <ul>
      <li><strong>Vəziyyət (State):</strong> Oyunun hazırkı durumu - xal, mövqe, növbə</li>
      <li><strong>Giriş (Input):</strong> İstifadəçinin daxil etdiyi məlumat</li>
      <li><strong>Yeniləmə (Update):</strong> Qaydalara görə vəziyyətin dəyişməsi</li>
    </ul>

    <h4>🎯 1. Nömrə Təxmin Oyunu (Binary Search Alqoritmi)</h4>
    <p>Kompüter 1-100 arası ədəd tutur, istifadəçi təxmin edir. Ən səmərəli yol - binary search (böl və idarə et) alqoritmidir.</p>
    
    <pre><code>import random

def texmin_oyunu():
    gizli_eded = random.randint(1, 100)
    cehdler = 0
    asagi = 1
    yuxari = 100
    
    print("🎮 1-100 arası ədəd tutdum. Təxmin et!")
    
    while True:
        try:
            cehdler += 1
            # Ağıllı təxmin (binary search strategiyası)
            texmin = (asagi + yuxari) // 2  # Orta nöqtə
            
            # İstifadəçi versiyası:
            # texmin = int(input(f"Cehd {cehdler}. Təxmininiz: "))
            
            if texmin < gizli_eded:
                print("📈 Daha YUXARI!")
                asagi = texmin + 1
            elif texmin > gizli_eded:
                print("📉 Daha AŞAĞI!")
                yuxari = texmin - 1
            else:
                print(f"🎉 Təbriklər! {cehdler} cəhddə tapdın!")
                break
                
            if cehdler >= 7:
                print(f"💡 Ipucu: {asagi}-{yuxari} arasındadır")
                
        except ValueError:
            print("❌ Zəhmət olmasa ədəd daxil edin!")

# Maksimum 7 cəhd lazımdır (log2(100) ≈ 6.64)</code></pre>

    <h4>⚔️ 2. Daş-Qayçı-Kağız (Game Theory)</h4>
    <p>İki oyunçu, üç seçim. Qazanma şərtləri: Daş qayçını, qayçı kağızı, kağız daşı əzir.</p>
    <pre><code>import random

def secim_ad(secim):
    return {1: "🪨 Daş", 2: "✂️ Qayçı", 3: "📄 Kağız"}[secim]

def qalib_teyin(oyuncu, komp):
    if oyuncu == komp:
        return "🤝 Bərabərə"
    
    # Qazanma şərtləri: (oyuncu, komp) cütləri
    qazanma = [(1, 2), (2, 3), (3, 1)]  # Daş>Qayçı, Qayçı>Kağız, Kağız>Daş
    
    if (oyuncu, komp) in qazanma:
        return "🎉 Siz qalib gəldiniz!"
    else:
        return "🤖 Kompüter qalib gəldi!"

def das_qayci_kagiz():
    xal_oyuncu = 0
    xal_komp = 0
    
    while True:
        print("\n" + "="*30)
        print("1. 🪨 Daş")
        print("2. ✂️ Qayçı")
        print("3. 📄 Kağız")
        print("0. Çıxış")
        
        try:
            secim = int(input("Seçiminiz: "))
            if secim == 0:
                break
            if secim not in [1, 2, 3]:
                print("❌ Yanlış seçim!")
                continue
                
            komp_secim = random.randint(1, 3)
            
            print(f"\nSiz: {secim_ad(secim)}")
            print(f"Kompüter: {secim_ad(komp_secim)}")
            
            netice = qalib_teyin(secim, komp_secim)
            print(netice)
            
            if "Siz" in netice:
                xal_oyuncu += 1
            elif "Kompüter" in netice:
                xal_komp += 1
                
            print(f"\n📊 Hesab: Siz {xal_oyuncu} - {xal_komp} Kompüter")
            
        except ValueError:
            print("❌ Ədəd daxil edin!")

das_qayci_kagiz()</code></pre>

    <h4>❌⭕ 3. Tik-Tak-Toe (X-O Oyunu) - MiniMax Alqoritmi</h4>
    <p>3x3 taxta, iki oyunçu. Qazanmaq üçün 3 simvol yan-yana, sütun və ya diaqonalda olmalıdır.</p>
    <pre><code>def taxta_ciz(taxta):
    """Taxtanı göstər"""
    print("\n  0   1   2")
    for i, setir in enumerate(taxta):
        print(f"{i} " + " | ".join(setir))
        if i < 2:
            print("  ---------")

def qazanma_yoxla(taxta, oyuncu):
    """Qazanma şərtlərini yoxla"""
    # Setirlər
    for setir in taxta:
        if all([x == oyuncu for x in setir]):
            return True
    
    # Sütunlar
    for s in range(3):
        if all([taxta[s][sutun] == oyuncu for sutun in range(3)]):
            return True
    
    # Diaqonallar
    if all([taxta[i][i] == oyuncu for i in range(3)]):
        return True
    if all([taxta[i][2-i] == oyuncu for i in range(3)]):
        return True
    
    return False

def beraberlik_yoxla(taxta):
    """Bərabərlik yoxlaması"""
    return all([x != " " for setir in taxta for x in setir])

def minimax(taxta, derinlik, maksimize):
    """
    MiniMax alqoritmi - ən yaxşı hərəkəti tapır
    Kompüter (O) maksimum xal, Siz (X) minimum xal axtarır
    """
    if qazanma_yoxla(taxta, "O"):
        return 10 - derinlik
    if qazanma_yoxla(taxta, "X"):
        return derinlik - 10
    if beraberlik_yoxla(taxta):
        return 0
    
    if maksimize:  # Kompüterin növbəsi
        max_qiymet = -float('inf')
        for i in range(3):
            for j in range(3):
                if taxta[i][j] == " ":
                    taxta[i][j] = "O"
                    qiymet = minimax(taxta, derinlik + 1, False)
                    taxta[i][j] = " "
                    max_qiymet = max(max_qiymet, qiymet)
        return max_qiymet
    else:  # İstifadəçinin növbəsi (ən pis ssenari)
        min_qiymet = float('inf')
        for i in range(3):
            for j in range(3):
                if taxta[i][j] == " ":
                    taxta[i][j] = "X"
                    qiymet = minimax(taxta, derinlik + 1, True)
                    taxta[i][j] = " "
                    min_qiymet = min(min_qiymet, qiymet)
        return min_qiymet

def en_yaxsi_hereket(taxta):
    """MiniMax ilə ən yaxşı hərəkəti tap"""
    en_yaxsi_qiymet = -float('inf')
    en_yaxsi_move = None
    
    for i in range(3):
        for j in range(3):
            if taxta[i][j] == " ":
                taxta[i][j] = "O"
                qiymet = minimax(taxta, 0, False)
                taxta[i][j] = " "
                
                if qiymet > en_yaxsi_qiymet:
                    en_yaxsi_qiymet = qiymet
                    en_yaxsi_move = (i, j)
    
    return en_yaxsi_move

def x_o_oyunu():
    taxta = [[" " for _ in range(3)] for _ in range(3)]
    
    while True:
        taxta_ciz(taxta)
        
        # İstifadəçi növbəsi
        while True:
            try:
                setir = int(input("Setir (0-2): "))
                sutun = int(input("Sutun (0-2): "))
                if 0 <= setir <= 2 and 0 <= sutun <= 2 and taxta[setir][sutun] == " ":
                    taxta[setir][sutun] = "X"
                    break
                else:
                    print("❌ Yanlış və ya dolu xana!")
            except ValueError:
                print("❌ Ədəd daxil edin!")
        
        if qazanma_yoxla(taxta, "X"):
            taxta_ciz(taxta)
            print("🎉 Siz qalib gəldiniz!")
            break
        
        if beraberlik_yoxla(taxta):
            taxta_ciz(taxta)
            print("🤝 Bərabərə!")
            break
        
        # Kompüter növbəsi (AI)
        print("\n🤖 Kompüter düşünür...")
        move = en_yaxsi_hereket(taxta)
        taxta[move[0]][move[1]] = "O"
        
        if qazanma_yoxla(taxta, "O"):
            taxta_ciz(taxta)
            print("🤖 Kompüter qalib gəldi!")
            break

x_o_oyunu()</code></pre>

    <h4>🎲 4. SudoKu Yoxlayıcısı (Backtracking Alqoritmi)</h4>
    <p>9x9 grid, hər sətirdə, sütunda və 3x3 kvadratda 1-9 ədədləri təkrarlanmamalıdır.</p>
    <pre><code>def sudo_yoxla(grid, setir, sutun, eded):
    """Ədədin yerləşdirilməsini yoxla"""
    # Sətir yoxlaması
    if eded in grid[setir]:
        return False
    
    # Sütun yoxlaması
    for s in range(9):
        if grid[s][sutun] == eded:
            return False
    
    # 3x3 kvadrat yoxlaması
    baslangic_setir = (setir // 3) * 3
    baslangic_sutun = (sutun // 3) * 3
    
    for i in range(3):
        for j in range(3):
            if grid[baslangic_setir + i][baslangic_sutun + j] == eded:
                return False
    
    return True

def bosh_xana_tap(grid):
    """Boş xana tap (0 olan)"""
    for i in range(9):
        for j in range(9):
            if grid[i][j] == 0:
                return (i, j)
    return None

def sudo_coz(grid):
    """
    Backtracking alqoritmi ilə SudoKu həll edir
    Hər boş xanaya 1-9 arası ədəd sınayır
    Əgər dal yol uğursuz olarsa, geri qayıdır (backtrack)
    """
    bosh = bosh_xana_tap(grid)
    if not bosh:
        return True  # Bütün xanalar dolu
    
    setir, sutun = bosh
    
    for eded in range(1, 10):
        if sudo_yoxla(grid, setir, sutun, eded):
            grid[setir][sutun] = eded
            
            if sudo_coz(grid):
                return True
            
            # Əgər uğursuz olarsa, geri qaytar (backtrack)
            grid[setir][sutun] = 0
    
    return False  # Həll yoxdur

# Nümunə SudoKu
sudo_grid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

print("📋 İlkin SudoKu:")
for setir in sudo_grid:
    print(setir)

if sudo_coz(sudo_grid):
    print("\n✅ Həll:")
    for setir in sudo_grid:
        print(setir)
else:
    print("❌ Həll tapılmadı!")</code></pre>

    <h4>🃏 5. Yaddaş (Memory) Oyunu - 2D List və Random</h4>
    <p>4x4 grid, cütləri tapmaq lazımdır. Yaddaş və konsentrasiya oyunu.</p>
    <pre><code>import random
import time

def yaddas_oyunu():
    # Kartları hazırla (A-H, hər biri 2 dəfə)
    kartlar = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
               'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H']
    random.shuffle(kartlar)
    
    # 4x4 grid yarat
    grid = [kartlar[i*4:(i+1)*4] for i in range(4)]
    gorunus = [['*' for _ in range(4)] for _ in range(4)]
    
    cütlər = 0
    cehdler = 0
    
    def grid_goster(gizli=False):
        """Grid-i göstər"""
        print("\n  0   1   2   3")
        for i in range(4):
            setir = []
            for j in range(4):
                if gizli or gorunus[i][j] != '*':
                    setir.append(grid[i][j])
                else:
                    setir.append('*')
            print(f"{i} " + " | ".join(setir))
    
    while cütlər < 8:
        grid_goster()
        
        try:
            # Birinci seçim
            s1 = int(input("\nBirinci kart setri (0-3): "))
            u1 = int(input("Birinci kart sütunu (0-3): "))
            
            if gorunus[s1][u1] != '*':
                print("❌ Bu kart artıq açılıb!")
                continue
            
            gorunus[s1][u1] = grid[s1][u1]
            grid_goster()
            
            # İkinci seçim
            s2 = int(input("\nİkinci kart setri (0-3): "))
            u2 = int(input("İkinci kart sütunu (0-3): "))
            
            if gorunus[s2][u2] != '*':
                print("❌ Bu kart artıq açılıb!")
                gorunus[s1][u1] = '*'  # Birincini geri qapat
                continue
            
            gorunus[s2][u2] = grid[s2][u2]
            grid_goster()
            
            cehdler += 1
            
            # Yoxla
            if grid[s1][u1] == grid[s2][u2]:
                print("🎉 Cütdür!")
                cütlər += 1
            else:
                print("❌ Cüt deyil!")
                time.sleep(2)
                gorunus[s1][u1] = '*'
                gorunus[s2][u2] = '*'
            
        except (ValueError, IndexError):
            print("❌ Yanlış koordinat!")
    
    print(f"\n🎉 Təbriklər! {cehdler} cəhddə bitirdiniz!")

yaddas_oyunu()</code></pre>

    <h4>🎨 Oyun Dizayn Prinsipləri</h4>
    <ul>
      <li><strong>Oyun Dövrü (Game Loop):</strong> while True ilə sonsuz dövr, break ilə çıxış</li>
      <li><strong>Vəziyyət İdarəetməsi:</strong> Bütün oyun məlumatlarını dəyişənlərdə saxla</li>
      <li><strong>Giriş Yoxlama:</strong> try/except ilə istifadəçi girişlərini yoxla</li>
      <li><strong>Qayda Mühərriki:</strong> Qazanma, uduzma, bərabərlik şərtlərini ayrı funksiyalarda yaz</li>
      <li><strong>Görünüş (Render):</strong> Taxta, xal, mesajları aydın göstər</li>
    </ul>

    <h4>🤖 AI Alqoritmləri</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Alqoritm</th>
        <th style="padding: 12px;">İstifadə Yeri</th>
        <th style="padding: 12px;">Mürəkkəblik</th>
      </tr>
      <tr>
        <td style="padding: 10px;">Random</td>
        <td style="padding: 10px;">Sadə rəqiblər</td>
        <td style="padding: 10px;">O(1)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">MiniMax</td>
        <td style="padding: 10px;">Strateji oyunlar (X-O, Şahmat)</td>
        <td style="padding: 10px;">O(b^d)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Backtracking</td>
        <td style="padding: 10px;">SudoKu, Labirent</td>
        <td style="padding: 10px;">O(N!)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Binary Search</td>
        <td style="padding: 10px;">Təxmin oyunları</td>
        <td style="padding: 10px;">O(log N)</td>
      </tr>
    </table>
  `,

  starterCode: {
    html: `<div class="game-algorithms-lab">
  <h2>🎮 Oyun Alqoritmləri Laboratoriyası</h2>
  
  <section class="demo-section">
    <h3>1. 🎯 Nömrə Təxmin Oyunu (Binary Search)</h3>
    <div class="number-guessing-game">
      <div class="game-setup">
        <label>Aralıq: 1-dən</label>
        <input type="number" id="maxRange" value="100" min="10" max="1000">
        <button onclick="startNumberGame()">🎮 Yeni Oyun</button>
      </div>
      
      <div class="game-board" id="numberGameBoard">
        <div class="secret-number">?</div>
        <div class="guess-history" id="guessHistory"></div>
        <div class="guess-input-area">
          <input type="number" id="userGuess" placeholder="Təxmininiz...">
          <button onclick="makeGuess()">Təxmin Et</button>
        </div>
        <div class="hint-display" id="hintDisplay"></div>
        <div class="attempts-counter">Cəhdlər: <span id="attemptCount">0</span>/7</div>
      </div>
      
      <div class="algorithm-visualization" id="binarySearchViz">
        <h4>Binary Search Alqoritmi:</h4>
        <div class="range-bar">
          <div class="range-low" id="rangeLow">1</div>
          <div class="range-mid" id="rangeMid">50</div>
          <div class="range-high" id="rangeHigh">100</div>
        </div>
        <div class="search-area" id="searchArea"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. ⚔️ Daş-Qayçı-Kağız</h3>
    <div class="rps-game">
      <div class="score-board">
        <div class="player-score">
          <span class="score-label">Siz</span>
          <span class="score-value" id="playerScore">0</span>
        </div>
        <div class="vs">VS</div>
        <div class="computer-score">
          <span class="score-label">Kompüter</span>
          <span class="score-value" id="computerScore">0</span>
        </div>
      </div>
      
      <div class="battle-arena" id="battleArena">
        <div class="choice-display player-choice" id="playerChoice">❓</div>
        <div class="result-text" id="rpsResult">Seçim edin!</div>
        <div class="choice-display computer-choice" id="computerChoice">❓</div>
      </div>
      
      <div class="choices">
        <button class="choice-btn rock" onclick="playRPS(1)">🪨<br>Daş</button>
        <button class="choice-btn scissors" onclick="playRPS(2)">✂️<br>Qayçı</button>
        <button class="choice-btn paper" onclick="playRPS(3)">📄<br>Kağız</button>
      </div>
      
      <div class="game-history" id="rpsHistory"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. ❌⭕ X-O Oyunu (MiniMax AI)</h3>
    <div class="tictactoe-game">
      <div class="game-mode">
        <label>Oyun Rejimi:</label>
        <select id="gameMode" onchange="resetTicTacToe()">
          <option value="ai">🤖 Kompüterə qarşı</option>
          <option value="pvp">👥 İki nəfər</option>
        </select>
        <label>Səviyyə:</label>
        <select id="aiLevel">
          <option value="easy">😊 Asan</option>
          <option value="hard" selected>🧠 Çətin (MiniMax)</option>
        </select>
      </div>
      
      <div class="turn-indicator" id="turnIndicator">Sizin növbəniz (X)</div>
      
      <div class="tictactoe-board" id="tictactoeBoard">
        <div class="cell" onclick="makeTicTacToeMove(0, 0)" data-row="0" data-col="0"></div>
        <div class="cell" onclick="makeTicTacToeMove(0, 1)" data-row="0" data-col="1"></div>
        <div class="cell" onclick="makeTicTacToeMove(0, 2)" data-row="0" data-col="2"></div>
        <div class="cell" onclick="makeTicTacToeMove(1, 0)" data-row="1" data-col="0"></div>
        <div class="cell" onclick="makeTicTacToeMove(1, 1)" data-row="1" data-col="1"></div>
        <div class="cell" onclick="makeTicTacToeMove(1, 2)" data-row="1" data-col="2"></div>
        <div class="cell" onclick="makeTicTacToeMove(2, 0)" data-row="2" data-col="0"></div>
        <div class="cell" onclick="makeTicTacToeMove(2, 1)" data-row="2" data-col="1"></div>
        <div class="cell" onclick="makeTicTacToeMove(2, 2)" data-row="2" data-col="2"></div>
      </div>
      
      <div class="game-status" id="tictactoeStatus"></div>
      <button class="reset-btn" onclick="resetTicTacToe()">🔄 Yenidən Başla</button>
      
      <div class="ai-thinking" id="aiThinking" style="display: none;">
        <div class="spinner"></div>
        <span>Kompüter düşünür...</span>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. 🧩 SudoKu Həlləyici (Backtracking)</h3>
    <div class="sudoku-solver">
      <div class="sudoku-grid" id="sudokuGrid"></div>
      
      <div class="sudoku-controls">
        <button onclick="generateSudoku()">🎲 Yeni SudoKu</button>
        <button onclick="solveSudoku()">🧠 Həll Et (Backtracking)</button>
        <button onclick="clearSudoku()">🗑️ Təmizlə</button>
      </div>
      
      <div class="solving-steps" id="solvingSteps">
        <h4>Həll Addımları:</h4>
        <div class="steps-log" id="stepsLog"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. 🃏 Yaddaş (Memory) Oyunu</h3>
    <div class="memory-game">
      <div class="memory-stats">
        <span>Cüdlər: <span id="memoryPairs">0</span>/8</span>
        <span>Cəhdlər: <span id="memoryAttempts">0</span></span>
        <span>Vaxt: <span id="memoryTimer">00:00</span></span>
      </div>
      
      <div class="memory-grid" id="memoryGrid"></div>
      
      <div class="memory-controls">
        <button onclick="initMemoryGame()">🔄 Yeni Oyun</button>
        <select id="memoryDifficulty" onchange="initMemoryGame()">
          <option value="4">4x4 (Asan)</option>
          <option value="6">6x6 (Çətin)</option>
        </select>
      </div>
    </div>
  </section>
</div>`,

    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.game-algorithms-lab {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #ffd700;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

h3 {
  color: #00ff88;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #00ff88;
  padding-left: 15px;
}

.demo-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Number Guessing Game */
.number-guessing-game {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.game-setup {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.game-setup label {
  color: #ffd700;
  font-weight: 600;
}

.game-setup input {
  width: 100px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.game-board {
  text-align: center;
  padding: 30px;
  background: #0d1117;
  border-radius: 12px;
  border: 2px solid #30363d;
}

.secret-number {
  font-size: 72px;
  color: #ffd700;
  margin-bottom: 20px;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.guess-history {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.guess-item {
  background: #30363d;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
}

.guess-item.high {
  border: 2px solid #ff6b6b;
  color: #ff6b6b;
}

.guess-item.low {
  border: 2px solid #00d9ff;
  color: #00d9ff;
}

.guess-input-area {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.guess-input-area input {
  width: 150px;
  background: #1a1a2e;
  border: 2px solid #00ff88;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
}

.hint-display {
  font-size: 24px;
  margin: 15px 0;
  min-height: 40px;
}

.attempts-counter {
  color: #8b949e;
  font-size: 16px;
}

.algorithm-visualization {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.range-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  position: relative;
  height: 60px;
}

.range-low, .range-high {
  color: #8b949e;
  font-weight: bold;
}

.range-mid {
  color: #ffd700;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.search-area {
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}

.search-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #30363d;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s;
}

.search-number.eliminated {
  background: #ff6b6b;
  opacity: 0.3;
}

.search-number.target {
  background: #00ff88;
  color: #000;
  font-weight: bold;
  transform: scale(1.2);
}

/* Rock Paper Scissors */
.rps-game {
  max-width: 600px;
  margin: 0 auto;
}

.score-board {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d1117;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.player-score, .computer-score {
  text-align: center;
}

.score-label {
  display: block;
  color: #8b949e;
  font-size: 14px;
  margin-bottom: 5px;
}

.score-value {
  font-size: 36px;
  font-weight: bold;
  color: #ffd700;
}

.vs {
  font-size: 24px;
  color: #ff6b6b;
  font-weight: bold;
}

.battle-arena {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin-bottom: 20px;
}

.choice-display {
  font-size: 64px;
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.result-text {
  font-size: 20px;
  font-weight: bold;
  color: #ffd700;
  text-align: center;
  min-width: 150px;
}

.choices {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.choice-btn {
  width: 100px;
  height: 100px;
  font-size: 40px;
  background: #30363d;
  border: 3px solid transparent;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.choice-btn:hover {
  transform: translateY(-5px);
  border-color: #00ff88;
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
}

.choice-btn.rock:hover { background: rgba(255, 107, 107, 0.2); }
.choice-btn.scissors:hover { background: rgba(0, 217, 255, 0.2); }
.choice-btn.paper:hover { background: rgba(255, 215, 0, 0.2); }

.game-history {
  max-height: 150px;
  overflow-y: auto;
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #30363d;
  font-size: 14px;
}

.history-item.win { color: #00ff88; }
.history-item.lose { color: #ff6b6b; }
.history-item.draw { color: #8b949e; }

/* Tic Tac Toe */
.tictactoe-game {
  max-width: 500px;
  margin: 0 auto;
}

.game-mode {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.game-mode label {
  color: #00ff88;
}

.game-mode select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
}

.turn-indicator {
  text-align: center;
  font-size: 18px;
  color: #ffd700;
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 8px;
}

.tictactoe-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  background: #30363d;
  padding: 10px;
  border-radius: 12px;
}

.cell {
  aspect-ratio: 1;
  background: #0d1117;
  border: none;
  border-radius: 8px;
  font-size: 48px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.cell:hover:not(.taken) {
  background: #1a1a2e;
  transform: scale(0.95);
}

.cell.taken {
  cursor: not-allowed;
}

.cell.x {
  color: #00d9ff;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

.cell.o {
  color: #ff6b6b;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
}

.cell.winning {
  background: rgba(0, 255, 136, 0.3);
  animation: winPulse 0.5s ease infinite alternate;
}

@keyframes winPulse {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.game-status {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  min-height: 40px;
}

.reset-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.ai-thinking {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  color: #8b949e;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid #30363d;
  border-top-color: #00ff88;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Sudoku */
.sudoku-solver {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.sudoku-grid {
  display: grid;
  grid-template-columns: repeat(9, 40px);
  grid-template-rows: repeat(9, 40px);
  gap: 1px;
  background: #30363d;
  padding: 3px;
  border-radius: 8px;
}

.sudoku-cell {
  background: #0d1117;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.sudoku-cell:nth-child(3n):not(:nth-child(9n)) {
  border-right: 2px solid #ff6b6b;
}

.sudoku-cell:nth-child(n+19):nth-child(-n+27),
.sudoku-cell:nth-child(n+46):nth-child(-n+54) {
  border-bottom: 2px solid #ff6b6b;
}

.sudoku-cell:hover {
  background: #1a1a2e;
}

.sudoku-cell.fixed {
  color: #8b949e;
  background: #161b22;
}

.sudoku-cell.solved {
  color: #00ff88;
  animation: popIn 0.3s ease;
}

@keyframes popIn {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.sudoku-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.solving-steps {
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

.steps-log {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.step-entry {
  padding: 5px;
  border-left: 3px solid #00ff88;
  padding-left: 10px;
  margin: 5px 0;
}

/* Memory Game */
.memory-game {
  text-align: center;
}

.memory-stats {
  display: flex;
  justify-content: space-around;
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 16px;
}

.memory-stats span {
  color: #ffd700;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 0 auto 20px;
}

.memory-grid.hard {
  grid-template-columns: repeat(6, 1fr);
  max-width: 600px;
}

.memory-card {
  aspect-ratio: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  transition: all 0.3s;
  transform-style: preserve-3d;
}

.memory-card:hover {
  transform: scale(1.05);
}

.memory-card.flipped {
  background: #0d1117;
  border: 2px solid #00ff88;
  transform: rotateY(180deg);
}

.memory-card.matched {
  background: rgba(0, 255, 136, 0.2);
  border: 2px solid #00ff88;
  cursor: default;
  animation: matchPulse 0.5s ease;
}

@keyframes matchPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.memory-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
}

button {
  background: linear-gradient(135deg, #00ff88 0%, #00b359 100%);
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.4);
}

@media (max-width: 768px) {
  .sudoku-grid {
    grid-template-columns: repeat(9, 35px);
    grid-template-rows: repeat(9, 35px);
  }
  .sudoku-cell {
    font-size: 16px;
  }
  .choice-display {
    font-size: 48px;
  }
  .secret-number {
    font-size: 48px;
  }
}`,

    js: `// Game Algorithms Lab JavaScript

// Number Guessing Game
let secretNumber;
let attempts;
let guessHistory;
let lowBound;
let highBound;

function startNumberGame() {
  const maxRange = parseInt(document.getElementById('maxRange').value) || 100;
  secretNumber = Math.floor(Math.random() * maxRange) + 1;
  attempts = 0;
  guessHistory = [];
  lowBound = 1;
  highBound = maxRange;
  
  document.getElementById('guessHistory').innerHTML = '';
  document.getElementById('hintDisplay').textContent = 'Təxmin edin!';
  document.getElementById('attemptCount').textContent = '0';
  document.getElementById('userGuess').value = '';
  document.getElementById('rangeHigh').textContent = maxRange;
  document.getElementById('rangeMid').textContent = Math.floor((1 + maxRange) / 2);
  
  // Initialize search area visualization
  const searchArea = document.getElementById('searchArea');
  searchArea.innerHTML = '';
  for (let i = 1; i <= maxRange; i++) {
    const num = document.createElement('div');
    num.className = 'search-number';
    num.textContent = i;
    num.id = 'num-' + i;
    searchArea.appendChild(num);
  }
  
  console.log('Game started! Secret:', secretNumber); // For debugging
}

function makeGuess() {
  const guessInput = document.getElementById('userGuess');
  const guess = parseInt(guessInput.value);
  
  if (isNaN(guess)) {
    alert('Zəhmət olmasa ədəd daxil edin!');
    return;
  }
  
  attempts++;
  document.getElementById('attemptCount').textContent = attempts;
  
  const historyDiv = document.getElementById('guessHistory');
  const guessItem = document.createElement('div');
  guessItem.className = 'guess-item';
  guessItem.textContent = guess;
  
  const hintDisplay = document.getElementById('hintDisplay');
  
  if (guess === secretNumber) {
    guessItem.style.background = '#00ff88';
    guessItem.style.color = '#000';
    historyDiv.appendChild(guessItem);
    hintDisplay.innerHTML = '🎉 Təbriklər! ' + attempts + ' cəhddə tapdınız!';
    hintDisplay.style.color = '#00ff88';
    document.getElementById('num-' + guess).classList.add('target');
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    guessItem.classList.add('low');
    historyDiv.appendChild(guessItem);
    hintDisplay.innerHTML = '📈 ' + guess + ' çox aşağı! Daha YUXARI!';
    hintDisplay.style.color = '#00d9ff';
    lowBound = Math.max(lowBound, guess + 1);
    // Eliminate visual numbers
    for (let i = 1; i <= guess; i++) {
      document.getElementById('num-' + i).classList.add('eliminated');
    }
  } else {
    guessItem.classList.add('high');
    historyDiv.appendChild(guessItem);
    hintDisplay.innerHTML = '📉 ' + guess + ' çox yüksək! Daha AŞAĞI!';
    hintDisplay.style.color = '#ff6b6b';
    highBound = Math.min(highBound, guess - 1);
    // Eliminate visual numbers
    for (let i = guess; i <= parseInt(document.getElementById('maxRange').value); i++) {
      document.getElementById('num-' + i).classList.add('eliminated');
    }
  }
  
  // Update binary search visualization
  document.getElementById('rangeLow').textContent = lowBound;
  document.getElementById('rangeHigh').textContent = highBound;
  document.getElementById('rangeMid').textContent = Math.floor((lowBound + highBound) / 2);
  
  guessInput.value = '';
  guessInput.focus();
}

// Rock Paper Scissors
let playerScore = 0;
let computerScore = 0;
const choices = ['🪨', '✂️', '📄'];
const choiceNames = ['Daş', 'Qayçı', 'Kağız'];

function playRPS(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  
  // Display choices
  document.getElementById('playerChoice').textContent = choices[playerChoice - 1];
  document.getElementById('computerChoice').textContent = choices[computerChoice - 1];
  
  // Determine winner
  let result;
  let resultClass;
  
  if (playerChoice === computerChoice) {
    result = '🤝 Bərabərə!';
    resultClass = 'draw';
  } else if (
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 3) ||
    (playerChoice === 3 && computerChoice === 1)
  ) {
    result = '🎉 Siz qalib gəldiniz!';
    resultClass = 'win';
    playerScore++;
  } else {
    result = '🤖 Kompüter qalib gəldi!';
    resultClass = 'lose';
    computerScore++;
  }
  
  document.getElementById('rpsResult').textContent = result;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
  
  // Add to history
  const historyDiv = document.getElementById('rpsHistory');
  const historyItem = document.createElement('div');
  historyItem.className = 'history-item ' + resultClass;
  historyItem.innerHTML = \`
    <span>\${choices[playerChoice-1]} vs \${choices[computerChoice-1]}</span>
    <span>\${result}</span>
  \`;
  historyDiv.insertBefore(historyItem, historyDiv.firstChild);
}

// Tic Tac Toe
let tictactoeBoard = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = 'X';
let gameActive = true;
let gameMode = 'ai';

function resetTicTacToe() {
  tictactoeBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer = 'X';
  gameActive = true;
  gameMode = document.getElementById('gameMode').value;
  
  document.querySelectorAll('.cell').forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });
  
  document.getElementById('tictactoeStatus').textContent = '';
  document.getElementById('turnIndicator').textContent = 'Sizin növbəniz (X)';
  document.getElementById('aiThinking').style.display = 'none';
}

function makeTicTacToeMove(row, col) {
  if (!gameActive || tictactoeBoard[row][col] !== '') return;
  
  // Player move
  tictactoeBoard[row][col] = currentPlayer;
  const cell = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
  cell.textContent = currentPlayer;
  cell.classList.add('taken', currentPlayer.toLowerCase());
  
  if (checkWinner()) return;
  
  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateTurnIndicator();
  
  // AI move
  if (gameMode === 'ai' && currentPlayer === 'O' && gameActive) {
    document.getElementById('aiThinking').style.display = 'flex';
    setTimeout(makeAIMove, 1000);
  }
}

function updateTurnIndicator() {
  const indicator = document.getElementById('turnIndicator');
  if (gameMode === 'ai') {
    indicator.textContent = currentPlayer === 'X' ? 'Sizin növbəniz (X)' : 'Kompüter düşünür (O)';
  } else {
    indicator.textContent = (currentPlayer === 'X' ? 'Birinci' : 'İkinci') + ' oyunçunun növbəsi (' + currentPlayer + ')';
  }
}

function makeAIMove() {
  if (!gameActive) return;
  
  const level = document.getElementById('aiLevel').value;
  let move;
  
  if (level === 'easy') {
    // Random move
    const available = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tictactoeBoard[i][j] === '') available.push({r: i, c: j});
      }
    }
    move = available[Math.floor(Math.random() * available.length)];
  } else {
    // MiniMax algorithm
    move = findBestMove();
  }
  
  makeTicTacToeMove(move.r, move.c);
  document.getElementById('aiThinking').style.display = 'none';
}

function findBestMove() {
  let bestVal = -1000;
  let bestMove = {r: -1, c: -1};
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tictactoeBoard[i][j] === '') {
        tictactoeBoard[i][j] = 'O';
        let moveVal = minimax(0, false);
        tictactoeBoard[i][j] = '';
        
        if (moveVal > bestVal) {
          bestMove = {r: i, c: j};
          bestVal = moveVal;
        }
      }
    }
  }
  return bestMove;
}

function minimax(depth, isMax) {
  const score = evaluateBoard();
  
  if (score === 10) return score - depth;
  if (score === -10) return score + depth;
  if (!isMovesLeft()) return 0;
  
  if (isMax) {
    let best = -1000;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tictactoeBoard[i][j] === '') {
          tictactoeBoard[i][j] = 'O';
          best = Math.max(best, minimax(depth + 1, false));
          tictactoeBoard[i][j] = '';
        }
      }
    }
    return best;
  } else {
    let best = 1000;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tictactoeBoard[i][j] === '') {
          tictactoeBoard[i][j] = 'X';
          best = Math.min(best, minimax(depth + 1, true));
          tictactoeBoard[i][j] = '';
        }
      }
    }
    return best;
  }
}

function evaluateBoard() {
  // Check rows, columns, diagonals
  for (let i = 0; i < 3; i++) {
    if (tictactoeBoard[i][0] === tictactoeBoard[i][1] && tictactoeBoard[i][1] === tictactoeBoard[i][2]) {
      if (tictactoeBoard[i][0] === 'O') return 10;
      if (tictactoeBoard[i][0] === 'X') return -10;
    }
    if (tictactoeBoard[0][i] === tictactoeBoard[1][i] && tictactoeBoard[1][i] === tictactoeBoard[2][i]) {
      if (tictactoeBoard[0][i] === 'O') return 10;
      if (tictactoeBoard[0][i] === 'X') return -10;
    }
  }
  
  if (tictactoeBoard[0][0] === tictactoeBoard[1][1] && tictactoeBoard[1][1] === tictactoeBoard[2][2]) {
    if (tictactoeBoard[0][0] === 'O') return 10;
    if (tictactoeBoard[0][0] === 'X') return -10;
  }
  if (tictactoeBoard[0][2] === tictactoeBoard[1][1] && tictactoeBoard[1][1] === tictactoeBoard[2][0]) {
    if (tictactoeBoard[0][2] === 'O') return 10;
    if (tictactoeBoard[0][2] === 'X') return -10;
  }
  
  return 0;
}

function isMovesLeft() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tictactoeBoard[i][j] === '') return true;
    }
  }
  return false;
}

function checkWinner() {
  const winningCombos = [
    [[0,0], [0,1], [0,2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]], // rows
    [[0,0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]], // cols
    [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]] // diagonals
  ];
  
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (tictactoeBoard[a[0]][a[1]] && 
        tictactoeBoard[a[0]][a[1]] === tictactoeBoard[b[0]][b[1]] && 
        tictactoeBoard[a[0]][a[1]] === tictactoeBoard[c[0]][c[1]]) {
      
      gameActive = false;
      const winner = tictactoeBoard[a[0]][a[1]];
      document.getElementById('tictactoeStatus').innerHTML = 
        winner === 'X' ? '🎉 Siz qalib gəldiniz!' : '🤖 Kompüter qalib gəldi!';
      
      // Highlight winning cells
      combo.forEach(([r, c]) => {
        document.querySelector('[data-row="' + r + '"][data-col="' + c + '"]').classList.add('winning');
      });
      return true;
    }
  }
  
  if (!isMovesLeft()) {
    gameActive = false;
    document.getElementById('tictactoeStatus').textContent = '🤝 Bərabərə!';
    return true;
  }
  
  return false;
}

// Sudoku
let sudokuGrid = [];

function generateSudoku() {
  // Simple preset puzzle
  const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  sudokuGrid = puzzle.map(row => [...row]);
  renderSudoku();
  document.getElementById('stepsLog').innerHTML = '';
}

function renderSudoku() {
  const grid = document.getElementById('sudokuGrid');
  grid.innerHTML = '';
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('input');
      cell.type = 'text';
      cell.className = 'sudoku-cell';
      cell.maxLength = 1;
      
      if (sudokuGrid[i][j] !== 0) {
        cell.value = sudokuGrid[i][j];
        cell.classList.add('fixed');
        cell.readOnly = true;
      } else {
        cell.value = '';
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.oninput = function() {
          if (!/^[1-9]$/.test(this.value)) this.value = '';
        };
      }
      
      grid.appendChild(cell);
    }
  }
}

function solveSudoku() {
  // Read current state
  const inputs = document.querySelectorAll('.sudoku-cell:not(.fixed)');
  inputs.forEach(input => {
    const r = parseInt(input.dataset.row);
    const c = parseInt(input.dataset.col);
    sudokuGrid[r][c] = input.value ? parseInt(input.value) : 0;
  });
  
  const stepsLog = document.getElementById('stepsLog');
  stepsLog.innerHTML = '<div class="step-entry">Backtracking alqoritmi başladı...</div>';
  
  if (solveSudokuHelper(0, 0)) {
    renderSolvedSudoku();
    stepsLog.innerHTML += '<div class="step-entry" style="border-color: #00ff88;">✅ Həll tapıldı!</div>';
  } else {
    stepsLog.innerHTML += '<div class="step-entry" style="border-color: #ff6b6b;">❌ Həll mümkün deyil!</div>';
  }
}

function solveSudokuHelper(row, col) {
  if (row === 9) return true;
  if (col === 9) return solveSudokuHelper(row + 1, 0);
  if (sudokuGrid[row][col] !== 0) return solveSudokuHelper(row, col + 1);
  
  for (let num = 1; num <= 9; num++) {
    if (isValidSudoku(row, col, num)) {
      sudokuGrid[row][col] = num;
      
      if (solveSudokuHelper(row, col + 1)) return true;
      
      sudokuGrid[row][col] = 0; // Backtrack
    }
  }
  
  return false;
}

function isValidSudoku(row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (sudokuGrid[row][x] === num) return false;
  }
  
  // Check column
  for (let x = 0; x < 9; x++) {
    if (sudokuGrid[x][col] === num) return false;
  }
  
  // Check 3x3 box
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudokuGrid[i + startRow][j + startCol] === num) return false;
    }
  }
  
  return true;
}

function renderSolvedSudoku() {
  const cells = document.querySelectorAll('.sudoku-cell');
  let idx = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!cells[idx].classList.contains('fixed')) {
        cells[idx].value = sudokuGrid[i][j];
        cells[idx].classList.add('solved');
      }
      idx++;
    }
  }
}

function clearSudoku() {
  sudokuGrid = Array(9).fill().map(() => Array(9).fill(0));
  renderSudoku();
  document.getElementById('stepsLog').innerHTML = '';
}

// Memory Game
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryAttempts = 0;
let memoryTimer = 0;
let timerInterval;

function initMemoryGame() {
  const size = parseInt(document.getElementById('memoryDifficulty').value);
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  grid.className = 'memory-grid' + (size === 6 ? ' hard' : '');
  
  // Create pairs
  const symbols = ['🎮', '🎯', '🎲', '🎸', '🎨', '🎭', '🎪', '🎬'].slice(0, (size * size) / 2);
  memoryCards = [...symbols, ...symbols];
  
  // Shuffle
  for (let i = memoryCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [memoryCards[i], memoryCards[j]] = [memoryCards[j], memoryCards[i]];
  }
  
  // Create grid
  memoryCards.forEach((symbol, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    card.dataset.symbol = symbol;
    card.onclick = () => flipMemoryCard(card);
    grid.appendChild(card);
  });
  
  // Reset stats
  matchedPairs = 0;
  memoryAttempts = 0;
  memoryTimer = 0;
  flippedCards = [];
  updateMemoryStats();
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    memoryTimer++;
    updateMemoryStats();
  }, 1000);
}

function flipMemoryCard(card) {
  if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
    return;
  }
  
  card.classList.add('flipped');
  card.textContent = card.dataset.symbol;
  flippedCards.push(card);
  
  if (flippedCards.length === 2) {
    memoryAttempts++;
    updateMemoryStats();
    checkMemoryMatch();
  }
}

function checkMemoryMatch() {
  const [card1, card2] = flippedCards;
  
  if (card1.dataset.symbol === card2.dataset.symbol) {
    setTimeout(() => {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedPairs++;
      updateMemoryStats();
      flippedCards = [];
      
      if (matchedPairs === memoryCards.length / 2) {
        clearInterval(timerInterval);
        setTimeout(() => {
          alert('🎉 Təbriklər! ' + memoryAttempts + ' cəhddə bitirdiniz!');
        }, 500);
      }
    }, 500);
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.textContent = '';
      card2.textContent = '';
      flippedCards = [];
    }, 1000);
  }
}

function updateMemoryStats() {
  document.getElementById('memoryPairs').textContent = matchedPairs;
  document.getElementById('memoryAttempts').textContent = memoryAttempts;
  const minutes = Math.floor(memoryTimer / 60).toString().padStart(2, '0');
  const seconds = (memoryTimer % 60).toString().padStart(2, '0');
  document.getElementById('memoryTimer').textContent = minutes + ':' + seconds;
}

// Initialize
generateSudoku();
initMemoryGame();
console.log('Game Algorithms Lab loaded!');`
  },

  exercise: {
    title: "🏰 Labirent Qaçış Oyunu (Backtracking + Pathfinding)",
    description: "Tam funksional labirent oyunu yaradın. İstifadəçi 'WASD' ilə idarə etsin, kompüter isə backtracking alqoritmi ilə labirenti həll etsin və ən qısa yolu tapsın.",
    requirements: [
      "2D list istifadə edərək labirent strukturu yaradın (0 - yol, 1 - divar)",
      "İstifadəçi girişini tutmaq üçün input() və ya klaviatura idarəetməsi",
      "Labirenti göstərmək üçün print() və ya vizual interfeys",
      "Backtracking alqoritmi ilə labirent həlli (rekursiv funksiya)",
      "Qazanma şərti: başlanğıc nöqtədən çıxışa çatmaq",
      "Bonus: BFS (Breadth-First Search) ilə ən qısa yolu tapmaq",
      "Xal sistemi: hərəkət sayına görə xal vermək",
      "Müxtəlif səviyyələr (asan, orta, çətin labirentlər)",
      "Oyun bitdikdə 'Yenidən oyna' seçimi",
      "Xəta idarəetməsi: sərfəli olmayan hərəkətləri tutmaq"
    ],
    starterCode: `# Labirent Qaçış Oyunu
import random
import time
import os

def terminal_temizle():
    """Terminal ekranını təmizləyir"""
    os.system('cls' if os.name == 'nt' else 'clear')

def labirent_yarat(olcu=10):
    """
    Təsadüfi labirent yaradır (Recursive Backtracking alqoritmi ilə)
    0 = yol, 1 = divar, S = başlanğıc, E = çıxış
    """
    # Kodunuzu bura yazın
    # İpucu: Recursive backtracking ilə labirent yaradın
    pass

def labirent_goster(labirent, oyuncu_pozisya, yol=None):
    """
    Labirenti gözəl formada göstərir
    Oyuncu 'P', yol '.', divar '█'
    """
    # Kodunuzu bura yazın
    pass

def hereket_et(labirent, movqe, istiqamet):
    """
    İstiqamətə görə yeni mövqe qaytarır
    'w' - yuxarı, 's' - aşağı, 'a' - sol, 'd' - sağ
    """
    # Kodunuzu bura yazın
    # Sərhəd yoxlaması və divar yoxlaması
    pass

def labirent_hell_et(labirent, baslangic, cixis):
    """
    Backtracking alqoritmi ilə labirenti həll edir
    Yolu list olaraq qaytarır
    """
    # Rekursiv backtracking implementasiyası
    # İpucu: 
    # 1. Əgər mövqe çıxışdırsa, uğur
    # 2. Əgər mövqe divardırsa və ya ziyarət edilibsə, uğursuz
    # 3. Mövqeni ziyarət edilmiş kimi işarələ
    # 4. Bütün istiqamətləri yoxla (yuxarı, aşağı, sol, sağ)
    # 5. Əgər heç biri uğurlu deyilsə, geri qaytar (backtrack)
    pass

def en_qisa_yol(labirent, baslangic, cixis):
    """
    BFS (Breadth-First Search) alqoritmi ilə ən qısa yolu tapır
    """
    # Queue istifadə edərək BFS implementasiyası
    # Hər nöqtə üçün (x, y, yol) saxlayın
    pass

def oyun_dongusu():
    """
    Əsas oyun döngüsü
    """
    print("🏰 LABİRENT QAÇIŞ OYUNU 🏰")
    print("=" * 40)
    
    while True:
        print("\n1. Yeni Oyun")
        print("2. Labirenti Kompüter Həll Etsin")
        print("3. Ən Qısa Yolu Göstər")
        print("4. Çıxış")
        
        secim = input("\nSeçiminiz: ").strip()
        
        if secim == "1":
            # Yeni oyun başlat
            # Labirent yarat, oyunçu idarə etsin
            pass
        elif secim == "2":
            # Backtracking ilə həll göstər
            pass
        elif secim == "3":
            # BFS ilə ən qısa yolu göstər
            pass
        elif secim == "4":
            print("Sağ olun!")
            break

if __name__ == "__main__":
    oyun_dongusu()`,
  },

  quiz: [
    {
      question: "Binary Search alqoritminin mürəkkəbliyi nədir?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correctAnswer: 1
    },
    {
      question: "MiniMax alqoritmi hansı tip oyunlarda istifadə olunur?",
      options: ["Tək oyunçulu", "İki oyunçulu, növbəli", "Real-time", "Təsadüfi"],
      correctAnswer: 1
    },
    {
      question: "Backtracking alqoritminin əsas xüsusiyyəti nədir?",
      options: ["Həmişə ən yaxşı həlli tapır", "Uğursuz yolda geri qayıdır", "Yalnız irəli gedir", "Təsadüfi seçim edir"],
      correctAnswer: 1
    },
    {
      question: "Tik-Tak-Toe oyununda qalibiyyət şərtləri necə yoxlanılır?",
      options: ["Yalnız sətirlər", "Sətir, sütun və diaqonal", "Yalnız diaqonal", "Təsadüfi"],
      correctAnswer: 1
    },
    {
      question: "Oyun vəziyyətini (state) saxlamaq üçün ən uyğun struktur hansıdır?",
      options: ["String", "Integer", "List və ya Dictionary", "Float"],
      correctAnswer: 2
    },
    {
      question: "Daş-Qayçı-Kağız oyununda neçə mümkün nəticə var?",
      options: ["3", "6", "9", "2"],
      correctAnswer: 2
    },
    {
      question: "SudoKu həll edərkən hansı alqoritmdən istifadə olunur?",
      options: ["Binary Search", "Backtracking", "Bubble Sort", "MiniMax"],
      correctAnswer: 1
    },
    {
      question: "Oyun döngüsü (Game Loop) nədir?",
      options: ["Bir dəfə işləyən kod", "Sonsuz təkrarlanan əsas döngü", "Yalnız başlanğıcda işləyən kod", "Təsadüfi işləyən kod"],
      correctAnswer: 1
    },
    {
      question: "Yaddaş (Memory) oyununda cütləri tapmaq üçün hansı məlumat strukturu lazımdır?",
      options: ["Stack", "Queue", "2D List/Grid", "Tree"],
      correctAnswer: 2
    },
    {
      question: "Labirent həll edərkən 'visited' (ziiyarət edilmiş) dəstinin məqsədi nədir?",
      options: ["Xalları saymaq", "Eyni yerdən keçməmək", "Oyunu sürətləndirmək", "Təsadüfi hərəkət"],
      correctAnswer: 1
    }
  ]
};

export default topicai8;