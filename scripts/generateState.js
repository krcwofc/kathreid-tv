import fs from "fs";

/* =========================
   📡 READ TV BRIDGE STATE
========================= */

function getStateFromBridge() {
  try {
    const raw = fs.readFileSync("./data/state-bridge.json", "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("❌ Cannot read state-bridge.json:", err.message);
    return null;
  }
}

const tvState = getStateFromBridge();

/* =========================
   🧠 VALIDATION
========================= */

if (!tvState || !tvState.slot) {
  console.error("❌ Invalid or missing bridge state");

  const fallback = {
    slot: {
      start: 0,
      end: 0,
      label: "NO TV STATE"
    },
    movieId: null,
    movieTitle: null,
    timestamp: Date.now(),
    error: "BRIDGE_MISSING"
  };

fs.writeFileSync("./data/state-bridge.json", JSON.stringify(state, null, 2)); 
process.exit(0);
}

/* =========================
   📦 WRITE FINAL STATE
========================= */

const state = {
  slot: {
    start: tvState.slot.start,
    end: tvState.slot.end,
    label: tvState.slot.label
  },
  movieId: tvState.movieId || null,
  movieTitle: tvState.movieTitle || null,
  timestamp: Date.now()
};

fs.writeFileSync(
  "./data/state.json",
  JSON.stringify(state, null, 2)
);

console.log("✅ state.json generated from bridge:", state);
