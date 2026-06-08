export function generateBridge(slot, movieId, movieTitle) {
  window.__KATHREID_STATE__ = {
    slot,
    movieId,
    movieTitle,
    timestamp: Date.now()
  };

  console.log("📡 Bridge state updated:", window.__KATHREID_STATE__);
}
