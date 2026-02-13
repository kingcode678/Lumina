export const topicai6 = {
  id: 6,
  title: "Fayllarla iş (Read/Write)",
  duration: "100 dəq",
  isFree: false,
  
  content: `
    <h4>📁 Fayl Nədir və Niyə Lazımdır?</h4>
    <p>Proqram işləyəndə bütün məlumatlar yaddaşda (RAM) saxlanılır. Amma kompüteri söndürdükdə bu məlumatlar itir. <strong>Fayl</strong> - məlumatları diskdə (hard disk, SSD) saxlamağın üsuludur. Beləliklə, proqram bağlansa belə, məlumatlar qalır.</p>

    <p><strong>Real həyat nümunələri:</strong>
    <br>• Oyunlarda xallarınızın saxlanması
    <br>• Word sənədinizi yadda saxlamaq
    <br>• Telefon kontaktlarının saxlanması
    <br>• Loq faylları (nə baş verdiyinin qeydləri)</p>

    <h4>🛤️ Fayl Yolları (Paths)</h4>
    <p>Fayla çatmaq üçün ünvan lazımdır. İki növ yol var:</p>

    <pre><code># Mutlaq (Absolute) yol - Tam ünvan
windows_yol = "C:/Users/Ali/Desktop/melumat.txt"
linux_yol = "/home/ali/melumat.txt"

# Nisbi (Relative) yol - Cari qovluqdan
"melumat.txt"           # Eyni qovluqda
"./qovluq/melumat.txt"  # Alt qovluqda
"../melumat.txt"        # Bir üst qovluqda</code></pre>

    <h4>📖 Fayl Açmaq və Oxumaq</h4>
    <p>Python-da fayl işləmək üçün əvvəlcə onu <strong>açmaq</strong> lazımdır. Açarkən rejim (mode) seçirik:</p>

    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Rejim</th>
        <th style="padding: 12px;">Mənası</th>
        <th style="padding: 12px;">İcazə</th>
      </tr>
      <tr>
        <td style="padding: 10px;">'r'</td>
        <td style="padding: 10px;">Read (Oxu)</td>
        <td style="padding: 10px;">Yalnız oxumaq</td>
      </tr>
      <tr>
        <td style="padding: 10px;">'w'</td>
        <td style="padding: 10px;">Write (Yaz)</td>
        <td style="padding: 10px;">Yazmaq (varsa silir)</td>
      </tr>
      <tr>
        <td style="padding: 10px;">'a'</td>
        <td style="padding: 10px;">Append (Əlavə et)</td>
        <td style="padding: 10px;">Sonuna əlavə etmək</td>
      </tr>
      <tr>
        <td style="padding: 10px;">'x'</td>
        <td style="padding: 10px;">Create (Yarat)</td>
        <td style="padding: 10px;">Yalnız yeni yaratmaq</td>
      </tr>
      <tr>
        <td style="padding: 10px;">'b'</td>
        <td style="padding: 10px;">Binary (İkili)</td>
        <td style="padding: 10px;">Şəkil, video üçün ('rb', 'wb')</td>
      </tr>
    </table>

    <h4>✍️ Əsas Oxuma Üsulları</h4>
    <pre><code># 1. Bütün məzmunu birdən oxu (kiçik fayllar üçün)
fayl = open("melumat.txt", "r", encoding="utf-8")
məzmun = fayl.read()  # Bütün mətni bir string kimi oxuyur
fayl.close()          # Faylı bağlamaq MƏCBURİ!

print(məzmun)

# 2. Sətir-sətir oxu (böyük fayllar üçün)
fayl = open("melumat.txt", "r", encoding="utf-8")
for sətir in fayl:
    print(sətir.strip())  # strip() sətirsonu \n-i silir
fayl.close()

# 3. readlines() - Bütün sətirləri list-ə oxuyur
fayl = open("melumat.txt", "r", encoding="utf-8")
sətirlər = fayl.readlines()  # ["Birinci sətir\\n", "İkinci..."]
fayl.close()</code></pre>

    <h4>🔒 with Statement - Təhlükəsiz İşləmə</h4>
    <p>Hər dəfə <code>close()</code> yazmağı unutmaq olar. <code>with</code> bloku bitəndə fayl avtomatik bağlanır.</p>

    <pre><code># Ən yaxşı praktika - with istifadə edin!
with open("melumat.txt", "r", encoding="utf-8") as fayl:
    məzmun = fayl.read()
    # Blok bitəndə fayl avtomatik bağlanır

# Fayl artıq bağlıdır, burada işlətmək olmaz</code></pre>

    <h4>✏️ Fayla Yazmaq</h4>
    <pre><code># 'w' rejimi - Var olanı silir, yenisini yaradır
with open("yeni.txt", "w", encoding="utf-8") as f:
    f.write("Salam, Dünya!\\n")
    f.write("İkinci sətir.\\n")

# 'a' rejimi - Sonuna əlavə edir (append)
with open("yeni.txt", "a", encoding="utf-8") as f:
    f.write("Bu sona əlavə edildi.\\n")

# Birdən çox sətir yazmaq
sətirlər = ["Bir\\n", "İki\\n", "Üç\\n"]
with open("siyahi.txt", "w", encoding="utf-8") as f:
    f.writelines(sətirlər)</code></pre>

    <h4>📂 Qovluq və Fayl Əməliyyatları (os modulu)</h4>
    <p>Faylları idarə etmək üçün <code>os</code> və <code>shutil</code> modullarından istifadə edirik.</p>

    <pre><code>import os
import shutil

# Mövcudluğu yoxlamaq
if os.path.exists("melumat.txt"):
    print("Fayl var!")
else:
    print("Fayl yoxdur!")

# Qovluq yaratmaq
os.mkdir("yeni_qovluq")           # Tək qovluq
os.makedirs("a/b/c", exist_ok=True)  # İç-içə qovluqlar (varsa xəta verməz)

# Fayl silmək
os.remove("kohne.txt")            # Fayl sil
os.rmdir("bos_qovluq")            # Boş qovluq sil
shutil.rmtree("qovluq")           # Dolu qovluq sil (EHTİYATLI!)

# Ad dəyişdirmək
os.rename("kohne_ad.txt", "yeni_ad.txt")

# Fayl haqqında məlumat
print(os.path.getsize("melumat.txt"))  # Ölçü (bayt)
print(os.path.isfile("melumat.txt"))   # Fayldırmı?
print(os.path.isdir("qovluq"))         # Qovluqdurmu?</code></pre>

    <h4>📊 CSV Faylları - Cədvəl Məlumatları</h4>
    <p>Excel kimi cədvəl məlumatları üçün <strong>CSV</strong> (Comma Separated Values) formatı istifadə olunur.</p>

    <pre><code>import csv

# CSV yazmaq
with open("telebeler.csv", "w", newline="", encoding="utf-8") as f:
    yazıcı = csv.writer(f)
    
    # Başlıq sətri
    yazıcı.writerow(["Ad", "Soyad", "Bal"])
    
    # Məlumatlar
    yazıcı.writerow(["Əli", "Məmmədov", 85])
    yazıcı.writerow(["Leyla", "Quliyeva", 92])

# CSV oxumaq
with open("telebeler.csv", "r", encoding="utf-8") as f:
    oxuyucu = csv.reader(f)
    for sətir in oxuyucu:
        print(f"{sətir[0]} {sətir[1]}: {sətir[2]}")

# Dictionary kimi oxumaq (sütun adları ilə)
with open("telebeler.csv", "r", encoding="utf-8") as f:
    oxuyucu = csv.DictReader(f)
    for sətir in oxuyucu:
        print(f"{sətir['Ad']} - {sətir['Bal']}")</code></pre>

    <h4>📓 JSON Faylları - Strukturlu Məlumat</h4>
    <p>Dictionary və list-ləri saxlamaq üçün <strong>JSON</strong> (JavaScript Object Notation) əla formatdır.</p>

    <pre><code>import json

# Dictionary yaradaq
telebe = {
    "ad": "Əli",
    "yas": 20,
    "fennler": ["Riyaziyyat", "Fizika"],
    "bal": {"riyaz": 95, "fizika": 88}
}

# JSON faylına yazmaq
with open("telebe.json", "w", encoding="utf-8") as f:
    json.dump(telebe, f, ensure_ascii=False, indent=4)
    # ensure_ascii=False -> Azərbaycan əlifbasını düzgün saxlayır
    # indent=4 -> Gözəl formatlaşdırır

# JSON faylından oxumaq
with open("telebe.json", "r", encoding="utf-8") as f:
    melumat = json.load(f)
    print(melumat["ad"])        # Əli
    print(melumat["fennler"])   # ['Riyaziyyat', 'Fizika']</code></pre>

    <h4>🖼️ Binary Fayllar (Şəkillər, PDF)</h4>
    <p>Mətn olmayan fayllar (şəkillər, səs, video) binary rejimdə oxunur.</p>

    <pre><code># Şəkil kopyalamaq (binary)
with open("sekil.jpg", "rb") as mənbə:
    məzmun = mənbə.read()
    
with open("sekil_kopya.jpg", "wb") as hədəf:
    hədəf.write(məzmun)

# Hətta mətn faylını da binary oxuya bilərik
with open("melumat.txt", "rb") as f:
    baytlar = f.read()
    print(baytlar)  # b'Salam...' (bytes obyekti)</code></pre>

    <h4>🛡️ Xəta İdarəetməsi ilə Fayl İşləmə</h4>
    <p>Fayl əməliyyatlarında çox xəta ola bilər: fayl yoxdur, icazə yoxdur, disk dolub və s.</p>

    <pre><code>try:
    with open("olmayan_fayl.txt", "r") as f:
        məzmun = f.read()
except FileNotFoundError:
    print("Xəta: Fayl tapılmadı!")
except PermissionError:
    print("Xəta: İcazə yoxdur!")
except Exception as e:
    print(f"Gözlənilməz xəta: {e}")
else:
    print("Fayl uğurla oxundu!")
finally:
    print("Əməliyyat bitdi.")</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <code>encoding="utf-8"</code> istifadə edin (Azərbaycan əlifbası üçün)</li>
      <li>Böyük faylları <code>read()</code> ilə birdən oxumayın, <code>for sətir in fayl:</code> istifadə edin</li>
      <li>Həmişə <code>with</code> istifadə edin, <code>close()</code> unutmaq yaddaş sızmasına səbəb olar</li>
      <li>Kritik əməliyyatlardan əvvəl <code>os.path.exists()</code> ilə yoxlayın</li>
      <li>CSV işləyərkən <code>newline=""</code> parametri vacibdir (Windows-da)</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="python-files">
  <h2>📂 Python Fayl İdarəetmə Lab</h2>
  
  <section class="demo-section">
    <h3>1. Fayl Explorer Simulyatoru</h3>
    <div class="file-explorer">
      <div class="folder-tree" id="folderTree">
        <div class="folder-item root">
          <span class="icon">📁</span> Layihə/
          <div class="folder-content">
            <div class="folder-item" onclick="selectFile('melumat.txt')">
              <span class="icon">📄</span> melumat.txt
            </div>
            <div class="folder-item" onclick="selectFile('telebeler.csv')">
              <span class="icon">📊</span> telebeler.csv
            </div>
            <div class="folder-item" onclick="selectFile('config.json')">
              <span class="icon">⚙️</span> config.json
            </div>
            <div class="folder-item folder" onclick="toggleFolder(this)">
              <span class="icon">📁</span> şəkillər/
              <div class="folder-content hidden">
                <div class="folder-item" onclick="selectFile('sekil.jpg')">
                  <span class="icon">🖼️</span> sekil.jpg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="file-preview" id="filePreview">
        <div class="preview-header">
          <span id="previewFileName">Fayl seçin</span>
          <div class="file-actions">
            <button onclick="readFile()">Oku</button>
            <button onclick="writeFile()">Yaz</button>
            <button onclick="appendFile()">Əlavə et</button>
          </div>
        </div>
        <div class="preview-content" id="previewContent">
          <p class="hint">Soldan fayl seçin və əməliyyat seçin...</p>
        </div>
        <div class="code-view" id="codeView"></div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Rejim Seçimi və Kod Generatoru</h3>
    <div class="mode-selector">
      <div class="mode-cards">
        <div class="mode-card" onclick="selectMode('r')">
          <div class="mode-icon">👁️</div>
          <h4>'r' Oxu</h4>
          <p>Mövcud faylı oxu</p>
          <code>open("f.txt", "r")</code>
        </div>
        <div class="mode-card" onclick="selectMode('w')">
          <div class="mode-icon">✏️</div>
          <h4>'w' Yaz</h4>
          <p>Yeni yarat və ya sil</p>
          <code>open("f.txt", "w")</code>
        </div>
        <div class="mode-card" onclick="selectMode('a')">
          <div class="mode-icon">➕</div>
          <h4>'a' Əlavə et</h4>
          <p>Sonuna yaz</p>
          <code>open("f.txt", "a")</code>
        </div>
        <div class="mode-card" onclick="selectMode('x')">
          <div class="mode-icon">🆕</div>
          <h4>'x' Yarat</h4>
          <p>Yalnız yeni</p>
          <code>open("f.txt", "x")</code>
        </div>
      </div>
      
      <div class="generated-code" id="generatedCode">
        <h4>Python Kodu:</h4>
        <pre>Rejim seçin...</pre>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. CSV Redaktoru</h3>
    <div class="csv-editor">
      <div class="csv-toolbar">
        <button onclick="addRow()">+ Sətir əlavə et</button>
        <button onclick="addCol()">+ Sütun əlavə et</button>
        <button onclick="exportCSV()">💾 Yadda saxla</button>
        <button onclick="loadCSV()">📂 Fayldan yüklə</button>
      </div>
      <div class="csv-table-container">
        <table class="csv-table" id="csvTable">
          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Bal</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td contenteditable="true">Əli</td>
              <td contenteditable="true">Məmmədov</td>
              <td contenteditable="true">85</td>
              <td><button onclick="deleteRow(this)">🗑️</button></td>
            </tr>
            <tr>
              <td contenteditable="true">Leyla</td>
              <td contenteditable="true">Quliyeva</td>
              <td contenteditable="true">92</td>
              <td><button onclick="deleteRow(this)">🗑️</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="csv-code" id="csvCode"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. JSON Vizualizatoru</h3>
    <div class="json-visualizer">
      <div class="json-input">
        <textarea id="jsonInput" rows="10">{
  "ad": "Əli",
  "yas": 20,
  "telebeler": [
    {"ad": "Leyla", "bal": 95},
    {"ad": "Səməd", "bal": 87}
  ],
  "aktiv": true
}</textarea>
        <button onclick="parseJSON()">JSON Parse et</button>
      </div>
      <div class="json-tree" id="jsonTree"></div>
      <div class="python-code" id="jsonPython"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Fayl Təhlükəsizlik Yoxlayıcısı</h3>
    <div class="safety-checker">
      <div class="check-list">
        <div class="check-item">
          <input type="checkbox" id="check1" checked>
          <label>with statement istifadə edildi mi?</label>
          <span class="status good">✓</span>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check2">
          <label>encoding="utf-8" varmı?</label>
          <span class="status bad">✗</span>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check3">
          <label>Xəta idarəetməsi (try/except) varmı?</label>
          <span class="status warning">!</span>
        </div>
        <div class="check-item">
          <input type="checkbox" id="check4">
          <label>Fayl mövcudluğu yoxlanıldı mı?</label>
          <span class="status bad">✗</span>
        </div>
      </div>
      
      <div class="code-comparison">
        <div class="bad-code">
          <h4>❌ Zəif Kod:</h4>
          <pre>f = open("fayl.txt")
data = f.read()
# close() unudula bilər!</pre>
        </div>
        <div class="good-code">
          <h4>✅ Düzgün Kod:</h4>
          <pre>with open("fayl.txt", "r", 
          encoding="utf-8") as f:
    data = f.read()
# Avtomatik bağlanır!</pre>
        </div>
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
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.python-files {
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  color: #00d9ff;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

h3 {
  color: #ffd700;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ffd700;
  padding-left: 15px;
}

h4 {
  color: #00ff88;
  margin: 15px 0 10px 0;
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

/* File Explorer */
.file-explorer {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  min-height: 400px;
}

.folder-tree {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #30363d;
}

.folder-item {
  padding: 8px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  margin: 2px 0;
}

.folder-item:hover {
  background: rgba(0, 217, 255, 0.1);
}

.folder-item.selected {
  background: rgba(0, 217, 255, 0.2);
  border-left: 3px solid #00d9ff;
}

.folder-content {
  margin-left: 20px;
  border-left: 2px solid #30363d;
  padding-left: 10px;
}

.folder-content.hidden {
  display: none;
}

.icon {
  margin-right: 8px;
}

.file-preview {
  background: #0d1117;
  border-radius: 10px;
  border: 2px solid #30363d;
  display: flex;
  flex-direction: column;
}

.preview-header {
  padding: 15px 20px;
  background: #161b22;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #30363d;
}

.file-actions {
  display: flex;
  gap: 10px;
}

.preview-content {
  flex: 1;
  padding: 20px;
  font-family: 'Fira Code', monospace;
  overflow-y: auto;
  white-space: pre-wrap;
}

.code-view {
  background: #161b22;
  padding: 15px;
  border-radius: 0 0 8px 8px;
  border-top: 2px solid #30363d;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #7ee787;
}

/* Mode Selector */
.mode-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.mode-card {
  background: #0d1117;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #30363d;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.mode-card:hover {
  transform: translateY(-5px);
  border-color: #00d9ff;
  box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
}

.mode-card.active {
  border-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.mode-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.mode-card code {
  display: block;
  margin-top: 10px;
  padding: 8px;
  background: #161b22;
  border-radius: 6px;
  font-size: 12px;
  color: #ff6b6b;
}

.generated-code {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #00ff88;
}

.generated-code pre {
  color: #7ee787;
  font-family: 'Fira Code', monospace;
  margin-top: 10px;
}

/* CSV Editor */
.csv-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.csv-table-container {
  overflow-x: auto;
  margin-bottom: 20px;
}

.csv-table {
  width: 100%;
  border-collapse: collapse;
  background: #0d1117;
  border-radius: 8px;
  overflow: hidden;
}

.csv-table th, .csv-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #30363d;
}

.csv-table th {
  background: #161b22;
  color: #00d9ff;
  font-weight: 600;
}

.csv-table td {
  color: #eaeaea;
}

.csv-table td[contenteditable="true"] {
  background: rgba(0, 217, 255, 0.05);
  cursor: text;
}

.csv-table td[contenteditable="true"]:hover {
  background: rgba(0, 217, 255, 0.1);
}

.csv-table td[contenteditable="true"]:focus {
  outline: 2px solid #00d9ff;
  background: rgba(0, 217, 255, 0.2);
}

.csv-code {
  background: #0d1117;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  color: #7ee787;
  font-size: 13px;
}

/* JSON Visualizer */
.json-visualizer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.json-input textarea {
  width: 100%;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #7ee787;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  resize: vertical;
}

.json-tree {
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #30363d;
  overflow-y: auto;
  max-height: 300px;
}

.json-node {
  margin-left: 20px;
  padding: 5px;
}

.json-key {
  color: #ff6b6b;
  font-weight: bold;
}

.json-string {
  color: #00ff88;
}

.json-number {
  color: #ffd700;
}

.json-boolean {
  color: #00d9ff;
}

.python-code {
  grid-column: 1 / -1;
  background: #161b22;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #ffd700;
}

/* Safety Checker */
.safety-checker {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.check-list {
  background: #0d1117;
  padding: 25px;
  border-radius: 10px;
}

.check-item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  background: #161b22;
  border-radius: 8px;
  gap: 10px;
}

.check-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #00ff88;
}

.check-item label {
  flex: 1;
}

.status {
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.status.good {
  background: rgba(0, 255, 136, 0.2);
  color: #00ff88;
}

.status.bad {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
}

.status.warning {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.code-comparison {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.bad-code, .good-code {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid;
}

.bad-code {
  border-left-color: #ff6b6b;
}

.good-code {
  border-left-color: #00ff88;
}

.bad-code h4 {
  color: #ff6b6b;
}

.good-code h4 {
  color: #00ff88;
}

pre {
  color: #8b949e;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  margin-top: 10px;
  white-space: pre-wrap;
}

button {
  background: linear-gradient(135deg, #00d9ff 0%, #0099cc 100%);
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.4);
}

@media (max-width: 768px) {
  body { padding: 20px; }
  .file-explorer { grid-template-columns: 1fr; }
  .json-visualizer { grid-template-columns: 1fr; }
  .safety-checker { grid-template-columns: 1fr; }
  .mode-cards { grid-template-columns: 1fr; }
}`,
    js: `// Python Files Lab
let selectedFileName = null;
let currentMode = null;

// Simulyasiya üçün fayl məzmunları
const fileContents = {
  'melumat.txt': 'Salam, Dünya!\\nBu bir mətn faylıdır.\\nPython ilə fayl işləmək çox asandır.',
  'telebeler.csv': 'Ad,Soyad,Bal\\nƏli,Məmmədov,85\\nLeyla,Quliyeva,92\\nSəməd,Əliyev,78',
  'config.json': '{\n  "ad": "Test Layihə",\n  "versiya": "1.0",\n  "aktiv": true\n}'
};

function selectFile(filename) {
  selectedFileName = filename;
  document.querySelectorAll('.folder-item').forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  document.getElementById('previewFileName').textContent = filename;
  document.getElementById('previewContent').innerHTML = '<p class="hint">Əməliyyat seçin (Oku/Yaz/Əlavə et)...</p>';
  document.getElementById('codeView').textContent = '';
}

function toggleFolder(element) {
  const content = element.querySelector('.folder-content');
  content.classList.toggle('hidden');
  const icon = element.querySelector('.icon');
  icon.textContent = content.classList.contains('hidden') ? '📁' : '📂';
}

function readFile() {
  if (!selectedFileName) {
    alert('Əvvəlcə fayl seçin!');
    return;
  }
  
  const content = fileContents[selectedFileName] || 'Fayl boşdur və ya mövcud deyil.';
  document.getElementById('previewContent').innerHTML = '<pre>' + content + '</pre>';
  
  const code = \`with open("\${selectedFileName}", "r", encoding="utf-8") as f:
    məzmun = f.read()
    print(məzmun)\`;
  
  document.getElementById('codeView').textContent = code;
}

function writeFile() {
  if (!selectedFileName) return;
  
  const newContent = prompt('Yeni məzmun daxil edin:', 'Yeni məzmun...');
  if (newContent !== null) {
    fileContents[selectedFileName] = newContent;
    document.getElementById('previewContent').innerHTML = '<pre style="color: #00ff88;">' + newContent + '</pre>';
    
    const code = \`with open("\${selectedFileName}", "w", encoding="utf-8") as f:
    f.write("""\${newContent}""")\`;
    
    document.getElementById('codeView').textContent = code;
  }
}

function appendFile() {
  if (!selectedFileName) return;
  
  const appendContent = prompt('Əlavə ediləcək məzmun:', '\\nƏlavə edildi.');
  if (appendContent !== null) {
    fileContents[selectedFileName] = (fileContents[selectedFileName] || '') + appendContent;
    document.getElementById('previewContent').innerHTML = '<pre>' + fileContents[selectedFileName] + '</pre>';
    
    const code = \`with open("\${selectedFileName}", "a", encoding="utf-8") as f:
    f.write("\${appendContent}")\`;
    
    document.getElementById('codeView').textContent = code;
  }
}

function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-card').forEach(el => el.classList.remove('active'));
  event.currentTarget.classList.add('active');
  
  const descriptions = {
    'r': { desc: 'Oxuma rejimi', code: 'with open("fayl.txt", "r", encoding="utf-8") as f:\\n    data = f.read()' },
    'w': { desc: 'Yazma rejimi (əvvəlki silinir)', code: 'with open("fayl.txt", "w", encoding="utf-8") as f:\\n    f.write("Yeni məzmun")' },
    'a': { desc: 'Əlavə etmə rejimi', code: 'with open("fayl.txt", "a", encoding="utf-8") as f:\\n    f.write("\\\\nSona əlavə")' },
    'x': { desc: 'Yaratma rejimi (varsa xəta)', code: 'with open("yeni.txt", "x", encoding="utf-8") as f:\\n    f.write("Yeni fayl")' }
  };
  
  const info = descriptions[mode];
  document.getElementById('generatedCode').innerHTML = \`
    <h4>Python Kodu (\${mode} rejimi):</h4>
    <p style="color: #8b949e; margin-bottom: 10px;">\${info.desc}</p>
    <pre>\${info.code}</pre>
  \`;
}

// CSV Editor
function addRow() {
  const tbody = document.querySelector('#csvTable tbody');
  const row = document.createElement('tr');
  const cols = document.querySelectorAll('#csvTable thead th').length - 1;
  
  let html = '';
  for (let i = 0; i < cols; i++) {
    html += '<td contenteditable="true">Yeni</td>';
  }
  html += '<td><button onclick="deleteRow(this)">🗑️</button></td>';
  
  row.innerHTML = html;
  tbody.appendChild(row);
  updateCSVCode();
}

function addCol() {
  const thead = document.querySelector('#csvTable thead tr');
  const newTh = document.createElement('th');
  newTh.contentEditable = true;
  newTh.textContent = 'Yeni Sütun';
  thead.insertBefore(newTh, thead.lastElementChild);
  
  document.querySelectorAll('#csvTable tbody tr').forEach(row => {
    const newTd = document.createElement('td');
    newTd.contentEditable = true;
    newTd.textContent = '0';
    row.insertBefore(newTd, row.lastElementChild);
  });
  updateCSVCode();
}

function deleteRow(btn) {
  btn.closest('tr').remove();
  updateCSVCode();
}

function updateCSVCode() {
  const rows = [];
  document.querySelectorAll('#csvTable tr').forEach(tr => {
    const cols = [];
    tr.querySelectorAll('td, th').forEach((td, idx) => {
      if (idx < tr.children.length - 1 || !tr.querySelector('button')) {
        cols.push(td.textContent);
      }
    });
    if (cols.length > 0) rows.push(cols.join(','));
  });
  
  const csvContent = rows.join('\\\\n');
  document.getElementById('csvCode').textContent = \`# CSV Məzmunu:
\${csvContent}

# Python kodu:
import csv
with open("telebeler.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows([\${rows.map(r => '[' + r.split(',').map(c => '"' + c + '"').join(',') + ']').join(', ')}])\`;
}

function exportCSV() {
  updateCSVCode();
  alert('CSV kodu generate edildi! Konsolu yoxlayın.');
}

function loadCSV() {
  const input = prompt('CSV məzmunu daxil edin (sətirlər \\n ilə ayrılsın):', 'Ad,Bal\\nƏli,85\\nLeyla,92');
  if (input) {
    const rows = input.split('\\\\n');
    const tbody = document.querySelector('#csvTable tbody');
    tbody.innerHTML = '';
    
    rows.slice(1).forEach(row => {
      const cols = row.split(',');
      const tr = document.createElement('tr');
      tr.innerHTML = cols.map(c => \`<td contenteditable="true">\${c}</td>\`).join('') + 
        '<td><button onclick="deleteRow(this)">🗑️</button></td>';
      tbody.appendChild(tr);
    });
    updateCSVCode();
  }
}

// JSON Visualizer
function parseJSON() {
  const input = document.getElementById('jsonInput').value;
  try {
    const obj = JSON.parse(input);
    document.getElementById('jsonTree').innerHTML = renderJSONTree(obj);
    
    const pythonCode = \`import json

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# İstifadə:
ad = data["ad"]  # "\${obj.ad || ''}"
yas = data["yas"]  # \${obj.yas || 0}

# Dəyişib yenidən yazmaq:
data["yeni_acar"] = "yeni_deyer"
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)\`;
    
    document.getElementById('jsonPython').innerHTML = '<pre>' + pythonCode + '</pre>';
  } catch (e) {
    document.getElementById('jsonTree').innerHTML = '<p style="color: #ff6b6b;">JSON xətası: ' + e.message + '</p>';
  }
}

function renderJSONTree(obj, key = '') {
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      let html = '<div class="json-node"><span class="json-key">' + (key || 'Array') + ':</span> [';
      obj.forEach((item, idx) => {
        html += renderJSONTree(item, idx);
      });
      return html + ']</div>';
    } else {
      let html = '<div class="json-node"><span class="json-key">' + (key || 'Object') + ':</span> {';
      for (let k in obj) {
        html += renderJSONTree(obj[k], k);
      }
      return html + '}</div>';
    }
  } else {
    let typeClass = 'json-string';
    if (typeof obj === 'number') typeClass = 'json-number';
    if (typeof obj === 'boolean') typeClass = 'json-boolean';
    
    return '<div class="json-node"><span class="json-key">' + key + ':</span> <span class="' + typeClass + '">' + JSON.stringify(obj) + '</span></div>';
  }
}

// Initialize
updateCSVCode();
console.log('Python Files Lab loaded!');`
  },

  exercise: {
    title: "📚 Tələbə İdarəetmə Sistemi",
    description: "Fayl əməliyyatlarını praktiki olaraq öyrənmək üçün tam funksional tələbə idarəetmə sistemi yaradın. Sistem JSON və CSV formatlarında məlumat saxlamalı, mürəkkəb sorğular aparmalıdır.",
    requirements: [
      "students.json faylında tələbə məlumatları saxlanmalı (ad, soyad, yaş, qrup, fənnlər və ballar)",
      "Funksiya: telebe_elave_et() - Yeni tələbə əlavə edir, avtomatik ID verir",
      "Funksiya: telebe_sil(telebe_id) - ID-yə görə silir",
      "Funksiya: telebe_ara(acar_soz) - Ad, soyad və ya qrup üzrə axtarış edir",
      "Funksiya: qrup_hesabatı(qrup_adi) - Qrup üzrə statistika (ortalama bal, ən yaxşı tələbə və s.)",
      "Funksiya: export_csv() - Bütün məlumatları CSV formatında export edir",
      "Funksiya: import_csv(fayl_adi) - CSV faylından məlumat yükləyir",
      "Funksiya: log_yaz(emeliyyat) - Bütün əməliyyatları log.txt faylına tarix ilə yazır",
      "Funksiya: backup_yarat() - Mövcud JSON faylının backup-nı backup_qovluğuna tarix ilə saxlayır",
      "Tam CLI (Command Line Interface) menyu sistemi - İstifadəçi rəqəm seçərək əməliyyat aparır"
    ],
    starterCode: `# Tələbə İdarəetmə Sistemi
import json
import csv
import os
import shutil
from datetime import datetime

DATA_FILE = "students.json"
LOG_FILE = "log.txt"
BACKUP_DIR = "backups"

# Məlumat strukturu nümunəsi:
# {
#   "telebeler": [
#     {
#       "id": 1,
#       "ad": "Əli",
#      "soyad": "Məmmədov",
#       "yas": 20,
#       "qrup": "CS101",
#       "fennler": {"Python": 85, "Riyaz": 90}
#     }
#   ],
#   "son_id": 1
# }

def fayl_yoxla():
    """JSON faylı mövcud deyilsə, boş struktur yaradır"""
    # Kodunuzu bura yazın
    pass

def log_yaz(emeliyyat):
    """Əməliyyatı log faylına yazır"""
    # Kodunuzu bura yazın (tarix formatı: 2024-01-15 14:30:45)
    pass

def backup_yarat():
    """Backup qovluğu yarat və köçür"""
    # Kodunuzu bura yazın
    pass

def melumat_yukle():
    """JSON faylından məlumat yükləyir"""
    # Kodunuzu bura yazın
    pass

def melumat_yaz(data):
    """Məlumatları JSON faylına yazır"""
    # Kodunuzu bura yazın
    pass

def telebe_elave_et():
    """Yeni tələbə əlavə edir (istifadəçidən input alır)"""
    # Kodunuzu bura yazın
    pass

def telebe_sil(telebe_id):
    """ID-yə görə tələbəni silir"""
    # Kodunuzu bura yazın
    pass

def telebe_ara(acar_soz):
    """Ad, soyad və ya qrup üzrə axtarış"""
    # Kodunuzu bura yazın
    pass

def qrup_hesabatı(qrup_adi):
    """Qrup üzrə ətraflı hesabat"""
    # Kodunuzu bura yazın (ortalama, median, ən yaxşı/ən zəif)
    pass

def export_csv():
    """JSON məlumatlarını CSV-ə çevirir"""
    # Kodunuzu bura yazın
    pass

def import_csv(fayl_adi):
    """CSV faylından yükləyir (cari məlumatların üzərinə yazır və ya birləşdirir)"""
    # Kodunuzu bura yazın
    pass

def bütün_telebeleri_goster():
    """Bütün tələbələri cədvəl formasında göstərir"""
    # Kodunuzu bura yazın
    pass

def menu():
    """Əsas menyu sistemini göstərir"""
    while True:
        print("\\n" + "="*40)
        print("📚 TƏLƏBƏ İDARƏETMƏ SİSTEMİ")
        print("="*40)
        print("1. ➕ Yeni tələbə əlavə et")
        print("2. 🗑️ Tələbə sil")
        print("3. 🔍 Tələbə axtar")
        print("4. 📊 Qrup hesabatı")
        print("5. 📋 Bütün tələbələri göstər")
        print("6. 💾 Export CSV")
        print("7. 📂 Import CSV")
        print("8. 💿 Backup yarat")
        print("0. 🚪 Çıxış")
        print("="*40)
        
        secim = input("Seçiminiz: ").strip()
        
        if secim == "1":
            telebe_elave_et()
        elif secim == "2":
            try:
                tid = int(input("Silinəcək tələbə ID: "))
                telebe_sil(tid)
            except ValueError:
                print("❌ Xəta: ID rəqəm olmalıdır!")
        elif secim == "3":
            axtar = input("Axtarış sözü: ")
            telebe_ara(axtar)
        elif secim == "4":
            qrup = input("Qrup adı: ")
            qrup_hesabatı(qrup)
        elif secim == "5":
            bütün_telebeleri_goster()
        elif secim == "6":
            export_csv()
        elif secim == "7":
            fayl = input("CSV fayl adı: ")
            import_csv(fayl)
        elif secim == "8":
            backup_yarat()
        elif secim == "0":
            print("👋 Sağ olun!")
            break
        else:
            print("❌ Yanlış seçim!")

if __name__ == "__main__":
    fayl_yoxla()
    menu()`,
  },

  quiz: [
    {
      question: "Faylı təhlükəsiz açmaq və avtomatik bağlamaq üçün hansı struktur istifadə edilir?",
      options: ["if/else", "for", "with", "while"],
      correctAnswer: 2
    },
    {
      question: "open('fayl.txt', 'w') - 'w' rejimi nə edir?",
      options: ["Faylı oxuyur", "Faylın sonuna yazır", "Faylı silib yenisi yaradır", "Yalnız yeni fayl yaradır"],
      correctAnswer: 2
    },
    {
      question: "Fayl mövcud olmadıqda hansı xəta baş verir?",
      options: ["ValueError", "TypeError", "FileNotFoundError", "IndexError"],
      correctAnswer: 2
    },
    {
      question: "CSV faylında sütunlar hansı simvol ilə ayrılır?",
      options: [";", ":", ",", "|"],
      correctAnswer: 2
    },
    {
      question: "JSON faylından dictionary yükləmək üçün hansı funksiya istifadə edilir?",
      options: ["json.load()", "json.loads()", "json.read()", "json.parse()"],
      correctAnswer: 0
    },
    {
      question: "Böyük faylı sətir-sətir oxumaq üçün ən yaxşı üsul hansıdır?",
      options: ["read()", "readlines()", "for line in file:", "readline()"],
      correctAnswer: 2
    },
    {
      question: "os.makedirs() funksiyasının xüsusiyyəti nədir?",
      options: ["Yalnız fayl yaradır", "İç-içə qovluqlar yaradır", "Fayl silir", "Yalnız boş qovluq yaradır"],
      correctAnswer: 1
    },
    {
      question: "Fayla binary rejimdə yazmaq üçün hansı rejim istifadə edilir?",
      options: ["'w'", "'wb'", "'bw'", "'binary'"],
      correctAnswer: 1
    },
    {
      question: "json.dump() funksiyasında ensure_ascii=False parametri nəyə xidmət edir?",
      options: ["ASCII olmayan simvolları düzgən saxlayır", "Faylı sıxır", "Xətələri gizlədir", "Sürəti artırır"],
      correctAnswer: 0
    },
    {
      question: "Faylın ölçüsünü öyrənmək üçün hansı funksiya istifadə edilir?",
      options: ["os.filesize()", "os.path.size()", "os.path.getsize()", "os.getsize()"],
      correctAnswer: 2
    }
  ]
};

export default topicai6;