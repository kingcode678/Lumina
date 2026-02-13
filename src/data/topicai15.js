export const topicai15 = {
  id: 15,
  title: "Ehtimal Nəzəriyyəsi: Bayes Teoremi",
  duration: "140 dəq",
  isFree: false,
  
  content: `
    <h4>🎲 Ehtimal Nəzəriyyəsi Nədir?</h4>
    <p><strong>Ehtimal nəzəriyyəsi</strong> - hadisələrin baş vermə <strong>ehtimallığını</strong> öyrənən riyaziyyat sahəsidir. Süni intellekt, maşın öyrənməsi, data science və statistik qərarvermənin <strong>fundamental əsasını</strong> təşkil edir.</p>

    <p>Real həyatda çox vaxt <strong>tam məlumatımız olmur</strong>. Bayes teoremi köhnə bilikləri yeni məlumatlarla yeniləməyə imkan verir.</p>

    <h4>📚 Əsas Anlayışlar</h4>

    <p><strong>Təsadüfi Hadisə</strong> - nəticəsi əvvəlcədən dəqiq bilinməyən hadisə (məsələn: zər atmaq, yağış yağmaq).</p>

    <p><strong>Ehtimal (P)</strong> - hadisənin baş vermə ehtimallığı. 0 (heç vaxt) ilə 1 (həmişə) arasında.</p>

    <pre><code>import numpy as np

# Zər atmaq təcrübəsi
# 1-6 arası təsadüfi ədəd
zər = np.random.randint(1, 7)  # 1, 2, 3, 4, 5, və ya 6

# 6 gəlmə ehtimalı = 1/6 ≈ 0.167
# P(6) = 1/6</code></pre>

    <h4>🎯 Şərti Ehtimal (Conditional Probability)</h4>
    <p>Bir hadisənin <strong>başqa hadisə baş verdiyi təqdirdə</strong> ehtimalı.</p>

    <pre><code># P(A|B) - B baş verdiyi təqdirdə A-nın ehtimalı
# Formula: P(A|B) = P(A və B) / P(B)

# Nümunə: Bir sinifdə
# - 60% oğlan (P(Oğlan) = 0.6)
# - 40% qız (P(Qız) = 0.4)
# - Oğlanların 30%-i eynək taxır (P(Eynək|Oğlan) = 0.3)
# - Qızların 50%-i eynək taxır (P(Eynək|Qız) = 0.5)

# Təsadüfi şagird seçsək, eynək taxma ehtimalı:
# P(Eynək) = P(Eynək|Oğlan) * P(Oğlan) + P(Eynək|Qız) * P(Qız)
# P(Eynək) = 0.3 * 0.6 + 0.5 * 0.4 = 0.18 + 0.20 = 0.38</code></pre>

    <h4>🔮 Bayes Teoremi - Əsas Dərs</h4>
    <p>Bayes teoremi <strong>sonrakı ehtimalı (posterior)</strong> hesablamağa imkan verir:</p>

    <div style="background: #1a1a2e; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; font-size: 20px;">
      <strong>P(H|E) = P(E|H) × P(H) / P(E)</strong>
    </div>

    <p><strong>Terminlər:</strong></p>
    <ul>
      <li><strong>P(H)</strong> - <strong>Prior (Əvvəlki)</strong>: Hipotezin əvvəlki ehtimalı</li>
      <li><strong>P(E|H)</strong> - <strong>Likelihood (Bənzərlik)</strong>: Hipotez doğru olduqda sübutun ehtimalı</li>
      <li><strong>P(E)</strong> - <strong>Evidence (Sübut)</strong>: Sübutun ümumi ehtimalı</li>
      <li><strong>P(H|E)</strong> - <strong>Posterior (Sonrakı)</strong>: Sübutdan sonra hipotezin ehtimalı</li>
    </ul>

    <pre><code># Klassik nümunə: Xəstəlik testi
# - Xəstəliyin prevalansı: P(Xəstə) = 0.01 (1%)
# - Testin həssaslığı: P(Positive|Xəstə) = 0.99 (99%)
# - Testin spesifikliyi: P(Negative|Sağlam) = 0.99 (99%)

# Sual: Test pozitiv çıxdı, həqiqətən xəstə olma ehtimalı nə qədər?

P_xəstə = 0.01           # Prior
P_sağlam = 0.99          # Prior

P_pos_xəstə = 0.99       # True positive (sensitivity)
P_pos_sağlam = 0.01      # False positive (1 - specificity)

# Ümumi pozitiv ehtimal (Total Probability)
P_positive = P_pos_xəstə * P_xəstə + P_pos_sağlam * P_sağlam
P_positive = 0.99 * 0.01 + 0.01 * 0.99  # 0.0198

# Bayes tətbiqi
P_xəstə_positive = (P_pos_xəstə * P_xəstə) / P_positive
# (0.99 * 0.01) / 0.0198 = 0.5

# Nəticə: Cəmi 50%! Çünki xəstəlik nadir olduğu üçün
# false positive-lar true positive-ları üstələyir.</code></pre>

    <h4>🧮 Naive Bayes Klassifikatoru</h4>
    <p>Bayes teoreminin ən populyar tətbiqi. <strong>"Naive"</strong> (sadəlövh) çünki bütün xüsusiyyətlərin bir-birindən <strong>asılı olmadığını</strong> güman edir.</p>

    <pre><code># E-poçt spam filtri nümunəsi
# Xüsusiyyətlər: " pulsuz ", " qazan ", " kliklə " sözlərinin olub-olmaması

class NaiveBayes:
    def __init__(self):
        self.class_probs = {}      # P(Spam), P(Ham)
        self.feature_probs = {}    # P(söz|Spam), P(söz|Ham)
    
    def train(self, emails, labels):
        """
        emails: [['pulsuz', 'qazan'], ['salam', 'necəsən'], ...]
        labels: ['spam', 'ham', ...]
        """
        total = len(labels)
        spam_count = sum(1 for l in labels if l == 'spam')
        
        # Prior ehtimallar
        self.class_probs['spam'] = spam_count / total
        self.class_probs['ham'] = (total - spam_count) / total
        
        # Hər sözün sinifdəki ehtimalı (Laplace smoothing ilə)
        vocab = set(word for email in emails for word in email)
        
        for cls in ['spam', 'ham']:
            class_emails = [e for e, l in zip(emails, labels) if l == cls]
            all_words = [w for e in class_emails for w in e]
            total_words = len(all_words)
            
            self.feature_probs[cls] = {}
            for word in vocab:
                count = all_words.count(word) + 1  # +1 Laplace smoothing
                self.feature_probs[cls][word] = count / (total_words + len(vocab))
    
    def predict(self, email):
        """Yeni e-poçtun spam/ham ehtimalını hesabla"""
        scores = {}
        
        for cls in ['spam', 'ham']:
            # Prior ilə başla
            score = np.log(self.class_probs[cls])
            
            # Hər sözün ehtimalını əlavə et (log ilə topla)
            for word in email:
                if word in self.feature_probs[cls]:
                    score += np.log(self.feature_probs[cls][word])
            
            scores[cls] = score
        
        # Log-dan qayıdaraq normal ehtimal
        # Softmax tətbiq et
        exp_scores = {k: np.exp(v - max(scores.values())) for k, v in scores.items()}
        total = sum(exp_scores.values())
        
        return {k: v/total for k, v in exp_scores.items()}

# İstifadə
emails = [
    ['pulsuz', 'qazan', 'indi'],
    ['salam', 'necəsən', 'dostum'],
    ['pulsuz', 'təklif', 'kliklə'],
    ['görüş', 'vaxtı', 'sabah']
]
labels = ['spam', 'ham', 'spam', 'ham']

nb = NaiveBayes()
nb.train(emails, labels)

# Test
test_email = ['pulsuz', 'qazan']
result = nb.predict(test_email)
print(f"Spam ehtimalı: {result['spam']:.2%}")
print(f"Ham ehtimalı: {result['ham']:.2%}")</code></pre>

    <h4>📊 Bayes Şəbəkələri (Bayesian Networks)</h4>
    <p>Dəyişənlər arasındakı <strong>səbəb-nəticə əlaqələrini</strong> qraf şəklində modelləşdirir.</p>

    <pre><code># Nümunə: Hava -> Yağış -> Yol Islak
#         Hava -> Piknik

# P(Yağış|Hava=Günəşli) = 0.1
# P(Yağış|Hava=Buludlu) = 0.5
# P(Yağış|Hava=Yağışlı) = 0.9

# P(Yol Islak|Yağış=Yox) = 0.0
# P(Yol Islak|Yağış=Var) = 0.9

# Verilən: Yol Islak = Həqiqət
# Sual:    Piknik etmək ehtimalı?

class SimpleBayesNet:
    def __init__(self):
        self.probabilities = {
            'Hava': {'Günəşli': 0.6, 'Buludlu': 0.3, 'Yağışlı': 0.1},
            'Yağış': {
                ('Günəşli', False): 0.9, ('Günəşli', True): 0.1,
                ('Buludlu', False): 0.5, ('Buludlu', True): 0.5,
                ('Yağışlı', False): 0.1, ('Yağışlı', True): 0.9
            },
            'YolIslak': {False: 0.0, True: 1.0},  # Yağış yoxdursa 0, varsa 0.9
            'Piknik': {
                ('Günəşli', True): 0.9,
                ('Buludlu', True): 0.6,
                ('Yağışlı', True): 0.1,
                ('Günəşli', False): 0.0,
                ('Buludlu', False): 0.0,
                ('Yağışlı', False): 0.0
            }
        }
    
    def infer(self, evidence):
        """Evidence əsasən nəticə çıxar"""
        # Belief propagation (sadə versiya)
        # Kodunuzu bura yazın
        pass

# İstifadə
net = SimpleBayesNet()
evidence = {'YolIslak': True, 'Hava': 'Günəşli'}
result = net.infer(evidence)</code></pre>

    <h4>🎯 Markov Zəncirləri və Monte Carlo</h4>
    <p><strong>Markov xüsusiyyəti</strong>: Gələcək yalnız indidən asılıdır, keçmişdən yox.</p>

    <pre><code># Hava proqnozu Markov modeli
# States: Günəşli, Buludlu, Yağışlı

transition_matrix = np.array([
    # Günəşli  Buludlu  Yağışlı (sabah)
    [0.7,     0.2,     0.1],    # Günəşli (bu gün)
    [0.3,     0.4,     0.3],    # Buludlu (bu gün)
    [0.2,     0.3,     0.5]     # Yağışlı (bu gün)
])

# Bu gün günəşlidirsə, 7 gün sonra hava necə olacaq?
current = np.array([1, 0, 0])  # Günəşli

for day in range(7):
    current = current @ transition_matrix
    print(f"Gün {day+1}: Günəşli={current[0]:.2%}, Buludlu={current[1]:.2%}, Yağışlı={current[2]:.2%}")

# Uzunmüddətli tarazlıq (steady state)
# Eigenvector hesablamaq ilə tapılır
eigenvalues, eigenvectors = np.linalg.eig(transition_matrix.T)
steady_state = eigenvectors[:, np.isclose(eigenvalues, 1)]
steady_state = steady_state / steady_state.sum()
print(f"\\nUzunmüddətli: {steady_state.flatten()}")</code></pre>

    <h4>🔍 Maximum Likelihood Estimation (MLE)</h4>
    <p>Məlumatları ən yaxşı izah edən <strong>parametrləri tapmaq</strong>.</p>

    <pre><code># Münasibət: Zər atmaq təcrübəsi
# 10 dəfə zər atdıq: [6, 6, 5, 6, 4, 6, 5, 6, 6, 5]
# Ədalətli zər mi? (P(6) = 1/6 ≈ 0.167)

data = [6, 6, 5, 6, 4, 6, 5, 6, 6, 5]
six_count = data.count(6)
n = len(data)

# MLE: P(6) = 6 gələnlər / cəmi atışlar
mle_estimate = six_count / n  # 0.6

# Ədalətli zər üçün gözləntimiz: 0.167
# 0.6 çox yüksəkdir, zər ədalətli deyil!

# Log-likelihood
def log_likelihood(p, data):
    """p ehtimalı ilə datanın log-likelihood-u"""
    log_lik = 0
    for x in data:
        if x == 6:
            log_lik += np.log(p)
        else:
            log_lik += np.log((1-p)/5)  # Digər 5 üz
    return log_lik

# Ən yaxşı p tapmaq
p_values = np.linspace(0.01, 0.99, 100)
likelihoods = [log_likelihood(p, data) for p in p_values]
best_p = p_values[np.argmax(likelihoods)]
print(f"MLE estimate: P(6) = {best_p:.3f}")</code></pre>

    <h4>🤖 Praktiki Tətbiq: Bayesian Optimization</h4>
    <p>Hyperparameter tuning üçün səmərəli üsul.</p>

    <pre><code># Sadə Bayesian Optimization nümunəsi
# Hədəf: f(x) = -x^2 + 5 maksimum tapmaq (x ∈ [0, 5])

def black_box_function(x):
    """Qiymətli qiymətləndirmə funksiyası"""
    return -x**2 + 5 + np.random.normal(0, 0.1)  # Noise əlavə et

# Gaussian Process ilə surrogate model
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import RBF, ConstantKernel as C

# Başlanğıc nümunələr
X_sample = np.array([[0.5], [1.5], [3.0]])
y_sample = np.array([black_box_function(x) for x in X_sample])

# Surrogate model
kernel = C(1.0, (1e-3, 1e3)) * RBF(1.0, (1e-2, 1e2))
gp = GaussianProcessRegressor(kernel=kernel, n_restarts_optimizer=10)
gp.fit(X_sample, y_sample)

# Növbəti nöqtəni seç (Expected Improvement)
x_test = np.linspace(0, 5, 100).reshape(-1, 1)
y_pred, sigma = gp.predict(x_test, return_std=True)

# Acquisition function (sadə: ən böyük uncertainty)
next_point = x_test[np.argmax(sigma)]

print(f"Növbəti yoxlanacaq nöqtə: {next_point[0]:.2f}")</code></pre>

    <h4>📈 A/B Test-in Bayes Analizi</h4>
    <p>Ənənəvi frequentist yanaşma əvəzinə <strong>Bayesian A/B test</strong>.</p>

    <pre><code># Bayesian A/B Test
# A versiyası: 100/1000 dönüşüm (10%)
# B versiyası: 120/1000 dönüşüm (12%)

# Prior: Beta(1, 1) = Uniform (heç bir fikrimiz yox)
# Posterior: Beta(1 + successes, 1 + failures)

from scipy.stats import beta

# A versiyası
alpha_a, beta_a = 1 + 100, 1 + 900  # Beta(101, 901)

# B versiyası  
alpha_b, beta_b = 1 + 120, 1 + 880  # Beta(121, 881)

# Monte Carlo ilə P(B > A) hesabla
n_samples = 100000
samples_a = beta.rvs(alpha_a, beta_a, size=n_samples)
samples_b = beta.rvs(alpha_b, beta_b, size=n_samples)

p_b_better = np.mean(samples_b > samples_a)
print(f"P(B > A) = {p_b_better:.2%}")

# Expected Lift
lift = (samples_b - samples_a) / samples_a
print(f"Expected lift: {np.mean(lift):.2%}")
print(f"95% Credible interval: [{np.percentile(lift, 2.5):.2%}, {np.percentile(lift, 97.5):.2%}]")

# Vizualizasiya
x = np.linspace(0, 0.2, 1000)
plt.plot(x, beta.pdf(x, alpha_a, beta_a), label='A (Control)', color='blue')
plt.plot(x, beta.pdf(x, alpha_b, beta_b), label='B (Treatment)', color='red')
plt.axvline(0.1, color='blue', linestyle='--', alpha=0.5)
plt.axvline(0.12, color='red', linestyle='--', alpha=0.5)
plt.xlabel('Conversion Rate')
plt.ylabel('Density')
plt.legend()
plt.title('Bayesian A/B Test Posterior Distributions')
plt.savefig('bayesian_ab_test.png')</code></pre>

    <h4>💡 Praktik Məsləhətlər</h4>
    <ul>
      <li>Həmişə <strong>prior</strong> seçiminizi əsaslandırın (informative vs uninformative)</li>
      <li><strong>Conjugate prior</strong> istifadə edin hesablamaları asanlaşdırmaq üçün (Beta-Binomial, Normal-Normal)</li>
      <li>Naive Bayes <strong>text classification</strong> üçün hələ də çox effektivdir</li>
      <li>Bayesian optimization <strong>hyperparameter tuning</strong> üçün vaxt qənaət edir</li>
      <li><strong>Credible interval</strong> (Bayesian) ilə <strong>confidence interval</strong> (Frequentist) fərqlidir</li>
    </ul>
  `,

  starterCode: {
    html: `<div class="probability-lab">
  <h2>🎲 Ehtimal Nəzəriyyəsi Lab: Bayes Teoremi</h2>
  
  <section class="demo-section">
    <h3>1. Xəstəlik Testi Simulyatoru (Bayes Klassikası)</h3>
    <div class="medical-test">
      <div class="test-parameters">
        <h4>Test Parametrləri</h4>
        <div class="param-slider">
          <label>Xəstəlik prevalansı (%):</label>
          <input type="range" id="prevalence" min="0.1" max="50" value="1" step="0.1" oninput="updateMedicalTest()">
          <span id="prevVal">1%</span>
        </div>
        <div class="param-slider">
          <label>Test həssaslığı (%):</label>
          <input type="range" id="sensitivity" min="50" max="100" value="99" oninput="updateMedicalTest()">
          <span id="sensVal">99%</span>
        </div>
        <div class="param-slider">
          <label>Test spesifikliyi (%):</label>
          <input type="range" id="specificity" min="50" max="100" value="99" oninput="updateMedicalTest()">
          <span id="specVal">99%</span>
        </div>
      </div>
      
      <div class="test-visualization" id="testViz">
        <div class="population-box">
          <h4>100,000 Nəfər</h4>
          <div class="pop-groups">
            <div class="group sick">
              <div class="group-label">Xəstə</div>
              <div class="group-count" id="sickCount">1,000</div>
              <div class="sub-groups">
                <div class="sub true-pos" id="truePos">TP: 990</div>
                <div class="sub false-neg" id="falseNeg">FN: 10</div>
              </div>
            </div>
            <div class="group healthy">
              <div class="group-label">Sağlam</div>
              <div class="group-count" id="healthyCount">99,000</div>
              <div class="sub-groups">
                <div class="sub false-pos" id="falsePos">FP: 990</div>
                <div class="sub true-neg" id="trueNeg">TN: 98,010</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bayes-result" id="bayesResult">
          <div class="result-highlight">
            <div class="result-label">P(Xəstə | Pozitiv)</div>
            <div class="result-value" id="posteriorProb">50.0%</div>
          </div>
          <div class="result-explanation" id="resultExp">
            Test pozitiv çıxdıqda, həqiqətən xəstə olma ehtimalı
          </div>
        </div>
      </div>
      
      <div class="confusion-matrix" id="confMatrix">
        <table>
          <tr>
            <th></th>
            <th>Xəstə (Həqiqət)</th>
            <th>Sağlam (Həqiqət)</th>
          </tr>
          <tr>
            <th>Pozitiv (Test)</th>
            <td class="tp" id="cellTP">990</td>
            <td class="fp" id="cellFP">990</td>
          </tr>
          <tr>
            <th>Negativ (Test)</th>
            <td class="fn" id="cellFN">10</td>
            <td class="tn" id="cellTN">98,010</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>2. Naive Bayes Spam Filteri</h3>
    <div class="spam-filter">
      <div class="training-data">
        <h4>Təlim Datası</h4>
        <div class="email-list" id="emailList">
          <div class="email-item spam">
            <span class="email-text">Pulsuz qazan indi kliklə</span>
            <span class="email-label">SPAM</span>
          </div>
          <div class="email-item ham">
            <span class="email-text">Salam necəsən dostum</span>
            <span class="email-label">HAM</span>
          </div>
          <div class="email-item spam">
            <span class="email-text">Təcili pulsuz təklif</span>
            <span class="email-label">SPAM</span>
          </div>
          <div class="email-item ham">
            <span class="email-text">Görüş vaxtı sabah</span>
            <span class="email-label">HAM</span>
          </div>
        </div>
        <button onclick="trainClassifier()">Klassifikatoru Təlim Et</button>
      </div>
      
      <div class="classifier-demo">
        <h4>Yeni E-poçt Testi</h4>
        <input type="text" id="testEmail" placeholder="E-poçt mətnini daxil edin..." value="pulsuz qazan">
        <button onclick="classifyEmail()">Klassifikasiya Et</button>
        
        <div class="classification-result" id="classResult">
          <div class="prob-bars">
            <div class="prob-bar">
              <label>Spam:</label>
              <div class="bar-container">
                <div class="bar spam-bar" id="spamBar" style="width: 0%"></div>
                <span id="spamProb">0%</span>
              </div>
            </div>
            <div class="prob-bar">
              <label>Ham:</label>
              <div class="bar-container">
                <div class="bar ham-bar" id="hamBar" style="width: 0%"></div>
                <span id="hamProb">0%</span>
              </div>
            </div>
          </div>
          <div class="word-probabilities" id="wordProbs"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>3. Markov Zənciri - Hava Proqnozu</h3>
    <div class="markov-chain">
      <div class="transition-matrix">
        <h4>Keçid Matrisi</h4>
        <table id="transMatrix">
          <tr>
            <th></th>
            <th>Günəşli</th>
            <th>Buludlu</th>
            <th>Yağışlı</th>
          </tr>
          <tr>
            <th>Günəşli</th>
            <td><input type="number" id="t00" value="0.7" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t01" value="0.2" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t02" value="0.1" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
          </tr>
          <tr>
            <th>Buludlu</th>
            <td><input type="number" id="t10" value="0.3" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t11" value="0.4" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t12" value="0.3" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
          </tr>
          <tr>
            <th>Yağışlı</th>
            <td><input type="number" id="t20" value="0.2" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t21" value="0.3" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
            <td><input type="number" id="t22" value="0.5" step="0.1" min="0" max="1" onchange="updateMarkov()"></td>
          </tr>
        </table>
      </div>
      
      <div class="markov-simulation">
        <div class="initial-state">
          <label>Başlanğıc vəziyyət:</label>
          <select id="initialState" onchange="runMarkov()">
            <option value="0">Günəşli</option>
            <option value="1">Buludlu</option>
            <option value="2">Yağışlı</option>
          </select>
        </div>
        
        <div class="state-evolution" id="stateEvolution">
          <h4>Günlər üzrə ehtimallar</h4>
          <div class="evolution-chart" id="evoChart"></div>
        </div>
        
        <div class="steady-state" id="steadyState">
          <h4>Uzunmüddətli Tarazlıq</h4>
          <div class="steady-probs" id="steadyProbs"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>4. Bayesian A/B Test</h3>
    <div class="bayesian-ab">
      <div class="ab-inputs">
        <div class="version-input">
          <h4>A Versiyası (Kontrol)</h4>
          <label>Dönüşüm:</label>
          <input type="number" id="convA" value="100" min="0">
          <label>Cəmi:</label>
          <input type="number" id="totalA" value="1000" min="1">
          <div class="rate-display" id="rateA">10.0%</div>
        </div>
        
        <div class="vs-divider">VS</div>
        
        <div class="version-input">
          <h4>B Versiyası (Treatment)</h4>
          <label>Dönüşüm:</label>
          <input type="number" id="convB" value="120" min="0">
          <label>Cəmi:</label>
          <input type="number" id="totalB" value="1000" min="1">
          <div class="rate-display" id="rateB">12.0%</div>
        </div>
      </div>
      
      <button onclick="runBayesianAB()">Bayesian Analiz Et</button>
      
      <div class="ab-results" id="abResults">
        <div class="posterior-chart" id="postChart">
          <canvas id="abCanvas" width="600" height="300"></canvas>
        </div>
        <div class="probability-better" id="probBetter">
          <div class="big-prob" id="bigProb">P(B > A) = --%</div>
          <div class="credible-interval" id="credInterval">95% Credible Interval: [--%, --%]</div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3>5. Monty Hall Problemi</h3>
    <div class="monty-hall">
      <div class="problem-description">
        <p>3 qapı var: birinin arxasında avtomobil, digər ikisində keçi var. Siz 1 qapı seçirsiniz. Aparıcı (Monty) digər qapılardan birini açır və orada keçi olduğunu göstərir. <strong>Qalırsınız, yoxsa dəyişirsiniz?</strong></p>
      </div>
      
      <div class="doors-container" id="doorsContainer">
        <div class="door" id="door0" onclick="selectDoor(0)">
          <div class="door-front">1</div>
          <div class="door-back">?</div>
        </div>
        <div class="door" id="door1" onclick="selectDoor(1)">
          <div class="door-front">2</div>
          <div class="door-back">?</div>
        </div>
        <div class="door" id="door2" onclick="selectDoor(2)">
          <div class="door-front">3</div>
          <div class="door-back">?</div>
        </div>
      </div>
      
      <div class="game-controls" id="gameControls">
        <p id="gameStatus">Qapı seçin!</p>
        <button id="switchBtn" onclick="switchDoor()" style="display:none;">Dəyiş</button>
        <button id="stayBtn" onclick="stayDoor()" style="display:none;">Qal</button>
        <button onclick="resetGame()">Yenidən Başla</button>
      </div>
      
      <div class="simulation-stats">
        <h4>Simulyasiya Statistikası (1000 oyun)</h4>
        <div class="sim-buttons">
          <button onclick="runSimulation(false)">Həmişə Qal (Stay)</button>
          <button onclick="runSimulation(true)">Həmişə Dəyiş (Switch)</button>
        </div>
        <div class="sim-results" id="simResults">
          <div class="sim-result">
            <span class="label">Qalmaqla qazanma:</span>
            <span class="value" id="stayWinRate">33.3%</span>
          </div>
          <div class="sim-result">
            <span class="label">Dəyişməklə qazanma:</span>
            <span class="value" id="switchWinRate">66.7%</span>
          </div>
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
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: #eaeaea;
  padding: 40px;
  line-height: 1.6;
}

.probability-lab {
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
  color: #ffd700;
  margin-bottom: 20px;
  font-size: 22px;
  border-left: 4px solid #ffd700;
  padding-left: 15px;
}

h4 {
  color: #00d9ff;
  margin-bottom: 15px;
  font-size: 18px;
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

/* Medical Test */
.medical-test {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.test-parameters {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.param-slider {
  margin-bottom: 20px;
}

.param-slider label {
  display: block;
  color: #8b949e;
  margin-bottom: 8px;
  font-size: 14px;
}

.param-slider input[type="range"] {
  width: 100%;
  margin-bottom: 5px;
}

.param-slider span {
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

.test-visualization {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
}

.population-box {
  margin-bottom: 20px;
}

.pop-groups {
  display: flex;
  gap: 20px;
  margin-top: 15px;
  height: 200px;
}

.group {
  flex: 1;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.group.sick {
  background: rgba(233, 69, 96, 0.2);
  border: 2px solid #e94560;
}

.group.healthy {
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid #00ff88;
}

.group-label {
  font-weight: bold;
  margin-bottom: 10px;
}

.group-count {
  font-size: 24px;
  color: #ffd700;
  font-family: 'Fira Code', monospace;
}

.sub-groups {
  margin-top: auto;
}

.sub {
  padding: 8px;
  margin: 5px 0;
  border-radius: 6px;
  font-size: 12px;
}

.true-pos {
  background: #e94560;
  color: white;
}

.false-neg {
  background: #ff6b6b;
  color: white;
  opacity: 0.7;
}

.false-pos {
  background: #ffd700;
  color: #000;
}

.true-neg {
  background: #00ff88;
  color: #000;
  opacity: 0.7;
}

.bayes-result {
  background: #0d1117;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #00d9ff;
}

.result-highlight {
  margin-bottom: 15px;
}

.result-label {
  color: #8b949e;
  font-size: 14px;
  margin-bottom: 10px;
}

.result-value {
  font-size: 48px;
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

.confusion-matrix {
  grid-column: 1 / -1;
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
}

.confusion-matrix table {
  margin: 0 auto;
  border-collapse: collapse;
}

.confusion-matrix th, .confusion-matrix td {
  padding: 15px 25px;
  border: 1px solid #30363d;
}

.confusion-matrix th {
  background: #0d1117;
  color: #00d9ff;
}

.tp { background: rgba(233, 69, 96, 0.3); color: #ff6b6b; font-weight: bold; }
.fp { background: rgba(255, 215, 0, 0.3); color: #ffd700; font-weight: bold; }
.fn { background: rgba(255, 107, 107, 0.3); color: #ff6b6b; }
.tn { background: rgba(0, 255, 136, 0.3); color: #00ff88; }

/* Spam Filter */
.spam-filter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.training-data, .classifier-demo {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.email-list {
  margin: 15px 0;
  max-height: 200px;
  overflow-y: auto;
}

.email-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  background: #0d1117;
  border-radius: 8px;
  border-left: 4px solid;
}

.email-item.spam {
  border-left-color: #e94560;
}

.email-item.ham {
  border-left-color: #00ff88;
}

.email-text {
  font-size: 14px;
  color: #eaeaea;
}

.email-label {
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
}

.email-item.spam .email-label {
  background: #e94560;
  color: white;
}

.email-item.ham .email-label {
  background: #00ff88;
  color: #000;
}

#testEmail {
  width: 100%;
  padding: 12px;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 16px;
}

.classification-result {
  margin-top: 20px;
  padding: 20px;
  background: #0d1117;
  border-radius: 10px;
}

.prob-bars {
  margin-bottom: 20px;
}

.prob-bar {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.prob-bar label {
  width: 60px;
  color: #8b949e;
}

.bar-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
  background: #1a1a2e;
  border-radius: 15px;
  overflow: hidden;
  padding: 3px;
}

.bar {
  height: 100%;
  border-radius: 12px;
  transition: width 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
}

.spam-bar {
  background: linear-gradient(90deg, #e94560, #ff6b6b);
}

.ham-bar {
  background: linear-gradient(90deg, #00ff88, #00d9ff);
}

/* Markov Chain */
.markov-chain {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.transition-matrix {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.transition-matrix table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.transition-matrix th, .transition-matrix td {
  padding: 12px;
  text-align: center;
  border: 1px solid #30363d;
}

.transition-matrix input {
  width: 60px;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #00ff88;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
}

.markov-simulation {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
}

.initial-state {
  margin-bottom: 20px;
}

.initial-state select {
  background: #0d1117;
  border: 2px solid #00d9ff;
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-left: 10px;
}

.evolution-chart {
  height: 200px;
  background: #0d1117;
  border-radius: 10px;
  margin: 15px 0;
  position: relative;
  overflow: hidden;
}

.evo-line {
  position: absolute;
  height: 2px;
  transform-origin: left;
}

.steady-probs {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 15px;
}

.steady-item {
  background: #0d1117;
  padding: 15px 25px;
  border-radius: 8px;
  text-align: center;
}

.steady-label {
  font-size: 12px;
  color: #8b949e;
  margin-bottom: 5px;
}

.steady-value {
  font-size: 24px;
  color: #00ff88;
  font-family: 'Fira Code', monospace;
}

/* Bayesian AB */
.bayesian-ab {
  text-align: center;
}

.ab-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.version-input {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  min-width: 200px;
}

.version-input label {
  display: block;
  color: #8b949e;
  margin: 10px 0 5px 0;
  font-size: 14px;
}

.version-input input {
  width: 100%;
  padding: 10px;
  background: #0d1117;
  border: 2px solid #30363d;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
}

.rate-display {
  margin-top: 15px;
  font-size: 28px;
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
}

.vs-divider {
  font-size: 24px;
  color: #e94560;
  font-weight: bold;
}

.ab-results {
  margin-top: 30px;
}

.big-prob {
  font-size: 36px;
  color: #ffd700;
  font-weight: bold;
  margin: 20px 0;
}

.credible-interval {
  color: #8b949e;
  font-size: 16px;
}

/* Monty Hall */
.monty-hall {
  text-align: center;
}

.problem-description {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.problem-description p {
  line-height: 1.8;
  color: #eaeaea;
}

.doors-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
}

.door {
  width: 120px;
  height: 180px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
}

.door-front, .door-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  transition: transform 0.6s;
}

.door-front {
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  border: 4px solid #654321;
  color: #ffd700;
}

.door-back {
  background: #1a1a2e;
  border: 4px solid #00ff88;
  transform: rotateY(180deg);
  font-size: 60px;
}

.door.open .door-front {
  transform: rotateY(180deg);
}

.door.open .door-back {
  transform: rotateY(0deg);
}

.door.selected .door-front {
  border-color: #00d9ff;
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

.game-controls {
  margin: 20px 0;
}

#gameStatus {
  font-size: 20px;
  color: #ffd700;
  margin-bottom: 15px;
  min-height: 30px;
}

.simulation-stats {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 12px;
  margin-top: 30px;
}

.sim-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
}

.sim-result {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  background: #0d1117;
  border-radius: 8px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.sim-result .value {
  color: #00ff88;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
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
  body { padding: 20px; }
  .medical-test, .spam-filter, .markov-chain { grid-template-columns: 1fr; }
  .ab-inputs { flex-direction: column; }
  .doors-container { gap: 15px; }
  .door { width: 90px; height: 135px; }
}`
  },

  exercise: {
    title: "🎯 Bayesian Email Klassifikatoru - Multinomial Naive Bayes",
    description: "Tam funksional spam filteri yaradın. Multinomial Naive Bayes istifadə edərək e-poçtları 'spam', 'promosyon', 'şəxsi' kateqoriyalarına ayırın.",
    requirements: [
      "Enron dataset və ya özünüz 500+ e-poçt etiketləyin (spam/promosyon/şəxsi)",
      "Mətni təmizləyin (lowercase, stopwords çıxarma, tokenization)",
      "Bag of Words modeli yaradın (hər sözün tezliyi)",
      "Laplace smoothing (additive smoothing) tətbiq edin",
      "Log-ehtimallar istifadə edin underflow qarşısını almaq üçün",
      "Prior ehtimalları siniflərin paylanmasına görə tənzimləyin",
      "10-fold cross-validation ilə modeli qiymətləndirin",
      "Precision, Recall, F1-score hesablayın hər sinif üçün",
      "Confusion matrix yaradın və analiz edin",
      "Yeni e-poçt üçün top 3 səbəb sözü göstərin (hansı sözlər qərarı təsir etdi)"
    ],
    starterCode: `import numpy as np
import re
from collections import defaultdict, Counter
import json

class MultinomialNB:
    """
    Multinomial Naive Bayes Email Klassifikatoru
    Kateqoriyalar: spam, promosyon, şəxsi
    """
    
    def __init__(self, alpha=1.0):
        """
        alpha: Laplace smoothing parametri (default=1.0)
        """
        self.alpha = alpha  # Smoothing parametri
        self.class_priors = {}      # P(y)
        self.word_probs = {}        # P(w|y)
        self.vocab = set()          # Bütün sözlər
        self.classes = []           # Kateqoriyalar
        
    def preprocess(self, text):
        """
        Mətni təmizlə və tokenlərə ayır
        """
        # Kodunuzu bura yazın:
        # 1. Lowercase çevir
        # 2. Regex ilə yalnız hərflər saxla
        # 3. Stopwords çıxart (the, is, at, və s.)
        # 4. Split ilə tokenlərə ayır
        pass
        
        return tokens
    
    def fit(self, texts, labels):
        """
        Modeli təlim et
        texts: ['email mətni 1', 'email mətni 2', ...]
        labels: ['spam', 'şəxsi', 'promosyon', ...]
        """
        self.classes = list(set(labels))
        n_samples = len(labels)
        
        # Hər sinif üçün söz sayğacları
        class_word_counts = defaultdict(Counter)
        class_doc_counts = defaultdict(int)
        total_words_in_class = defaultdict(int)
        
        # Kodunuzu bura yazın:
        # 1. Hər sənədi işlə:
        #    - preprocess() ilə tokenlərə ayır
        #    - vocab update et
        #    - class_word_counts[label].update(tokens)
        #    - class_doc_counts[label] += 1
        #    - total_words_in_class[label] += len(tokens)
        
        # 2. Prior ehtimalları hesabla: P(y) = N_y / N
        # self.class_priors[cls] = ...
        
        # 3. Söz ehtimallarını hesabla (Laplace smoothing):
        # P(w|y) = (count(w,y) + alpha) / (total_words_y + alpha * |V|)
        # self.word_probs[cls][word] = ...
        
        pass
    
    def predict(self, text):
        """
        Yeni mətnin sinifini və ehtimallarını qaytar
        """
        tokens = self.preprocess(text)
        token_counts = Counter(tokens)
        
        scores = {}
        
        # Kodunuzu bura yazın:
        # Hər sinif üçün:
        # 1. log_prior = log(P(y))
        # 2. log_likelihood = sum(count(w) * log(P(w|y)))
        # 3. score = log_prior + log_likelihood
        # scores[cls] = score
        
        # Softmax tətbiq et scores üzərində
        # (vəya sadəcə ən yüksək score-u qaytar)
        
        pass
        
        return predicted_class, probabilities
    
    def predict_top_features(self, text, top_n=3):
        """
        Qərar verən top sözləri qaytar
        """
        # Kodunuzu bura yazın:
        # Hər sözün sinifə olan töhfəsini hesabla
        # Ən yüksək töhfə verən sözləri qaytar
        
        pass
    
    def evaluate(self, texts, labels):
        """
        Modeli qiymətləndir: accuracy, precision, recall, f1
        """
        predictions = [self.predict(t)[0] for t in texts]
        
        # Kodunuzu bura yazın:
        # Confusion matrix yaradın
        # Hər sinif üçün precision, recall, f1 hesabla
        # Macro və weighted average hesabla
        
        pass

def load_data():
    """
    Təlim datası yaradın (real dataset əvəzinə nümunə)
    """
    # Nümunə data - öz datasetinizlə əvəz edin
    data = [
        # Spam nümunələri
        ("Pulsuz qazan indi kliklə burada", "spam"),
        ("Təcili! Hesabınız bloklanacaq", "spam"),
        ("Viagra cialis pulsuz çatdırılma", "spam"),
        ("Lotereya qalib oldunuz pul göndərin", "spam"),
        
        # Promosyon nümunələri
        ("Endirim 50% yalnız bu həftə", "promosyon"),
        ("Yeni kolleksiya mağazamızda", "promosyon"),
        ("Endirim kodu: SALE2024", "promosyon"),
        ("Pulsuz çatdırılma 100 AZN-dən yuxarı", "promosyon"),
        
        # Şəxsi nümunələr
        ("Salam necəsən görüşək?", "şəxsi"),
        ("Yarın saat 3-də görüş", "şəxsi"),
        ("Təşəkkür edirəm köməyin üçün", "şəxsi"),
        ("Doğum günün mübarək!", "şəxsi"),
    ]
    
    # Data artırmaq üçün təkrarlayın və variasiya əlavə edin
    texts, labels = [], []
    for _ in range(50):  # Hər nümunədən 50 ədəd
        for text, label in data:
            # Kiçik variasiyalar əlavə et
            variation = text + " " + str(np.random.randint(100))
            texts.append(variation)
            labels.append(label)
    
    return texts, labels

def cross_validation(X, y, n_folds=10):
    """
    n-fold cross-validation
    """
    # Kodunuzu bura yazın:
    # Data qatlamalara böl
    # Hər qatlamada: digərləri ilə təlim et, bu qatlamada test et
    # Orta metrikləri hesabla
    
    pass

# Əsas proqram
if __name__ == "__main__":
    print("=== BAYESIAN EMAIL KLASSIFIKATORU ===\\n")
    
    # 1. Data yüklə
    texts, labels = load_data()
    print(f"Ümumi nümunə: {len(texts)}")
    print(f"Siniflər: {set(labels)}\\n")
    
    # 2. Data böl (train/test)
    split_idx = int(0.8 * len(texts))
    X_train, X_test = texts[:split_idx], texts[split_idx:]
    y_train, y_test = labels[:split_idx], labels[split_idx:]
    
    print(f"Təlim: {len(X_train)}, Test: {len(X_test)}\\n")
    
    # 3. Model yarat və təlim et
    model = MultinomialNB(alpha=1.0)
    model.fit(X_train, y_train)
    
    print(f"Vocab ölçüsü: {len(model.vocab)} söz")
    print(f"Sinif priors: {model.class_priors}\\n")
    
    # 4. Tək nümunə test
    test_emails = [
        "Pulsuz endirim indi al",
        "Salam sabah görüşək",
        "Yeni məhsul endirimdə"
    ]
    
    print("4. TƏK NÜMUNƏ TESTLƏRI:")
    for email in test_emails:
        pred, probs = model.predict(email)
        top_words = model.predict_top_features(email)
        print(f"\\nEmail: {email}")
        print(f"Proqnoz: {pred} (ehtimallar: {probs})")
        print(f"Top sözlər: {top_words}")
    
    # 5. Qiymətləndirmə
    print("\\n5. MODEL QIYMƏTLƏNDIRMƏSI:")
    metrics = model.evaluate(X_test, y_test)
    print(f"Accuracy: {metrics['accuracy']:.3f}")
    print(f"Macro F1: {metrics['macro_f1']:.3f}")
    print(f"Weighted F1: {metrics['weighted_f1']:.3f}")
    
    # 6. Cross-validation
    print("\\n6. 10-FOLD CROSS-VALIDATION:")
    cv_scores = cross_validation(texts, labels, n_folds=10)
    print(f"CV Accuracy: {np.mean(cv_scores):.3f} (+/- {np.std(cv_scores):.3f})")
    
    # 7. Modeli saxla
    model_data = {
        'class_priors': model.class_priors,
        'word_probs': {k: dict(v) for k, v in model.word_probs.items()},
        'vocab': list(model.vocab),
        'classes': model.classes,
        'alpha': model.alpha
    }
    
    with open('bayes_model.json', 'w', encoding='utf-8') as f:
        json.dump(model_data, f, ensure_ascii=False, indent=2)
    
    print("\\n✅ Model 'bayes_model.json' faylında saxlandı!")`,
  },

  quiz: [
    {
      question: "Bayes teoreminin əsas məqsədi nədir?",
      options: ["Ehtimalı 1 etmək", "Prior bilikləri yeni məlumatla yeniləmək", "Xəta tapmaq", "Determinant hesablamaq"],
      correctAnswer: 1
    },
    {
      question: "P(H|E) nə deməkdir?",
      options: ["H baş vermədən E-nin ehtimalı", "E sübutu olduqda H hipotezinin ehtimalı", "H və E-nin birlikdə ehtimalı", "H və E-nin fərqi"],
      correctAnswer: 1
    },
    {
      question: "Naive Bayes niyə 'naive' (sadəlövh) adlanır?",
      options: ["Sadə kod olması üçün", "Xüsusiyyətlərin bir-birindən asılı olmadığını güman edir", "Yalnız iki sinif işləyir", "Həmişə səhv nəticə verir"],
      correctAnswer: 1
    },
    {
      question: "Xəstəlik testi 99% dəqiqdirsə və xəstəlik 1% prevalansdadırsa, test pozitiv çıxdıqda həqiqətən xəstə olma ehtimalı təxminən neçədir?",
      options: ["99%", "50%", "10%", "1%"],
      correctAnswer: 1
    },
    {
      question: "Laplace smoothing nə üçündür?",
      options: ["Sürəti artırmaq", "Sıfır ehtimal problemini həll etmək", "Datanı artırmaq", "Modeli mürəkkəbləşdirmək"],
      correctAnswer: 1
    },
    {
      question: "Markov zəncirinin əsas xüsusiyyəti nədir?",
      options: ["Keçmişdən asılı olmaq", "Yalnız indiki vəziyyətdən asılı olmaq", "Gələcəyi proqnozlaşdıra bilməmək", "Deterministik olmaq"],
      correctAnswer: 1
    },
    {
      question: "P(A ∩ B) nə deməkdir?",
      options: ["A və ya B", "A və B-nin kəsişməsi (hər ikisi)", "A olmadan B", "A-nın tamamlayıcısı"],
      correctAnswer: 1
    },
    {
      question: "Prior ehtimal nədir?",
      options: ["Yeni məlumatdan sonra ehtimal", "Əvvəlki bilik əsasında ehtimal", "Həmişə 0.5 olan ehtimal", "Dəyişməz ehtimal"],
      correctAnswer: 1
    },
    {
      question: "Bayesian A/B test-in üstünlüyü nədir?",
      options: ["Daha sürətli hesablanır", "Nəticələri ehtimallar şəklində verir və interpretasiyası asandır", "Daha az data tələb edir", "Həmişə düzgün nəticə verir"],
      correctAnswer: 1
    },
    {
      question: "Monty Hall probleminə görə, qapı dəyişdikdə qazanma ehtimalı nə qədərdir?",
      options: ["1/3 (33.3%)", "1/2 (50%)", "2/3 (66.7%)", "3/4 (75%)"],
      correctAnswer: 2
    }
  ]
};

export default topicai15;