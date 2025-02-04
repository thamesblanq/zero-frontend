function updateUTCTime() {
    const utcTimeElement = document.getElementById("utcTime");
    if (utcTimeElement) {
      const now = new Date();
      utcTimeElement.textContent = now.toUTCString();
    }
  }
  
  setInterval(updateUTCTime, 1000); // Updates every second
  updateUTCTime(); // Initialize on load
  