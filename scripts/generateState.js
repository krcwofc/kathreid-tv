import fs from "fs";


/* ✅ TEMP SAFE STATE SOURCE
   (this is what your TV system MUST eventually provide)
   Replace these values from your actual TV logic source later
*/

function getStateFromTV() {
  // 🔥 THIS is where your real TV logic must eventually connect
  // For now, we prevent UNKNOWN output instead of fake zeros

  return {
    slot: {
      start: null,
      end: null,
      label: null
    },
    movieId: null,
    movieTitle: null
  };
}

const tvState = getStateFromTV();

/* -------------------------
   🧠 CLEAN OUTPUT FIX
------------------------- */

// Prevent UNKNOWN SLOT spam
const slot =
  tvState.slot?.start && tvState.slot?.end
    ? tvState.slot
    : {
        start: 0,
        end: 0,
        label: "LIVE PROGRAMMING"
      };

const state = {
  slot,
  movieId: tvState.movieId || null,
  movieTitle: tvState.movieTitle || null,
  timestamp: Date.now()
};

fs.writeFileSync(
  "./data/state.json",
  JSON.stringify(state, null, 2)
);

console.log("✅ state.json generated:", state);
