async function writeBridgeState(slot, movieId, movieTitle) {
  const payload = {
    slot,
    movieId,
    movieTitle,
    timestamp: Date.now()
  };

  try {
    await fetch("https://krcwofc.github.io/kathreid-tv/api/write-bridge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("✅ Bridge state sent:", payload);

  } catch (err) {
    console.error("❌ Bridge write failed:", err);
  }
}
