// -------------------- Greeting App --------------------

// Store user name
let userName = "";
try {
  if (localStorage.getItem("userName")) {
    userName = localStorage.getItem("userName");
    const nameInput = document.getElementById("nameInput");
    if (nameInput) nameInput.value = userName;
  }
} catch (e) {
  console.error("Error accessing localStorage:", e);
}

// Track current background class
let currentBackground = "";

// Enhanced Bible verses with categories
const versesMorning = [
  {text: "Lamentations 3:22-23 - 'The Lord's mercies are new every morning.'", category: "hope"},
  {text: "Psalm 5:3 - 'In the morning, Lord, you hear my voice.'", category: "faith"},
  {text: "Psalm 59:16 - 'I will sing of your strength in the morning.'", category: "strength"},
  {text: "Psalm 30:5 - 'Weeping may last for the night, but joy comes in the morning.'", category: "joy"},
  {text: "Psalm 143:8 - 'Let the morning bring me word of your unfailing love.'", category: "love"},
  {text: "Psalm 90:14 - 'Satisfy us in the morning with your unfailing love.'", category: "love"},
  {text: "Psalm 119:147 - 'I rise before dawn and cry for help.'", category: "faith"},
  {text: "Psalm 92:2 - 'Your deeds are great; I will declare your works.'", category: "joy"},
  {text: "Psalm 63:1 - 'O God, you are my God; earnestly I seek you.'", category: "faith"},
  {text: "Psalm 88:13 - 'But I call to you, Lord, every day.'", category: "faith"}
];

const versesDay = [
  {text: "Psalm 118:24 - 'This is the day the Lord has made; rejoice and be glad.'", category: "joy"},
  {text: "Colossians 3:23 - 'Work heartily, as for the Lord.'", category: "strength"},
  {text: "Proverbs 16:3 - 'Commit your work to the Lord, and your plans will succeed.'", category: "guidance"},
  {text: "Ecclesiastes 9:10 - 'Whatever your hand finds to do, do it with all your might.'", category: "strength"},
  {text: "Psalm 37:5 - 'Commit your way to the Lord.'", category: "faith"},
  {text: "Isaiah 41:10 - 'Fear not, for I am with you.'", category: "strength"},
  {text: "Philippians 4:13 - 'I can do all things through Christ.'", category: "strength"},
  {text: "Joshua 1:9 - 'Be strong and courageous.'", category: "strength"},
  {text: "Psalm 34:8 - 'Taste and see that the Lord is good.'", category: "joy"},
  {text: "Proverbs 3:6 - 'In all your ways acknowledge Him.'", category: "guidance"}
];

const versesAfternoon = [
  {text: "Isaiah 40:31 - 'Those who hope in the Lord will renew their strength.'", category: "hope"},
  {text: "Psalm 27:14 - 'Wait for the Lord; be strong.'", category: "strength"},
  {text: "Philippians 4:6 - 'Do not be anxious about anything.'", category: "anxiety"},
  {text: "Psalm 46:10 - 'Be still and know that I am God.'", category: "peace"},
  {text: "Psalm 119:105 - 'Your word is a lamp to my feet.'", category: "guidance"},
  {text: "Psalm 34:18 - 'The Lord is near to the brokenhearted.'", category: "comfort"},
  {text: "Psalm 55:22 - 'Cast your burden on the Lord.'", category: "anxiety"},
  {text: "Matthew 11:28 - 'Come to me, all you who are weary.'", category: "peace"},
  {text: "Psalm 9:10 - 'Those who know your name trust in you.'", category: "faith"},
  {text: "Psalm 31:24 - 'Be strong and take heart, all you who hope in the Lord.'", category: "hope"}
];

const versesEvening = [
  {text: "Psalm 141:2 - 'May my prayer be set before you like incense.'", category: "faith"},
  {text: "Psalm 119:148 - 'My eyes stay open through the watches of the night.'", category: "faith"},
  {text: "Psalm 4:8 - 'In peace I will lie down and sleep.'", category: "peace"},
  {text: "Psalm 63:6 - 'On my bed I remember you.'", category: "faith"},
  {text: "Psalm 16:7 - 'I will praise the Lord, who counsels me.'", category: "joy"},
  {text: "Psalm 121:3 - 'He will not let your foot slip.'", category: "peace"},
  {text: "Psalm 91:1-2 - 'Whoever dwells in the shelter of the Most High.'", category: "peace"},
  {text: "Psalm 27:1 - 'The Lord is my light and my salvation.'", category: "strength"},
  {text: "Psalm 145:18 - 'The Lord is near to all who call on Him.'", category: "faith"},
  {text: "Psalm 34:4 - 'I sought the Lord, and He answered me.'", category: "faith"}
];

const versesNight = [
  {text: "Psalm 4:8 - 'In peace I will lie down and sleep.'", category: "peace"},
  {text: "Psalm 127:2 - 'It is vain for you to rise up early.'", category: "peace"},
  {text: "Proverbs 3:24 - 'When you lie down, you will not be afraid.'", category: "peace"},
  {text: "Psalm 91:1 - 'He who dwells in the shelter of the Most High.'", category: "peace"},
  {text: "Psalm 63:6 - 'On my bed I remember you.'", category: "faith"},
  {text: "Psalm 16:8 - 'I keep my eyes always on the Lord.'", category: "faith"},
  {text: "Psalm 121:7 - 'The Lord will keep you from all harm.'", category: "peace"},
  {text: "Psalm 91:5 - 'You will not fear the terror of night.'", category: "peace"},
  {text: "Psalm 119:148 - 'My eyes are awake before the watches of the night.'", category: "faith"},
  {text: "Psalm 31:20 - 'You keep them in perfect peace whose minds are stayed on you.'", category: "peace"}
];

// Additional categorized verses
const additionalVerses = [
  {text: "Jeremiah 29:11 - 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.'", category: "hope"},
  {text: "Romans 15:13 - 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.'", category: "hope"},
  {text: "Psalm 34:17 - 'When the righteous cry for help, the Lord hears and delivers them out of all their troubles.'", category: "hope"},
  {text: "John 14:27 - 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.'", category: "peace"},
  {text: "Philippians 4:7 - 'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.'", category: "peace"},
  {text: "Isaiah 26:3 - 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'", category: "peace"},
  {text: "Deuteronomy 31:6 - 'Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.'", category: "strength"},
  {text: "Isaiah 41:10 - 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.'", category: "strength"},
  {text: "Psalm 28:7 - 'The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.'", category: "strength"},
  {text: "1 Peter 5:7 - 'Casting all your anxieties on him, because he cares for you.'", category: "anxiety"},
  {text: "Matthew 6:34 - 'Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.'", category: "anxiety"},
  {text: "Psalm 94:19 - 'When the cares of my heart are many, your consolations cheer my soul.'", category: "anxiety"},
  {text: "Psalm 16:11 - 'You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.'", category: "joy"},
  {text: "Nehemiah 8:10 - 'The joy of the Lord is your strength.'", category: "joy"},
  {text: "Romans 12:12 - 'Rejoice in hope, be patient in tribulation, be constant in prayer.'", category: "joy"},
  {text: "1 John 4:19 - 'We love because he first loved us.'", category: "love"},
  {text: "John 3:16 - 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.'", category: "love"},
  {text: "1 Corinthians 13:4 - 'Love is patient and kind; love does not envy or boast; it is not arrogant.'", category: "love"},
  {text: "Proverbs 3:5-6 - 'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.'", category: "faith"},
  {text: "Hebrews 11:1 - 'Now faith is the assurance of things hoped for, the conviction of things not seen.'", category: "faith"},
  {text: "James 1:5 - 'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.'", category: "guidance"}
];

// -------------------- Daily Quotes --------------------
const dailyQuotes = [
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Do not be anxious about anything. – Philippians 4:6",
  "I can do all things through Christ. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. – Joshua 1:9",
  "Commit your work to the Lord, and your plans will succeed. – Proverbs 16:3",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "For I know the plans I have for you. – Jeremiah 29:11",
  "Cast your anxiety on Him because He cares for you. – 1 Peter 5:7",
  "The steadfast love of the Lord never ceases. – Lamentations 3:22",
  "Delight yourself in the Lord, and He will give you the desires of your heart. – Psalm 37:4",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord is near to all who call on Him. – Psalm 145:18",
  "God is our refuge and strength, an ever-present help in trouble. – Psalm 46:1",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Rejoice always, pray without ceasing. – 1 Thessalonians 5:16-17",
  "He gives power to the faint, and to him who has no might He increases strength. – Isaiah 40:29",
  "Cast your burden on the Lord, and He will sustain you. – Psalm 55:22",
  "Let your light shine before others. – Matthew 5:16",
  "I will instruct you and teach you in the way you should go. – Psalm 32:8",
  "The Lord is good to all. – Psalm 145:9",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "Fear not, for I am with you. – Isaiah 41:10",
  "In everything give thanks. – 1 Thessalonians 5:18",
  "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  "Love your neighbor as yourself. – Matthew 22:39",
  "The Lord is righteous in all His ways. – Psalm 145:17",
  "Wait for the Lord; be strong, and let your heart take courage. – Psalm 27:14",
  "Peace I leave with you; my peace I give to you. – John 14:27",
  "God is faithful; He will not let you be tested beyond your strength. – 1 Corinthians 10:13"
];

// -------------------- App State --------------------
let currentVerse = "";
let currentQuote = "";
let currentVerseObj = null;
let favorites = [];
let readingHistory = [];
let currentCategory = "all";

// Journal Data
let prayerEntries = [];
let gratitudeEntries = [];
let prayerRequests = [];

// -------------------- Initialize Data --------------------
function initializeData() {
  try {
    // Load user data
    const savedFavorites = localStorage.getItem("bibleAppFavorites");
    if (savedFavorites) favorites = JSON.parse(savedFavorites);

    const savedHistory = localStorage.getItem("bibleAppHistory");
    if (savedHistory) readingHistory = JSON.parse(savedHistory);

    // Load journal data
    const savedPrayers = localStorage.getItem("bibleAppPrayers");
    if (savedPrayers) prayerEntries = JSON.parse(savedPrayers);

    const savedGratitude = localStorage.getItem("bibleAppGratitude");
    if (savedGratitude) gratitudeEntries = JSON.parse(savedGratitude);

    const savedRequests = localStorage.getItem("bibleAppRequests");
    if (savedRequests) prayerRequests = JSON.parse(savedRequests);

    updateFavoritesDisplay();
    updateJournalDisplays();
  } catch (e) {
    console.error("Error initializing data:", e);
  }
}

// -------------------- Journal Functions --------------------
function savePrayerEntry() {
  try {
    const prayerText = document.getElementById("prayerEntry").value.trim();
    if (!prayerText) return;

    const entry = {
      text: prayerText,
      date: new Date().toISOString(),
      verse: currentVerse
    };

    prayerEntries.unshift(entry);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    
    document.getElementById("prayerEntry").value = "";
    updatePrayerDisplay();
    
    // Show success feedback
    showSuccessMessage("Prayer saved successfully!");
  } catch (e) {
    console.error("Error saving prayer:", e);
  }
}

function saveGratitudeEntry() {
  try {
    const gratitudeText = document.getElementById("gratitudeEntry").value.trim();
    if (!gratitudeText) return;

    const entry = {
      text: gratitudeText,
      date: new Date().toISOString()
    };

    gratitudeEntries.unshift(entry);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    
    document.getElementById("gratitudeEntry").value = "";
    updateGratitudeDisplay();
    
    showSuccessMessage("Gratitude saved successfully!");
  } catch (e) {
    console.error("Error saving gratitude:", e);
  }
}

function addPrayerRequest() {
  try {
    const requestText = document.getElementById("prayerRequest").value.trim();
    if (!requestText) return;

    const request = {
      text: requestText,
      date: new Date().toISOString(),
      status: "praying"
    };

    prayerRequests.unshift(request);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    
    document.getElementById("prayerRequest").value = "";
    updatePrayerRequestsDisplay();
    
    showSuccessMessage("Prayer request added!");
  } catch (e) {
    console.error("Error adding prayer request:", e);
  }
}

function updateJournalDisplays() {
  updatePrayerDisplay();
  updateGratitudeDisplay();
  updatePrayerRequestsDisplay();
}

function updatePrayerDisplay() {
  const container = document.getElementById("prayerHistory");
  if (!container) return;

  if (prayerEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayers yet. Write your first prayer above!</div>';
    return;
  }

  container.innerHTML = prayerEntries.map((entry, index) => `
    <div class="journal-entry prayer">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deletePrayerEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
      ${entry.verse ? `<div class="entry-verse"><em>Inspired by: ${entry.verse}</em></div>` : ''}
    </div>
  `).join('');
}

function updateGratitudeDisplay() {
  const container = document.getElementById("gratitudeHistory");
  if (!container) return;

  if (gratitudeEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No gratitude entries yet. What are you thankful for today?</div>';
    return;
  }

  container.innerHTML = gratitudeEntries.map((entry, index) => `
    <div class="journal-entry gratitude">
      <div class="entry-header">
        <span class="entry-date">${formatDate(entry.date)}</span>
        <div class="entry-actions">
          <button class="entry-action" onclick="deleteGratitudeEntry(${index})" title="Delete">🗑️</button>
        </div>
      </div>
      <div class="entry-content">${entry.text}</div>
    </div>
  `).join('');
}

function updatePrayerRequestsDisplay() {
  const container = document.getElementById("requestsList");
  if (!container) return;

  if (prayerRequests.length === 0) {
    container.innerHTML = '<div class="empty-state">No prayer requests yet. Add your first request above!</div>';
    return;
  }

  container.innerHTML = prayerRequests.map((request, index) => `
    <div class="prayer-request">
      <div class="request-header">
        <span class="entry-date">${formatDate(request.date)}</span>
        <span class="request-status status-${request.status}">
          ${request.status === 'praying' ? '🙏 Praying' : '✅ Answered'}
        </span>
      </div>
      <div class="request-content">${request.text}</div>
      <div class="request-actions">
        <button class="request-btn answered" onclick="markRequestAnswered(${index})">
          ${request.status === 'praying' ? 'Mark Answered' : 'Answered 🙏'}
        </button>
        <button class="request-btn delete" onclick="deletePrayerRequest(${index})">Delete</button>
      </div>
    </div>
  `).join('');
}

function deletePrayerEntry(index) {
  if (confirm("Delete this prayer entry?")) {
    prayerEntries.splice(index, 1);
    localStorage.setItem("bibleAppPrayers", JSON.stringify(prayerEntries));
    updatePrayerDisplay();
  }
}

function deleteGratitudeEntry(index) {
  if (confirm("Delete this gratitude entry?")) {
    gratitudeEntries.splice(index, 1);
    localStorage.setItem("bibleAppGratitude", JSON.stringify(gratitudeEntries));
    updateGratitudeDisplay();
  }
}

function deletePrayerRequest(index) {
  if (confirm("Delete this prayer request?")) {
    prayerRequests.splice(index, 1);
    localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
    updatePrayerRequestsDisplay();
  }
}

function markRequestAnswered(index) {
  prayerRequests[index].status = "answered";
  localStorage.setItem("bibleAppRequests", JSON.stringify(prayerRequests));
  updatePrayerRequestsDisplay();
  showSuccessMessage("Prayer request marked as answered! 🙏");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function showSuccessMessage(message) {
  // Create temporary success message
  const successDiv = document.createElement('div');
  successDiv.textContent = message;
  successDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(successDiv);
  
  setTimeout(() => {
    successDiv.remove();
  }, 3000);
}

// -------------------- Tab Management --------------------
function setupJournalTabs() {
  const tabs = document.querySelectorAll('.journal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.journal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.journal-tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });
}

// ... (keep all other functions from Phase 1.2 - favorites, search, sharing, etc.) ...
// [All previous functionality remains intact]

// -------------------- Enhanced Event Listeners --------------------
function initializeEventListeners() {
  try {
    // Journal functionality
    document.getElementById('savePrayer')?.addEventListener('click', savePrayerEntry);
    document.getElementById('saveGratitude')?.addEventListener('click', saveGratitudeEntry);
    document.getElementById('addRequest')?.addEventListener('click', addPrayerRequest);
    
    // Tab management
    setupJournalTabs();
    
    // All other existing event listeners...
    // [Keep all Phase 1.2 event listeners]

  } catch (e) {
    console.error("Error initializing event listeners:", e);
  }
}

// -------------------- Initialize --------------------
try {
  initializeData();
  updateGreeting();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(updateGreeting, 60000);
  initializeEventListeners();
} catch (e) {
  console.error("Error during initialization:", e);
}
