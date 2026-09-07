"use client";

import React, { useState } from "react";
import { zenthraErpData } from "@/data/zenthraErpData";
import {
  Boxes,
  Cpu,
  ShieldCheck,
  ShoppingCart,
  Receipt,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Building2,
  Send,
  X,
  Zap,
  TrendingUp,
  Clock,
  Database
} from "lucide-react";

export default function ZenthraErpLanding() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    moduleInterest: "Tüm Modüller"
  });

  const getModuleIcon = (id) => {
    switch (id) {
      case "wms": return <Boxes className="w-8 h-8 text-blue-400" />;
      case "mes": return <Cpu className="w-8 h-8 text-amber-400" />;
      case "qms": return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case "procurement": return <ShoppingCart className="w-8 h-8 text-purple-400" />;
      case "finance": return <Receipt className="w-8 h-8 text-teal-400" />;
      case "hr": return <Users className="w-8 h-8 text-rose-400" />;
      default: return <Sparkles className="w-8 h-8 text-blue-400" />;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsDemoModalOpen(false);
      setFormData({ name: "", company: "", email: "", phone: "", moduleInterest: "Tüm Modüller" });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Brand Top Bar */}
      <header className="border-b border-slate-800/80 bg-[#0a0f1d]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 p-[2px] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-400 tracking-wide">
                Zenthra Bilişim
              </span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                ERP
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#moduller" className="hover:text-blue-400 transition-colors">Modüller</a>
            <a href="#neden-biz" className="hover:text-blue-400 transition-colors">Avantajlar</a>
            <a href="#sss" className="hover:text-blue-400 transition-colors">SSS</a>
          </nav>

          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Demo Talep Et
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-6 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {zenthraErpData.hero.anaBaslik.split(":")[0]}:
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                {zenthraErpData.hero.anaBaslik.split(":")[1]}
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              {zenthraErpData.hero.altBaslik}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:opacity-95 transition-all flex items-center gap-3 group"
              >
                Ücretsiz Canlı Demo İste
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#moduller"
                className="px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700/80 transition-all"
              >
                Modülleri İncele
              </a>
            </div>

            {/* Metrikler */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              {zenthraErpData.hero.metrikler.map((m, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-extrabold text-blue-400">
                    {m.deger}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium leading-snug">
                    {m.aciklama}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl p-6 backdrop-blur-xl overflow-hidden group">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">zenthra-erp.dashboard.v2</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  CANLI VERİ AKIŞI
                </span>
              </div>

              {/* Simulated ERP Dashboard Widgets */}
              <div className="space-y-4">
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Genel Üretim Verimliliği (OEE)</div>
                      <div className="text-lg font-bold text-white">%92.4 <span className="text-xs text-emerald-400 font-normal">↑ +4.2%</span></div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-blue-500/10 rounded border border-blue-500/20 flex items-end p-1 gap-1">
                    <div className="w-1/4 h-3/5 bg-blue-400 rounded-sm"></div>
                    <div className="w-1/4 h-4/5 bg-blue-400 rounded-sm"></div>
                    <div className="w-1/4 h-full bg-blue-400 rounded-sm"></div>
                    <div className="w-1/4 h-9/10 bg-indigo-400 rounded-sm"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                      <span>Aktif İş Emirleri</span>
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-base font-bold text-white">142 Adet</div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-amber-400 h-full w-[78%]"></div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center justify-between">
                      <span>Depo Doluluk Oranı</span>
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-base font-bold text-white">%68.5</div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[68%]"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/60 p-4 rounded-xl border border-blue-500/30">
                  <div className="text-xs font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    e-Fatura & Muhasebe Entegrasyonu
                  </div>
                  <p className="text-xs text-slate-300">
                    Yerel mevzuata tam uyumlu, otomatik BA/BS ve anlık yevmiye kaydı aktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODÜLLER SECTION */}
      <section id="moduller" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">
            ZENTHRA ERP MODÜLLERİ
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            İşletmenizin İhtiyacı Olan Tüm Fonksiyonlar Tek Çatı Altında
          </h3>
          <p className="text-slate-400 text-sm md:text-base">
            Modüler mimarimiz sayesinde ister ihtiyacınız olan modülleri seçin, ister uçtan uca tüm sistemi yayına alın.
          </p>
        </div>

        {/* Dynamic Interactive Module Switcher */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Module Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {zenthraErpData.moduller.map((mod, index) => {
              const isActive = activeModule === index;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-950/70 to-slate-900 border-blue-500/80 shadow-lg shadow-blue-950/50 translate-x-1"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                    {getModuleIcon(mod.id)}
                  </div>
                  <div>
                    <div className={`font-bold text-base ${isActive ? "text-white" : "text-slate-300"}`}>
                      {mod.modulAdi}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {mod.aciklama}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Module Detail Card */}
          <div className="lg:col-span-7">
            {zenthraErpData.moduller[activeModule] && (
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  {getModuleIcon(zenthraErpData.moduller[activeModule].id)}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-4">
                  Öne Çıkan Modül
                </div>

                <h4 className="text-2xl font-bold text-white mb-3">
                  {zenthraErpData.moduller[activeModule].modulAdi}
                </h4>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {zenthraErpData.moduller[activeModule].aciklama}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Öne Çıkan Özellikler & Yetenekler:
                  </div>
                  {zenthraErpData.moduller[activeModule].ozellikler.map((ozellik, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/40">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{ozellik}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  Bu Modül İçin Özel Demo İste
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEDEN BİZ (AVANTAJLAR) SECTION */}
      <section id="neden-biz" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            ZENTHRA ERP FARKI
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Neden İşletmeniz İçin Zenthra ERP'yi Seçmelisiniz?
          </h3>
          <p className="text-slate-400 text-sm md:text-base">
            Geleneksel, hantal sistemler yerine modern mimariyle geliştirilen kurumsal çözümümüz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zenthraErpData.nedenBiz.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                0{index + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.baslik}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.aciklama}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS (FAQ) SECTION */}
      <section id="sss" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Sıkça Sorulan Sorular
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            Aklınıza Takılan Tüm Soruların Yanıtları
          </h3>
        </div>

        <div className="space-y-4">
          {zenthraErpData.sss.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 font-semibold text-base text-white flex items-center justify-between gap-4 hover:text-blue-400 transition-colors"
                >
                  <span>{faq.soru}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 pt-4">
                    {faq.cevap}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-slate-900 border border-blue-500/40 p-10 md:p-14 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              {zenthraErpData.ctaMetinleri.demoTalebi}
            </h3>
            <p className="text-slate-300 text-base">
              {zenthraErpData.ctaMetinleri.iletisim}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-base shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Building2 className="w-5 h-5 text-blue-600" />
                Hemen Demo Randevusu Alın
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Zenthra Bilişim — Tüm Hakları Saklıdır. Zenthra ERP Çözümleri.</p>
      </footer>

      {/* DEMO REQUEST MODAL */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Talebiniz Alındı!</h4>
                <p className="text-xs text-slate-300">
                  Zenthra Bilişim ERP uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white">Ücretsiz ERP Demosu</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    İşletmenizin süreçlerine özel canlı sunum için formu doldurun.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ahmet Yılmaz"
                      className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Şirket Adı</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="ABC Lojistik / Üretim A.Ş."
                      className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">E-posta</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ahmet@sirket.com"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0555 555 55 55"
                        className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">İlgilendiğiniz Modül</label>
                    <select
                      value={formData.moduleInterest}
                      onChange={(e) => setFormData({ ...formData, moduleInterest: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Tüm Modüller">Tüm Modüller (Uçtan Uca ERP)</option>
                      {zenthraErpData.moduller.map((m) => (
                        <option key={m.id} value={m.modulAdi}>{m.modulAdi}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all mt-2"
                  >
                    <Send className="w-4 h-4" />
                    Demo Talebini Gönder
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
