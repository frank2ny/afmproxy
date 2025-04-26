'use client';

import React from 'react';

export default function Home() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>AFM Radio HTTPS Stream</h1>
      <p>
        Listen to the stream securely via HTTPS:
      </p>
      <a href="/api/live" target="_blank" rel="noopener noreferrer">
        https://afmradio.co.tz/api/live
      </a>
      <p>
        (You can open the link directly or use the player below.)
      </p>
      <audio controls src="/api/live" style={{ width: '100%', marginTop: 20 }}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
