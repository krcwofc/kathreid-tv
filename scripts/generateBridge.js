import fs from "fs";

const state = {
  slot: {
    start: 0,
    end: 0,
    label: "AUTO GENERATED"
  },
  movieId: null,
  movieTitle: null,
  timestamp: Date.now()
};

fs.mkdirSync("./data", { recursive: true });

fs.writeFileSync(
  "./data/state-bridge.json",
  JSON.stringify(state, null, 2)
);

console.log("✅ Bridge written locally");
