function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|ipod|blackberry|opera mini|iemobile/.test(userAgent);

    if (isMobile) {
      alert("Please use a Desktop for a better experience.");
    }
  }

  // Call the function when the page loads
  detectDevice();