'use client'

import { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'

const NUMARA = '905524906576'
const GIRIS = 'Merhaba, zenthrabilisim.com web sitenizden geliyorum. '
const HAZIR = [
  'Depo Live hakkında bilgi almak istiyorum.',
  'Özel yazılım ile alakalı bilgi almak istiyorum.',
  'BT / IT danışmanlık hizmeti istiyorum.',
  'Yazıcı tamir, toner ve bakım hizmetleri hakkında bilgi almak istiyorum.',
]

const waLink = metin => `https://wa.me/${NUMARA}?text=${encodeURIComponent(GIRIS + metin)}`

function WhatsAppIkon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.2.6 4.4 1.7 6.3L3 29l7.3-1.9c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.7 12.7-12.6C28.7 8.6 23 3 16 3zm0 23.1c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.3 1.1 1.2-4.2-.3-.4c-1-1.6-1.5-3.5-1.5-5.4C5.4 9.8 10.1 5.1 16 5.1s10.6 4.7 10.6 10.5S21.9 26.1 16 26.1zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
    </svg>
  )
}

export default function WhatsAppBot() {
  const [acik, setAcik] = useState(false)
  const [yaziyor, setYaziyor] = useState(false)
  const [metin, setMetin] = useState('')

  // Greet each visitor once per session, a few seconds after they land.
  useEffect(() => {
    let goruldu = false
    try { goruldu = sessionStorage.getItem('wa-karsilama') === '1' } catch {}
    if (goruldu) return
    const t = setTimeout(() => {
      setAcik(true)
      try { sessionStorage.setItem('wa-karsilama', '1') } catch {}
    }, 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!acik) return
    setYaziyor(true)
    const t = setTimeout(() => setYaziyor(false), 1100)
    return () => clearTimeout(t)
  }, [acik])

  const gonder = e => {
    e.preventDefault()
    const m = metin.trim() || 'Bilgi almak istiyorum.'
    window.open(waLink(m), '_blank', 'noopener')
    setMetin('')
  }

  return (
    <div className="wa">
      {acik && (
        <div className="wa__pencere" role="dialog" aria-label="WhatsApp destek">
          <div className="wa__ust">
            <span className="wa__avatar"><WhatsAppIkon size={22} /><i /></span>
            <div>
              <strong>Zenthra Bilişim</strong>
              <small>Destek ekibi · Genelde birkaç dakikada yanıt verir</small>
            </div>
            <button className="wa__kapat" onClick={() => setAcik(false)} aria-label="Kapat"><X size={18} /></button>
          </div>
          <div className="wa__govde">
            {yaziyor ? (
              <div className="wa__balon wa__yaziyor" aria-label="Yazıyor"><span /><span /><span /></div>
            ) : (
              <>
                <div className="wa__balon">
                  Merhaba 👋 Hoş geldiniz!<br />
                  <strong>Yardıma mı ihtiyacınız var?</strong> Uzman ekibimizle WhatsApp üzerinden hemen görüşebilirsiniz.
                </div>
                <div className="wa__hazir">
                  {HAZIR.map(h => (
                    <a key={h} href={waLink(h)} target="_blank" rel="noopener noreferrer">{h}</a>
                  ))}
                </div>
              </>
            )}
          </div>
          <form className="wa__form" onSubmit={gonder}>
            <input value={metin} onChange={e => setMetin(e.target.value)} placeholder="Başka bir konu mu? Buraya yazın…" aria-label="Mesajınız" />
            <button type="submit" aria-label="WhatsApp'ta gönder"><Send size={18} /></button>
          </form>
        </div>
      )}
      {!acik && <span className="wa__ipucu" onClick={() => setAcik(true)}>Uzmanımızla görüşün</span>}
      <button className={'wa__dugme' + (acik ? ' wa__dugme--acik' : '')} onClick={() => setAcik(a => !a)}
        aria-label={acik ? 'WhatsApp penceresini kapat' : 'WhatsApp ile yazın'} aria-expanded={acik}>
        {acik ? <X size={26} /> : <WhatsAppIkon />}
      </button>
    </div>
  )
}
