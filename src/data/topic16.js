export const topic16 = {
  id: 16,
  title: "Events və Event Handling",
  duration: "75 dəq",
  isFree: false,
  
  content: `
    <h4>Event Nədir?</h4>
    <p>Event-lər browser-də baş verən hərəkətlərdir: klik, hover, scroll, keypress, load və s. JavaScript ilə bu event-lərə reaksiya verə bilərik.</p>
    
    <h4>Event Əlavə Etmə Yolları</h4>
    <pre><code>// 1. HTML attribute (çox köhnə, istifadə etməyin)
&lt;button onclick="handleClick()"&gt;Click&lt;/button&gt;

// 2. DOM property
button.onclick = function() { };

// 3. addEventListener (tövsiyə olunur)
button.addEventListener('click', handler);
button.addEventListener('click', handler, { once: true });
button.removeEventListener('click', handler);</code></pre>

    <h4>Əsas Event Tipləri</h4>
    <ul>
      <li><strong>Mouse:</strong> click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, contextmenu</li>
      <li><strong>Keyboard:</strong> keydown, keyup, keypress</li>
      <li><strong>Form:</strong> submit, change, input, focus, blur</li>
      <li><strong>Document/Window:</strong> load, DOMContentLoaded, resize, scroll, hashchange</li>
      <li><strong>Drag & Drop:</strong> dragstart, drag, dragend, drop</li>
    </ul>

    <h4>Event Object</h4>
    <pre><code>element.addEventListener('click', function(event) {
  event.target;           // Event baş verən element
  event.currentTarget;    // Listener bağlı olan element
  event.type;             // Event tipi (click, v s.)
  event.preventDefault(); // Default davranışı blokla
  event.stopPropagation(); // Bubbling-i dayandır
  event.clientX, event.clientY; // Kordinatlar
  event.key;              // Basılan klaviş
});</code></pre>

    <h4>Event Delegation</h4>
    <pre><code>// Daha yaxşı performans üçün
list.addEventListener('click', function(e) {
  if (e.target.matches('li')) {
    console.log('List item clicked:', e.target.textContent);
  }
});</code></pre>

    <h4>Event Phases</h4>
    <pre><code>// 1. Capturing (root → target)
// 2. Target
// 3. Bubbling (target → root)

element.addEventListener('click', handler, true); // Capturing
element.addEventListener('click', handler, false); // Bubbling (default)</code></pre>
  `,

  starterCode: {
    html: `<div class="events-lab">
  <h2>🎯 Events & Event Handling Lab</h2>
  
  <section class="demo-section">
    <h3>1. Mouse Events</h3>
    <div class="mouse-box" id="mouseBox">
      <span>Hover, Click, Right-Click me!</span>
      <div class="coords" id="coords">X: 0, Y: 0</div>
    </div>
    <div class="event-log" id="mouseLog"></div>
    <button onclick="clearLog('mouseLog')">Clear Log</button>
  </section>

  <section class="demo-section">
    <h3>2. Keyboard Events</h3>
    <input type="text" class="key-input" id="keyInput" placeholder="Type something...">
    <div class="key-display" id="keyDisplay">Press any key</div>
    <div class="event-log" id="keyLog"></div>
  </section>

  <section class="demo-section">
    <h3>3. Event Delegation</h3>
    <ul class="delegation-list" id="delegationList">
      <li>Item 1 <button class="delete-btn">Delete</button></li>
      <li>Item 2 <button class="delete-btn">Delete</button></li>
      <li>Item 3 <button class="delete-btn">Delete</button></li>
    </ul>
    <button onclick="addListItem()">Add Item</button>
    <p class="info">New items also work thanks to delegation!</p>
  </section>

  <section class="demo-section">
    <h3>4. Form Events</h3>
    <form class="demo-form" id="demoForm">
      <input type="text" name="username" placeholder="Username" required>
      <input type="email" name="email" placeholder="Email" required>
      <select name="country">
        <option value="">Select Country</option>
        <option value="az">Azerbaijan</option>
        <option value="tr">Turkey</option>
        <option value="us">USA</option>
      </select>
      <label class="checkbox-label">
        <input type="checkbox" name="subscribe"> Subscribe to newsletter
      </label>
      <button type="submit">Submit</button>
    </form>
    <pre class="form-output" id="formOutput">Form data will appear here...</pre>
  </section>

  <section class="demo-section">
    <h3>5. Custom Events</h3>
    <button onclick="triggerCustomEvent()">Trigger Custom Event</button>
    <div class="custom-event-display" id="customDisplay">Waiting for custom event...</div>
  </section>

  <section class="demo-section">
    <h3>6. Event Phases Demo</h3>
    <div class="phase-outer" id="phaseOuter">
      Outer (Capture/Bubble)
      <div class="phase-middle" id="phaseMiddle">
        Middle
        <div class="phase-inner" id="phaseInner">
          Inner (Target)
        </div>
      </div>
    </div>
    <div class="phase-controls">
      <label><input type="checkbox" id="useCapture"> Use Capture Phase</label>
      <button onclick="setupPhaseDemo()">Setup Listeners</button>
      <button onclick="clearPhaseLog()">Clear</button>
    </div>
    <div class="event-log" id="phaseLog"></div>
  </section>
</div>`,
    
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  padding: 40px;
  line-height: 1.6;
}

.events-lab {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  color: #f472b6;
  margin-bottom: 30px;
  font-size: 32px;
}

h3 {
  color: #38bdf8;
  margin-bottom: 20px;
  font-size: 20px;
}

.demo-section {
  background: #1e293b;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid #334155;
}

/* Mouse Events */
.mouse-box {
  width: 300px;
  height: 150px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  position: relative;
}

.mouse-box:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
}

.mouse-box:active {
  transform: scale(0.95);
}

.coords {
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  opacity: 0.8;
}

/* Keyboard Events */
.key-input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  background: #0f172a;
  border: 2px solid #334155;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 15px;
}

.key-input:focus {
  outline: none;
  border-color: #38bdf8;
}

.key-display {
  font-size: 24px;
  text-align: center;
  padding: 20px;
  background: #0f172a;
  border-radius: 8px;
  margin-bottom: 15px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.key-code {
  display: inline-block;
  background: #38bdf8;
  color: #0f172a;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 10px;
}

/* Event Delegation */
.delegation-list {
  list-style: none;
  margin-bottom: 15px;
}

.delegation-list li {
  background: #0f172a;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slideIn 0.3s ease;
}

.delete-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.delete-btn:hover {
  background: #dc2626;
}

.info {
  color: #34d399;
  font-size: 14px;
  margin-top: 10px;
}

/* Form Events */
.demo-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.demo-form input,
.demo-form select {
  padding: 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
}

.demo-form input:focus,
.demo-form select:focus {
  outline: none;
  border-color: #38bdf8;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.form-output {
  background: #0f172a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  font-family: monospace;
  font-size: 13px;
  white-space: pre-wrap;
}

/* Custom Events */
.custom-event-display {
  padding: 30px;
  background: #0f172a;
  border-radius: 8px;
  text-align: center;
  border: 2px dashed #334155;
  transition: all 0.3s;
}

.custom-event-display.triggered {
  background: #34d399;
  color: #0f172a;
  border-color: #34d399;
}

/* Event Phases */
.phase-outer {
  background: #ef4444;
  padding: 40px;
  border-radius: 12px;
  cursor: pointer;
}

.phase-middle {
  background: #f59e0b;
  padding: 30px;
  border-radius: 8px;
  margin-top: 20px;
}

.phase-inner {
  background: #10b981;
  padding: 20px;
  border-radius: 6px;
  margin-top: 15px;
  text-align: center;
}

.phase-controls {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.phase-controls label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

/* Common */
.event-log {
  background: #0f172a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  font-family: monospace;
  font-size: 12px;
  max-height: 150px;
  overflow-y: auto;
  line-height: 1.8;
}

button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

button:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
    js: `// Mouse Events
const mouseBox = document.getElementById('mouseBox');
const coords = document.getElementById('coords');
const mouseLog = document.getElementById('mouseLog');

function logEvent(message) {
  const time = new Date().toLocaleTimeString();
  mouseLog.innerHTML += '[' + time + '] ' + message + '\\n';
  mouseLog.scrollTop = mouseLog.scrollHeight;
}

mouseBox.addEventListener('mouseenter', () => {
  mouseBox.style.background = 'linear-gradient(135deg, #ec4899, #f43f5e)';
  logEvent('mouseenter');
});

mouseBox.addEventListener('mouseleave', () => {
  mouseBox.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
  logEvent('mouseleave');
});

mouseBox.addEventListener('mousemove', (e) => {
  const rect = mouseBox.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  coords.textContent = 'X: ' + x + ', Y: ' + y;
});

mouseBox.addEventListener('click', (e) => {
  logEvent('click (button: ' + e.button + ')');
});

mouseBox.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  logEvent('contextmenu (right click blocked)');
});

mouseBox.addEventListener('dblclick', () => {
  logEvent('dblclick');
  mouseBox.style.transform = 'rotate(360deg)';
  setTimeout(() => mouseBox.style.transform = '', 500);
});

// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');
const keyLog = document.getElementById('keyLog');

keyInput.addEventListener('keydown', (e) => {
  keyDisplay.innerHTML = 
    'Key: <span class="key-code">' + e.key + '</span>' +
    'Code: <span class="key-code">' + e.code + '</span>';
  
  keyLog.innerHTML += 'keydown: ' + e.key + ' (ctrl:' + e.ctrlKey + ', shift:' + e.shiftKey + ', alt:' + e.altKey + ')\\n';
  keyLog.scrollTop = keyLog.scrollHeight;
  
  // Prevent default for certain keys
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    keyLog.innerHTML += '→ Enter pressed, form submission prevented\\n';
  }
});

keyInput.addEventListener('input', (e) => {
  console.log('input event:', e.target.value);
});

// Event Delegation
const delegationList = document.getElementById('delegationList');

delegationList.addEventListener('click', (e) => {
  // Handle delete buttons
  if (e.target.matches('.delete-btn')) {
    e.target.parentElement.remove();
    console.log('Deleted via delegation');
  }
  
  // Handle list items
  if (e.target.matches('li')) {
    e.target.style.background = '#334155';
    setTimeout(() => e.target.style.background = '', 200);
  }
});

function addListItem() {
  const li = document.createElement('li');
  const itemNum = delegationList.children.length + 1;
  li.innerHTML = 'Item ' + itemNum + ' <button class="delete-btn">Delete</button>';
  delegationList.appendChild(li);
}

// Form Events
const demoForm = document.getElementById('demoForm');
const formOutput = document.getElementById('formOutput');

demoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(demoForm);
  const data = Object.fromEntries(formData);
  
  // Handle checkbox manually
  data.subscribe = demoForm.subscribe.checked;
  
  formOutput.textContent = 'Form submitted!\\n' + JSON.stringify(data, null, 2);
  console.log('Form data:', data);
});

demoForm.addEventListener('change', (e) => {
  console.log('Change event:', e.target.name, '=', e.target.value);
});

demoForm.addEventListener('focusin', (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.style.borderColor = '#38bdf8';
  }
});

demoForm.addEventListener('focusout', (e) => {
  if (e.target.tagName === 'INPUT') {
    e.target.style.borderColor = '#334155';
  }
});

// Custom Events
function triggerCustomEvent() {
  const customEvent = new CustomEvent('userAction', {
    detail: {
      action: 'buttonClick',
      timestamp: Date.now(),
      user: 'guest'
    },
    bubbles: true,
    cancelable: true
  });
  
  document.dispatchEvent(customEvent);
}

document.addEventListener('userAction', (e) => {
  const display = document.getElementById('customDisplay');
  display.textContent = 'Custom event received!\\n' + JSON.stringify(e.detail, null, 2);
  display.classList.add('triggered');
  setTimeout(() => display.classList.remove('triggered'), 1000);
  
  console.log('Custom event:', e.detail);
});

// Event Phases
function setupPhaseDemo() {
  const useCapture = document.getElementById('useCapture').checked;
  const log = document.getElementById('phaseLog');
  
  // Clear previous listeners by cloning
  const outer = document.getElementById('phaseOuter');
  const newOuter = outer.cloneNode(true);
  outer.parentNode.replaceChild(newOuter, outer);
  
  const middle = document.getElementById('phaseMiddle');
  const newMiddle = newOuter.querySelector('#phaseMiddle');
  const inner = document.getElementById('phaseInner');
  const newInner = newMiddle.querySelector('#phaseInner');
  
  function phaseHandler(e) {
    const phase = e.eventPhase === 1 ? 'CAPTURING' : e.eventPhase === 2 ? 'AT_TARGET' : 'BUBBLING';
    const message = e.currentTarget.className + ' - ' + phase;
    log.innerHTML += message + '\\n';
    log.scrollTop = log.scrollHeight;
    console.log(message);
  }
  
  newOuter.addEventListener('click', phaseHandler, useCapture);
  newMiddle.addEventListener('click', phaseHandler, useCapture);
  newInner.addEventListener('click', phaseHandler, useCapture);
  
  log.innerHTML += 'Listeners set (useCapture: ' + useCapture + ')\\nClick inner green box!\\n\\n';
}

function clearPhaseLog() {
  document.getElementById('phaseLog').innerHTML = '';
}

function clearLog(id) {
  document.getElementById(id).innerHTML = '';
}

// Global event listener for demo
document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    console.log('Button clicked:', e.target.textContent);
  }
});

// Passive event listener for scroll performance
window.addEventListener('scroll', () => {
  console.log('Scroll position:', window.scrollY);
}, { passive: true });

console.log('Events module loaded!');
console.log('Tip: Use { once: true } for one-time listeners');`,
  },

  exercise: {
    title: "Interactive Drum Kit",
    description: "Keyboard events istifadə edərək drum kit yaradın. Hər klaviş səsi çalsın, vizual effekt versin. Mouse ilə də çalmaq mümkün olsun.",
    requirements: [
      "keydown və keyup event-ləri istifadə edin",
      "Audio API ilə səslər çalın",
      "Hər drum-a data-key attribute əlavə edin",
      "Active class ilə vizual feedback verin",
      "transitionend event ilə animasiya bitəndə class-ı silin",
      "Mouse click ilə də eyni funksionallıq olsun",
      "Volume control əlavə edin",
      "Record və playback funksiyası əlavə edin"
    ],
    starterCode: `<div class="drum-kit">
  <div class="drum" data-key="65">
    <kbd>A</kbd>
    <span>Clap</span>
  </div>
  <!-- Digər drum-lar -->
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>

<script>
  // Event listeners yazın
  // Audio çalma funksiyası
  // Vizual effektlər
</script>`,
  },

  quiz: [
    {
      question: "addEventListener və onclick fərqi?",
      options: ["Yoxdur", "addEventListener çox handler əlavə edə bilər", "onclick daha sürətlidir", "addEventListener yalnız click üçün"],
      correctAnswer: 1
    },
    {
      question: "event.preventDefault() nə edir?",
      options: ["Event-i silir", "Default browser davranışını bloklayır", "Propagation-u dayandırır", "Handler-i silir"],
      correctAnswer: 1
    },
    {
      question: "event.stopPropagation() nə edir?",
      options: ["Event-i dayandırır", "Bubbling/capturing-i dayandırır", "Default davranışı bloklayır", "Səhifəni yeniləyir"],
      correctAnswer: 1
    },
    {
      question: "Event delegation nə üçündür?",
      options: ["Event-ləri silmək", "Dinamik elementlər üçün performans", "Keyboard events", "Form validation"],
      correctAnswer: 1
    },
    {
      question: "event.target və event.currentTarget fərqi?",
      options: ["Eyni şey", "target baş verən element, currentTarget listener olan", "currentTarget daha sürətlidir", "target yalnız click üçün"],
      correctAnswer: 1
    },
    {
      question: "DOMContentLoaded event-i nə vaxt baş verir?",
      options: ["Səhifə tam yüklənəndə", "DOM hazır olanda (images gözləmədən)", "User click edəndə", "Form submit olanda"],
      correctAnswer: 1
    },
    {
      question: "Custom event necə yaradılır?",
      options: ["new Event()", "new CustomEvent()", "createEvent()", "Hər ikisi A və B"],
      correctAnswer: 3
    },
    {
      question: "Passive event listener nə üçündür?",
      options: ["Event-i passiv etmək", "Scroll performansını yaxşılaşdırmaq", "Event-i bloklamaq", "Keyboard events üçün"],
      correctAnswer: 1
    },
    {
      question: "keyup və keypress fərqi?",
      options: ["Eyni şey", "keypress character, keyup key up olanda", "keyup yalnız modifier keys", "keypress deprecated-dir"],
      correctAnswer: 3
    },
    {
      question: "event bubbling default olaraq hansı istiqamətdədir?",
      options: ["Root-dan target-ə", "Target-dən root-a", "Yalnız target", "Random"],
      correctAnswer: 1
    }
  ]
};

export default topic16;