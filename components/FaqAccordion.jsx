'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ maxWidth: '860px' }}>
      {items.map((item, idx) => (
        <ScrollReveal key={item.q} delay={idx * 0.08} distance="30px" duration="0.7s">
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px',
                padding: '26px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1.2rem',
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
                color: '#000',
              }}
            >
              {item.q}
              <ChevronDown
                size={20}
                style={{
                  flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: openIndex === idx ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {openIndex === idx && (
              <p
                style={{
                  color: '#6e6e73',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                  paddingBottom: '26px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {item.a}
              </p>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
