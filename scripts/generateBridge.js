import fs from "fs";

async function run() {
  const res = await fetch("https://krcwofc.github.io/kathreid-tv/api/bridge-state");

  const data = await res.json();

  if (!data) {
    console.error("No bridge data");
    process.exit(1);
  }

  fs.writeFileSync(
    "./data/state-bridge.json",
    JSON.stringify(data, null, 2)
  );

  console.log("Bridge written:", data);
}

run();
