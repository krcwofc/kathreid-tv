import fs from "fs";

/*
  STATE BRIDGE READER (REAL VERSION)

  This file NO LONGER generates fake data.
  It ONLY reads the live state written by your HTML (or bridge updater).
*/

function readBridgeState() {
  const raw = fs.readFileSync("./data/state-bridge.json", "utf-8");
  return JSON.parse(raw);
}

let state;

try {
  state = readBridgeState();
} catch (err) {
  console.error("❌ Failed to read state-bridge.json:", err);

  // fallback safe state (prevents crash, not used for real logic)
  state = {
    slot: {
      start: 0,
      end: 0,
      label: "NO DATA"
    },
    movieId: null,
    movieTitle: null
  };
}

fs.mkdirSync("./data", { recursive: true });

fs.writeFileSync(
  "./data/state.json",
  JSON.stringify(
    {
      ...state,
      timestamp: Date.now()
    },
    null,
    2
  )
);

console.log("✅ state.json updated from bridge:", state);
