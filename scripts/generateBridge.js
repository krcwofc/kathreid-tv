export async function generateBridge(slot, movieId, movieTitle) {
  return fetch("https://krcwofc.github.io/kathreid-tv/api/write-bridge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      slot,
      movieId,
      movieTitle,
      timestamp: Date.now()
    })
  });
}
