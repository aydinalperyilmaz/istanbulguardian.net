// ============================================================================
// ISTANBUL GUARDIAN — Supabase Client
// ============================================================================
// Bu dosya tüm sayfalarda kullanılır.
// Supabase JS SDK'yı CDN'den yükler ve global window.sb objesi olarak hazır eder.
//
// Tüm yazma işlemleri RPC fonksiyonları üzerinden yapılır.
// Doğrudan tablo INSERT/UPDATE/DELETE YASAKTIR (RLS engeller zaten).
// ============================================================================

// !!!! BURAYA KENDI BILGILERINI YAPISTIR !!!!
const SUPABASE_URL = "https://nbkksybvrbtxubloqilj.supabase.co";
const SUPABASE_KEY = "sb_publishable_jMDEVMX5HwojdvssOo2ysA_EJ5EG9L9";
// !!!! ----------------------------------- !!!!

// Supabase JS SDK'yı CDN'den yükle
async function loadSupabase() {
  if (window.supabase) return window.supabase;

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    script.onload = () => resolve(window.supabase);
    script.onerror = () => reject(new Error("Supabase SDK yüklenemedi"));
    document.head.appendChild(script);
  });
}

// Supabase client'ı başlat
async function initSupabase() {
  if (window.sb) return window.sb;

  if (SUPABASE_URL.includes("BURAYA") || SUPABASE_KEY.includes("BURAYA")) {
    console.error("⚠️ Supabase URL ve Publishable Key girilmemiş!");
    console.error("assets/supabase.js dosyasında düzenleyin.");
    return null;
  }

  const supabase = await loadSupabase();
  window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false
    }
  });

  console.log("✓ Supabase bağlantısı hazır");
  return window.sb;
}

// Sayfalardan kolayca çağrılması için global helper
window.IG = window.IG || {};

// Auth helper'ları
window.IG.auth = {
  // Mevcut kullanıcıyı al
  async getUser() {
    const sb = await initSupabase();
    if (!sb) return null;
    const { data: { user } } = await sb.auth.getUser();
    return user;
  },

  // Email + şifre ile giriş
  async signIn(email, password) {
    const sb = await initSupabase();
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  // Email + şifre ile kayıt
  async signUp(email, password, fullName, phone, lang = "en") {
    const sb = await initSupabase();
    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone, preferred_lang: lang }
      }
    });
    if (error) throw error;
    return data;
  },

  // Çıkış
  async signOut() {
    const sb = await initSupabase();
    await sb.auth.signOut();
    window.location.href = "/";
  }
};

// RPC çağrı helper'ı
window.IG.rpc = async function(functionName, params = {}) {
  const sb = await initSupabase();
  if (!sb) throw new Error("Supabase bağlantısı yok");

  const { data, error } = await sb.rpc(functionName, params);
  if (error) {
    console.error(`RPC hatası (${functionName}):`, error);
    throw error;
  }
  return data;
};

// Tablo okuma helper'ı (sadece SELECT için, INSERT/UPDATE için RPC kullan)
window.IG.read = async function(tableName) {
  const sb = await initSupabase();
  if (!sb) throw new Error("Supabase bağlantısı yok");
  return sb.from(tableName);
};

// Sayfa açıldığında otomatik başlat
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initSupabase().catch(err => {
      console.error("Supabase başlatılamadı:", err.message);
    });
  });
}
