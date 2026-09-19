// MLD VELAN - Reen Naturals Style Artisanal D2C Store Engine with HD Real Photography

// 1. PRODUCT CATALOG DATA WITH HD IMAGES
const PRODUCTS_DATA = [
  {
    id: "sathu-maavu",
    category: "health-mix",
    nameEn: "Traditional Multigrain Sathu Maavu (Health Mix)",
    nameTa: "பாரம்பரிய சத்துமாவு (Health Mix)",
    subtitleEn: "20+ Sprouted Millets, Pulses & Dry Fruits | Stone Ground | Zero Sugar",
    subtitleTa: "20+ முளைகட்டிய தானியங்கள் கொண்டு தயாரிக்கப்பட்டது",
    badge: "100% PURE HOMEMADE",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 1428,
    price: 230,
    mrp: 280,
    discountPercent: 18,
    defaultSize: "500g",
    prices: {
      "250g": { price: 120, mrp: 150, discount: 20 },
      "500g": { price: 230, mrp: 280, discount: 18 },
      "1kg": { price: 440, mrp: 540, discount: 19 }
    },
    image: "assets/sathu_maavu.jpg",
    benefits: ["Rich in Calcium & Plant Protein", "Boosts Child Growth & Immunity", "100% Stone-Ground Heritage"],
    descriptionEn: "Authentic homemade formula with 20+ sprouted millets, pulses, and dry fruits roasted traditionally to maximize daily immunity and vitality.",
    descriptionTa: "முளைகட்டிய கேழ்வரகு, கம்பு, சோளம், பாதாம், முந்திரி, ஏலக்காய் சேர்த்து பக்குவமாய் வறுத்து அரைத்த சத்துமாவு."
  },
  {
    id: "abc-malt",
    category: "health-care",
    nameEn: "Miracle ABC Malt (Apple, Beetroot, Carrot & Almonds)",
    nameTa: "ABC மால்ட் (Apple Beetroot Carrot)",
    subtitleEn: "Natural Skin Glow & Vitality Drink | Sweetened with Country Sugar",
    subtitleTa: "இயற்கை முகப்பொலிவு & ரத்த விருத்தி பானம்",
    badge: "VIRAL BESTSELLER",
    badgeType: "bestseller",
    rating: 5.0,
    reviewsCount: 1190,
    price: 340,
    mrp: 420,
    discountPercent: 19,
    defaultSize: "500g",
    prices: {
      "250g": { price: 175, mrp: 220, discount: 20 },
      "500g": { price: 340, mrp: 420, discount: 19 },
      "1kg": { price: 660, mrp: 800, discount: 18 }
    },
    image: "assets/abc_malt.jpg",
    benefits: ["Promotes Natural Glowing Skin", "Rich in Iron & Hemoglobin Booster", "100% Free from White Sugar"],
    descriptionEn: "Miracle health drink crafted from fresh red apples, sweet beetroots, crunchy carrots, almonds, cashews, and organic country cane sugar.",
    descriptionTa: "ஆப்பிள், பீட்ரூட், கேரட், பாதாம், முந்திரி மற்றும் நாட்டுச்சர்க்கரை கலந்த தூய எனர்ஜி டிரிங்க்."
  },
  {
    id: "murungai-keerai-podi",
    category: "podi",
    nameEn: "Organic Murungai Keerai (Moringa Leaf) Rice Podi",
    nameTa: "முருங்கைக்கீரைப் பொடி (Moringa Podi)",
    subtitleEn: "Shade Dried Moringa Leaves & Lentils | Iron Powerhouse for Hot Rice & Ghee",
    subtitleTa: "இரும்புச்சத்து நிறைந்த சுவையான சாதப் பொடி",
    badge: "HERBAL SUPERFOOD",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 750,
    price: 135,
    mrp: 170,
    discountPercent: 21,
    defaultSize: "250g",
    prices: {
      "100g": { price: 60, mrp: 80, discount: 25 },
      "250g": { price: 135, mrp: 170, discount: 21 },
      "500g": { price: 260, mrp: 330, discount: 21 }
    },
    image: "assets/moringa_podi.jpg",
    benefits: ["Rich in Natural Iron & Vitamin A", "Excellent for Postpartum Recovery", "Delicious with Hot Rice & Ghee"],
    descriptionEn: "Shade-dried tender organic moringa leaves roasted with lentils and spices. Powerhouse of natural iron, Vitamin A, and Vitamin C.",
    descriptionTa: "இயற்கை முருங்கைக்கீரை மற்றும் பருப்பு வகைகள் சேர்த்து வறுத்து அரைத்த சத்தான சாதப் பொடி."
  },
  {
    id: "ulundhu-kanji",
    category: "health-mix",
    nameEn: "Traditional Black Urad Dal Porridge Mix (Ulundhu Kanji)",
    nameTa: "முழு கருப்பு உளுந்து கஞ்சி மாவு",
    subtitleEn: "Spinal & Bone Strength | Enriched with Country Garlic & Cumin",
    subtitleTa: "இடுப்பு & எலும்பு பலம் தரும் பாரம்பரிய கஞ்சி மாவு",
    badge: "NEW LAUNCH",
    badgeType: "new",
    rating: 4.9,
    reviewsCount: 864,
    price: 210,
    mrp: 260,
    discountPercent: 19,
    defaultSize: "500g",
    prices: {
      "250g": { price: 110, mrp: 140, discount: 21 },
      "500g": { price: 210, mrp: 260, discount: 19 },
      "1kg": { price: 400, mrp: 500, discount: 20 }
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Fortifies Bone Density", "Ideal for Women & Teenage Girls", "Natural Digestive Relief"],
    descriptionEn: "Whole black urad dal porridge mix enriched with country garlic, pepper, and fenugreek. Specially recommended for women, girls, and back pain relief.",
    descriptionTa: "முழு கருப்பு உளுந்து, நாட்டு பூண்டு, மிளகு, சீரகம் சேர்த்து கைமணத்துடன் தயாரிக்கப்பட்ட கஞ்சி மாவு."
  },
  {
    id: "karuppu-kavuni",
    category: "health-mix",
    nameEn: "Royal Karuppu Kavuni (Forbidden Black Rice) Kanji",
    nameTa: "பாரம்பரிய கருப்பு கவுனி அரிசி கஞ்சி",
    subtitleEn: "Ancient Chettinad Antioxidant Superfood | Blood Sugar Balance",
    subtitleTa: "ராஜ அரிசியின் இயற்கை நோய் எதிர்ப்பு சக்தி",
    badge: "HERITAGE ROYAL",
    badgeType: "heritage",
    rating: 5.0,
    reviewsCount: 620,
    price: 250,
    mrp: 310,
    discountPercent: 19,
    defaultSize: "500g",
    prices: {
      "250g": { price: 130, mrp: 165, discount: 21 },
      "500g": { price: 250, mrp: 310, discount: 19 },
      "1kg": { price: 480, mrp: 600, discount: 20 }
    },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    benefits: ["Rich in Anthocyanin Antioxidants", "Natural Blood Sugar Regulation", "Deep Cellular Detox"],
    descriptionEn: "Heritage Chettinad black rice packed with natural anthocyanin antioxidants for anti-aging, detox, and healthy blood sugar regulation.",
    descriptionTa: "அரசர்கள் உண்ட கருப்பு கவுனி அரிசி கொண்டு தயாரிக்கப்பட்ட இயற்கை ஆன்டி-ஆக்ஸிடன்ட் சத்துணவு."
  },
  {
    id: "kezhvaragu-maavu",
    category: "flour",
    nameEn: "100% Sprouted Kezhvaragu (Ragi / Finger Millet) Flour",
    nameTa: "முளைகட்டிய கேழ்வரகு மாவு (Ragi Flour)",
    subtitleEn: "Stone Ground | Bioavailable Calcium Powerhouse | Gluten Free",
    subtitleTa: "குழந்தைகள் மற்றும் பெரியவர்களுக்கான இயற்கை கால்சியம்",
    badge: "SPROUTED ORGANIC",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 430,
    price: 160,
    mrp: 200,
    discountPercent: 20,
    defaultSize: "1kg",
    prices: {
      "500g": { price: 85, mrp: 110, discount: 23 },
      "1kg": { price: 160, mrp: 200, discount: 20 }
    },
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    benefits: ["Enhanced Calcium Absorption", "Easy Digestion for Toddlers", "Pure Sprouted Quality"],
    descriptionEn: "Pure sprouted finger millet flour. Sprouting increases calcium bioavailability and enzymatic digestion for babies, adults, and elders.",
    descriptionTa: "முளைகட்டி பக்குவமாய் அரைக்கப்பட்ட தூய கேழ்வரகு மாவு."
  },
  {
    id: "kambu-maavu",
    category: "flour",
    nameEn: "Pure Country Kambu (Pearl Millet / Bajra) Flour",
    nameTa: "தூய நாட்டு கம்பு மாவு (Kambu Flour)",
    subtitleEn: "Traditional Body Coolant | High Plant Iron & Dietary Fiber",
    subtitleTa: "உடல் சூட்டை தணிக்கும் பாரம்பரிய கம்பு மாவு",
    badge: "100% PURE MILLET",
    badgeType: "organic",
    rating: 4.8,
    reviewsCount: 310,
    price: 160,
    mrp: 200,
    discountPercent: 20,
    defaultSize: "1kg",
    prices: {
      "500g": { price: 85, mrp: 110, discount: 23 },
      "1kg": { price: 160, mrp: 200, discount: 20 }
    },
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    benefits: ["Natural Body Coolant", "High Fiber for Gut Health", "Authentic Kambu Koozh Mix"],
    descriptionEn: "Cleaned and stone-ground pearl millet flour for authentic South Indian Kambu Koozh and nourishing rotis.",
    descriptionTa: "நாட்டு கம்பு கொண்டு தயாரிக்கப்பட்ட குளிர்ச்சியான கம்பு மாவு."
  },
  {
    id: "kariveppilai-podi",
    category: "podi",
    nameEn: "Fresh Kariveppilai (Curry Leaves) Herbal Rice Podi",
    nameTa: "கறிவேப்பிலைப் பொடி (Curry Leaf Podi)",
    subtitleEn: "Thick Hair Roots & Eyesight Support | South Indian Homemade Recipe",
    subtitleTa: "கூந்தல் வளர்ச்சி & பார்வை நலம் காக்கும் பொடி",
    badge: "HERBAL AYURVEDA",
    badgeType: "organic",
    rating: 4.9,
    reviewsCount: 520,
    price: 135,
    mrp: 170,
    discountPercent: 21,
    defaultSize: "250g",
    prices: {
      "100g": { price: 60, mrp: 80, discount: 25 },
      "250g": { price: 135, mrp: 170, discount: 21 },
      "500g": { price: 260, mrp: 330, discount: 21 }
    },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    benefits: ["Strengthens Hair Roots", "Promotes Healthy Vision", "Aromatic Taste for Tiffins"],
    descriptionEn: "Fresh aromatic curry leaves roasted slowly with country spices and lentils. Nourishes hair roots and supports healthy digestion.",
    descriptionTa: "நாட்டு கறிவேப்பிலை கொண்டு வீட்டுமுறை கைமணத்துடன் தயாரிக்கப்பட்ட பொடி."
  },
  {
    id: "poondu-paruppu-podi",
    category: "podi",
    nameEn: "Roasted Country Garlic & Toor Dal Rice Podi (Poondu Paruppu)",
    nameTa: "பூண்டு பருப்புப் பொடி (Garlic Dal Podi)",
    subtitleEn: "Golden Roasted Garlic Cloves & Lentils | Comfort Flavor for Hot Rice",
    subtitleTa: "செரிமானம் & வாய்வு தொல்லை தீர்க்கும் பூண்டு பொடி",
    badge: "AROMATIC BESTSELLER",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 680,
    price: 135,
    mrp: 170,
    discountPercent: 21,
    defaultSize: "250g",
    prices: {
      "100g": { price: 60, mrp: 80, discount: 25 },
      "250g": { price: 135, mrp: 170, discount: 21 },
      "500g": { price: 260, mrp: 330, discount: 21 }
    },
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    benefits: ["Supports Digestion & Gut Health", "Heart-Healthy Allicin Compounds", "Aromatic Soul Food"],
    descriptionEn: "Golden roasted country garlic cloves slow-cooked with toor dal, roasted gram, and pepper. Aids digestion and relieves gastric discomfort.",
    descriptionTa: "நாட்டுப் பூண்டு மற்றும் துவரம்பருப்பு வறுத்து அரைத்த ருசியான சாதப் பொடி."
  },
  {
    id: "pirandai-thokku",
    category: "thokku",
    nameEn: "Traditional Pirandai Thokku (Veldt Grape Relish)",
    nameTa: "பாரம்பரிய பிரண்டை தொக்கு (Pirandai Thokku)",
    subtitleEn: "Wood Pressed Gingelly Oil Simmered | Joint Pain Relief & Gut Soothing",
    subtitleTa: "மூட்டு வலி நிவாரணம் தரும் கைமுறை பிரண்டை தொக்கு",
    badge: "ANCIENT RECIPE",
    badgeType: "heritage",
    rating: 5.0,
    reviewsCount: 890,
    price: 150,
    mrp: 190,
    discountPercent: 21,
    defaultSize: "250g",
    prices: {
      "250g": { price: 150, mrp: 190, discount: 21 },
      "500g": { price: 290, mrp: 360, discount: 19 }
    },
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    benefits: ["Relieves Joint & Knee Aches", "Soothes Acidity & Gastritis", "Wood-Pressed Gingelly Oil Base"],
    descriptionEn: "Authentic grandmother recipe prepared with freshly harvested Pirandai, slow-simmered in wood-pressed gingelly oil, tamarind, and country spices.",
    descriptionTa: "முற்கால பாட்டி வைத்திய முறைப்படி புதிய பிரண்டை, செக்கு நல்லெண்ணெய் சேர்த்து தயாரிக்கப்பட்ட தொக்கு."
  },
  {
    id: "combo-grandma-heritage",
    category: "combo",
    nameEn: "Grandmother Heritage Health Trio (3-in-1 Combo 1.5kg)",
    nameTa: "பாட்டி வைத்திய காம்போ (3-in-1 பேக்) 1.5kg",
    subtitleEn: "Sathu Maavu (500g) + Ulundhu Kanji (500g) + Karuppu Kavuni (500g) | Save ₹160",
    subtitleTa: "சத்துமாவு + உளுந்து கஞ்சி + கருப்பு கவுனி அரிசி கஞ்சி",
    badge: "SUPER SAVER COMBO",
    badgeType: "bestseller",
    rating: 5.0,
    reviewsCount: 1540,
    price: 590,
    mrp: 750,
    discountPercent: 21,
    defaultSize: "1.5kg Combo",
    prices: {
      "1.5kg Combo": { price: 590, mrp: 750, discount: 21 }
    },
    image: "assets/sathu_maavu.jpg",
    benefits: ["Complete Monthly Family Nutrition", "Instant ₹160 Savings", "Free Priority Dispatch"],
    descriptionEn: "Complete daily nutrition for the whole family covering bone calcium, plant protein, and anthocyanin antioxidants. Includes ₹160 instant savings.",
    descriptionTa: "முழு குடும்பத்திற்கான 1 மாத காலை ஆரோக்கிய காம்போ பேக்."
  },
  {
    id: "combo-podi-trio",
    category: "combo",
    nameEn: "Traditional Herbal Rice Podi Trio (3-in-1 Value Pack 750g)",
    nameTa: "பாரம்பரிய சாதப் பொடி காம்போ (3-in-1) 750g",
    subtitleEn: "Murungai Keerai (250g) + Kariveppilai (250g) + Poondu Paruppu (250g)",
    subtitleTa: "முருங்கை + கறிவேப்பிலை + பூண்டு பருப்பு பொடி",
    badge: "TRIO PACK VALUE",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 980,
    price: 350,
    mrp: 450,
    discountPercent: 22,
    defaultSize: "750g (3x250g)",
    prices: {
      "750g (3x250g)": { price: 350, mrp: 450, discount: 22 }
    },
    image: "assets/moringa_podi.jpg",
    benefits: ["All 3 Signature Herbal Podis", "Perfect for Rice, Idli & Dosas", "Save ₹100 Instantly"],
    descriptionEn: "All 3 signature homemade herbal podis in one value pack for hot steamed rice, dosas, and ghee.",
    descriptionTa: "3 விதமான மணமணக்கும் சாதப் பொடிகள் அடங்கிய சேமிப்பு காம்போ."
  },
  {
    id: "devo-brass-vel",
    category: "devotional",
    nameEn: "Handcrafted Lord Murugan Sacred Solid Brass Vel (9-Inch)",
    nameTa: "தூய பித்தளை முருகன் வேல் (9-Inch)",
    subtitleEn: "Solid Virgin Brass | Hand Engraved Peacock Motif | Temple Pooja Quality",
    subtitleTa: "பூஜை அறைக்கு ஏற்ற கலைநயமிக்க தூய பித்தளை முருகன் வேல்",
    badge: "DEVOTIONAL POOJA",
    badgeType: "heritage",
    rating: 5.0,
    reviewsCount: 320,
    price: 790,
    mrp: 999,
    discountPercent: 21,
    defaultSize: "9 Inch",
    prices: {
      "6 Inch": { price: 450, mrp: 600, discount: 25 },
      "9 Inch": { price: 790, mrp: 999, discount: 21 },
      "12 Inch": { price: 1150, mrp: 1450, discount: 21 }
    },
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80",
    benefits: ["Pure Virgin Solid Brass", "Auspicious Lord Murugan Energy", "Lifelong Golden Radiance"],
    descriptionEn: "Handmade solid brass Lord Murugan Vel with fine peacock engraving. Blessed for home pooja alters.",
    descriptionTa: "பூஜை அறைக்கு ஏற்ற கலைநயமிக்க தூய பித்தளை முருகன் வேல்."
  }
];

// 2. COUPONS DATA
const COUPONS = {
  "VELAN10": { code: "VELAN10", discountPercent: 10, minOrder: 200, desc: "10% Instant Discount on orders > ₹200" },
  "FREESHIP": { code: "FREESHIP", freeDelivery: true, minOrder: 300, desc: "FREE Delivery on orders > ₹300" },
  "HEALTH50": { code: "HEALTH50", flatDiscount: 50, minOrder: 450, desc: "Flat ₹50 OFF on combos > ₹450" }
};

// 3. APPLICATION STATE
let currentLang = localStorage.getItem("mld_velan_lang") || "en";
let activeCategory = "all";
let cart = JSON.parse(localStorage.getItem("mld_velan_cart") || "[]");
let appliedCoupon = null;
let selectedSizes = {};
let selectedPaymentMode = "upi";
let currentSlideIndex = 0;
let slideInterval = null;
let currentActiveOrder = JSON.parse(localStorage.getItem("mld_velan_active_order") || "null");

PRODUCTS_DATA.forEach(p => {
  selectedSizes[p.id] = p.defaultSize;
});

// Toast Manager
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold border text-white ${
    type === "success" ? "bg-[#2d5a27] border-[#3f7a37]" : type === "coupon" ? "bg-[#5b1e31] border-[#f5b700]" : "bg-[#111111] border-stone-700"
  }`;
  
  const icon = type === "success" ? "✓" : type === "coupon" ? "🏷️" : "ℹ";
  toast.innerHTML = `<span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">${icon}</span> <span>${message}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mld_velan_lang", lang);
  document.documentElement.lang = lang;

  const btnEn = document.getElementById("lang-en-btn");
  const btnTa = document.getElementById("lang-ta-btn");
  if (btnEn && btnTa) {
    if (lang === "en") {
      btnEn.className = "px-2.5 py-1 rounded-full bg-[#5b1e31] text-white font-bold text-xs shadow-xs";
      btnTa.className = "px-2.5 py-1 rounded-full text-stone-600 font-bold text-xs";
    } else {
      btnTa.className = "px-2.5 py-1 rounded-full bg-[#5b1e31] text-white font-bold text-xs shadow-xs";
      btnEn.className = "px-2.5 py-1 rounded-full text-stone-600 font-bold text-xs";
    }
  }

  renderProductsGrid();
  renderCart();
}

// Hero Slider Engine
function initHeroSlider() {
  const track = document.getElementById("hero-slider-track");
  if (!track) return;

  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  function goToSlide(idx) {
    currentSlideIndex = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // update dots
    document.querySelectorAll(".hero-dot").forEach((dot, dIdx) => {
      if (dIdx === currentSlideIndex) {
        dot.className = "hero-dot w-8 h-2.5 rounded-full bg-[#5b1e31] transition-all";
      } else {
        dot.className = "hero-dot w-2.5 h-2.5 rounded-full bg-stone-300 transition-all";
      }
    });
  }

  window.heroNext = () => goToSlide(currentSlideIndex + 1);
  window.heroPrev = () => goToSlide(currentSlideIndex - 1);
  window.heroGoTo = (idx) => goToSlide(idx);

  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(window.heroNext, 5000);

  const container = document.querySelector(".hero-carousel-container");
  if (container) {
    container.addEventListener("mouseenter", () => clearInterval(slideInterval));
    container.addEventListener("mouseleave", () => slideInterval = setInterval(window.heroNext, 5000));
  }
}

// Category Filter Tabs
function filterCategory(cat) {
  activeCategory = cat;

  document.querySelectorAll(".cat-tab-btn").forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = "cat-tab-btn px-5 py-2 rounded-full bg-[#5b1e31] text-white font-bold text-xs shadow-sm cursor-pointer whitespace-nowrap";
    } else {
      btn.className = "cat-tab-btn px-5 py-2 rounded-full bg-[#fdfbf7] text-stone-700 hover:bg-stone-200 border border-[#eee7dd] font-bold text-xs cursor-pointer whitespace-nowrap";
    }
  });

  renderProductsGrid();
}

// Render Product Cards with HD Real Images
function renderProductsGrid() {
  const grid = document.getElementById("d2c-products-grid");
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(p => {
    if (activeCategory === "all") return true;
    if (activeCategory === "bestsellers") return p.rating >= 4.9 || p.badgeType === "bestseller";
    return p.category === activeCategory;
  });

  grid.innerHTML = filtered.map(product => {
    const title = currentLang === "ta" ? product.nameTa : product.nameEn;
    const subtitle = currentLang === "ta" ? product.subtitleTa : product.subtitleEn;
    const selectedSize = selectedSizes[product.id] || product.defaultSize;
    const sizeData = product.prices[selectedSize];
    const availableSizes = Object.keys(product.prices);

    return `
      <div class="product-card-luxury group">
        <!-- Real HD Photo & Badge -->
        <div class="product-card-img-wrap cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
          
          <span class="absolute top-3 left-3 bg-[#5b1e31] text-[#f5b700] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
            ${product.badge}
          </span>

          <span class="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#2d5a27] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#eee7dd] shadow-sm">
            ✓ 100% Organic
          </span>
        </div>

        <!-- Details -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center gap-1.5 mb-1 text-xs">
              <span class="text-[#f5b700] tracking-tight text-sm">★★★★★</span>
              <span class="font-extrabold text-stone-800 text-xs">${product.rating}</span>
              <span class="text-stone-400 text-[11px]">(${product.reviewsCount} reviews)</span>
            </div>

            <h3 class="text-base font-bold font-serif-luxury text-[#222222] hover:text-[#5b1e31] leading-snug cursor-pointer line-clamp-1" onclick="openProductModal('${product.id}')">
              ${title}
            </h3>

            <p class="text-xs text-[#666666] line-clamp-2 mt-1 leading-relaxed">
              ${subtitle}
            </p>
          </div>

          <!-- Pack Size Variations -->
          ${availableSizes.length > 1 ? `
            <div>
              <div class="text-[10px] font-extrabold text-stone-400 uppercase tracking-wider mb-1.5">Select Size:</div>
              <div class="flex flex-wrap gap-1.5">
                ${availableSizes.map(size => `
                  <button 
                    type="button" 
                    onclick="selectProductSize('${product.id}', '${size}')"
                    class="px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      selectedSize === size 
                        ? 'bg-[#5b1e31] text-white shadow-xs' 
                        : 'bg-[#fdfbf7] text-stone-700 border border-[#eee7dd] hover:border-stone-400'
                    }"
                  >
                    ${size}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Pricing & Action Button -->
          <div class="pt-3 border-t border-[#eee7dd] flex items-center justify-between gap-3">
            <div>
              <div class="text-lg font-black text-[#5b1e31]">
                ₹${sizeData.price}
                <span class="text-xs text-stone-400 font-normal line-through ml-1">₹${sizeData.mrp}</span>
              </div>
              <span class="text-[10px] font-bold text-[#2d5a27] uppercase">Save ${sizeData.discount}%</span>
            </div>

            <button 
              type="button" 
              onclick="addToCart('${product.id}')"
              class="add-to-bag-btn flex-1 max-w-[140px]"
            >
              <span>🛒</span>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectProductSize(productId, size) {
  selectedSizes[productId] = size;
  renderProductsGrid();
}

// Shopping Bag Engine
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const size = selectedSizes[productId] || product.defaultSize;
  const priceData = product.prices[size];
  const cartKey = `${productId}_${size}`;

  const existing = cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      cartKey,
      id: product.id,
      nameEn: product.nameEn,
      nameTa: product.nameTa,
      size,
      price: priceData.price,
      mrp: priceData.mrp,
      quantity: 1,
      image: product.image
    });
  }

  saveCart();
  renderCart();
  toggleCartDrawer(true);
  showToast(`Added to your Bag: ${product.nameEn.substring(0, 24)}...`, "success");
}

function updateCartQty(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.cartKey !== cartKey);
  }
  saveCart();
  renderCart();
}

function removeCartItem(cartKey) {
  cart = cart.filter(i => i.cartKey !== cartKey);
  saveCart();
  renderCart();
  showToast("Item removed from Bag", "info");
}

function saveCart() {
  localStorage.setItem("mld_velan_cart", JSON.stringify(cart));
}

function applyCouponCode(code) {
  const upperCode = (code || document.getElementById("coupon-input")?.value || "").trim().toUpperCase();
  if (!upperCode) return;

  const coupon = COUPONS[upperCode];
  if (!coupon) {
    showToast("Invalid promo coupon", "info");
    return;
  }

  const itemTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  if (itemTotal < coupon.minOrder) {
    showToast(`Minimum order for ${upperCode} is ₹${coupon.minOrder}`, "info");
    return;
  }

  appliedCoupon = coupon;
  renderCart();
  showToast(`🎉 Coupon ${upperCode} Applied!`, "coupon");
}

function removeCoupon() {
  appliedCoupon = null;
  renderCart();
}

function renderCart() {
  const badges = document.querySelectorAll(".cart-count-badge");
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  badges.forEach(b => b.textContent = totalQty);

  const itemsContainer = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const cartFooter = document.getElementById("cart-footer");
  const subtotalEl = document.getElementById("cart-subtotal-price");
  const freeShipBar = document.getElementById("free-ship-progress");
  const freeShipText = document.getElementById("free-ship-text");

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    if (cartFooter) cartFooter.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (cartFooter) cartFooter.classList.remove("hidden");

  let grandTotal = 0;
  let totalSavings = 0;

  itemsContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    const itemSavings = (item.mrp - item.price) * item.quantity;
    grandTotal += itemTotal;
    totalSavings += itemSavings;

    return `
      <div class="p-3.5 bg-white rounded-2xl border border-[#eee7dd] flex items-center justify-between gap-3 shadow-xs">
        <div class="w-14 h-14 rounded-xl overflow-hidden border border-[#eee7dd] shrink-0 bg-[#fdfbf7]">
          <img src="${item.image}" alt="${item.nameEn}" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-[#5b1e31] truncate">${item.nameEn}</h4>
          <div class="text-[11px] text-stone-500 mt-0.5">Size: <b class="text-stone-800">${item.size}</b></div>
          <div class="text-xs font-black text-stone-900 mt-0.5">₹${itemTotal}</div>
        </div>

        <div class="flex items-center gap-1.5 bg-[#fdfbf7] p-1 rounded-full border border-[#eee7dd]">
          <button onclick="updateCartQty('${item.cartKey}', -1)" class="w-6 h-6 rounded-full bg-white font-bold text-xs flex items-center justify-center shadow-xs">-</button>
          <span class="w-4 text-center text-xs font-bold">${item.quantity}</span>
          <button onclick="updateCartQty('${item.cartKey}', 1)" class="w-6 h-6 rounded-full bg-white font-bold text-xs flex items-center justify-center shadow-xs">+</button>
        </div>

        <button onclick="removeCartItem('${item.cartKey}')" class="text-xs text-stone-400 hover:text-red-500 font-bold p-1">✕</button>
      </div>
    `;
  }).join('');

  // Free shipping meter
  const freeThreshold = 499;
  const progressPercent = Math.min(100, Math.round((grandTotal / freeThreshold) * 100));
  if (freeShipBar) freeShipBar.style.width = `${progressPercent}%`;
  if (freeShipText) {
    if (grandTotal >= freeThreshold) {
      freeShipText.innerHTML = `🎉 <b class="text-[#2d5a27]">Congratulations! You unlocked FREE Pan-India Shipping!</b>`;
    } else {
      const remaining = freeThreshold - grandTotal;
      freeShipText.innerHTML = `Add <b>₹${remaining}</b> more to unlock <b class="text-[#5b1e31]">FREE Delivery</b>!`;
    }
  }

  let deliveryFee = grandTotal >= freeThreshold ? 0 : 40;
  let discountAmount = 0;

  if (appliedCoupon) {
    if (appliedCoupon.freeDelivery) deliveryFee = 0;
    if (appliedCoupon.discountPercent) discountAmount += Math.round((grandTotal * appliedCoupon.discountPercent) / 100);
    if (appliedCoupon.flatDiscount) discountAmount += appliedCoupon.flatDiscount;
  }

  const finalPayable = Math.max(0, grandTotal + deliveryFee - discountAmount);
  if (subtotalEl) subtotalEl.textContent = `₹${finalPayable}`;
}

// Checkout Engine
function proceedToD2CCheckout() {
  if (cart.length === 0) return;

  const name = document.getElementById("cust-name")?.value.trim() || "";
  const phone = document.getElementById("cust-phone")?.value.trim() || "";
  const address = document.getElementById("cust-address")?.value.trim() || "";

  if (!name || !phone || !address) {
    showToast("Please enter Delivery Name, Phone and Address!", "info");
    return;
  }

  const itemTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let deliveryFee = itemTotal >= 499 ? 0 : 40;
  let discountAmount = 0;

  if (appliedCoupon) {
    if (appliedCoupon.freeDelivery) deliveryFee = 0;
    if (appliedCoupon.discountPercent) discountAmount += Math.round((itemTotal * appliedCoupon.discountPercent) / 100);
    if (appliedCoupon.flatDiscount) discountAmount += appliedCoupon.flatDiscount;
  }

  const grandTotal = Math.max(0, itemTotal + deliveryFee - discountAmount);
  const orderId = `MLD-${Math.floor(100000 + Math.random() * 900000)}`;

  const orderData = {
    orderId,
    timestamp: new Date().toISOString(),
    customer: { name, phone, address },
    items: [...cart],
    itemTotal,
    deliveryFee,
    discountAmount,
    coupon: appliedCoupon ? appliedCoupon.code : null,
    grandTotal,
    paymentMode: selectedPaymentMode,
    statusStage: 1
  };

  currentActiveOrder = orderData;
  localStorage.setItem("mld_velan_active_order", JSON.stringify(orderData));

  if (selectedPaymentMode === "whatsapp") {
    sendD2CWhatsAppOrder(orderData);
  } else if (selectedPaymentMode === "upi") {
    openUPIModal(orderData);
  } else {
    // COD Mode
    cart = [];
    appliedCoupon = null;
    saveCart();
    renderCart();
    toggleCartDrawer(false);
    openLiveTrackerModal(orderData);
    showToast("🎉 Order Placed! Dispatching from our kitchen soon.", "success");
  }
}

// UPI Modal
function openUPIModal(orderData) {
  const modal = document.getElementById("upi-modal");
  const content = document.getElementById("upi-modal-content");
  if (!modal || !content) return;

  const upiId = "8056053660@upi";
  const upiUrl = `upi://pay?pa=${upiId}&pn=MLD%20VELAN%20Kitchen&am=${orderData.grandTotal}&cu=INR&tn=Order%20${orderData.orderId}`;
  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

  content.innerHTML = `
    <div class="p-6 bg-white rounded-3xl max-w-sm w-full mx-auto border border-[#eee7dd] shadow-2xl text-center space-y-4">
      <div class="flex items-center justify-between border-b pb-2">
        <h3 class="text-sm font-bold font-serif-luxury text-[#5b1e31]">UPI / QR Code Payment</h3>
        <button onclick="document.getElementById('upi-modal').classList.add('hidden')" class="w-7 h-7 rounded-full bg-stone-100 font-bold text-xs">✕</button>
      </div>

      <div class="p-3 bg-[#fdfbf7] border-2 border-dashed border-[#f5b700] rounded-2xl inline-block">
        <img src="${qrImgUrl}" alt="Scan UPI QR" class="w-44 h-44 mx-auto rounded-xl" />
      </div>

      <div class="bg-[#fdfbf7] p-3 rounded-2xl text-xs text-left space-y-1 border border-[#eee7dd]">
        <div class="flex justify-between font-bold">
          <span>Total Payable:</span>
          <span class="text-[#5b1e31] text-sm">₹${orderData.grandTotal}</span>
        </div>
        <div class="flex justify-between text-[11px] text-stone-500">
          <span>GPay/PhonePe UPI:</span>
          <span class="font-mono font-bold text-stone-800">${upiId}</span>
        </div>
      </div>

      <div class="space-y-2">
        <button onclick="confirmUPIPayment()" class="w-full py-3 rounded-full bg-[#5b1e31] text-white font-bold text-xs shadow-md">
          ✓ Confirm Payment (₹${orderData.grandTotal})
        </button>
        <button onclick="sendD2CWhatsAppOrder(currentActiveOrder)" class="w-full py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-full">
          📲 Send Screenshot on WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function confirmUPIPayment() {
  const modal = document.getElementById("upi-modal");
  if (modal) modal.classList.add("hidden");

  cart = [];
  appliedCoupon = null;
  saveCart();
  renderCart();
  toggleCartDrawer(false);
  if (currentActiveOrder) openLiveTrackerModal(currentActiveOrder);
  showToast("🎉 Payment verified! Your fresh pack is being prepared.", "success");
}

// 1-Click WhatsApp Direct
function sendD2CWhatsAppOrder(order) {
  const orderData = order || currentActiveOrder;
  if (!orderData) return;

  let itemsList = "";
  orderData.items.forEach((item, index) => {
    itemsList += `%0A${index + 1}. *${item.nameEn}* (${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}`;
  });

  let message = `*MLD VELAN HOMEMADE ORDER*%0A*Order ID:* ${orderData.orderId}%0A----------------------------------${itemsList}%0A----------------------------------%0A*Total Amount:* ₹${orderData.grandTotal}%0A%0A*Delivery Details:*%0A• Name: ${orderData.customer.name}%0A• Phone: ${orderData.customer.phone}%0A• Address: ${orderData.customer.address}%0A%0APlease confirm my organic food order. Thank you!`;

  window.open(`https://wa.me/918056053660?text=${message}`, "_blank");
}

// Live Order Tracking Modal
function openLiveTrackerModal(order) {
  const orderToTrack = order || currentActiveOrder;
  const modal = document.getElementById("tracker-modal");
  const content = document.getElementById("tracker-modal-content");
  if (!modal || !content) return;

  if (!orderToTrack) {
    content.innerHTML = `
      <div class="p-6 bg-white rounded-3xl border border-[#eee7dd] text-center space-y-3 max-w-md w-full shadow-2xl">
        <div class="text-5xl">📦</div>
        <h4 class="font-bold text-sm font-serif-luxury text-[#5b1e31]">No Active Kitchen Orders</h4>
        <p class="text-xs text-stone-500">Your recent orders will appear here for live kitchen & dispatch tracking.</p>
        <button onclick="document.getElementById('tracker-modal').classList.add('hidden')" class="px-5 py-2.5 bg-[#5b1e31] text-white text-xs font-bold rounded-full">Explore Bestsellers</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="p-6 bg-white rounded-3xl border border-[#eee7dd] shadow-2xl max-w-lg w-full space-y-4">
        <div class="flex items-center justify-between border-b pb-3">
          <div>
            <span class="text-[10px] text-[#5b1e31] font-extrabold uppercase tracking-wider">ORDER #${orderToTrack.orderId}</span>
            <h3 class="text-base font-bold font-serif-luxury text-stone-900">Milled Fresh & On the Way</h3>
          </div>
          <button onclick="document.getElementById('tracker-modal').classList.add('hidden')" class="w-7 h-7 rounded-full bg-stone-100 font-bold text-xs">✕</button>
        </div>

        <div class="p-3.5 bg-[#eaf3e8] rounded-2xl border border-[#2d5a27]/30 flex items-center gap-3">
          <span class="text-2xl">🚚</span>
          <div>
            <span class="text-xs font-bold text-[#2d5a27] block">Express Courier Dispatch</span>
            <span class="text-[11px] text-stone-600">Dispatched directly from MLD VELAN Kitchen, Chidambaram</span>
          </div>
        </div>

        <div class="space-y-3 py-2 text-xs">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-[#2d5a27] text-white flex items-center justify-center font-bold text-xs">✓</span>
            <div><b class="text-stone-900">Order Received & Stone Milled</b><div class="text-[11px] text-stone-500">Small batch freshly ground for you</div></div>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-[#2d5a27] text-white flex items-center justify-center font-bold text-xs">✓</span>
            <div><b class="text-stone-900">Quality Checked & Packed</b><div class="text-[11px] text-stone-500">FSSAI Certified Packaging (Lic: 22424006000417)</div></div>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-stone-100 text-stone-400 border border-stone-300 flex items-center justify-center font-bold text-xs">3</span>
            <div><b class="text-stone-600">Out for Home Delivery</b><div class="text-[11px] text-stone-500">Delivering to: ${orderToTrack.customer.address}</div></div>
          </div>
        </div>

        <div class="pt-3 border-t border-[#eee7dd] flex gap-2">
          <button onclick="openInvoiceModal(currentActiveOrder)" class="flex-1 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs font-bold rounded-full">
            📄 Tax Invoice
          </button>
          <a href="https://wa.me/918056053660" target="_blank" class="flex-1 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-full text-center">
            📲 WhatsApp Help
          </a>
        </div>
      </div>
    `;
  }

  modal.classList.remove("hidden");
}

// Digital Tax Invoice
function openInvoiceModal(order) {
  const orderToPrint = order || currentActiveOrder;
  if (!orderToPrint) return;

  const modal = document.getElementById("invoice-modal");
  const content = document.getElementById("invoice-printable");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="bg-white p-8 rounded-3xl border border-[#eee7dd] shadow-2xl max-w-lg w-full mx-auto text-xs text-[#222222]">
      <div class="flex items-start justify-between border-b pb-4">
        <div>
          <h2 class="text-xl font-bold font-serif-luxury text-[#5b1e31]">MLD VELAN</h2>
          <p class="text-[10px] text-stone-500">100% Organic Homemade Health Mixes</p>
          <p class="text-[10px] text-stone-500">FSSAI License: 22424006000417</p>
          <p class="text-[10px] text-stone-500">Order ID: ${orderToPrint.orderId}</p>
        </div>
        <div class="text-right">
          <span class="font-bold text-xs uppercase text-[#2d5a27]">TAX INVOICE</span>
          <div class="text-[10px] text-stone-500 mt-1">${new Date(orderToPrint.timestamp).toLocaleDateString()}</div>
        </div>
      </div>

      <div class="py-3 border-b text-[11px]">
        <div class="font-bold text-stone-800">Delivery Address:</div>
        <div>${orderToPrint.customer.name}</div>
        <div class="text-stone-500">${orderToPrint.customer.address}</div>
        <div class="text-stone-500">Phone: ${orderToPrint.customer.phone}</div>
      </div>

      <div class="py-3">
        <table class="w-full text-left text-[11px]">
          <thead>
            <tr class="border-b text-stone-400">
              <th class="pb-1">Product Description</th>
              <th class="pb-1 text-center">Size</th>
              <th class="pb-1 text-center">Qty</th>
              <th class="pb-1 text-right">Amount</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-100">
            ${orderToPrint.items.map(item => `
              <tr>
                <td class="py-2 font-semibold text-[#5b1e31]">${item.nameEn}</td>
                <td class="py-2 text-center">${item.size}</td>
                <td class="py-2 text-center">${item.quantity}</td>
                <td class="py-2 text-right font-bold">₹${item.price * item.quantity}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="border-t pt-2 space-y-1 text-[11px]">
        <div class="flex justify-between"><span>Subtotal:</span><span>₹${orderToPrint.itemTotal}</span></div>
        <div class="flex justify-between"><span>Shipping:</span><span>₹${orderToPrint.deliveryFee}</span></div>
        ${orderToPrint.discountAmount > 0 ? `<div class="flex justify-between text-[#2d5a27]"><span>Discount (${orderToPrint.coupon}):</span><span>-₹${orderToPrint.discountAmount}</span></div>` : ''}
        <div class="flex justify-between text-sm font-black text-[#5b1e31] border-t pt-1"><span>Grand Total:</span><span>₹${orderToPrint.grandTotal}</span></div>
      </div>

      <div class="no-print mt-5 flex gap-2">
        <button onclick="window.print()" class="flex-1 py-2.5 bg-[#5b1e31] text-white font-bold text-xs rounded-full">🖨️ Print Receipt</button>
        <button onclick="document.getElementById('invoice-modal').classList.add('hidden')" class="px-5 py-2.5 bg-stone-100 font-bold text-xs rounded-full">Close</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-modal-content");
  if (!modal || !content) return;

  const title = currentLang === "ta" ? product.nameTa : product.nameEn;
  const desc = currentLang === "ta" ? product.descriptionTa : product.descriptionEn;
  const selectedSize = selectedSizes[productId] || product.defaultSize;
  const sizeData = product.prices[selectedSize];

  content.innerHTML = `
    <div class="bg-white rounded-3xl p-6 max-w-lg w-full border border-[#eee7dd] shadow-2xl text-xs space-y-4">
      <div class="flex items-start justify-between border-b pb-3">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-2xl overflow-hidden border border-[#eee7dd] shrink-0">
            <img src="${product.image}" alt="${title}" class="w-full h-full object-cover" />
          </div>
          <div>
            <span class="text-[10px] text-[#5b1e31] font-bold uppercase tracking-wider">${product.badge}</span>
            <h3 class="text-base font-bold font-serif-luxury text-stone-900">${title}</h3>
          </div>
        </div>
        <button onclick="document.getElementById('product-modal').classList.add('hidden')" class="w-7 h-7 rounded-full bg-stone-100 font-bold text-xs">✕</button>
      </div>

      <p class="text-stone-600 leading-relaxed">${desc}</p>

      <div class="space-y-1.5">
        <span class="font-bold text-stone-900 block text-[11px] uppercase tracking-wider">Traditional Benefits:</span>
        <ul class="space-y-1 text-stone-600">
          ${product.benefits.map(b => `<li class="flex items-center gap-2"><span class="text-[#2d5a27] font-bold">✓</span> ${b}</li>`).join('')}
        </ul>
      </div>

      <div class="p-3.5 bg-[#fdfbf7] rounded-2xl border border-[#eee7dd] flex items-center justify-between">
        <div>
          <span class="text-xs text-stone-400 line-through">₹${sizeData.mrp}</span>
          <div class="text-xl font-black text-[#5b1e31]">₹${sizeData.price}</div>
        </div>
        <span class="text-[#2d5a27] font-bold text-xs bg-white px-3 py-1 rounded-full border border-[#eee7dd]">In Stock • Fresh Batch</span>
      </div>

      <div class="flex items-center justify-between gap-3 pt-2">
        <div class="flex gap-1.5">
          ${Object.keys(product.prices).map(size => `
            <button onclick="selectProductSize('${product.id}', '${size}'); openProductModal('${product.id}')" class="px-3 py-1 font-bold rounded-full border text-xs ${selectedSize === size ? 'bg-[#5b1e31] text-white border-[#5b1e31]' : 'bg-[#fdfbf7] text-stone-700 border-[#eee7dd]'}">
              ${size}
            </button>
          `).join('')}
        </div>
        <button onclick="addToCart('${product.id}'); document.getElementById('product-modal').classList.add('hidden');" class="px-6 py-2.5 bg-[#f5b700] hover:bg-[#e0a700] text-black font-extrabold text-xs rounded-full shadow-md">
          Add to Bag
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Initialization on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderProductsGrid();
  renderCart();
  initHeroSlider();
});
