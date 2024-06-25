document.addEventListener('DOMContentLoaded', () => {
    // Visitor Count
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor-count').textContent = visitorCount;
  
    // Ticker and Geolocation
    const updateTicker = () => {
      const now = new Date();
      const location = 'Your Location'; // Dynamically fetch if needed
      document.getElementById('datetime-location').textContent = `${now.toLocaleString()} - ${location}`;
    };
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const location = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
        document.getElementById('datetime-location').textContent += ` - ${location}`;
      });
    }
  
    updateTicker();
    setInterval(updateTicker, 60000);
  });
  