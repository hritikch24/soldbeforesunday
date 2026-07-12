import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Swift Home Offers — Sell your house fast for cash';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#10231b',
          color: '#faf7f1',
        }}
      >
        <div style={{ fontSize: 34, color: '#c79a3b', letterSpacing: 6, textTransform: 'uppercase' }}>Swift Home Offers</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>Sell the house.</div>
        <div style={{ fontSize: 84, fontWeight: 700, color: '#c79a3b', lineHeight: 1.05 }}>Skip the circus.</div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#cfe0d6' }}>Cash offer in 24–48h · No fees · No repairs · US · UK · CA · AU</div>
      </div>
    ),
    size
  );
}
