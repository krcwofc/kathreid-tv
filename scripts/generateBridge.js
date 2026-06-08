const slot = process.env.SLOT || null;
const movieId = process.env.MOVIE_ID || null;
const movieTitle = process.env.MOVIE_TITLE || null;

async function generateBridge() {
  const res = await fetch("https://krcwofc.github.io/kathreid-tv/api/write-bridge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      slot,
      movieId,
      movieTitle,
      timestamp: Date.now()
    })
  });

  console.log("Bridge response:", await res.text());
}

generateBridge();
