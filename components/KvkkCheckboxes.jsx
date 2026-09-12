'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export const kvkkTexts = {
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    content: `Zenthra Bilişim olarak kişisel verilerinizin güvenliği hususunda azami hassasiyet göstermekteyiz. Bu bilinçle, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında sizleri bilgilendirmek isteriz.

Veri Sorumlusu:
Zenthra Bilişim

Kişisel Verilerin İşlenme Amacı:
Formda paylaştığınız ad-soyad, e-posta adresi, telefon numarası ve firma adı bilgileriniz; talep ettiğiniz ürün/hizmet hakkında sizinle iletişime geçilmesi, tekliflerimizin sunulması, satış ve pazarlama faaliyetlerinin yürütülmesi amacıyla işlenmektedir.

Kişisel Verilerin Aktarılması:
Toplanan kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda iş ortaklarımıza, hizmet aldığımız üçüncü kişilere ve yasal yükümlülüklerimiz çerçevesinde yetkili kurum ve kuruluşlara aktarılabilecektir.

Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi:
Kişisel verileriniz, bu web sitesindeki form aracılığıyla elektronik ortamda toplanmaktadır. KVKK'nın 5. maddesinin 2. fıkrasının (c) bendi uyarınca "bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve (f) bendi uyarınca "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebeplerine dayanılarak işlenmektedir.

Haklarınız:
KVKK'nın 11. maddesi gereğince; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme haklarına sahipsiniz.

Haklarınıza ilişkin taleplerinizi info@zenthrabilisim.com adresine iletebilirsiniz.`
  },
  commercial: {
    title: "Ticari Elektronik İleti Onayı",
    content: `Zenthra Bilişim tarafından, aşağıda belirtilen kapsamda tarafıma ticari elektronik ileti gönderilmesini onaylıyorum.

İleti Kapsamı:
Zenthra Bilişim ürün ve hizmetlerine ilişkin tanıtım, kampanya, promosyon, indirim, hediye, kutlama, anket ve memnuniyet değerlendirmesi içerikli iletiler.

İleti Kanalları:
E-posta, SMS/kısa mesaj, telefon araması, anlık bildirim ve diğer elektronik iletişim kanalları.

Onayın Geri Alınması:
Bu onayımı dilediğim zaman, hiçbir gerekçe belirtmeksizin geri alabilirim. Onayın geri alınması için gönderilen iletilerdeki "abonelikten çık" bağlantısını kullanabilir veya info@zenthrabilisim.com adresine başvurabilirim.

6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik kapsamında, Zenthra Bilişim tarafından yukarıda belirtilen kanallar aracılığıyla tarafıma ticari elektronik ileti gönderilmesine açık rızamla onay veriyorum.`
  },
  marketing: {
    title: "Kişiye Özel Pazarlama Açık Rıza Metni",
    content: `Zenthra Bilişim tarafından, kişisel verilerimin aşağıda belirtilen şekilde işlenmesine açık rızam ile onay veriyorum.

İşlenecek Kişisel Veriler:
İletişim bilgilerim (ad-soyad, e-posta, telefon), firma bilgilerim, web sitesi ve dijital platform kullanım verilerim, ürün/hizmet tercih ve ilgi alanlarım.

İşleme Amacı:
İlgi alanlarıma ve ihtiyaçlarıma uygun kişiselleştirilmiş ürün/hizmet önerileri, kampanya ve içeriklerin sunulması; müşteri profilime özel pazarlama ve iletişim faaliyetlerinin yürütülmesi; kullanıcı deneyimimin iyileştirilmesi amacıyla analiz ve segmentasyon çalışmalarının yapılması.

Verilerin Aktarımı:
Kişiselleştirilmiş pazarlama faaliyetleri kapsamında kişisel verilerim, bu hizmetleri yürütmek üzere hizmet alınan iş ortaklarına ve tedarikçilere aktarılabilecektir.

Açık Rızanın Geri Alınması:
Bu onayımı dilediğim zaman, herhangi bir gerekçe belirtmeksizin geri alabilirim. Geri alma talebimi info@zenthrabilisim.com adresine iletebilirim. Onayın geri alınması, geri alma tarihine kadar gerçekleştirilen veri işleme faaliyetlerinin hukuka uygunluğunu etkilemeyecektir.

Yukarıda belirtilen kapsamda kişisel verilerimin işlenmesine, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 5. maddesinin 1. fıkrası uyarınca açık rızamla onay veriyorum.`
  }
};

export default function KvkkCheckboxes({
  kvkkAccepted,
  setKvkkAccepted,
  commercialConsent,
  setCommercialConsent,
  marketingConsent,
  setMarketingConsent,
  theme = 'dark' // 'dark' or 'light'
}) {
  const [activeModal, setActiveModal] = useState(null); // 'kvkk' | 'commercial' | 'marketing' | null
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#475569';
  const linkColor = isDark ? '#ffffff' : '#0f172a';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px', gridColumn: '1 / -1' }}>
      
      {/* Informational Header */}
      <div style={{ fontSize: '0.85rem', color: textColor, lineHeight: 1.5, borderBottom: `1px solid ${borderColor}`, paddingBottom: '10px' }}>
        Kişisel verilerinizin işlenmesine ilişkin aydınlatma metinlerine buradan ulaşabilirsiniz:
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '6px' }}>
          <button
            type="button"
            onClick={() => setActiveModal('kvkk')}
            style={{
              background: 'none',
              border: 'none',
              color: linkColor,
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0
            }}
          >
            KVKK Aydınlatma Metni
          </button>
          <span style={{ opacity: 0.4 }}>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('commercial')}
            style={{
              background: 'none',
              border: 'none',
              color: linkColor,
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Ticari İleti Onayı
          </button>
          <span style={{ opacity: 0.4 }}>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('marketing')}
            style={{
              background: 'none',
              border: 'none',
              color: linkColor,
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Kişiye Özel Pazarlama Metni
          </button>
        </div>
      </div>

      {/* Checkbox 1 (REQUIRED) */}
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
        <input
          type="checkbox"
          required
          checked={kvkkAccepted}
          onChange={(e) => setKvkkAccepted(e.target.checked)}
          style={{
            marginTop: '3px',
            width: '18px',
            height: '18px',
            accentColor: '#000000',
            cursor: 'pointer',
            flexShrink: 0
          }}
        />
        <span style={{ fontSize: '0.86rem', color: textColor, lineHeight: 1.45 }}>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setActiveModal('kvkk'); }}
            style={{ background: 'none', border: 'none', color: linkColor, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
          >
            KVKK Aydınlatma Metni
          </button>{' '}
          kapsamındaki haklarımı ve veri işleme şartlarını okudum, kabul ediyorum. <span style={{ color: '#ef4444', fontWeight: 800 }}>* (Zorunlu)</span>
        </span>
      </label>

      {/* Checkbox 2 (OPTIONAL - Commercial Messages) */}
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
        <input
          type="checkbox"
          checked={commercialConsent}
          onChange={(e) => setCommercialConsent(e.target.checked)}
          style={{
            marginTop: '3px',
            width: '18px',
            height: '18px',
            accentColor: '#000000',
            cursor: 'pointer',
            flexShrink: 0
          }}
        />
        <span style={{ fontSize: '0.86rem', color: textColor, lineHeight: 1.45 }}>
          Burada belirtilen kapsamda Zenthra Bilişim'in ticari elektronik ileti göndermesini onaylıyorum.{' '}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setActiveModal('commercial'); }}
            style={{ background: 'none', border: 'none', color: linkColor, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
          >
            (Ticari İleti Metni)
          </button>
        </span>
      </label>

      {/* Checkbox 3 (OPTIONAL - Personal Marketing) */}
      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
        <input
          type="checkbox"
          checked={marketingConsent}
          onChange={(e) => setMarketingConsent(e.target.checked)}
          style={{
            marginTop: '3px',
            width: '18px',
            height: '18px',
            accentColor: '#000000',
            cursor: 'pointer',
            flexShrink: 0
          }}
        />
        <span style={{ fontSize: '0.86rem', color: textColor, lineHeight: 1.45 }}>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setActiveModal('marketing'); }}
            style={{ background: 'none', border: 'none', color: linkColor, fontWeight: 700, textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
          >
            Açık Rıza Metni
          </button>{' '}
          kapsamında Zenthra Bilişim'in özelleştirilmiş kişisel pazarlama faaliyetlerini onaylıyorum.
        </span>
      </label>

      {/* React Portal Modal mounted directly to document.body */}
      {mounted && activeModal && createPortal(
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999990,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'default'
          }}
          onClick={() => setActiveModal(null)}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            style={{
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '20px',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '82vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
              animation: 'cbModalScale 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#ffffff'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#0f172a', fontFamily: '"SF Pro Display", sans-serif' }}>
                {kvkkTexts[activeModal].title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  color: '#64748b',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#64748b'; }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body with native scroll override */}
            <div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              style={{
                padding: '24px 28px',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                flex: 1,
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: '#475569',
                whiteSpace: 'pre-line',
                fontFamily: '"Inter", -apple-system, sans-serif',
                cursor: 'auto'
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {kvkkTexts[activeModal].content}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              background: '#f8fafc'
            }}>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                style={{
                  background: '#0f172a',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1e293b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0f172a'; }}
              >
                Kapat
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
