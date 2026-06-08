import fs from "fs";

/*
  IMPORTANT:
  This generator MUST receive real data from somewhere.
  Since TV logic is not connected yet, we make failures explicit.
*/

function getStateFromTV() {
  // ❗ THIS MUST BE CONNECTED TO YOUR REAL TV SYSTEM
  // For now we throw a clear signal instead of hiding it

  return null;
}

const tvState = getStateFromTV();

/* -------------------------
   🧠 VALIDATION
------------------------- */

if (!tvState) {
  console.error("❌ No TV state source connected yet");

  const fallback = {
    slot: {
      start: 0,
      end: 0,
      label: "NO LIVE STATE CONNECTED"
    },
    movieId: null,
    movieTitle: null,
    timestamp: Date.now(),
    error: "TV_STATE_NOT_CONNECTED"
  };

  fs.writeFileSync(
    "./data/state.json",
    JSON.stringify(fallback, null, 2)
  );

  console.log("⚠️ fallback state.json written (no TV connection)");
  process.exit(0);
}

/* -------------------------
   🧠 CLEAN OUTPUT (REAL DATA ONLY)
------------------------- */

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

console.log("✅ state.json generated:", state);
