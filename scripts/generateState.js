import fs from "fs";

// 👉 YOU MUST MANUALLY MAP THESE FROM YOUR HTML LOGIC
// (whatever variables your HTML already uses)

const slot = globalThis.CURRENT_SLOT || {
  start: 0,
  end: 0,
  label: "UNKNOWN SLOT"
};

const movieId = globalThis.CURRENT_MOVIE_ID || null;
const movieTitle = globalThis.CURRENT_MOVIE_TITLE || null;

const state = {
  slot: {
    start: slot.start,
    end: slot.end,
    label: slot.label
  },
  movieId,
  movieTitle,
  timestamp: Date.now()
};

fs.writeFileSync(
  "./data/state.json",
  JSON.stringify(state, null, 2)
);

console.log("✅ state.json generated");
