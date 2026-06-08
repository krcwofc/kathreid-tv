function writeBridgeState(slot, movieId, movieTitle) {
  const payload = {
    slot,
    movieId,
    movieTitle,
    timestamp: Date.now()
  };

  window.__KATHREID_STATE__ = payload;

  console.log("Bridge updated:", payload);
}
