// ============================================================================
// ISTANBUL GUARDIAN — i18n (Çoklu Dil Desteği)
// ============================================================================
// Desteklenen diller: Türkçe (tr), İngilizce (en), Arapça (ar), Rusça (ru)
// RTL diller: Arapça
//
// Kullanım:
//   IG.t("welcome")           → şu anki dilde "welcome" çevirisi
//   IG.setLang("ar")          → dili Arapçaya değiştir (RTL otomatik)
//   IG.getLang()              → şu anki dili al
// ============================================================================

window.IG = window.IG || {};

const IG_LANGUAGES = {
  tr: { name: "Türkçe",    flag: "🇹🇷", rtl: false },
  en: { name: "English",   flag: "🇬🇧", rtl: false },
  ar: { name: "العربية",   flag: "🇸🇦", rtl: true  },
  ru: { name: "Русский",   flag: "🇷🇺", rtl: false }
};

const IG_TRANSLATIONS = {
  // Genel
  "app.name":        { tr: "Istanbul Guardian", en: "Istanbul Guardian", ar: "إسطنبول جارديان", ru: "Istanbul Guardian" },
  "app.tagline":     { tr: "İstanbul'da güvenilir rehberin", en: "Your trusted local guide in Istanbul", ar: "دليلك المحلي الموثوق في إسطنبول", ru: "Ваш надёжный гид в Стамбуле" },

  // Karşılama
  "welcome.title":   { tr: "Hoş geldiniz", en: "Welcome", ar: "أهلاً وسهلاً", ru: "Добро пожаловать" },
  "welcome.hotel":   { tr: "konaklamanızı seçtiğiniz için teşekkür ederiz", en: "thank you for choosing to stay with us", ar: "شكراً لاختياركم الإقامة معنا", ru: "спасибо, что выбрали нас" },
  "welcome.start":   { tr: "Keşfetmeye başla", en: "Start exploring", ar: "ابدأ الاستكشاف", ru: "Начать изучение" },

  // Auth
  "auth.email":      { tr: "Email", en: "Email", ar: "البريد الإلكتروني", ru: "Эл. почта" },
  "auth.phone":      { tr: "Telefon", en: "Phone", ar: "الهاتف", ru: "Телефон" },
  "auth.password":   { tr: "Şifre", en: "Password", ar: "كلمة المرور", ru: "Пароль" },
  "auth.signin":     { tr: "Giriş yap", en: "Sign in", ar: "تسجيل الدخول", ru: "Войти" },
  "auth.signup":     { tr: "Kayıt ol", en: "Sign up", ar: "إنشاء حساب", ru: "Регистрация" },
  "auth.signout":    { tr: "Çıkış", en: "Sign out", ar: "تسجيل الخروج", ru: "Выйти" },
  "auth.fullname":   { tr: "Ad Soyad", en: "Full name", ar: "الاسم الكامل", ru: "Полное имя" },
  "auth.continue":   { tr: "Devam et", en: "Continue", ar: "متابعة", ru: "Продолжить" },

  // Kategoriler
  "cat.hammam":      { tr: "Hammam & SPA", en: "Hammam & SPA", ar: "حمام وسبا", ru: "Хаммам и СПА" },
  "cat.tour":        { tr: "Tur & Gezi", en: "Tours & Sightseeing", ar: "جولات", ru: "Туры" },
  "cat.transfer":    { tr: "Transfer", en: "Transfer", ar: "نقل", ru: "Трансфер" },
  "cat.restaurant":  { tr: "Restoran", en: "Restaurant", ar: "مطعم", ru: "Ресторан" },
  "cat.health":      { tr: "Sağlık Turizmi", en: "Health Tourism", ar: "السياحة الصحية", ru: "Медицинский туризм" },
  "cat.nightlife":   { tr: "Gece Hayatı", en: "Nightlife", ar: "الحياة الليلية", ru: "Ночная жизнь" },

  // Aksiyonlar
  "action.book":         { tr: "Rezerve et", en: "Book now", ar: "احجز الآن", ru: "Забронировать" },
  "action.view":         { tr: "İncele", en: "View details", ar: "عرض التفاصيل", ru: "Подробнее" },
  "action.cancel":       { tr: "İptal", en: "Cancel", ar: "إلغاء", ru: "Отмена" },
  "action.confirm":      { tr: "Onayla", en: "Confirm", ar: "تأكيد", ru: "Подтвердить" },
  "action.back":         { tr: "Geri", en: "Back", ar: "رجوع", ru: "Назад" },
  "action.next":         { tr: "İleri", en: "Next", ar: "التالي", ru: "Далее" },
  "action.search":       { tr: "Ara", en: "Search", ar: "بحث", ru: "Поиск" },

  // AI Asistan
  "ai.title":            { tr: "AI Rehberin", en: "Your AI Guide", ar: "مرشدك الذكي", ru: "Ваш AI-гид" },
  "ai.askme":            { tr: "Bana İstanbul'u sor", en: "Ask me about Istanbul", ar: "اسألني عن إسطنبول", ru: "Спросите меня об Стамбуле" },
  "ai.placeholder":      { tr: "Bugün ne yapayım?", en: "What should I do today?", ar: "ماذا أفعل اليوم؟", ru: "Что мне делать сегодня?" },
  "ai.send":             { tr: "Gönder", en: "Send", ar: "إرسال", ru: "Отправить" },

  // Rezervasyon
  "booking.date":        { tr: "Tarih", en: "Date", ar: "التاريخ", ru: "Дата" },
  "booking.time":        { tr: "Saat", en: "Time", ar: "الوقت", ru: "Время" },
  "booking.persons":     { tr: "Kişi sayısı", en: "Persons", ar: "عدد الأشخاص", ru: "Количество человек" },
  "booking.notes":       { tr: "Özel istek", en: "Special requests", ar: "طلبات خاصة", ru: "Особые пожелания" },
  "booking.total":       { tr: "Toplam", en: "Total", ar: "المجموع", ru: "Итого" },
  "booking.pay":         { tr: "Ödeme yap", en: "Pay now", ar: "ادفع الآن", ru: "Оплатить" },

  // Durum
  "status.pending":      { tr: "Bekliyor", en: "Pending", ar: "قيد الانتظار", ru: "Ожидание" },
  "status.confirmed":    { tr: "Onaylandı", en: "Confirmed", ar: "مؤكد", ru: "Подтверждено" },
  "status.completed":    { tr: "Tamamlandı", en: "Completed", ar: "مكتمل", ru: "Завершено" },
  "status.cancelled":    { tr: "İptal edildi", en: "Cancelled", ar: "ملغى", ru: "Отменено" },

  // Hata mesajları
  "error.generic":       { tr: "Bir hata oluştu", en: "An error occurred", ar: "حدث خطأ", ru: "Произошла ошибка" },
  "error.required":      { tr: "Bu alan zorunlu", en: "This field is required", ar: "هذا الحقل مطلوب", ru: "Это поле обязательно" },
  "error.invalidEmail":  { tr: "Geçersiz email", en: "Invalid email", ar: "بريد إلكتروني غير صحيح", ru: "Неверный email" },
  "error.invalidPhone":  { tr: "Geçersiz telefon", en: "Invalid phone", ar: "رقم هاتف غير صحيح", ru: "Неверный телефон" },

  // Loading
  "loading.default":     { tr: "Yükleniyor...", en: "Loading...", ar: "جاري التحميل...", ru: "Загрузка..." },
  "loading.booking":     { tr: "Rezervasyon oluşturuluyor...", en: "Creating booking...", ar: "جاري إنشاء الحجز...", ru: "Создание бронирования..." },
  "loading.payment":     { tr: "Ödemeye yönlendiriliyor...", en: "Redirecting to payment...", ar: "جاري التحويل للدفع...", ru: "Перенаправление на оплату..." }
};

// Mevcut dili al
IG.getLang = function() {
  // 1. URL parametresinden
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang && IG_LANGUAGES[urlLang]) return urlLang;

  // 2. localStorage'dan
  const savedLang = localStorage.getItem("ig_lang");
  if (savedLang && IG_LANGUAGES[savedLang]) return savedLang;

  // 3. Browser dilinden
  const browserLang = (navigator.language || "en").substring(0, 2).toLowerCase();
  if (IG_LANGUAGES[browserLang]) return browserLang;

  // 4. Varsayılan
  return "en";
};

// Dili değiştir
IG.setLang = function(lang) {
  if (!IG_LANGUAGES[lang]) {
    console.error(`Desteklenmeyen dil: ${lang}`);
    return;
  }

  localStorage.setItem("ig_lang", lang);

  // RTL/LTR
  document.documentElement.dir = IG_LANGUAGES[lang].rtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Sayfayı yenile (basit yaklaşım — sonradan dynamic update yaparız)
  window.location.reload();
};

// Çeviri al
IG.t = function(key, fallback) {
  const lang = IG.getLang();
  const entry = IG_TRANSLATIONS[key];

  if (!entry) {
    console.warn(`Çeviri bulunamadı: ${key}`);
    return fallback || key;
  }

  return entry[lang] || entry["en"] || fallback || key;
};

// Sayfa yüklenince otomatik dil ayarla (RTL için)
document.addEventListener("DOMContentLoaded", function() {
  const lang = IG.getLang();
  document.documentElement.dir = IG_LANGUAGES[lang].rtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Sayfadaki [data-i18n] attribute'lu elementleri otomatik çevir
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = IG.t(key);
  });

  // Placeholder'ları da çevir
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = IG.t(key);
  });
});

// Diğer dosyaların erişebilmesi için
IG.LANGUAGES = IG_LANGUAGES;
IG.TRANSLATIONS = IG_TRANSLATIONS;
