// Inject the time in the UI
var renderTime = function () {
    var time = new Date();
    clock.textContent = time.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true
    });
  };
  
  // Render the time on load
  renderTime();
  
  // Update the time every second
  setInterval(renderTime, 1000);

 