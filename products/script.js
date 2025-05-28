function getNext5AM() {
      const now = new Date();
      const next5AM = new Date();

      next5AM.setHours(5, 0, 0, 0); // Set to 5:00:00.000 AM

      if (now >= next5AM) {
        // If it’s already past 5 AM today, set to 5 AM tomorrow
        next5AM.setDate(next5AM.getDate() + 1);
      }

      return next5AM;
    }

    function updateCountdown() {
      const now = new Date();
      const end = getNext5AM();
      const diff = end - now;

      if (diff <= 0) {
        document.getElementById("timer").textContent = "00:00:00";
        return;
      }

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call