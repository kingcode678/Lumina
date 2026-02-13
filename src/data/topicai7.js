export const topicai7 = {
  id: 7,
  title: "Xətaların İdarə Edilməsi (Try/Except)",
  duration: "95 dəq",
  isFree: false,
  
  content: `
    <h4>🛡️ Proqramların Qalxanı: Xəta İdarəetməsi</h4>
    <p>Proqram yazarkən həmişə mükəmməl kod yazmaq mümkün deyil. İstifadəçi səhv məlumat daxil edə bilər, fayl tapılmaya bilər, internet bağlantısı kəsilə bilər. <strong>Xəta idarəetməsi</strong> bizim proqramlarımızın çökməməsini, istifadəçiyə dost mesajlar göstərməsini və problemsiz işləməsini təmin edir.</p>

    <h4>⚠️ Xətaların Növləri</h4>
    <p>Python-da iki əsas xəta növü var:</p>
    
    <p><strong>1. Sintaksis Xətaları (Syntax Errors):</strong></p>
    <pre><code># ❌ Sintaksis xətası - kod işləməyəcək
if x > 5
    print("Böyükdür")
# SyntaxError: expected ':'

print("Salam"
# SyntaxError: unexpected EOF while parsing</code></pre>

    <p><strong>2. İcra Xətaları (Runtime Exceptions):</strong></p>
    <p>Kod düzgün yazılıb, amma işləyərkən problem yaradır:</p>
    <pre><code># ❌ ZeroDivisionError
10 / 0

# ❌ ValueError
int("abc")

# ❌ IndexError
listim = [1, 2, 3]
print(listim[10])

# ❌ KeyError
dictim = {"ad": "Əli"}
print(dictim["soyad"])

# ❌ FileNotFoundError
open("olmayan_fayl.txt", "r")</code></pre>

    <h4>🎯 Try/Except - Təhlükəsiz Kod Yazma</h4>
    <p><code>try</code> bloku riskli kodu, <code>except</code> bloku isə xəta baş verdikdə ediləcəkləri saxlayır.</p>
    
    <pre><code># Əsas sintaksis
try:
    # Riskli kod buraya
    eded = int(input("Ədəd daxil edin: "))
    netice = 100 / eded
    print(f"Nəticə: {netice}")
except:
    # Hər hansı xəta baş verdikdə
    print("❌ Xəta baş verdi!")

# Daha dəqiq - konkret xəta növü
try:
    eded = int(input("Ədəd daxil edin: "))
    netice = 100 / eded
except ValueError:
    # Yalnız ədəd deyil, mətn daxil edilərsə
    print("❌ Zəhmət olmasa yalnız ədəd daxil edin!")
except ZeroDivisionError:
    # Sıfıra bölmə cəhdi
    print("❌ Sıfıra bölmək olmaz!")
except Exception as e:
    # Digər bütün xətalar
    print(f"❌ Gözlənilməz xəta: {e}")</code></pre>

    <h4>🔍 Else və Finally - Tam Nəzarət</h4>
    
    <p><strong>else:</strong> Xəta baş verməzsə işləyir</p>
    <pre><code>try:
    fayl = open("melumat.txt", "r")
    icerik = fayl.read()
except FileNotFoundError:
    print("Fayl tapılmadı!")
else:
    # Yalnız uğurlu olduqda
    print("✅ Fayl uğurla oxundu!")
    print(f"İçərik: {icerik[:100]}...")
    fayl.close()</code></pre>

    <p><strong>finally:</strong> Hər halda işləyir (resursları təmizləmək üçün)</p>
    <pre><code>try:
    fayl = open("melumat.txt", "r")
    icerik = fayl.read()
    # Xəta baş verə bilər
    netice = 10 / 0
except Exception as e:
    print(f"Xəta: {e}")
finally:
    # Hər halda faylı bağlayırıq
    print("Fayl bağlanır...")
    fayl.close()  # Yaddaş sızmasının qarşısını alır</code></pre>

    <h4>📊 Bir Neçə Xətanı Bir Yerdə Tutmaq</h4>
    <pre><code># Eyni reaksiya veriləcək xətalar
try:
    # Kod buraya
    eded = int(input("Ədəd: "))
    netice = 100 / eded
    listim = [1, 2]
    print(listim[eded])
except (ValueError, ZeroDivisionError, IndexError) as e:
    print(f"Giriş xətası: {e}")

# Və ya ayrı-ayrı
try:
    eded = int(input("Ədəd: "))
    netice = 100 / eded
except ValueError:
    print("Ədəd formatı yanlışdır!")
except ZeroDivisionError:
    print("Sıfıra bölmək olmaz!")
except Exception as e:
    print(f"Digər xəta: {e}")</code></pre>

    <h4>🎮 Praktiki Nümunələr</h4>
    
    <p><strong>Fayl Təhlükəsiz Oxuma:</strong></p>
    <pre><code>def fayl_oxu(tam_yol):
    try:
        with open(tam_yol, 'r', encoding='utf-8') as fayl:
            return fayl.read()
    except FileNotFoundError:
        return "❌ Fayl tapılmadı. Yolu yoxlayın."
    except PermissionError:
        return "❌ İcazə yoxdur. Admin hüquqları tələb olunur."
    except UnicodeDecodeError:
        return "❌ Fayl kodlaşdırma xətası. UTF-8 deyil?"
    except Exception as e:
        return f"❌ Naməlum xəta: {str(e)}"

# İstifadə
print(fayl_oxu("melumat.txt"))
print(fayl_oxu("C:/Windows/system.txt"))  # İcazə xətası</code></pre>

    <p><strong>API Sorğusu Təhlükəsizliyi:</strong></p>
    <pre><code>import requests

def melumat_cek(url):
    try:
        cavab = requests.get(url, timeout=5)
        cavab.raise_for_status()  # HTTP xətalarını yoxlayır
        return cavab.json()
    except requests.exceptions.Timeout:
        return "⏰ Sorğu vaxtı bitdi. İnternet yoxlayın."
    except requests.exceptions.ConnectionError:
        return "🔌 Bağlantı xətası. Server əlçatan deyil."
    except requests.exceptions.HTTPError as e:
        return f"🌐 HTTP xətası: {e.response.status_code}"
    except requests.exceptions.RequestException:
        return "❌ Şəbəkə xətası."
    except ValueError:
        return "📄 JSON formatı yanlışdır."</code></pre>

    <h4>🚀 Raise - Öz Xətalarımızı Yaratmaq</h4>
    <p>Biz də öz şərtlərimizə görə xəta qaldıra bilərik:</p>
    <pre><code>def yas_yoxla(yas):
    if yas < 0:
        raise ValueError("Yaş mənfi ola bilməz!")
    if yas > 150:
        raise ValueError("Yaş 150-dən böyük ola bilməz!")
    if yas < 18:
        raise PermissionError("Yaşınız yetərli deyil!")
    return "✅ Giriş icazəsi verildi."

# İstifadə
try:
    print(yas_yoxla(-5))
except ValueError as e:
    print(f"Giriş rədd edildi: {e}")
except PermissionError as e:
    print(f"İcazə yoxdur: {e}")

# Öz xəta klassımız
class BalansYetersizligi(Exception):
    """Bank hesabı üçün xüsusi xəta"""
    pass

def pul_cek(balans, mebleg):
    if mebleg > balans:
        raise BalansYetersizligi(f"Balans: {balans}, Tələb: {mebleg}")
    return balans - mebleg</code></pre>

    <h4>📝 Xəta Məlumatlarını Loglamaq</h4>
    <pre><code>import traceback
import datetime

def xeta_logla(xeta):
    vaxt = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("xeta_log.txt", "a", encoding="utf-8") as fayl:
        fayl.write(f"\n{'='*50}\n")
        fayl.write(f"Vaxt: {vaxt}\n")
        fayl.write(f"Xəta növü: {type(xeta).__name__}\n")
        fayl.write(f"Mesaj: {str(xeta)}\n")
        fayl.write(f"Traceback:\n{traceback.format_exc()}\n")

try:
    # Riskli əməliyyat
    netice = 10 / 0
except Exception as e:
    xeta_logla(e)
    print("Xəta qeydə alındı. Texniki dəstəklə əlaqə saxlayın.")</code></pre>

    <h4>💡 Ən Yaxşı Praktikalar</h4>
    <ul>
      <li>✅ Mümkün qədər konkret xəta növlərini tutun, ümumi <code>except:</code> yazmayın</li>
      <li>✅ <code>finally</code> istifadə edin - faylları, bağlantıları həmişə bağlayın</li>
      <li>✅ Xətaları sadəcə "yutmayın" (pass yazmayın) - istifadəçiyə məlumat verin</li>
      <li>✅ <code>try</code> bloku mümkün qədər kiçik olsun - yalnız riskli kod</li>
      <li>✅ Xəta mesajları istifadəçi dostu olsun, texniki detalları gizlədin</li>
      <li>✅ <code>with</code> statement istifadə edin (context manager) - avtomatik təmizləmə</li>
      <li>✅ Loglama sistemindən istifadə edin - xətaları izləyin</li>
    </ul>

    <h4>⚖️ Xəta İdarəetmə Strukturu</h4>
    <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background: #444;">
        <th style="padding: 12px;">Blok</th>
        <th style="padding: 12px;">Vəzifə</th>
        <th style="padding: 12px;">İşləmə şərti</th>
      </tr>
      <tr>
        <td style="padding: 10px;">try</td>
        <td style="padding: 10px;">Riskli kodu saxlayır</td>
        <td style="padding: 10px;">Həmişə</td>
      </tr>
      <tr>
        <td style="padding: 10px;">except</td>
        <td style="padding: 10px;">Xəta tutmaq və reaksiya vermək</td>
        <td style="padding: 10px;">Xəta baş verdikdə</td>
      </tr>
      <tr>
        <td style="padding: 10px;">else</td>
        <td style="padding: 10px;">Uğurlu tamamlanma əməliyyatları</td>
        <td style="padding: 10px;">Xəta baş vermədikdə</td>
      </tr>
      <tr>
        <td style="padding: 10px;">finally</td>
        <td style="padding: 10px;">Təmizləmə əməliyyatları</td>
        <td style="padding: 10px;">Hər halda (100%)</td>
      </tr>
    </table>
  `,

  starterCode: {
    html: `<div class="error-handling-lab">
  <h2>🛡️ Xəta İdarəetməsi Laboratoriyası</h2>
  
  <section class="demo-section">
    <h3>1. 🎯 Canlı Xəta Simulyatoru</h3>
    <div class="error-simulator">
      <div class="code-input-area">
        <label>Riskli Kodu Yazın:</label>
        <textarea id="riskyCode" placeholder="Məsələn: 10 / 0 vəya int('abc')" rows="3">10 / 0</textarea>
        <button onclick="simulateError()">▶ İcra Et və Xətanı Tut</button>
      </div>
      
      <div class="protection-code">
        <label>Qoruma Kodu (Try/Except):</label>
        <pre id="protectionDisplay">try:
    # Sizin kodunuz
    netice = 10 / 0
    print(f"Nəticə: {netice}")
except ZeroDivisionError as e:
    print(f"❌ Sıfıra bölmə xətası: {e}")
except Exception as e:
    print(f"❌ Digər xəta: {e}")
else:
    print("✅ Uğurlu!")
finally:
    print("🏁 Əməliyyat bitdi")</pre>
      </div>
      
      <div class="execution-result" id="errorResult">
        <div class="result-placeholder">Kodu icra edin və nəticəni görün...</div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. 🔍 Xəta Növləri Ensiklopediyası</h3>
    <div class="error-types-grid">
      <div class="error-card" onclick="showErrorDetail('ValueError')">
        <div class="error-icon">💱</div>
        <h4>ValueError</h4>
        <p>Yanlış dəyər tipi</p>
      </div>
      <div class="error-card" onclick="showErrorDetail('ZeroDivisionError')">
        <div class="error-icon">⭕</div>
        <h4>ZeroDivisionError</h4>
        <p>Sıfıra bölmə</p>
      </div>
      <div class="error-card" onclick="showErrorDetail('IndexError')">
        <div class="error-icon">📋</div>
        <h4>IndexError</h4>
        <p>Siyahı indeksi sərhədi aşıb</p>
      </div>
      <div class="error-card" onclick="showErrorDetail('KeyError')">
        <div class="error-icon">🔑</div>
        <h4>KeyError</h4>
        <p>Lüğətdə açar tapılmadı</p>
      </div>
      <div class="error-card" onclick="showErrorDetail('FileNotFoundError')">
        <div class="error-icon">📁</div>
        <h4>FileNotFoundError</h4>
        <p>Fayl tapılmadı</p>
      </div>
      <div class="error-card" onclick="showErrorDetail('TypeError')">
        <div class="error-icon">📝</div>
        <h4>TypeError</h4>
        <p>Yanlış tip əməliyyatı</p>
      </div>
    </div>
    
    <div class="error-detail-panel" id="errorDetailPanel">
      <h4 id="selectedErrorName">Xəta Adı</h4>
      <div class="error-example" id="errorExample"></div>
      <div class="error-solution" id="errorSolution"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. 🛡️ Çox Səviyyəli Qoruma Sistemi</h3>
    <div class="multi-protection-demo">
      <div class="input-chain">
        <div class="input-group">
          <label>Ədəd 1:</label>
          <input type="text" id="num1" value="10" placeholder="Ədəd daxil edin">
        </div>
        <div class="operator">÷</div>
        <div class="input-group">
          <label>Ədəd 2:</label>
          <input type="text" id="num2" value="0" placeholder="Ədəd daxil edin">
        </div>
        <button onclick="runProtectedCalculation()">Hesabla</button>
      </div>
      
      <div class="protection-layers" id="protectionLayers">
        <div class="layer" id="layer1">
          <span class="layer-name">Layer 1: Boş yoxlama</span>
          <span class="layer-status">⏳ Gözləyir</span>
        </div>
        <div class="layer" id="layer2">
          <span class="layer-name">Layer 2: Tip yoxlama (ValueError)</span>
          <span class="layer-status">⏳ Gözləyir</span>
        </div>
        <div class="layer" id="layer3">
          <span class="layer-name">Layer 3: Sıfır yoxlama (ZeroDivisionError)</span>
          <span class="layer-status">⏳ Gözləyir</span>
        </div>
        <div class="layer" id="layer4">
          <span class="layer-name">Layer 4: Nəticə aralığı</span>
          <span class="layer-status">⏳ Gözləyir</span>
        </div>
      </div>
      
      <div class="calculation-result" id="calcResult"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. 📝 Fayl Təhlükəsizlik Sistemi</h3>
    <div class="file-safety-demo">
      <div class="file-operations">
        <div class="file-action">
          <button onclick="simulateFileOperation('read')">📖 Fayl Oxu</button>
          <button onclick="simulateFileOperation('write')">✍️ Fayl Yaz</button>
          <button onclick="simulateFileOperation('delete')">🗑️ Fayl Sil</button>
        </div>
        
        <div class="file-scenario">
          <label>Ssenari seçin:</label>
          <select id="fileScenario" onchange="updateFileScenario()">
            <option value="success">✅ Uğurlu əməliyyat</option>
            <option value="notfound">❌ Fayl tapılmadı</option>
            <option value="permission">🔒 İcazə xətası</option>
            <option value="locked">🔐 Fayl başqa proqramda açıq</option>
          </select>
        </div>
      </div>
      
      <div class="file-code-display" id="fileCodeDisplay"></div>
      <div class="file-execution-log" id="fileExecutionLog"></div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. 🎮 Xəta Təxmin Oyunu</h3>
    <div class="error-guessing-game">
      <p class="game-intro">Aşağıdakı kodda hansı xəta baş verəcək? Doğru cavabı tapın!</p>
      
      <div class="code-challenge" id="codeChallenge">
        <pre>def hesabla(liste, indeks):
    try:
        deyer = liste[indeks]
        return 100 / deyer
    except _______:
        return "Siyahıda bu indeks yoxdur"</pre>
      </div>
      
      <div class="answer-options" id="answerOptions">
        <button onclick="checkAnswer('ValueError')">ValueError</button>
        <button onclick="checkAnswer('IndexError')">IndexError</button>
        <button onclick="checkAnswer('ZeroDivisionError')">ZeroDivisionError</button>
        <button onclick="checkAnswer('TypeError')">TypeError</button>
      </div>
      
      <div class="game-score" id="gameScore">Xal: 0 / 0</div>
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
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.error-handling-lab {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #00ff88;
  margin-bottom: 30px;
  font-size: 32px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

h3 {
  color: #ff6b6b;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ff6b6b;
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

/* Error Simulator */
.error-simulator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.code-input-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.code-input-area label {
  color: #00ff88;
  font-weight: 600;
}

.code-input-area textarea {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  resize: vertical;
}

.protection-code pre {
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #7ee787;
  border-left: 4px solid #ffd700;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.execution-result {
  grid-column: 1 / -1;
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  min-height: 150px;
  border: 2px solid #30363d;
}

.result-placeholder {
  color: #8b949e;
  text-align: center;
  padding: 50px;
  font-style: italic;
}

.result-success {
  color: #00ff88;
  padding: 15px;
  background: rgba(0, 255, 136, 0.1);
  border-radius: 6px;
  border-left: 4px solid #00ff88;
  margin-bottom: 10px;
  animation: slideIn 0.3s ease;
}

.result-error {
  color: #ff6b6b;
  padding: 15px;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 6px;
  border-left: 4px solid #ff6b6b;
  margin-bottom: 10px;
  animation: shake 0.5s ease;
}

.result-finally {
  color: #ffd700;
  padding: 15px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 6px;
  border-left: 4px solid #ffd700;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Error Types Grid */
.error-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.error-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #30363d;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.error-card:hover {
  transform: translateY(-5px);
  border-color: #ff6b6b;
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.error-card.active {
  background: rgba(255, 107, 107, 0.2);
  border-color: #ff6b6b;
}

.error-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.error-card h4 {
  color: #ff6b6b;
  margin-bottom: 5px;
}

.error-card p {
  color: #8b949e;
  font-size: 14px;
}

.error-detail-panel {
  background: #0d1117;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid #30363d;
  display: none;
}

.error-detail-panel.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.error-example {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
  font-family: 'Fira Code', monospace;
  color: #ff6b6b;
}

.error-solution {
  background: rgba(0, 255, 136, 0.1);
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #00ff88;
}

/* Multi Protection */
.multi-protection-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-chain {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-group label {
  color: #00ff88;
  font-size: 14px;
}

.input-group input {
  width: 120px;
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-size: 18px;
}

.operator {
  font-size: 24px;
  color: #ffd700;
  padding: 0 10px;
}

.protection-layers {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.layer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1a1a2e;
  padding: 15px 20px;
  border-radius: 8px;
  border-left: 4px solid #30363d;
  transition: all 0.3s;
}

.layer.active {
  border-left-color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.layer.success {
  border-left-color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
}

.layer.error {
  border-left-color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

.layer-name {
  font-weight: 600;
  color: #eaeaea;
}

.layer-status {
  font-size: 14px;
  color: #8b949e;
}

.calculation-result {
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  min-height: 60px;
}

/* File Safety */
.file-operations {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.file-action {
  display: flex;
  gap: 10px;
}

.file-scenario {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.file-scenario label {
  color: #00ff88;
  font-size: 14px;
}

.file-scenario select {
  background: #1a1a2e;
  border: 2px solid #30363d;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-width: 200px;
}

.file-code-display {
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #7ee787;
  margin-bottom: 15px;
  border-left: 4px solid #ffd700;
}

.file-execution-log {
  background: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
}

.log-entry {
  padding: 8px;
  margin: 5px 0;
  border-radius: 4px;
  border-left: 3px solid;
}

.log-try { border-left-color: #ffd700; color: #ffd700; }
.log-error { border-left-color: #ff6b6b; color: #ff6b6b; }
.log-else { border-left-color: #00ff88; color: #00ff88; }
.log-finally { border-left-color: #00d9ff; color: #00d9ff; }

/* Error Guessing Game */
.error-guessing-game {
  text-align: center;
}

.game-intro {
  color: #8b949e;
  margin-bottom: 20px;
  font-size: 16px;
}

.code-challenge {
  background: #0d1117;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: left;
  border: 2px solid #30363d;
}

.code-challenge pre {
  font-family: 'Fira Code', monospace;
  font-size: 16px;
  color: #7ee787;
  line-height: 1.8;
}

.answer-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 500px;
  margin: 0 auto 20px;
}

.answer-options button {
  padding: 15px;
  font-size: 16px;
  background: #30363d;
  border: 2px solid #00ff88;
  color: #00ff88;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.answer-options button:hover {
  background: #00ff88;
  color: #000;
  transform: scale(1.05);
}

.answer-options button.correct {
  background: #00ff88;
  color: #000;
  border-color: #00ff88;
  animation: pulse 0.5s ease;
}

.answer-options button.wrong {
  background: #ff6b6b;
  color: #fff;
  border-color: #ff6b6b;
  animation: shake 0.5s ease;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.game-score {
  font-size: 20px;
  color: #ffd700;
  font-weight: bold;
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
  .error-simulator {
    grid-template-columns: 1fr;
  }
  .input-chain {
    flex-direction: column;
    align-items: stretch;
  }
  .answer-options {
    grid-template-columns: 1fr;
  }
}`,

    js: `// Error Handling Lab JavaScript

const errorDatabase = {
  'ValueError': {
    example: \`eded = int("abc")
# ValueError: invalid literal for int() with base 10: 'abc'\`,
    solution: \`try:
    eded = int(istifadeci_girisi)
except ValueError:
    print("Zəhmət olmasa yalnız ədəd daxil edin!")\`
  },
  'ZeroDivisionError': {
    example: \`netice = 10 / 0
# ZeroDivisionError: division by zero\`,
    solution: \`try:
    netice = a / b
except ZeroDivisionError:
    print("Sıfıra bölmək olmaz!")
    netice = None\`
  },
  'IndexError': {
    example: \`liste = [1, 2, 3]
print(liste[10])
# IndexError: list index out of range\`,
    solution: \`try:
    element = liste[indeks]
except IndexError:
    print(f"Siyahıda {indeks} indeksi yoxdur!")
    print(f"Son indeks: {len(liste)-1}")\`
  },
  'KeyError': {
    example: \`dict = {"ad": "Əli"}
print(dict["soyad"])
# KeyError: 'soyad'\`,
    solution: \`try:
    deyer = dict["soyad"]
except KeyError:
    print("Bu açar lüğətdə yoxdur!")
    # Alternativ: deyer = dict.get("soyad", "Naməlum")\`
  },
  'FileNotFoundError': {
    example: \`with open("olmayan.txt", "r") as f:
    pass
# FileNotFoundError: [Errno 2] No such file or directory\`,
    solution: \`try:
    with open("fayl.txt", "r") as f:
        icerik = f.read()
except FileNotFoundError:
    print("Fayl tapılmadı!")
    icerik = ""\`
  },
  'TypeError': {
    example: \`"5" + 5
# TypeError: can only concatenate str (not "int") to str\`,
    solution: \`try:
    netice = metn + eded
except TypeError:
    netice = metn + str(eded)  # Tip çevirmə\`
  }
};

const gameQuestions = [
  {
    code: \`def hesabla(liste, indeks):
    try:
        deyer = liste[indeks]
        return 100 / deyer
    except _______:
        return "Siyahıda bu indeks yoxdur"\`,
    correct: 'IndexError',
    explanation: 'liste[indeks] əməliyyatı indeks sərhədi aşarsa IndexError verir.'
  },
  {
    code: \`def bolme(a, b):
    try:
        return a / b
    except _______:
        return "Sıfıra bölmək olmaz"\`,
    correct: 'ZeroDivisionError',
    explanation: 'Sıfıra bölmə əməliyyatı ZeroDivisionError verir.'
  },
  {
    code: \`def cevir(metn):
    try:
        return int(metn)
    except _______:
        return "Ədəd deyil"\`,
    correct: 'ValueError',
    explanation: 'int() funksiyası ədədi olmayan mətn alarsa ValueError verir.'
  },
  {
    code: \`def acar_al(lugat, acar):
    try:
        return lugat[acar]
    except _______:
        return "Açar tapılmadı"\`,
    correct: 'KeyError',
    explanation: 'Lüğətdə olmayan açarla müraciət KeyError verir.'
  }
];

let currentGameIndex = 0;
let gameScore = 0;
let totalQuestions = 0;

function simulateError() {
  const code = document.getElementById('riskyCode').value;
  const resultDiv = document.getElementById('errorResult');
  
  resultDiv.innerHTML = '';
  
  // Simulate try block
  setTimeout(() => {
    const tryDiv = document.createElement('div');
    tryDiv.className = 'result-success';
    tryDiv.innerHTML = '<strong>🟡 TRY:</strong> Kod icra edilir...<br><code>' + code + '</code>';
    resultDiv.appendChild(tryDiv);
    
    // Check for specific errors
    setTimeout(() => {
      let errorType = null;
      let errorMsg = '';
      
      if (code.includes('/ 0') || code.includes('/0')) {
        errorType = 'ZeroDivisionError';
        errorMsg = 'division by zero';
      } else if (code.includes("int('abc')") || code.includes('int("abc")')) {
        errorType = 'ValueError';
        errorMsg = "invalid literal for int() with base 10: 'abc'";
      } else if (code.includes('[') && code.includes(']')) {
        errorType = 'IndexError';
        errorMsg = 'list index out of range';
      } else {
        errorType = 'Exception';
        errorMsg = 'Unknown error';
      }
      
      if (errorType) {
        const exceptDiv = document.createElement('div');
        exceptDiv.className = 'result-error';
        exceptDiv.innerHTML = '<strong>🔴 EXCEPT ' + errorType + ':</strong> Xəta tutuldu!<br><code>' + errorType + ': ' + errorMsg + '</code>';
        resultDiv.appendChild(exceptDiv);
      } else {
        const elseDiv = document.createElement('div');
        elseDiv.className = 'result-success';
        elseDiv.innerHTML = '<strong>🟢 ELSE:</strong> Xəta baş vermədi!';
        resultDiv.appendChild(elseDiv);
      }
      
      // Finally always executes
      setTimeout(() => {
        const finallyDiv = document.createElement('div');
        finallyDiv.className = 'result-finally';
        finallyDiv.innerHTML = '<strong>🔵 FINALLY:</strong> Təmizləmə əməliyyatları...<br>Resurslar bağlanır.';
        resultDiv.appendChild(finallyDiv);
      }, 500);
      
    }, 800);
  }, 300);
}

function showErrorDetail(errorType) {
  // Remove active class from all cards
  document.querySelectorAll('.error-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Add active to clicked
  event.currentTarget.classList.add('active');
  
  const panel = document.getElementById('errorDetailPanel');
  const data = errorDatabase[errorType];
  
  document.getElementById('selectedErrorName').textContent = errorType;
  document.getElementById('errorExample').innerHTML = '<strong>❌ Xəta nümunəsi:</strong><pre>' + data.example + '</pre>';
  document.getElementById('errorSolution').innerHTML = '<strong>✅ Həll yolu:</strong><pre>' + data.solution + '</pre>';
  
  panel.classList.add('show');
}

function runProtectedCalculation() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const layers = document.querySelectorAll('.layer');
  const resultDiv = document.getElementById('calcResult');
  
  // Reset layers
  layers.forEach(layer => {
    layer.className = 'layer';
    layer.querySelector('.layer-status').textContent = '⏳ Gözləyir';
  });
  resultDiv.innerHTML = '';
  
  // Layer 1: Empty check
  setTimeout(() => {
    layers[0].classList.add('active');
    if (num1 === '' || num2 === '') {
      layers[0].classList.add('error');
      layers[0].querySelector('.layer-status').textContent = '❌ Boş dəyər!';
      resultDiv.innerHTML = '<span style="color: #ff6b6b;">❌ Xəta: Boş dəyər daxil edilib!</span>';
      return;
    }
    layers[0].classList.add('success');
    layers[0].querySelector('.layer-status').textContent = '✅ OK';
    
    // Layer 2: Type check
    setTimeout(() => {
      layers[1].classList.add('active');
      if (isNaN(num1) || isNaN(num2)) {
        layers[1].classList.add('error');
        layers[1].querySelector('.layer-status').textContent = '❌ ValueError!';
        resultDiv.innerHTML = '<span style="color: #ff6b6b;">❌ ValueError: Ədəd formatı yanlışdır!</span>';
        return;
      }
      layers[1].classList.add('success');
      layers[1].querySelector('.layer-status').textContent = '✅ OK';
      
      // Layer 3: Zero check
      setTimeout(() => {
        layers[2].classList.add('active');
        if (parseFloat(num2) === 0) {
          layers[2].classList.add('error');
          layers[2].querySelector('.layer-status').textContent = '❌ ZeroDivisionError!';
          resultDiv.innerHTML = '<span style="color: #ff6b6b;">❌ ZeroDivisionError: Sıfıra bölmək olmaz!</span>';
          return;
        }
        layers[2].classList.add('success');
        layers[2].querySelector('.layer-status').textContent = '✅ OK';
        
        // Layer 4: Range check
        setTimeout(() => {
          layers[3].classList.add('active');
          const result = parseFloat(num1) / parseFloat(num2);
          if (Math.abs(result) > 1000000) {
            layers[3].classList.add('error');
            layers[3].querySelector('.layer-status').textContent = '⚠️ Uyarı: Çox böyük nəticə!';
          } else {
            layers[3].classList.add('success');
            layers[3].querySelector('.layer-status').textContent = '✅ OK';
          }
          
          resultDiv.innerHTML = '<span style="color: #00ff88;">✅ Nəticə: ' + result.toFixed(2) + '</span>';
        }, 400);
      }, 400);
    }, 400);
  }, 300);
}

function updateFileScenario() {
  const scenario = document.getElementById('fileScenario').value;
  const codeDisplay = document.getElementById('fileCodeDisplay');
  
  const scenarios = {
    'success': \`try:
    with open("melumat.txt", "r") as f:
        icerik = f.read()
except FileNotFoundError:
    print("Fayl tapılmadı!")
else:
    print("Uğurla oxundu!")
finally:
    print("Fayl bağlandı")\`,
    'notfound': \`try:
    with open("melumat.txt", "r") as f:
        icerik = f.read()
except FileNotFoundError:
    print("❌ Fayl tapılmadı!")
    # Fayl yaratmaq kodu buraya\`,
    'permission': \`try:
    with open("C:/Windows/system.txt", "r") as f:
        icerik = f.read()
except PermissionError:
    print("🔒 İcazə yoxdur!")\`,
    'locked': \`try:
    with open("melumat.txt", "r") as f:
        icerik = f.read()
except IOError:
    print("🔐 Fayl başqa proqramda açıqdır!")\`
  };
  
  codeDisplay.textContent = scenarios[scenario];
}

function simulateFileOperation(operation) {
  const scenario = document.getElementById('fileScenario').value;
  const logDiv = document.getElementById('fileExecutionLog');
  
  let logHTML = '<div class="log-entry log-try">🟡 TRY: ' + operation + ' əməliyyatı başladı...</div>';
  
  setTimeout(() => {
    if (scenario === 'success') {
      logHTML += '<div class="log-entry log-else">🟢 ELSE: Əməliyyat uğurla tamamlandı!</div>';
    } else if (scenario === 'notfound') {
      logHTML += '<div class="log-entry log-error">🔴 EXCEPT FileNotFoundError: Fayl tapılmadı!</div>';
    } else if (scenario === 'permission') {
      logHTML += '<div class="log-entry log-error">🔴 EXCEPT PermissionError: İcazə yoxdur!</div>';
    } else if (scenario === 'locked') {
      logHTML += '<div class="log-entry log-error">🔴 EXCEPT IOError: Fayl kilitlidir!</div>';
    }
    
    setTimeout(() => {
      logHTML += '<div class="log-entry log-finally">🔵 FINALLY: Fayl bağlandı / Resurslar təmizləndi</div>';
      logDiv.innerHTML = logHTML;
    }, 300);
  }, 500);
}

function checkAnswer(selected) {
  const correct = gameQuestions[currentGameIndex].correct;
  const buttons = document.querySelectorAll('.answer-options button');
  
  totalQuestions++;
  
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent === selected && selected !== correct) {
      btn.classList.add('wrong');
    }
  });
  
  if (selected === correct) {
    gameScore++;
  }
  
  document.getElementById('gameScore').textContent = 'Xal: ' + gameScore + ' / ' + totalQuestions;
  
  // Show explanation and next question after delay
  setTimeout(() => {
    currentGameIndex = (currentGameIndex + 1) % gameQuestions.length;
    loadNextQuestion();
  }, 2000);
}

function loadNextQuestion() {
  const q = gameQuestions[currentGameIndex];
  document.getElementById('codeChallenge').innerHTML = '<pre>' + q.code + '</pre>';
  
  const buttons = document.querySelectorAll('.answer-options button');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.className = '';
  });
}

// Initialize
updateFileScenario();
console.log('Error Handling Lab loaded!');`
  },

  exercise: {
    title: "🏦 Bank ATM Təhlükəsizlik Sistemi",
    description: "Tam funksional, çox səviyyəli xəta idarəetməsi olan Bank ATM sistemi yazın. İstifadəçi əməliyyatları, fayl əməliyyatları və şəbəkə sorğuları üçün tam qoruma təmin edin.",
    requirements: [
      "Try/except/finally/else strukturundan istifadə edin",
      "Minimum 5 fərqli xəta növünü tutun (ValueError, TypeError, FileNotFoundError, PermissionError, KeyError)",
      "Fayl əməliyyatları üçün with statement və try/except istifadə edin",
      "Öz xəta klassı yaradın (InsufficientFundsError)",
      "Xətaları log faylına yazın (vaxt, xəta növü, mesaj)",
      "İstifadəçi dostu mesajlar göstərin (texniki detalları gizlədin)",
      "ATM balans yoxlama, pul çəkmə, pul yatırma əməliyyatları",
      "PIN kod yoxlama (3 dəfə səhv yazma hüququ)",
      "Hesab məlumatlarını faylda saxlayın və təhlükəsiz oxuyun"
    ],
    starterCode: `# Bank ATM Təhlükəsizlik Sistemi
import json
import datetime
import os

# Öz xəta klassımız
class InsufficientFundsError(Exception):
    """Balans yetərsizliyi xətası"""
    pass

class InvalidPINError(Exception):
    """Yanlış PIN xətası"""
    pass

# Xəta loglama funksiyası
def log_error(error, user_id="Unknown"):
    """Xətaları fayla yazır"""
    # Kodunuzu bura yazın
    pass

# Hesab məlumatlarını yükləmə
def load_account(card_number):
    """JSON fayldan hesab məlumatlarını təhlükəsiz yükləyir"""
    # Fayl mövcudluğunu yoxlayın
    # JSON formatını yoxlayın
    # İcazələri yoxlayın
    pass

# PIN yoxlama
def verify_pin(card_number, entered_pin):
    """PIN kodu yoxlayır, 3 dəfə səhv icazəsi verir"""
    # Maksimum cəhd sayını izləyin
    # Yanlış PIN xətasını tutun
    pass

# Balans yoxlama
def check_balance(card_number):
    """Hesab balansını təhlükəsiz göstərir"""
    # Fayl xətalarını tutun
    # Məlumat strukturunu yoxlayın
    pass

# Pul çəkmə
def withdraw(card_number, amount):
    """Pul çəkmə əməliyyatı - çox səviyyəli qoruma"""
    # Məbləğin ədəd olmasını yoxlayın
    # Məbləğin müsbət olmasını yoxlayın
    # Balans yetərsizliyi yoxlaması
    # Fayl yazma xətaları
    pass

# Pul yatırma
def deposit(card_number, amount):
    """Pul yatırma əməliyyatı"""
    # Bütün xəta növlərini tutun
    pass

# Əsas ATM interfeysi
def atm_menu():
    """İstifadəçi interfeysi"""
    # Sonsuz while dövrü ilə menyu
    # Try/except ilə bütün əməliyyatları qoruyun
    # Çıxış əməliyyatı
    pass

# Sistemi başlat
if __name__ == "__main__":
    # Test məlumatları yaradın
    # ATM-i başladın
    pass`,
  },

  quiz: [
    {
      question: "try bloku nə zaman işləyir?",
      options: ["Yalnız xəta olduqda", "Həmişə", "Yalnız xəta olmadıqda", "Heç vaxt"],
      correctAnswer: 1
    },
    {
      question: "except bloku nə zaman işləyir?",
      options: ["Həmişə", "Yalnız xəta olduqda", "Yalnız xəta olmadıqda", "Program başlayanda"],
      correctAnswer: 1
    },
    {
      question: "finally bloku nə zaman işləyir?",
      options: ["Yalnız xəta olduqda", "Yalnız xəta olmadıqda", "Hər halda", "Heç vaxt"],
      correctAnswer: 2
    },
    {
      question: "else bloku nə zaman işləyir?",
      options: ["Xəta olduqda", "Xəta olmadıqda", "Hər halda", "Yalnız finally-dən sonra"],
      correctAnswer: 1
    },
    {
      question: "Hansı xəta ədəd olmayan mətni int()-ə çevirməyə cəhd edəndə baş verir?",
      options: ["TypeError", "ValueError", "IndexError", "KeyError"],
      correctAnswer: 1
    },
    {
      question: "Sıfıra bölmə hansı xətaya səbəb olur?",
      options: ["MathError", "ZeroDivisionError", "ValueError", "ArithmeticError"],
      correctAnswer: 1
    },
    {
      question: "Fayl tapılmadıqda hansı xəta baş verir?",
      options: ["FileError", "IOError", "FileNotFoundError", "OpenError"],
      correctAnswer: 2
    },
    {
      question: "Bir neçə xəta növünü eyni except-də tutmaq üçün nə edilməlidir?",
      options: ["except (Error1, Error2):", "except Error1, Error2:", "except Error1 and Error2:", "except [Error1, Error2]:"],
      correctAnswer: 0
    },
    {
      question: "Xəta mesajını əldə etmək üçün hansı sintaksis düzgündür?",
      options: ["except Exception e:", "except (Exception as e):", "except Exception as e:", "except e from Exception:"],
      correctAnswer: 2
    },
    {
      question: "Öz xəta klassı yaratmaq üçün nə etməli?",
      options: ["class MyError:", "class MyError(Exception):", "define MyError(Exception):", "error MyError:"],
      correctAnswer: 1
    }
  ]
};

export default topicai7;