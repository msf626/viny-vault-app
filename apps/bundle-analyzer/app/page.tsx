"use client";

import { useMemo, useState } from "react";

const collection = [
  { artist: "Miles Davis", album: "Kind of Blue", instrument: "Trumpet", analog: "Digital", upgrade: true },
  { artist: "Bill Evans", album: "Village Vanguard", instrument: "Piano", analog: "Digital", upgrade: true },
  { artist: "Dave Brubeck", album: "Time Out", instrument: "Piano", analog: "Digital", upgrade: true },
  { artist: "Grant Green", album: "Idle Moments", instrument: "Guitar", analog: "AAA", upgrade: false },
  { artist: "Kenny Burrell", album: "Midnight Blue", instrument: "Guitar", analog: "AAA", upgrade: false },
  { artist: "Art Pepper", album: "Modern Art", instrument: "Saxophone", analog: "AAA", upgrade: false },
  { artist: "Steely Dan", album: "Aja", instrument: "Guitar/Keys", analog: "AAA", upgrade: false },
  { artist: "Phish", album: "Lawn Boy", instrument: "Guitar", analog: "AAA", upgrade: false },
];

export default function Page() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return collection;
    return collection.filter((r) =>
      `${r.artist} ${r.album} ${r.instrument} ${r.analog}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div style={{ padding: 24, maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>Vinyl Vault</h1>

      <input
        placeholder="Search artist, album, instrument, analog..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 12 }}
      />

      <div style={{ marginTop: 24 }}>
        {results.map((r, i) => (
          <div key={i} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
            <div style={{ fontWeight: "bold" }}>
              {r.artist} — {r.album}
            </div>
            <div style={{ fontSize: 14 }}>
              {r.instrument} • {r.analog}
              {r.upgrade && " • ⚠️ Upgrade"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
